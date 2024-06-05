import path from 'node:path';
import { Readable } from 'node:stream';
import { finished } from 'node:stream/promises';

import fs from 'fs-extra';

export const downloadFile = async (url, fileName) => {
  const res = await fetch(url);
  const destination = path.resolve('./tmp', fileName);
  const fileStream = fs.createWriteStream(destination, { flags: 'wx' });
  await finished(Readable.fromWeb(res.body).pipe(fileStream));
};
