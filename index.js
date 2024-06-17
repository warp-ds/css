import tokenize from '@warp-ds/tokenizer';

import { init, brandToName, downloadReleaseFile, generateFinalCss, getBrandModes, processHexCss, processRGBCss } from './utils.js';

init();

await downloadReleaseFile();

const brandModes = getBrandModes();

brandModes.forEach((brandMode) => {
  // skip dark themes for now
  if (brandMode.includes('dark')) return;

  console.log(`Processing ${brandMode}...`);
  const cssHex = processHexCss(brandMode);
  const cssRgb = processRGBCss(brandMode);
  const cssTokens = tokenize(`./tokens/${brandToName(brandMode).replace('-', '.')}`);

  const css = cssHex + cssRgb + cssTokens;

  console.log(`Outputting ${brandMode}...`);
  generateFinalCss(css, brandMode);
});
