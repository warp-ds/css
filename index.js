import path from 'node:path';

import tokenize from '@warp-ds/tokenizer';
import fs from 'fs-extra';
import { transform } from 'lightningcss';

import { init, brandToName, downloadReleaseFile, outputDir, processHexCss, processRGBCss } from './utils.js';

init();

await downloadReleaseFile();

const brandModes = fs.readdirSync(outputDir).filter((item) => fs.statSync(path.join(outputDir, item)).isDirectory());

brandModes.forEach((brandMode) => {
  // skip dark themes for now
  if (brandMode.includes('dark')) return;

  console.log(`Processing ${brandMode}...`);
  const cssHex = processHexCss(brandMode);
  const cssRgb = processRGBCss(brandMode);
  const cssTokens = tokenize(`./tokens/${brandToName(brandMode).replace('-', '.')}`);

  const css = cssHex + cssRgb + cssTokens;

  let { code } = transform({
    filename: '',
    code: Buffer.from(css),
    //minify: true,
  });

  console.log(`Outputting ${brandMode}...`);
  // Outputting to a temp directory for now
  fs.outputFileSync(`./dist-new/${brandToName(brandMode)}.css`, code.toString(), 'utf8');
});
