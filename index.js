import fs from 'fs-extra';
import { transform } from 'lightningcss';
import unzipper from 'unzipper';

import { downloadFile } from './utils.js';

fs.removeSync('tmp/web.zip');
fs.removeSync('output/web');
fs.ensureDirSync('tmp');
fs.ensureDirSync('output/web');

await downloadFile('https://github.com/warp-ds/tokens/releases/download/latest/web.zip', 'web.zip');

await unzipper.Open.file('tmp/web.zip').then((d) => d.extract({ path: 'output/web', concurrency: 5 }));

let cssHex = fs.readFileSync('./output/web/FINN light/variables.css', 'utf8');
let cssRgb = fs.readFileSync('./output/web/FINN light/variables-rgb.css', 'utf8');
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

const css = cssHex + cssRgb;

let { code } = transform({
  filename: '',
  code: Buffer.from(css),
  //minify: true,
});
const output = code.toString();

fs.outputFileSync('./dist-new/FINN/final.css', output, 'utf8');
