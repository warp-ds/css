export const pageIndicator = {
  wrapper: 'flex space-x-8 p-8',
  dot: 'h-8 w-8 rounded-full',
  inactive: 'i-bg-$color-pageindicator-background hover:i-bg-$color-pageindicator-background-hover',
  active: 'i-bg-$color-pageindicator-background-selected',
};

// Deprecated: Use Badge component
export const ribbon = {
  base: 'py-4 px-8 border rounded-4 inline-flex last:mb-0',
  info: 'i-border-$color-badge-info-background i-bg-$color-badge-info-background i-text-$color-badge-info-text',
  success: 'i-border-$color-badge-positive-background i-bg-$color-badge-positive-background i-text-$color-badge-positive-text',
  warning: 'i-border-$color-badge-warning-background i-bg-$color-badge-warning-background i-text-$color-badge-warning-text',
  error: 'i-border-$color-badge-negative-background i-bg-$color-badge-negative-background i-text-$color-badge-negative-text',
  disabled: 'i-border-$color-badge-disabled-background i-bg-$color-badge-disabled-background i-text-$color-badge-disabled-text',
  sponsored: 'i-border-$color-badge-price-background i-bg-$color-badge-price-background i-text-$color-badge-price-text',
  neutral: 'i-border-$color-badge-neutral-background i-bg-$color-badge-neutral-background i-text-$color-badge-neutral-text',
  roundedTopRightBottomLeft: 'rounded-tr-0 rounded-bl-0',
  roundedTopLeftBottomRight: 'rounded-tl-0 rounded-br-0',
};

export const badge = {
  base: 'py-4 px-8 border-0 rounded-4 text-xs inline-flex',
  neutral: 'i-bg-$color-badge-neutral-background i-text-$color-badge-neutral-text',
  info: 'i-bg-$color-badge-info-background i-text-$color-badge-info-text',
  positive: 'i-bg-$color-badge-positive-background i-text-$color-badge-positive-text',
  warning: 'i-bg-$color-badge-warning-background i-text-$color-badge-warning-text',
  negative: 'i-bg-$color-badge-negative-background i-text-$color-badge-negative-text',
  disabled: 'i-bg-$color-badge-disabled-background i-text-$color-badge-disabled-text',
  price: 'i-bg-$color-badge-price-background i-text-$color-badge-price-text',
  notification: 'i-bg-$color-badge-notification-background i-text-$color-badge-notification-text',
  positionBase: 'absolute backdrop-blur',
  positionTL: 'rounded-tl-0 rounded-tr-0 rounded-bl-0 top-0 left-0',
  positionTR: 'rounded-tl-0 rounded-tr-0 rounded-br-0 top-0 right-0',
  positionBR: 'rounded-tr-0 rounded-br-0 rounded-bl-0 bottom-0 right-0',
  positionBL: 'rounded-tl-0 rounded-br-0 rounded-bl-0 bottom-0 left-0',
};

export const slider = {
  wrapper: 'touch-pan-y relative w-full h-44 py-2',
  track:
    'absolute i-bg-$color-slider-track-background h-4 top-20 rounded-4 w-full ',
  trackDisabled:
    'pointer-events-none i-bg-$color-slider-track-background-disabled',
  activeTrack:
    'absolute i-bg-$color-slider-track-background-active h-6 top-[19px] rounded-4',
  activeTrackDisabled:
    'i-bg-$color-slider-track-background-disabled pointer-events-none',
  thumb:
    'absolute transition-shadow w-24 h-24 bottom-10 rounded-4 outline-none',
  thumbEnabled:
    'border-2 i-shadow-$shadow-slider cursor-pointer i-bg-$color-slider-handle-background i-border-$color-slider-handle-border hover:i-bg-$color-slider-handle-background-hover hover:i-border-$color-slider-handle-border-hover hover:slider-handle-shadow-hover active:i-bg-$color-slider-handle-background-active active:i-border-$color-slider-handle-border-active active:slider-handle-shadow-active focus:slider-handle-shadow-hover focus:i-border-$color-slider-handle-border-hover focus:i-bg-$color-slider-handle-background-hover',
  thumbDisabled:
    'i-bg-$color-slider-handle-background-disabled cursor-disabled pointer-events-none',
};

export const box = {
  box: 'group block relative break-words last-child:mb-0 p-16 rounded-8', // Relative here enables w-clickable
  bleed: '-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8', // We target L and R to override the default rounded-8
  info: 'i-bg-$color-box-info-background i-text-$color-box-info-text',
  neutral: 'i-bg-$color-box-neutral-background i-text-$color-box-neutral-text',
  bordered: 'border-2 i-border-$color-box-bordered-border i-bg-$color-box-bordered-background i-text-$color-box-bordered-text',
  infoClickable: 'hover:i-bg-$color-box-info-background-hover active:i-bg-$color-box-info-background-hover',
  neutralClickable: 'hover:i-bg-$color-box-neutral-background-hover active:i-bg-$color-box-neutral-background-hover',
  borderedClickable: 'hover:i-bg-$color-box-bordered-background-hover active:i-bg-$color-box-bordered-background-hover hover:i-border-$color-box-bordered-border-hover active:i-border-$color-box-bordered-border-hover',
};

