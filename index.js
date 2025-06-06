import tokenize from '@warp-ds/tokenizer';
import fs from 'fs-extra';

import { init, BRAND_MAP, downloadReleaseFile, generateFinalCss, getBrandModes, processHexCss, processRGBCss } from './utils.js';

init();

await downloadReleaseFile();

const brandModes = getBrandModes();

brandModes.forEach((brandMode) => {
  console.log(`Processing ${brandMode}...`);
  const cssHex = processHexCss(brandMode);
  const cssRgb = processRGBCss(brandMode);
  let cssCustomTokens = '';

  const customTokensFilePath = `./tokens/${BRAND_MAP[brandMode]?.name.replace('-', '.')}`;

  if (fs.existsSync(customTokensFilePath)) {
    cssCustomTokens = tokenize(customTokensFilePath);
    cssCustomTokens += tokenize(
      `./tokens/${BRAND_MAP[brandMode]?.name?.replace('-', '.')}/${brandMode.includes('dark') ? 'dark' : 'light'}`,
    );
  }

  const css = cssHex + cssRgb + cssCustomTokens;

  console.log(`Outputting ${brandMode}...`);
  generateFinalCss(css, brandMode);
});
