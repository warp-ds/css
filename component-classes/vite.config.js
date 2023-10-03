/* eslint-env node */
import fs from 'node:fs';
import dts from 'vite-plugin-dts';
import { presetWarp } from '@warp-ds/uno';
import uno from 'unocss/vite';
import { classes } from './classes.js';

export default ({ command }) => ({
  plugins: [
    uno({
      presets: [presetWarp({ skipPreflight: true })],
      mode: 'dist-chunk',
      safelist: classes,
    }),
    dts({
      insertTypesEntry: true,
      outputDir: '../dist',
    }),
    {
      name: 'build-script',
      buildStart(options) {
        if (command === 'build') {
          fs.writeFileSync(
            './classesToPurge.json',
            JSON.stringify(classes),
            'utf-8',
          );
        }
      },
    },
  ],
  build: {
    emptyOutDir: false,
    rollupOptions: {
      output: {
        dir: '../dist',
        assetFileNames: `components.[ext]`,
      },
    },
  },
});