export const pill = {
  pill: 'flex items-center',
  button: 'inline-flex items-center focusable text-xs transition-all',
  suggestion: 'i-bg-$color-pill-suggestion-background hover:i-bg-$color-pill-suggestion-background-hover active:i-bg-$color-pill-suggestion-background-active i-text-$color-pill-suggestion-text font-bold',
  filter: 'i-bg-$color-pill-filter-background hover:i-bg-$color-pill-filter-background-hover active:i-bg-$color-pill-filter-background-active i-text-$color-pill-filter-text',
  label: 'pl-12 py-8 rounded-l-full',
  labelWithoutClose: 'pr-12 rounded-r-full',
  labelWithClose: 'pr-2',
  close: 'pr-12 pl-4 pt-4 pb-6 rounded-r-full text-m!',
  a11y: 'sr-only',
};

export const step = {
  step: 'group/step',
  stepVertical: 'group/stepv grid-rows-[20px_auto] grid grid-flow-col gap-x-16',
  stepVerticalLeft: 'grid-cols-[20px_1fr]',
  stepVerticalRight: 'grid-cols-[1fr_20px] text-right',
  stepHorizontal: 'group/steph grid-rows-[auto_20px] grid-cols-[1fr_20px_1fr] flex-1 grid gap-y-16 items-center',

  stepDot: 'rounded-full border-2 h-20 w-20 transition-colors duration-300 i-text-$color-stepindicator-handle-icon',
  stepDotVerticalRight: 'col-start-2',
  stepDotHorizontal: 'row-start-2 justify-self-end',
  stepDotActive: 'i-border-$color-stepindicator-handle-border-active i-bg-$color-stepindicator-handle-background-active',
  stepDotIncomplete: 'i-border-$color-stepindicator-handle-border i-bg-$color-stepindicator-handle-background',

  stepLine: 'group-last/stepv:hidden transition-colors duration-300',
  stepLineVertical: 'w-2 h-full justify-self-center',
  stepLineVerticalRight: 'col-start-2',
  stepLineHorizontal: 'h-2 w-full row-start-2',
  stepLineHorizontalRight: 'group-last/steph:bg-transparent',
  stepLineHorizontalLeft: 'group-first/steph:bg-transparent',

  stepLineIncomplete: 'i-bg-$color-stepindicator-track-background',
  stepLineComplete: 'i-bg-$color-stepindicator-track-background-active',

  content: 'last:mb-0 group-last/step:last:pb-0',
  contentVertical: 'row-span-2 pb-32',
  contentHorizontal: 'col-span-3 px-16 row-start-1 text-center',
};

export const steps = {
  steps: 'w-full',
  stepsHorizontal: 'flex',
};

export const card = {
  card: 'cursor-pointer overflow-hidden relative transition-all',
  cardShadow: 'rounded-8 i-shadow-$shadow-card hover:i-shadow-$shadow-card-hover hover:i-bg-$color-card-background-hover tap-highlight-transparent',
  cardFlat: 'border-2 rounded-4',
  cardFlatUnselected:
    'i-bg-$color-card-flat-background i-border-$color-card-flat-border hover:i-bg-$color-card-flat-background-hover hover:i-border-$color-card-flat-border-hover active:i-bg-$color-card-flat-background-active active:i-border-$color-card-flat-border-active',
  cardFlatSelected:
    'i-border-$color-card-flat-border-selected i-bg-$color-card-flat-background-selected hover:i-bg-$color-card-flat-background-selected-hover hover:i-border-$color-card-flat-border-selected-hover active:i-border-$color-card-flat-border-active active:i-bg-$color-card-flat-background-active',
  cardUnselected: 's-bg',
  cardSelected:
    'i-border-$color-card-border-selected i-bg-$color-card-background-selected hover:i-border-$color-card-border-selected-hover hover:i-bg-$color-card-background-selected-hover active:i-border-$color-card-border-selected-active',
  cardOutline:
    'active:i-border-$color-card-flat-border absolute rounded-8 inset-0 transition-all border-2',
  cardOutlineUnselected: 'i-border-$color-card-border',
  cardOutlineSelected: 'i-border-$color-card-border-selected hover:i-border-$color-card-border-selected-hover',
  a11y: 'sr-only',
};

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

