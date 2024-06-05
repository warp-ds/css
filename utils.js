import path from 'node:path';
import { Readable } from 'node:stream';
import { finished } from 'node:stream/promises';

import fs from 'fs-extra';
import unzipper from 'unzipper';

const webReleasesUrl = 'https://github.com/warp-ds/tokens/releases/download/latest/web.zip';
const webReleasesFileName = 'web.zip';
const tempDir = 'tmp/';
const outputDir = 'output/web';

export const init = () => {
  console.log('Initializing setup...');
  fs.removeSync(tempDir);
  fs.removeSync(outputDir);
  fs.ensureDirSync(tempDir);
  fs.ensureDirSync(outputDir);
};

export const downloadReleaseFile = async () => {
  console.log('Downloading assets from tokens repo: web.zip...');
  const res = await fetch(webReleasesUrl);
  const destination = path.resolve(tempDir, webReleasesFileName);
  const fileStream = fs.createWriteStream(destination, { flags: 'wx' });
  await finished(Readable.fromWeb(res.body).pipe(fileStream));
  console.log('Extracting asset...');
  await unzipper.Open.file(tempDir + webReleasesFileName).then((d) => d.extract({ path: outputDir, concurrency: 5 }));
};

export const brandToName = (brand) => {
  switch (brand) {
    case 'FINN light':
      return 'finn-no';
    case 'Blocket light':
      return 'blocket-se';
    case 'DBA light':
      return 'dba-dk';
    case 'TORI light':
      return 'tori-fi';
  }
};
