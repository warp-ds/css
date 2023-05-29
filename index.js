import fs from 'node:fs'
import path from 'node:path'
import { minify } from './css-minify.js'
import {resets} from './resets/resets.js';
import drnm from 'drnm'

const __dirname = drnm(import.meta.url)
const outPath = path.join(__dirname, './dist')
fs.mkdirSync(outPath, { recursive: true })

function process(tld) {
  const css = minify(tld);
  const nonMinified = path.join(outPath, tld) + '.css';
  const minified = path.join(outPath, tld) + '.min.css';
  fs.writeFileSync(minified, css, 'utf-8');
  fs.writeFileSync(nonMinified, resets, 'utf-8');
}

process('resets');