export const toaster = {
  container:
    'fixed transform translate-z-0 bottom-16 left-0 right-0 mx-8 sm:mx-16 z-50 pointer-events-none',
  content: 'w-full',
  toaster:
    'grid auto-rows-auto justify-items-center justify-center mx-auto pointer-events-none',
};

export const toast = {
  wrapper: 'relative overflow-hidden w-full',
  toast:
    'flex group p-8 mt-16 rounded-8 border-2 w-full pointer-events-auto transition-all',
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

export const tabs = {
  tabContainer: 'inline-grid relative',
  wunderbar:
    'absolute i-border-$color-tabs-border-selected -bottom-0 border-b-4 transition-all',
  wrapperUnderlined:
    'border-b i-border-$color-tabs-border -mx-16 sm:mx-0 px-4 sm:px-0 mb-32 ',
};

export const tab = {
  tab: 'grid items-center font-bold gap-8 focusable antialias p-16 pb-8 border-b-4 bg-transparent i-text-$color-tabs-text i-border-$color-tabs-border hover:i-text-$color-tabs-text-hover hover:i-border-$color-tabs-border-hover',
  tabActive: 'i-text-$color-tabs-text-selected',
  icon: 'mx-auto hover:i-text-$color-tabs-text-hover',
  iconUnderlinedActive: 'i-text-$color-tabs-text-selected',
  content: 'flex items-center justify-center gap-8',
  contentUnderlined: 'content-underlined', // content-underlined is a no-op that prevents a quirk in how Vue handles class bindings
  contentUnderlinedActive: 'i-text-$color-tabs-text-selected',
};

// Todo: Handle dynamic classnames
export const gridLayout = {
  cols1: 'grid-cols-1',
  cols2: 'grid-cols-2',
  cols3: 'grid-cols-3',
  cols4: 'grid-cols-4',
  cols5: 'grid-cols-5',
  cols6: 'grid-cols-6',
  cols7: 'grid-cols-7',
  cols8: 'grid-cols-8',
  cols9: 'grid-cols-9',
};

export const buttonReset =
  'focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 p-0 inline-block';

export const expandable = {
  expandable: 'will-change-height',
  expandableTitle: 'font-bold i-text-$color-expandable-title-text',
  expandableBox: 'i-bg-$color-expandable-background hover:i-bg-$color-expandable-background-hover py-0 px-0 ' + box.box,
  expandableBleed: box.bleed,
  chevron: 'inline-block align-middle i-text-$color-expandable-icon',
  chevronNonBox: 'ml-8',
  chevronBox: '',
  chevronTransform: 'transform transition-transform transform-gpu ease-in-out',
  chevronExpand: '-rotate-180',
  chevronCollapse: 'rotate-180',
  elementsTransformChevronDownPart: 'part-[w-icon-chevron-down-16-part]:transform part-[w-icon-chevron-down-16-part]:transition-transform part-[w-icon-chevron-down-16-part]:transform-gpu part-[w-icon-chevron-down-16-part]:ease-in-out',
  elementsChevronDownExpandPart: 'part-[w-icon-chevron-down-16-part]:-rotate-180',
  elementsTransformChevronUpPart: 'part-[w-icon-chevron-up-16-part]:transform part-[w-icon-chevron-up-16-part]:transition-transform part-[w-icon-chevron-up-16-part]:transform-gpu part-[w-icon-chevron-up-16-part]:ease-in-out',
  elementsChevronUpCollapsePart: 'part-[w-icon-chevron-up-16-part]:rotate-180',
  expansion: 'overflow-hidden',
  expansionNotExpanded: 'h-0 invisible',
  button: buttonReset + ' hover:underline focus-visible:underline',
  buttonBox: 'w-full text-left relative inline-flex items-center justify-between ' + box.box,
  paddingTop: 'pt-0',
  title: 'flex w-full justify-between items-center',
  titleType: 'h4',
};

const buttonDefaultStyling = 'font-bold focusable justify-center transition-colors ease-in-out';

const buttonColors = {
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

const buttonTypes = {
  primary: `border-0 rounded-8 ${buttonDefaultStyling}`,
  secondary: `border-2 rounded-8 ${buttonDefaultStyling}`,
  utility: `border rounded-4 ${buttonDefaultStyling}`,
  negative: `border-0 rounded-8 ${buttonDefaultStyling}`,
  pill:
  `p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${buttonDefaultStyling}`,
  link: `bg-transparent focusable ease-in-out inline active:underline hover:underline ${buttonColors.link}`,
};

const buttonSizes = {
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

const buttonTextSizes = {
  medium: 'text-m leading-[24]',
  xsmall: 'text-xs',
};

const buttonVariants = {
  inProgress:
    `border-transparent animate-inprogress pointer-events-none ${buttonColors.loading}`, // .button--in-progress, a.button--in-progress:visited
  quiet:
    `border-0 rounded-8 ${buttonDefaultStyling}`,
  utilityQuiet: `border-0 rounded-4 ${buttonDefaultStyling}`,
  negativeQuiet: `border-0 rounded-8 ${buttonDefaultStyling}`,
  isDisabled:
    `font-bold justify-center transition-colors ease-in-out cursor-default pointer-events-none ${buttonColors.disabled}`, // .button:disabled, .button--is-disabled
};

export const button = {
  // Buttontypes
  secondary:
  `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.secondary} ${buttonColors.secondary}`, // .button--secondary, .button--default, .button
  secondaryHref:
  `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.secondary} ${buttonColors.secondary}`,
  secondaryDisabled:
  `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.secondary} ${buttonVariants.isDisabled}`,
  secondarySmall: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonTypes.secondary} ${buttonColors.secondary}`,
  secondarySmallDisabled: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonTypes.secondary} ${buttonVariants.isDisabled}`,
  secondaryQuiet:
  `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonVariants.quiet} ${buttonColors.quiet}`,
  secondaryQuietDisabled:
  `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonVariants.quiet} ${buttonVariants.isDisabled}`,
  secondarySmallQuiet: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonVariants.quiet} ${buttonColors.quiet}`,
  secondarySmallQuietDisabled: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonVariants.quiet} ${buttonVariants.isDisabled}`,
  secondaryLoading:
  `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.secondary} ${buttonVariants.inProgress}`,
  secondarySmallLoading: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall}  ${buttonTypes.secondary} ${buttonVariants.inProgress}`,
  secondarySmallQuietLoading: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonVariants.quiet} ${buttonVariants.inProgress}`,
  secondaryQuietLoading:
  `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonVariants.quiet} ${buttonVariants.inProgress}`,

  primary: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.primary} ${buttonColors.primary}`, // .button--primary, .button--cta
  primaryDisabled: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.isDisabled} ${buttonTypes.primary}`,
  primarySmall: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonTypes.primary} ${buttonColors.primary}`,
  primarySmallDisabled: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.isDisabled} ${buttonTypes.primary} `,
  primaryQuiet: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.quiet} ${buttonColors.quiet}`,
  primaryQuietDisabled: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.quiet} ${buttonVariants.isDisabled}`,
  primarySmallQuiet: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.quiet} ${buttonColors.quiet}`,
  primarySmallQuietDisabled: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.quiet} ${buttonVariants.isDisabled}`,
  primaryLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.inProgress} ${buttonTypes.primary}`,
  primarySmallLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall}  ${buttonVariants.inProgress} ${buttonTypes.primary}`,
  primarySmallQuietLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.quiet} ${buttonVariants.inProgress} ${buttonTypes.primary}`,
  primaryQuietLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.quiet} ${buttonVariants.inProgress}`,

  utility: `${buttonSizes.utility} ${buttonTextSizes.medium} ${buttonTypes.utility} ${buttonColors.utility}`, // .button--utility
  utilityDisabled: `${buttonSizes.utility} ${buttonTextSizes.medium} ${buttonTypes.utility} ${buttonVariants.isDisabled}`,
  utilityQuiet: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.utilityQuiet} ${buttonColors.utilityQuiet}`, // .button--utility-flat
  utilityQuietDisabled: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.utilityQuiet} ${buttonVariants.isDisabled}`,
  utilitySmall: `${buttonSizes.smallUtility} ${buttonTextSizes.xsmall} ${buttonTypes.utility} ${buttonColors.utility}`,
  utilitySmallDisabled: `${buttonSizes.smallUtility} ${buttonTextSizes.xsmall} ${buttonTypes.utility} ${buttonVariants.isDisabled}`,
  utilitySmallQuiet: `${buttonSizes.smallUtility} ${buttonTextSizes.xsmall} ${buttonVariants.utilityQuiet} ${buttonColors.utilityQuiet}`,
  utilitySmallQuietDisabled: `${buttonSizes.smallUtility} ${buttonTextSizes.xsmall} ${buttonVariants.utilityQuiet} ${buttonVariants.isDisabled}`,
  utilityLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.utility} ${buttonVariants.inProgress}`,
  utilitySmallLoading: `${buttonSizes.smallUtility} ${buttonTextSizes.xsmall} ${buttonTypes.utility} ${buttonVariants.inProgress}`,
  utilityQuietLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.inProgress} ${buttonVariants.utilityQuiet}`,
  utilitySmallQuietLoading: `${buttonSizes.smallUtility} ${buttonTextSizes.xsmall} ${buttonVariants.inProgress} ${buttonVariants.utilityQuiet}`,

  negative: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.negative} ${buttonColors.destructive}`, // .button--destructive
  negativeDisabled: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.negative} ${buttonVariants.isDisabled}`,
  negativeQuiet: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.negativeQuiet} ${buttonColors.negativeQuiet}`, // .button--destructive-flat
  negativeQuietDisabled: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.negativeQuiet}${buttonVariants.isDisabled}`,
  negativeSmall: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonTypes.negative} ${buttonColors.destructive}`,
  negativeSmallDisabled: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonTypes.negative} ${buttonVariants.isDisabled}`,
  negativeSmallQuiet: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.negativeQuiet} ${buttonColors.negativeQuiet}`,
  negativeSmallQuietDisabled: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.negativeQuiet} ${buttonVariants.isDisabled}`,
  negativeLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.negative} ${buttonVariants.inProgress}`,
  negativeSmallLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.inProgress} ${buttonTypes.negative}`,
  negativeQuietLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.negativeQuiet} ${buttonTypes.negative} ${buttonVariants.inProgress}`,
  negativeSmallQuietLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.negativeQuiet} ${buttonVariants.inProgress}`,

  pill: `${buttonSizes.pill} ${buttonTextSizes.medium} ${buttonTypes.pill} ${buttonColors.pill}`, // .button--pill
  pillSmall: `${buttonSizes.pillSmall} ${buttonTextSizes.xsmall} ${buttonTypes.pill} ${buttonColors.pill}`,
  pillLoading: `${buttonSizes.pill} ${buttonTextSizes.medium} ${buttonTypes.pill} ${buttonVariants.inProgress}`,
  pillSmallLoading: `${buttonSizes.pillSmall} ${buttonTextSizes.xsmall} ${buttonTypes.pill} ${buttonVariants.inProgress}`,

  link: `${buttonSizes.link} ${buttonTextSizes.medium} ${buttonTypes.link}`,
  linkSmall: `${buttonSizes.link} ${buttonTextSizes.xsmall} ${buttonTypes.link}`,
  linkAsButton: 'inline-block hover:no-underline text-center',
  a11y: 'sr-only',
  fullWidth: "w-full max-w-full",
  contentWidth: "max-w-max",
};

