export const boxDefault = 'group block relative break-words last-child:mb-0 p-16 rounded-8'; // Relative here enables w-clickable

export const boxBleed = '-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8'; // We target L and R to override the default rounded-8

export const labelDefault = 'antialiased block relative text-s font-bold pb-4 cursor-pointer i-text-$color-label-text';

export const buttonReset = 'focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 p-0 inline-block';

export const buttonDefault = 'font-bold focusable justify-center transition-colors ease-in-out';

export const buttonColors = {
  primary: 'i-text-$color-button-primary-text hover:i-text-$color-button-primary-text i-bg-$color-button-primary-background hover:i-bg-$color-button-primary-background-hover active:i-bg-$color-button-primary-background-active',
  secondary: 'i-text-$color-button-secondary-text hover:i-text-$color-button-secondary-text i-border-$color-button-secondary-border i-bg-$color-button-secondary-background hover:i-bg-$color-button-secondary-background-hover hover:i-border-$color-button-secondary-border-hover active:i-bg-$color-button-secondary-background-active',
  utility: 'i-text-$color-button-utility-text hover:i-text-$color-button-utility-text i-bg-$color-button-utility-background i-border-$color-button-utility-border hover:i-bg-$color-button-utility-background hover:i-border-$color-button-utility-border-hover active:i-border-$color-button-utility-border-active',
  destructive: 'i-bg-$color-button-negative-background i-text-$color-button-negative-text hover:i-text-$color-button-negative-text hover:i-bg-$color-button-negative-background-hover active:i-bg-$color-button-negative-background-active',
  pill: 'i-text-$color-button-pill-icon hover:i-text-$color-button-pill-icon-hover active:i-text-$color-button-pill-icon-active i-bg-$color-button-pill-background hover:i-bg-$color-button-pill-background-hover active:i-bg-$color-button-pill-background-active',
  disabled: 'i-text-$color-button-disabled-text i-bg-$color-button-disabled-background',
  quiet: 'i-bg-$color-button-quiet-background i-text-$color-button-quiet-text hover:i-bg-$color-button-quiet-background-hover active:i-bg-$color-button-quiet-background-active',
  utilityQuiet: 'i-text-$color-button-utility-quiet-text i-bg-$color-button-utility-quiet-background hover:i-bg-$color-button-utility-quiet-background-hover',
  negativeQuiet: 'i-bg-$color-button-negative-quiet-background i-text-$color-button-negative-quiet-text hover:i-bg-$color-button-negative-quiet-background-hover active:i-bg-$color-button-negative-quiet-background-active',
  loading: 'i-text-$color-button-loading-text i-bg-$color-button-loading-background',
  link: 'i-text-$color-button-link-text',
};

export const buttonTypes = {
  primary: `border-0 rounded-8 ${buttonDefault}`,
  secondary: `border-2 rounded-8 ${buttonDefault}`,
  utility: `border rounded-4 ${buttonDefault}`,
  negative: `border-0 rounded-8 ${buttonDefault}`,
  pill: `p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${buttonDefault}`,
  link: `bg-transparent focusable ease-in-out inline active:underline hover:underline ${buttonColors.link}`,
};

export const buttonSizes = {
  xsmall: 'py-6 px-16',
  small: 'py-8 px-16',
  medium: 'py-10 px-14',
  large: 'py-12 px-16',
  utility: 'py-[11px] px-[15px]',
  smallUtility: 'py-[7px] px-[15px]',
  pill: 'min-h-[44px] min-w-[44px]',
  pillSmall: 'min-h-32 min-w-32',
  link: 'p-0',
};

export const buttonTextSizes = {
  medium: 'text-m leading-[24]',
  xsmall: 'text-xs',
};

export const buttonVariants = {
  inProgress: `border-transparent animate-inprogress pointer-events-none ${buttonColors.loading}`, // .button--in-progress, a.button--in-progress:visited
  quiet: `border-0 rounded-8 ${buttonDefault}`,
  utilityQuiet: `border-0 rounded-4 ${buttonDefault}`,
  negativeQuiet: `border-0 rounded-8 ${buttonDefault}`,
  isDisabled: `font-bold justify-center transition-colors ease-in-out cursor-default pointer-events-none ${buttonColors.disabled}`, // .button:disabled, .button--is-disabled
};
