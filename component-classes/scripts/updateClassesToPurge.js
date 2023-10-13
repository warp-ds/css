import fs from 'node:fs';
import { classes } from '../classes.js';

export default () => {
  fs.writeFileSync('./classesToPurge.json', JSON.stringify(classes), 'utf-8');
  fs.writeFileSync(
    '../dist/classesToPurge.json',
    JSON.stringify(classes),
    'utf-8'
  );
};