export const buttonGroup = {
  wrapper: 'inline-flex rounded-4 overflow-hidden',
  raised: 'i-shadow-$shadow-buttongroup',
  vertical: 'flex-col',
  nonOutlinedVertical: 'divide-y',
  nonOutlinedHorizontal: 'divide-x',
};

export const buttonGroupItem = {
  wrapper: 'relative i-text-$color-buttongroup-utility-text i-bg-$color-buttongroup-utility-background hover:i-bg-$color-buttongroup-utility-background-hover active:i-text-$color-buttongroup-utility-text-selected active:i-bg-$color-buttongroup-utility-background-selected',
  outlined: 'border hover:z-30 i-border-$color-buttongroup-utility-border active:i-border-$color-buttongroup-utility-border-selected',
  outlinedVertical: '-mb-1 last:mb-0 first:rounded-lt-4 first:rounded-rt-4 last:rounded-lb-4 last:rounded-rb-4',
  outlinedHorizontal: '-mr-1 last:mr-0 first:rounded-lt-4 first:rounded-lb-4 last:rounded-rt-4 last:rounded-rb-4',
  outlinedVerticalResets: 'px-1 pt-1 last:pb-1 -mb-1 last:mb-0',
  outlinedHorizontalResets: 'py-1 pl-1 last:pr-1 -mr-1 last:mr-0',
  outlinedSelected: 'i-border-$color-buttongroup-utility-border-selected',
  selected: 'z-30 i-text-$color-buttongroup-utility-text-selected! i-bg-$color-buttongroup-utility-background-selected!',
};

