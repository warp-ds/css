import * as components from './index.js';

const getClasses = () =>
  Object.values(components)
    .map((e) => {
      if (typeof e === 'object')
        return Object.values(e).map((e) => e.split(/\s/));
      return e.split(/\s/);
    })
    .flat(Infinity);

export const classes = [...new Set(getClasses())];
