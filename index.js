import tokenize from '@warp-ds/tokenizer';
import fs from 'fs-extra';

import {
  init,
  BRAND_MAP,
  downloadReleaseFile,
  generateFinalCss,
  getBrandModes,
  processHexCss,
  processRGBCss,
  appendDarkModeTokensBehindDataAttribute,
} from './utils.js';

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

// Include dark mode tokens in the bare tokens CSS file, but only with the :root[data-w-theme=dark] selector (not :root,:host).
// This is so we can do a controlled rollout of bugfixes ahead of time compared to relying on prefers-color-scheme alone.
// Once the switch has been flipped we can revisit, though this approach does open up for user control over the theme independently of OS settings.
// See DMW-65, FEP-184.
for (const brandMode of brandModes) {
  if (brandMode.includes('dark')) continue;
  const cssFile = BRAND_MAP[brandMode].cssFile;
  console.log(`Appending dark mode tokens behind [data-w-theme=dark] to ${cssFile}...`);
  appendDarkModeTokensBehindDataAttribute(cssFile);
  console.log(`Appended dark mode tokens to ${cssFile}`);
}
