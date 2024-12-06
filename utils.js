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

export const brandToName = (brand) => {
  switch (brand) {
    case 'finn-light':
      return 'finn-no';
    case 'blocket-light':
      return 'blocket-se';
    case 'dba-light':
      return 'dba-dk';
    case 'tori-light':
      return 'tori-fi';
    case 'oikotie-light':
      return 'oikotie-fi';
    case 'dataviz-light':
      return 'dataviz';
  }
};

export const processHexCss = (brandMode) => {
  const isDataVizToken = brandMode.includes('dataviz');

  let cssHex = fs.readFileSync(`./${outputDir}/${brandMode}/variables.css`, 'utf8');
  cssHex = cssHex.replaceAll(':root ', ':root,:host ');
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
  cssRgb = cssRgb.replaceAll(':root ', ':root,:host ');
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
  fs.outputFileSync(`./dist/tokens/${brandToName(brandMode)}.css`, code.toString(), 'utf8');
};
