export const toaster = {
  container: 'fixed transform translate-z-0 bottom-16 left-0 right-0 mx-8 sm:mx-16 z-50 pointer-events-none',
  content: 'w-full',
  toaster: 'grid auto-rows-auto justify-items-center justify-center mx-auto pointer-events-none',
};

export const toast = {
  wrapper: 'relative overflow-hidden w-full',
  toast: 'flex group p-8 mt-16 rounded-8 border-2 w-full pointer-events-auto transition-all',
  positive: 'i-bg-$color-toast-positive-background i-border-$color-toast-positive-subtle-border i-text-$color-toast-positive-text',
  warning: 'i-bg-$color-toast-warning-background i-border-$color-toast-warning-subtle-border i-text-$color-toast-warning-text',
  negative: 'i-bg-$color-toast-negative-background i-border-$color-toast-negative-subtle-border i-text-$color-toast-negative-text',
  icon: 'shrink-0 rounded-full w-[16px] h-[16px] m-[8px]',
  iconPositive: 'i-text-$color-toast-positive-icon',
  iconWarning: 'i-text-$color-toast-warning-icon',
  iconNegative: 'i-text-$color-toast-negative-icon',
  iconLoading: 'animate-bounce',
  content: 'self-center mr-8 py-4 last-child:mb-0',
  close: 'bg-transparent ml-auto p-[8px] i-text-$color-toast-close-icon hover:i-text-$color-toast-close-icon-hover active:i-text-$color-toast-close-icon-active',
};
