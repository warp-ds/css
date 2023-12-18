export const switchToggle = {
  switch: 'tap-highlight-transparent',
  label: 'block relative h-24 w-44 cursor-pointer group',
  labelDisabled: 'pointer-events-none',
  track: 'absolute top-0 left-0 h-full w-full rounded-full transition-colors',
  trackActive: 'i-bg-$color-switch-track-background-selected group-hover:i-bg-$color-switch-track-background-selected-hover',
  trackInactive: 'i-bg-$color-switch-track-background group-hover:i-bg-$color-switch-track-background-hover',
  trackDisabled: 'i-bg-$color-switch-track-background-disabled',
  handle: 'absolute transform-gpu h-16 w-16 top-4 left-4 rounded-full transition-transform',
  handleSelected: 'translate-x-20',
  handleNotDisabled: 'i-bg-$color-switch-handle-background i-shadow-$shadow-switch-handle',
  handleDisabled: 'i-bg-$color-switch-handle-background-disabled',
  a11y: 'sr-only',
};
