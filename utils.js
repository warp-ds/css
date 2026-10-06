import path from 'node:path';
import { Readable } from 'node:stream';
import { finished } from 'node:stream/promises';

import fs from 'fs-extra';
import { transform } from 'lightningcss';
import unzipper from 'unzipper';

const webReleasesUrl = 'https://github.com/warp-ds/tokens/releases/download/latest/web.zip';
const webReleasesFileName = 'web.zip';
const tempDir = 'tmp/';
export const outputDir = 'output/web';

export const init = () => {
  console.log('Initializing setup...');
  fs.removeSync(tempDir);
  fs.removeSync(outputDir);
  fs.ensureDirSync(tempDir);
  fs.ensureDirSync(outputDir);
};

export const downloadReleaseFile = async () => {
  console.log('Downloading assets from tokens repo: web.zip...');
  const res = await fetch(webReleasesUrl);
  const destination = path.resolve(tempDir, webReleasesFileName);
  const fileStream = fs.createWriteStream(destination, { flags: 'wx' });
  await finished(Readable.fromWeb(res.body).pipe(fileStream));
  console.log('Extracting asset...');
  await unzipper.Open.file(tempDir + webReleasesFileName).then((d) => d.extract({ path: outputDir, concurrency: 5 }));
};

export const getBrandModes = () => fs.readdirSync(outputDir).filter((item) => fs.statSync(path.join(outputDir, item)).isDirectory());

export const BRAND_MAP = {
  'finn-light': { name: 'finn-no', cssFile: 'finn-no' },
  'blocket-light': { name: 'blocket-se', cssFile: 'blocket-se' },
  'dba-light': { name: 'dba-dk', cssFile: 'dba-dk' },
  'tori-light': { name: 'tori-fi', cssFile: 'tori-fi' },
  'oikotie-light': { name: 'oikotie-fi', cssFile: 'oikotie-fi' },
  'neutral-light': { name: 'neutral-com', cssFile: 'neutral-com' },
  'vend-light': { name: 'vend-com', cssFile: 'vend-com' },

  'finn-dark': { name: 'finn-no', cssFile: 'finn-no-dark' },
  'blocket-dark': { name: 'blocket-se', cssFile: 'blocket-se-dark' },
  'dba-dark': { name: 'dba-dk', cssFile: 'dba-dk-dark' },
  'tori-dark': { name: 'tori-fi', cssFile: 'tori-fi-dark' },
  'oikotie-dark': { name: 'oikotie-fi', cssFile: 'oikotie-fi-dark' },
  'neutral-dark': { name: 'neutral-com', cssFile: 'neutral-com-dark' },
  'vend-dark': { name: 'vend-com', cssFile: 'vend-com-dark' },

  'dataviz-light': { name: 'dataviz', cssFile: 'dataviz' },
  'dataviz-dark': { name: 'dataviz', cssFile: 'dataviz-dark' },
};

export const processHexCss = (brandMode) => {
  const isDataVizToken = brandMode.includes('dataviz');

  let cssHex = fs.readFileSync(`./${outputDir}/${brandMode}/variables.css`, 'utf8');
  cssHex = cssHex.replaceAll(':root ', `:root,:host,:root[data-w-theme="${brandMode.includes('dark') ? 'dark' : 'light'}"] `);
  cssHex = cssHex.replaceAll('--color-', isDataVizToken ? '--w-dv-' : '--w-');
  cssHex = cssHex.replaceAll('--semantic-color-', isDataVizToken ? '--w-dv-s-color-' : '--w-s-color-');
  cssHex = cssHex.replaceAll('--components-', '--w-color-');
  cssHex = cssHex.replaceAll('-default:', ':');

  return cssHex;
};

export const processRGBCss = (brandMode) => {
  // this regex converts token: rgb(255, 255, 255) to token: 255, 255, 255 which is needed for unocss to work
  const rgbValuesRegex = /rgb\(([^)]+)\)/g;
  // this regex removes the components rgb values from the rgb css
  const componentsRGBRegex = /--components-.*?:\s*var\(\s*--.*\);/g;

  const isDataVizToken = brandMode.includes('dataviz');

  let cssRgb = fs.readFileSync(`./${outputDir}/${brandMode}/variables-rgb.css`, 'utf8');
  cssRgb = cssRgb.replaceAll(':root ', `:root,:host,:root[data-w-theme="${brandMode.includes('dark') ? 'dark' : 'light'}"] `);
  cssRgb = cssRgb.replaceAll('--color-', isDataVizToken ? '--w-dv-rgb-' : '--w-rgb-');
  cssRgb = cssRgb.replaceAll('--semantic-color-', isDataVizToken ? '--w-dv-s-rgb-' : '--w-s-rgb-');
  cssRgb = cssRgb.replaceAll(componentsRGBRegex, '');
  cssRgb = cssRgb.replaceAll('-default:', ':');
  cssRgb = cssRgb.replaceAll(rgbValuesRegex, '$1');

  return cssRgb;
};

export const generateFinalCss = (css, brandMode) => {
  const { code } = transform({
    code: Buffer.from(css),
    minify: true,
    targets: {
      safari: 13 << 16,
    },
  });

  // Outputting to a temp directory for now
  fs.outputFileSync(`./dist/tokens/${BRAND_MAP[brandMode]?.cssFile}.css`, code.toString(), 'utf8');
};

export const appendDarkModeTokensBehindDataAttribute = (cssFile) => {
  let darkModeContent = fs.readFileSync(`./dist/tokens/${cssFile}-dark.css`, 'utf8');
  if (!darkModeContent.startsWith(':root,:host,:root[data-w-theme=dark]{')) {
    throw new Error(
      `Dark mode tokens CSS file did not start with the expected selector. Will not continue appending the contents of ${cssFile}-dark.css until the contents match what we expect.`,
    );
  }
  // Remove the :root,:host, selector list so we're only left with :root[data-w-theme=dark]{
  // when we append it to the light mode token file.
  darkModeContent = darkModeContent.replace(':root,:host,:root[data-w-theme=dark]{', ':root[data-w-theme=dark]{color-scheme:dark;');
  let ligthModeContent = fs.readFileSync(`./dist/tokens/${cssFile}.css`, 'utf8');
  if (!ligthModeContent.startsWith(':root,:host,:root[data-w-theme=light]{')) {
    throw new Error(
      `Light mode tokens CSS file did not start with the expected selector. Will not continue appending the contents of ${cssFile}-dark.css until the contents match what we expect.`,
    );
  }
  ligthModeContent = ligthModeContent.replace(':root,:host,:root[data-w-theme=light]{', ':root[data-w-theme=light]{color-scheme:light;');
  ligthModeContent += `\n${darkModeContent}`;
  fs.writeFileSync(`./dist/tokens/${cssFile}.css`, ligthModeContent, 'utf-8');
};
