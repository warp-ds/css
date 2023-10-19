/* eslint-env node */
import dts from 'vite-plugin-dts';
import { presetWarp } from '@warp-ds/uno';
import uno from 'unocss/vite';
import { classes } from './classes.js';
import updateClassesToPurge from './scripts/updateClassesToPurge.js';

export default ({ command }) => ({
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
        assetFileNames: `warp.[ext]`,
      },
    },
  },
});
