import fs from 'node:fs';
import path from 'node:path';

import drnm from 'drnm';
import * as lightning from 'lightningcss';

import { resets } from './resets.js';

const __dirname = drnm(import.meta.url);
const outPath = path.join(__dirname, '../dist');
fs.mkdirSync(outPath, { recursive: true });

const minify = (css) => {
  const { code } = lightning.transform({
    code: Buffer.from(css),
    minify: true,
    targets: {
      safari: 13 << 16,
    },
  });

  return code.toString();
};

function process(tld) {
  const css = minify(resets);
  const filename = path.join(outPath, tld) + '.css';
  fs.writeFileSync(filename, css, 'utf-8');
}

process('resets');