export const modal = {
  //TODO: this class can be removed when we have the solution for opacity and we can add rgba values to the background of the backdrop
  transparentBg: `before:i-bg-$color-modal-backdrop-background before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:opacity-25`,
  backdrop:
    'fixed inset-0 flex sm:place-content-center sm:place-items-center items-end z-30 [--w-modal-max-height:80%] [--w-modal-width:640px]',
  modal:
    'pb-safe-[32] i-shadow-$shadow-modal max-h-[--w-modal-max-height] min-h-[--w-modal-min-height] w-[--w-modal-width] h-[--w-modal-height] relative transition-300 ease-in-out backface-hidden will-change-height rounded-8 mx-0 sm:mx-16 i-bg-$color-modal-background flex flex-col overflow-hidden outline-none pt-8 sm:pt-32 sm:pb-32 rounded-b-0 sm:rounded-b-8',
  content:
    'block overflow-y-auto overflow-x-hidden last-child:mb-0 grow shrink px-16 sm:px-32 sm:mt-16 relative',
  footer: 'mt-16 flex justify-end shrink-0 px-16 sm:px-32',
  transitionTitle: 'transition-all duration-300',
  transitionTitleCenter: 'justify-self-center',
  transitionTitleColSpan: 'col-span-2',
  title:
    '-mt-4 sm:-mt-8 h-40 sm:h-48 grid gap-8 sm:gap-16 grid-cols-[auto_1fr_auto] items-start px-16 sm:px-32 border-b sm:border-b-0 shrink-0',
  titleText: 'mb-0 h4 sm:h3',
  titleButton: `${buttonTextSizes.medium} ${buttonTypes.pill} ${buttonColors.pill} items-start! sm:min-h-[44px] sm:min-w-[44px] min-h-[32px] min-w-[32px]`,
  titleButtonLeft: '-ml-8 sm:-ml-12 justify-self-start',
  titleButtonRight: '-mr-8 sm:-mr-12 justify-self-end',
  titleButtonIcon: 'h-16 w-16 sm:h-24 sm:w-24',
  titleButtonIconRotated: 'transform rotate-90',
};

