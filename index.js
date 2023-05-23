import fs from 'node:fs'
import path from 'node:path'
import { minify } from './css-minify.js'
import drnm from 'drnm'

const __dirname = drnm(import.meta.url)
const outPath = path.join(__dirname, './dist')
fs.mkdirSync(outPath, { recursive: true })

function process(tld) {
  const css = minify(tld);
  const filename = path.join(outPath, tld) + '.css';
  fs.writeFileSync(filename, css, 'utf-8');
}

process('resets');
