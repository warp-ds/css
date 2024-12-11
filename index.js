import tokenize from '@warp-ds/tokenizer';
import fs from 'fs-extra';

import { init, brandToName, downloadReleaseFile, generateFinalCss, getBrandModes, processHexCss, processRGBCss } from './utils.js';

init();

await downloadReleaseFile();

const brandModes = getBrandModes();

brandModes.forEach((brandMode) => {
  // skip dark themes and oikotie for now
  if (brandMode.includes('dark') || brandMode.includes('oikotie')) return;

  console.log(`Processing ${brandMode}...`);
  const cssHex = processHexCss(brandMode);
  const cssRgb = processRGBCss(brandMode);
  let cssCustomTokens = '';

  const customTokensFilePath = `./tokens/${brandToName(brandMode).replace('-', '.')}`;

  if (fs.existsSync(customTokensFilePath)) {
    cssCustomTokens = tokenize(customTokensFilePath);
  }

  const css = cssHex + cssRgb + cssCustomTokens;

  console.log(`Outputting ${brandMode}...`);
  generateFinalCss(css, brandMode);
});