export const alert = {
  alert: "flex p-16 border border-l-4 rounded-4",
  willChangeHeight: "will-change-height",
  textWrapper: "last-child:mb-0 text-s",
  title: "text-s",
  icon: "w-16 mr-8 min-w-16",
  negative:  "i-border-$color-alert-negative-subtle-border i-bg-$color-alert-negative-background i-text-$color-alert-negative-text i-border-l-$color-alert-negative-border",
  negativeIcon: "i-text-$color-alert-negative-icon",
  positive:  "i-border-$color-alert-positive-subtle-border i-bg-$color-alert-positive-background i-text-$color-alert-positive-text i-border-l-$color-alert-positive-border",
  positiveIcon: "i-text-$color-alert-positive-icon",
  warning:  "i-border-$color-alert-warning-subtle-border i-bg-$color-alert-warning-background i-text-$color-alert-warning-text i-border-l-$color-alert-warning-border",
  warningIcon: "i-text-$color-alert-warning-icon",
  info:  "i-border-$color-alert-info-subtle-border i-bg-$color-alert-info-background i-text-$color-alert-info-text i-border-l-$color-alert-info-border",
  infoIcon: "i-text-$color-alert-info-icon",
};

export const input = {
  default: 'block text-m mb-0 leading-m i-text-$color-input-text-filled i-bg-$color-input-background i-border-$color-input-border hover:i-border-$color-input-border-hover active:i-border-$color-input-border-active rounded-4 py-12 px-8 block border-1 w-full focusable focus:[--w-outline-offset:-2px] caret-current',
  textArea: 'min-h-[42] sm:min-h-[45]',
  disabled: 'i-bg-$color-input-background-disabled i-border-$color-input-border-disabled hover:i-border-$color-input-border-disabled! i-text-$color-input-text-disabled pointer-events-none',
  invalid: 'i-border-$color-input-border-negative i-text-$color-input-text-negative!',
  readOnly: 'pl-0 bg-transparent border-0 pointer-events-none i-text-$color-input-text-read-only',
  placeholder: 'placeholder:i-text-$color-input-text-placeholder',
  wrapper: 'relative',
  suffix: 'pr-40',
  prefix: 'pl-40',
};

export const select = {
  default: 'block text-m mb-0 leading-m i-text-$color-select-text i-bg-$color-select-background i-border-$color-select-border hover:i-border-$color-select-border-hover active:i-border-$color-select-border-active rounded-4 py-12 px-8 block border-1 w-full focusable focus:[--w-outline-offset:-2px] appearance-none pr-32 cursor-pointer caret-current',
  disabled: 'i-bg-$color-select-background-disabled i-border-$color-select-border-disabled hover:i-border-$color-select-border-disabled! active:i-border-$color-select-border-disabled! i-text-$color-select-text-disabled pointer-events-none',
  invalid: 'i-border-$color-select-border-negative',
  readOnly: 'pl-0 bg-transparent border-0 pointer-events-none before:hidden',
  wrapper: 'relative',
  selectWrapper: `relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:pointer-events-none `,
  chevron: 'absolute top-[30%] block right-0 bottom-0 w-32 h-full i-text-$color-select-icon pointer-events-none cursor-pointer',
  chevronDisabled: 'opacity-25',
};

export const label = {
  label: 'antialiased block relative text-s font-bold pb-4 cursor-pointer i-text-$color-label-text',
  labelInvalid: 'i-text-$color-label-text-negative',
  optional: 'pl-8 font-normal text-s i-text-$color-label-optional-text',
};

export const helpText = {
  helpText: 'text-xs mt-4 block i-text-$color-helptext-text',
  helpTextValid: 'i-text-$color-helptext-text-positive',
  helpTextInvalid: 'i-text-$color-helptext-text-negative',
};

