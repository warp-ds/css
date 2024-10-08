/* eslint-env node */
import { presetWarp } from '@warp-ds/uno';
import uno from 'unocss/vite';
import dts from 'vite-plugin-dts';

import { classes } from './classes.js';

export default () => ({
  plugins: [
    uno({
      presets: [presetWarp({ skipResets: true })],
      mode: 'dist-chunk',
      safelist: classes,
    }),
    dts({
      insertTypesEntry: true,
      outputDir: '../dist',
    }),
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
