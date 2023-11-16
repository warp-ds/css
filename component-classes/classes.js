import * as components from './index.js';

export const classes = [
  ...new Set(
    Object.values(components).map((e) =>
      typeof e === 'object'
        ? Object.values(e).map((e) => e.split(/\s/))
        : e.split(/\s/)
    ).flat(Infinity)
  )
];

