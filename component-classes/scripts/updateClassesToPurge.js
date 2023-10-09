import fs from 'node:fs';
import { classes } from '../classes.js';

export default () => {
  fs.writeFileSync('./classesToPurge.json', JSON.stringify(classes), 'utf-8');
};
