import { button } from './index.js';

export const buttons = {
  button: button.secondary,
  'button--secondary': button.secondary,
  'button--default': button.secondary,
  'button--small': 'px-16! py-6! text-xs!',
  'button--link': 'leading-[24] max-w-max bg-transparent focusable ease-in-out inline s-text-link! active:underline hover:underline',
  'button--primary': `${button.primary} max-w-max hover:s-text-inverted`,
  'button--cta': `${button.primary} max-w-max hover:s-text-inverted`,
  'button--pill': `${button.pill} max-w-max`,
  'button--utility': 'px-[15px] py-[11px] font-bold text-m leading-[24] max-w-max! focusable justify-center transition-colors ease-in-out border rounded-4 s-text! hover:s-text s-bg! hover:s-bg-hover! s-border! hover:s-border-hover! active:s-border-active!',
  'button--utility-flat': 'py-12 px-16 border-0 font-bold text-m leading-[24] max-w-max focusable justify-center transition-colors ease-in-out s-text! bg-transparent! hover:s-bg-subtle-hover! rounded-4',
  'button--destructive': 'py-12 px-16 border-0 font-bold rounded-8 text-m leading-[24] max-w-max focusable justify-center transition-colors ease-in-out s-bg-negative s-text-inverted hover:s-text-inverted hover:s-bg-negative-hover! active:s-bg-negative-active!',
  'button--destructive-flat': 'py-12 px-16 border-0 font-bold rounded-8 text-m leading-[24] max-w-max focusable justify-center transition-colors ease-in-out bg-transparent! s-text-negative! hover:s-bg-negative-subtle-hover! active:s-bg-negative-subtle-active!',
  'button--flat': 'py-12 px-16 border-0! font-bold rounded-8 text-m leading-[24] max-w-max focusable justify-center transition-colors ease-in-out bg-transparent! s-text-link! hover:s-bg-hover! active:s-bg-active!',
};