const prefixSuffixWrapperBase =
  'absolute top-0 bottom-0 flex justify-center items-center focusable focus:[--w-outline-offset:-2px] bg-transparent ';

export const suffix = {
  wrapper: prefixSuffixWrapperBase + 'right-0',
  wrapperWithLabel: 'w-max pr-12',
  wrapperWithIcon: 'w-40',
  label: 'antialiased block relative cursor-default pb-0 font-bold text-xs i-text-$color-label-text',
};

export const prefix = {
  wrapper: prefixSuffixWrapperBase + 'left-0',
  wrapperWithLabel: 'w-max pl-12',
  wrapperWithIcon: 'w-40',
  label: 'antialiased block relative cursor-default pb-0 font-bold text-xs i-text-$color-label-text',
};

export const breadcrumbs = {
  wrapper: 'flex space-x-8',
  text: 'i-text-$color-breadcrumbs-text',
  link: 'i-text-$color-breadcrumbs-link-text',
  separator: 'select-none i-text-$color-breadcrumbs-icon',
  a11y: 'sr-only',
};

export const toggle = {
  field: 'relative text-m',
  wrapper: 'relative py-1',
  deadToggleWrapper: 'h-20 w-20 pointer-events-none',
  input: 'peer',
  deadToggleInput: 'hidden',
  inputDisabled: 'pointer-events-none',
  focusable: 'peer-focus:focusable',
  focusableWithin: 'focus-within:focusable',
  label: 'cursor-pointer text-m i-text-$color-label-text py-2 pl-28 select-none relative block before:block before:border before:absolute before:transition-all before:left-0 before:w-20 before:h-20 before:top-2',
  deadToggleLabel: '-mt-2',
  noContent: `before:content-[""]`,
  indeterminate: `before:flex! before:items-center before:justify-center before:i-text-$color-checkbox-icon before:text-center before:font-bold before:content-["-"] peer-indeterminate:before:i-border-$color-checkbox-border-selected peer-indeterminate:before:i-bg-$color-checkbox-background-selected peer-indeterminate:hover:before:i-border-$color-checkbox-border-hover peer-indeterminate:hover:before:i-bg-$color-checkbox-background-selected-hover`,
  labelDisabled: 'pointer-events-none',
  checkbox: 'before:s-bg before:rounded-2 hover:before:i-border-$color-checkbox-border-hover hover:before:i-bg-$color-checkbox-background-hover',
  checkboxChecked: 'peer-checked:before:i-border-$color-checkbox-border-selected peer-checked:before:i-bg-$color-checkbox-background-selected peer-checked:peer-hover:before:i-border-$color-checkbox-border-selected-hover peer-checked:peer-hover:before:i-bg-$color-checkbox-background-selected-hover',
  checkboxInvalid: 'before:i-bg-$color-checkbox-negative-background hover:before:i-bg-$color-checkbox-negative-background-hover peer-checked:before:i-border-$color-checkbox-negative-border hover:before:i-border-$color-checkbox-negative-border-hover peer-checked:before:i-bg-$color-checkbox-negative-background-selected peer-checked:peer-hover:before:i-bg-$color-checkbox-negative-background-selected-hover peer-checked:peer-hover:before:i-border-$color-checkbox-negative-border-hover',
  checkboxDisabled: 'peer-disabled:before:i-bg-$color-checkbox-background-disabled before:i-border-$color-checkbox-border-disabled peer-checked:before:i-border-$color-checkbox-border-selected-disabled peer-checked:before:i-bg-$color-checkbox-background-selected-disabled',
  labelCheckboxBorder: 'i-border-$color-checkbox-border',
  radio: 'before:s-bg before:rounded-full peer-checked:before:border-[6] peer-checked:peer-hover:before:i-border-$color-radio-border-selected-hover peer-hover:before:i-border-$color-radio-border-hover peer-hover:before:i-bg-$color-radio-background-hover',
  radioChecked: 'peer-checked:before:i-border-$color-radio-border-selected',
  radioInvalid: 'before:i-bg-$color-radio-negative-background peer-hover:before:i-bg-$color-radio-negative-background-hover before:i-border-$color-radio-negative-border peer-hover:before:i-border-$color-radio-negative-border-hover peer-checked:before:i-border-$color-radio-negative-border peer-checked:peer-hover:before:i-border-$color-radio-negative-border-hover ',
  radioDisabled: 'peer-disabled:before:i-bg-$color-radio-background-disabled before:i-border-$color-radio-border-disabled peer-checked:before:i-border-$color-radio-border-disabled',
  labelRadioBorder: 'i-border-$color-radio-border',
  radioButtons: 'inline-flex relative font-bold rounded-8',
  radioButtonsGroup: 'group',
  radioButtonsLabel: 'peer-hover:peer-not-checked:i-bg-$color-buttongroup-primary-background-hover peer-checked:i-text-$color-buttongroup-primary-text-selected peer-checked:i-bg-$color-buttongroup-primary-background-selected peer-checked:i-border-$color-buttongroup-primary-border-selected block relative text-s font-bold cursor-pointer i-text-$color-buttongroup-primary-text text-center i-bg-$color-buttongroup-primary-background border-2 i-border-$color-buttongroup-primary-border py-8 pl-12 pr-14 group-first-of-type:rounded-tl-8 group-first-of-type:rounded-bl-8 group-last-of-type:rounded-tr-8 group-last-of-type:rounded-br-8 group-not-last-of-type:border-r-0 peer-checked:z-10 group-not-first:-ml-2',
  radioButtonsJustified: 'flex!',
  radioButtonsGroupJustified: 'grow-1 shrink-0 basis-auto',
  radioButtonsLabelSmall: 'text-xs py-[5px]! px-[8px]!',
  icon: `peer-checked:before:bg-center before:bg-[url(var(--w-form-check-mark))]`,
  a11y: 'sr-only',
};

