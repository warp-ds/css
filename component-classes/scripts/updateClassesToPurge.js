import fs from 'node:fs';
import drnm from 'drnm';
import path from 'node:path';
import { classes } from '../classes.js';

const __dirname = drnm(import.meta.url);
const outPath = path.join(__dirname, '../../dist');
fs.mkdirSync(outPath, { recursive: true });

function updateClassesToPurge() {
  fs.writeFileSync(
    `${outPath}/classesToPurge.json`,
    JSON.stringify(classes),
    'utf-8'
  );
}

updateClassesToPurge();
