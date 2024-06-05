import path from 'node:path';

import tokenize from '@warp-ds/tokenizer';
import fs from 'fs-extra';
import { transform } from 'lightningcss';

import { init, downloadReleaseFile, brandToName } from './utils.js';

init();

await downloadReleaseFile();

const styleDictionaryTokensDir = 'output/web';
const brandModes = fs
  .readdirSync(styleDictionaryTokensDir)
  .filter((item) => fs.statSync(path.join(styleDictionaryTokensDir, item)).isDirectory());

brandModes.forEach((brandMode) => {
  // skip dark themes for now
  if (brandMode.includes('dark')) return;

  console.log(`Processing ${brandMode}...`);
  let cssHex = fs.readFileSync(`./${styleDictionaryTokensDir}/${brandMode}/variables.css`, 'utf8');
  let cssRgb = fs.readFileSync(`./${styleDictionaryTokensDir}/${brandMode}/variables-rgb.css`, 'utf8');
  // this converts rgb(255, 255, 255) to 255, 255, 255 which is needed for unocss to work
  let regex = /rgb\(([^)]+)\)/g;

  // these are in hex
  cssHex = cssHex.replaceAll(':root ', ':root,:host ');
  cssHex = cssHex.replaceAll('--color-', '--w-');
  cssHex = cssHex.replaceAll('--semantic-color-', '--w-s-color-');
  cssHex = cssHex.replaceAll('--components-', '--w-color-');
  cssHex = cssHex.replaceAll('-default:', ':');

  // these are in rgb
  cssRgb = cssRgb.replaceAll(':root ', ':root,:host ');
  cssRgb = cssRgb.replaceAll('--color-', '--w-rgb-');
  cssRgb = cssRgb.replaceAll('--semantic-color-', '--w-s-rgb-');
  cssRgb = cssRgb.replaceAll(/--components-.*?:\s*var\(\s*--.*\);/g, '');
  cssRgb = cssRgb.replaceAll('-default:', ':');

  cssRgb = cssRgb.replaceAll(regex, '$1');

  const tokens = tokenize(`./tokens/${brandToName(brandMode).replace('-', '.')}`);

  const css = cssHex + cssRgb + tokens;

  let { code } = transform({
    filename: '',
    code: Buffer.from(css),
    //minify: true,
  });
  const output = code.toString();

  console.log(`Outputting ${brandMode}...`);
  // Outputting to a temp directory for now
  fs.outputFileSync(`./dist-new/${brandToName(brandMode)}.css`, output, 'utf8');
});
