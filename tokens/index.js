import fs from 'node:fs';
import path from 'node:path';

import slugify from '@sindresorhus/slugify';
import tokenize from '@warp-ds/tokenizer';
import drnm from 'drnm';

import { minify } from '../css-minify.js';

const __dirname = drnm(import.meta.url);
const outPath = path.join(__dirname, '../dist/tokens');
fs.mkdirSync(outPath, { recursive: true });

async function process(tld) {
  const tokens = tokenize(`./${tld}`);
  const css = minify(tokens);
  const filename = path.join(outPath, slugify(tld)) + '.css';
  fs.writeFileSync(filename, css, 'utf-8');
}

process('finn.no');
process('blocket.se');
process('tori.fi');
