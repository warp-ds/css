import { transform } from 'lightningcss';
import { resets } from './resets/resets.js';


export const minify = () => {
    const  { code } = transform({
        code: Buffer.from(resets),
        minify: true
      });
      
  return code.toString()
}
