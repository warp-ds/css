import fs from 'node:fs';
import path from 'node:path';

import drnm from 'drnm';

import { minify } from '../css-minify.js';

import { resets } from './resets.js';

const __dirname = drnm(import.meta.url);
const outPath = path.join(__dirname, '../dist');
fs.mkdirSync(outPath, { recursive: true });

function process(tld) {
  const css = minify(resets);
  const filename = path.join(outPath, tld) + '.css';
  fs.writeFileSync(filename, css, 'utf-8');
}

process('resets');