export const clickable = {
  toggle: 'absolute inset-0 h-full w-full appearance-none cursor-pointer focusable focusable-inset',
  label: `px-12 ${label.label} py-8! cursor-pointer focusable focusable-inset`,
  buttonOrLink: 'bg-transparent focusable',
  buttonOrLinkStretch: 'inset-0 absolute',
};

export const combobox = {
  wrapper: 'relative',
  combobox: 'absolute left-0 right-0 pb-8 rounded-8 i-bg-$color-combobox-background i-shadow-$shadow-combobox',
  textMatch: 'font-bold',
  listbox: 'm-0 p-0 select-none list-none',
  option: 'block cursor-pointer p-8 hover:i-bg-$color-combobox-option-background-hover',
  optionSelected: 'i-bg-$color-combobox-option-background-selected hover:i-bg-$color-combobox-option-background-selected-hover',
  a11y: 'sr-only',
};

export const attention = {
  base: 'border-2 relative flex items-start',
  tooltip:
    'i-bg-$color-tooltip-background i-border-$color-tooltip-background i-shadow-$shadow-tooltip i-text-$color-tooltip-text rounded-4 py-6 px-8',
  callout: 'i-bg-$color-callout-background i-border-$color-callout-border i-text-$color-callout-text py-8 px-16 rounded-8',
  highlight: 'i-bg-$color-callout-background i-border-$color-callout-border i-text-$color-callout-text py-8 px-16 rounded-8 drop-shadow-m',
  popover:
    'i-bg-$color-popover-background i-border-$color-popover-background i-text-$color-popover-paragraph-text rounded-8 p-16 drop-shadow-m',
  arrowBase:
    'absolute h-[14px] w-[14px] border-2 border-b-0 border-r-0 rounded-tl-4 transform',
  arrowDirectionLeft: '-left-[8px]',
  arrowDirectionRight: '-right-[8px]',
  arrowDirectionBottom: '-bottom-[8px]',
  arrowDirectionTop: '-top-[8px]',
  arrowTooltip: 'i-bg-$color-tooltip-background i-border-$color-tooltip-background',
  arrowCallout: 'i-bg-$color-callout-background i-border-$color-callout-border',
  arrowPopover: 'i-bg-$color-popover-background i-border-$color-popover-background',
  arrowHighlight: 'i-bg-$color-callout-background i-border-$color-callout-border',
  content: 'last-child:mb-0',
  notCallout: 'absolute z-50',
  closeBtn: `${buttonTextSizes.medium} ${buttonTypes.pill} ${buttonColors.pill} justify-self-end -mr-8 ml-8`,
};

export const backwardsCompatibleClasses = {
  modalBackdrop: 'z-20', // replaced by z-30 in v1.4.0
  chevronBox: 'right-16', //removed in v1.4.0
  chevronNonBox: 'left-8', //removed in v1.4.0
  checkboxInvalid: 'peer-checked:before:i-border-$color-checkbox-negative-border-selected peer-checked:peer-hover:before:i-border-$color-checkbox-negative-border-selected-hover', //replaced in v1.5.0
  radioInvalid: 'peer-checked:before:i-border-$color-radio-negative-border-selected peer-checked:peer-hover:before:i-border-$color-radio-negative-border-selected-hover ', //replaced in v1.5.0
  radioDisabled: 'before:i-bg-$color-radio-background-disabled before:i-bg-$color-checkbox-background-disabled peer-checked:before:i-border-$color-radio-border-selected-disabled', //replaced in v1.5.0
  modal: 'space-y-16', //removed
  modalTitle: 'items-center' //replaced by items-start
};