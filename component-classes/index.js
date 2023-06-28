export const attention = {
  base: 'border-2 relative',
  tooltip:
    'i-bg-$color-tooltip-background i-border-$color-tooltip-background i-shadow-$shadow-tooltip i-text-$color-tooltip-text rounded-4 py-6 px-8',
  callout: 'i-bg-$color-callout-background i-border-$color-callout-border i-text-$color-callout-text py-8 px-16 rounded-8',
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
  content: 'last-child:mb-0',
  notCallout: 'absolute z-50',
};

export const pageIndicator = {
  wrapper: 'flex space-x-8 p-8',
  dot: 'h-8 w-8 rounded-full',
  inactive: 'i-bg-$color-pageindicator-background',
  active: 'i-bg-$color-pageindicator-background-active',
  hover: 'i-bg-$color-pageindicator-background-hover',
};

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
  borderedClickable: 'hover:i-bg-$color-box-bordered-background-hover active:i-bg-$color-box-bordered-background-hover hover:i-border-$color-box-bordered-border-hover active:i-border-$color-box-bordered-border-hover'
};

export const pill = {
  pill: 'flex items-center',
  button: 'inline-flex items-center focusable text-xs transition-all',
  suggestion: 'i-bg-$color-pill-suggestion-background hover:i-bg-$color-pill-suggestion-background-hover active:i-bg-$color-pill-suggestion-background-active i-text-$color-pill-suggestion-text font-bold',
  filter: 'i-bg-$color-pill-filter-background hover:i-bg-$color-pill-filter-background-hover active:i-bg-$color-pill-filter-background-active i-text-$color-pill-filter-text',
  label: 'pl-12 py-8 rounded-l-full',
  labelWithoutClose: 'pr-12 rounded-r-full',
  labelWithClose: 'pr-2',
  close: 'pr-12 pl-4 py-10 rounded-r-full',
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
}

export const card = {
  card: 'cursor-pointer overflow-hidden relative transition-all',
  cardShadow: 'rounded-8 i-shadow-$shadow-card hover:i-shadow-$shadow-card-hover hover:i-bg-$color-card-background-hover tap-highlight-transparent',
  cardFlat: 'border-2 rounded-4',
  cardFlatUnselected:
    'i-bg-$color-card-flat-background i-border-$color-card-flat-border hover:i-bg-$color-card-flat-background-hover hover:i-border-$color-card-flat-border-hover active:i-bg-$color-card-flat-background-active active:i-border-$color-card-flat-border-active',
  cardFlatSelected:
    'i-border-$color-card-flat-border-active i-bg-$color-card-flat-background-active hover:i-bg-$color-card-flat-background-active-hover hover:i-border-$color-card-flat-border-active-hover active:i-border-$color-card-flat-border-active active:i-bg-$color-card-flat-background-active',
  cardSelected:
    'i-border-$color-card-border-active i-bg-$color-card-background-active hover:i-border-$color-card-border-active-hover hover:i-bg-$color-card-background-active-hover active:i-border-$color-card-border-active',
  cardOutline:
    'active:i-border-$color-card-flat-border absolute rounded-8 inset-0 transition-all border-2',
  cardOutlineUnselected: 'i-border-$color-card-border',
  cardOutlineSelected: 'i-border-$color-card-border-active hover:i-border-$color-card-border-active-hover',
  a11y: 'sr-only',
};

export const switchToggle = {
  switch: 'tap-highlight-transparent',
  label: 'block relative h-24 w-44 cursor-pointer group',
  labelDisabled: 'pointer-events-none',
  track: 'absolute top-0 left-0 h-full w-full rounded-full transition-colors',
  trackActive: 'i-bg-$color-switch-track-background-active group-hover:i-bg-$color-switch-track-background-active-hover',
  trackInactive: 'i-bg-$color-switch-track-background group-hover:i-bg-$color-switch-track-background-hover',
  trackDisabled: 'i-bg-$color-switch-track-background-disabled',
  handle: 'absolute transform-gpu h-16 w-16 top-4 left-4 rounded-full transition-transform',
  handleSelected: 'translate-x-20',
  handleNotDisabled: 'i-bg-$color-switch-handle-background shadow-s',
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
  close: 'bg-transparent ml-auto p-[8px]',
};

export const tabs = {
  tabContainer: 'mx-auto max-w-screen-md w-full grid relative',
  wunderbar:
    'absolute i-border-$color-tabs-border-active -bottom-0 border-b-4 transition-all',
  wrapperUnderlined:
    'border-b i-border-$color-tabs-border -mx-16 sm:mx-0 px-4 sm:px-0 mb-32 ',
};

export const tab = {
  tab: 'grid items-center font-bold gap-8 focusable antialias p-16 pb-8 border-b-4 i-text-$color-tabs-text i-border-$color-tabs-border hover:i-text-$color-tabs-text-hover hover:i-border-$color-tabs-border-hover',
  tabActive: 'i-text-$color-tabs-text-active',
  icon: 'mx-auto hover:i-text-$color-tabs-text-hover',
  iconUnderlinedActive: 'i-text-$color-tabs-text-active',
  content: 'flex items-center justify-center gap-8',
  contentUnderlined: 'content-underlined', // content-underlined is a no-op that prevents a quirk in how Vue handles class bindings
  contentUnderlinedActive: 'i-text-$color-tabs-text-active',
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
  chevron: 'inline-block align-middle transform transition-transform transform-gpu i-text-$color-expandable-icon',
  chevronNonBox: 'relative left-8',
  chevronBox: 'absolute right-16',
  chevronExpanded: '-rotate-180',
  expansion: 'overflow-hidden',
  expansionNotExpanded: 'h-0 invisible',
  button: buttonReset + ' hover:underline focus:underline',
  buttonBox: 'w-full text-left relative inline-flex! items-center ' + box.box,
  paddingTop: 'pt-0',
  title: 'flex justify-between items-center',
  titleType: 'h4',
};

export const button = {
  // Buttontypes
  buttonSecondary:
    'py-10 px-14 border-2 font-bold rounded-8 leading-[24] max-w-max focusable justify-center transition-colors ease-in-out i-text-$color-button-secondary-text hover:i-text-$color-button-secondary-text i-border-$color-button-secondary-border i-bg-$color-button-secondary-background hover:i-bg-$color-button-secondary-background-hover hover:i-border-$color-button-secondary-border-hover active:i-bg-$color-button-secondary-background-active', // .button, .button--secondary, .button--default. using tailwind ease-in-out instead of fabric transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96)
  buttonPrimary:
    'py-12 px-16 border-0 font-bold rounded-8 leading-[24] max-w-max focusable justify-center transition-colors ease-in-out i-text-$color-button-primary-text hover:i-text-$color-button-primary-text i-bg-$color-button-primary-background hover:i-bg-$color-button-primary-background-hover! active:i-bg-$color-button-primary-background-active', // .button--primary, .button--cta
  buttonFlat:
    'py-12 px-16 border-0! font-bold rounded-8 leading-[24] max-w-max focusable justify-center transition-colors ease-in-out i-bg-$color-button-quiet-background! i-text-$color-button-quiet-text! hover:i-bg-$color-button-quiet-background-hover! active:i-bg-$color-button-quiet-background-active!', // .button--quiet, .button--flat
  buttonDestructive:
    'py-12 px-16 border-0 font-bold rounded-8 leading-[24] max-w-max focusable justify-center transition-colors ease-in-out i-bg-$color-button-negative-background i-text-$color-button-negative-text hover:i-text-$color-button-negative-text hover:i-bg-$color-button-negative-background-hover! active:i-bg-$color-button-negative-background-active!', // .button--destructive
  buttonDestructiveFlat:
    'py-12 px-16 border-0 font-bold rounded-8 leading-[24] max-w-max focusable justify-center transition-colors ease-in-out i-bg-$color-button-negative-quiet-background! i-text-$color-button-negative-quiet-text! hover:i-bg-$color-button-negative-quiet-background-hover! active:i-bg-$color-button-negative-quiet-background-active!', // .button--destructive-flat
  buttonUtility:
    'px-[15px] py-[11px] font-bold leading-[24] max-w-max focusable justify-center transition-colors ease-in-out border rounded-4 i-text-$color-button-utility-text hover:i-text-$color-button-utility-text i-bg-$color-button-utility-background i-border-$color-button-utility-border hover:i-bg-$color-button-utility-background hover:i-border-$color-button-utility-border-hover! active:i-border-$color-button-utility-border-active!', // .button--utility
  buttonUtilityFlat:
    'py-12 px-16 bg-transparent border-0 font-bold leading-[24] max-w-max focusable justify-center transition-colors ease-in-out i-text-$color-button-utility-quiet-text i-bg-$color-button-utility-quiet-background hover:i-bg-$color-button-utility-quiet-background-hover rounded-4', // .button--utility-flat
  buttonPill:
    'font-bold leading-[24] max-w-max focusable justify-center transition-colors ease-in-out rounded-full! min-h-[44px] min-w-[44px] border-0! p-4 i-text-$color-button-pill-icon hover:i-text-$color-button-pill-icon-hover active:i-text-$color-button-pill-icon-active i-bg-$color-button-pill-background hover:i-bg-$color-button-pill-background-hover acive:i-bg-$color-button-pill-background-active inline-flex items-center justify-center hover:bg-clip-padding', // .button--pill   missing:  hover:background-color: rgba(var(--f-blue-600-rgb), 0.1) , and:  hover:border-color: hsla(0, 0%, 100%, 0.4);
  buttonLink:
    'leading-[24] max-w-max focusable ease-in-out inline s-text-link active:underline hover:underline', //.button--link /* Buttons pretending to be links, (Should rather inherit the actual link setup in the future?)  */
  // Sizestuff
  buttonSmall: 'px-16 py-6 text-xs leading-xs', // .button--small
  buttonSmallOverride: 'py-8', // .button--small.button--primary, .button--small.button--destructive, .button--small.button--destructive-flat, .button--small.button--order, .button--small.button--quiet
  buttonSmallSecondary: 'py-6', // .button--small.button--secondary
  buttonSmallUtility: 'py-7 px-15', // .button--small.button--secondary
  buttonSmallButtonPill: 'p-4 min-h-32 min-w-32', // .button--small.button--pill
  buttonSmallButtonLink: 'p-0', // .button--small.button--link
  // Disabled
  buttonIsDisabled:
    'py-10 px-14 font-bold leading-[24] max-w-max justify-center transition-colors ease-in-out i-bg-$color-button-disabled-background! i-text-$color-button-disabled-text cursor-default pointer-events-none', // .button:disabled, .button--is-disabled
  // Progress indicator
  buttonInProgress:
    'py-10 px-14 border-0 font-bold rounded-8 leading-[24] max-w-max focusable justify-center transition-colors ease-in-out animate-inprogress i-text-$color-button-loading-text! pointer-events-none i-bg-$color-button-loading-background!', // .button--in-progress, a.button--in-progress:visited
  linkAsButton: 'inline-block hover:no-underline',
  a11y: 'sr-only',
};

export const buttonGroup = {
  wrapper: 'inline-flex rounded-4 overflow-hidden',
  raised: 'i-shadow-$shadow-buttongroup',
  vertical: 'flex-col',
  nonOutlinedVertical: 'divide-y',
  nonOutlinedHorizontal: 'divide-x',
}

export const buttonGroupItem = {
  wrapper: 'relative i-text-$color-buttongroup-utility-text i-bg-$color-buttongroup-utility-background hover:i-bg-$color-buttongroup-utility-background-hover active:i-text-$color-buttongroup-utility-text-active active:i-bg-$color-buttongroup-utility-background-active',
  outlined: 'border hover:z-30 i-border-$color-buttongroup-utility-border active:i-border-$color-buttongroup-utility-border-active',
  outlinedVertical: '-mb-1 last:mb-0 first:rounded-lt-4 first:rounded-rt-4 last:rounded-lb-4 last:rounded-rb-4',
  outlinedHorizontal: '-mr-1 last:mr-0 first:rounded-lt-4 first:rounded-lb-4 last:rounded-rt-4 last:rounded-rb-4',
  outlinedVerticalResets: 'px-1 pt-1 last:pb-1 -mb-1 last:mb-0',
  outlinedHorizontalResets: 'py-1 pl-1 last:pr-1 -mr-1 last:mr-0',
  outlinedSelected: 'i-border-$color-buttongroup-utility-border-active',
  selected: 'z-30 i-text-$color-buttongroup-utility-text-active! i-bg-$color-buttongroup-utility-background-active!',
}

export const modal = {
  //TODO: this class can be removed when we have the solution for opacity and we can add rgba values to the background of the backdrop
  transparentBg: `before:i-bg-$color-modal-backdrop-background before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:opacity-25`,
  backdrop:
    'fixed inset-0 flex sm:place-content-center sm:place-items-center items-end z-20 [--w-modal-max-height:80%] [--w-modal-width:640px]',
  modal:
    'pb-safe-[32] i-shadow-$shadow-modal max-h-[--w-modal-max-height] min-h-[--w-modal-min-height] w-[--w-modal-width] h-[--w-modal-height] relative transition-300 ease-in-out backface-hidden will-change-height rounded-8 mx-0 sm:mx-16 i-bg-$color-modal-background flex flex-col overflow-hidden outline-none space-y-16 pt-8 sm:pt-32 sm:pb-32 rounded-b-0 sm:rounded-b-8',
  content:
    'block overflow-y-auto overflow-x-hidden last-child:mb-0 grow shrink px-16 sm:px-32 relative',
  footer: 'flex justify-end shrink-0 px-16 sm:px-32',
  transitionTitle: 'transition-all duration-300',
  transitionTitleCenter: 'justify-self-center',
  transitionTitleColSpan: 'col-span-2',
  title:
    '-mt-4 sm:-mt-8 h-40 sm:h-48 grid gap-8 sm:gap-16 grid-cols-[auto_1fr_auto] items-center px-16 sm:px-32 border-b sm:border-b-0 shrink-0',
  titleText: 'mb-0 h4 sm:h3',
  titleButton: button.buttonPill + ' sm:min-h-[32px] sm:min-w-[32px]',
  titleButtonLeft: '-ml-8 sm:-ml-12 justify-self-start',
  titleButtonRight: '-mr-8 sm:-mr-12 justify-self-end',
  titleButtonIcon: 'h-16 w-16 sm:h-24 sm:w-24',
  titleButtonIconRotated: 'transform rotate-90',
};

export const alert = {
  alert: "flex p-16 border border-l-4 rounded-4",
  willChangeHeight: "will-change-height",
  textWrapper: "last-child:mb-0 text-s",
  title: "font-bold",
  icon: "w-16 mr-8 min-w-16",
  negative:  "i-border-$color-alert-negative-subtle-border i-bg-$color-alert-negative-background i-text-$color-alert-negative-text i-border-l-$color-alert-negative-border",
  negativeIcon: "i-text-$color-alert-negative-icon",
  positive:  "i-border-$color-alert-positive-subtle-border i-bg-$color-alert-positive-background i-text-$color-alert-positive-text i-border-l-$color-alert-positive-border",
  positiveIcon: "i-text-$color-alert-positive-icon",
  warning:  "i-border-$color-alert-warning-subtle-border i-bg-$color-alert-warning-background i-text-$color-alert-warning-text i-border-l-$color-alert-warning-border",
  warningIcon: "i-text-$color-alert-warning-icon",
  info:  "i-border-$color-alert-info-subtle-border i-bg-$color-alert-info-background i-text-$color-alert-info-text i-border-l-$color-alert-info-border",
  infoIcon: "i-text-$color-alert-info-icon"
}

export const input = {
  default: 'block text-m mb-0 leading-m i-text-$color-input-text-filled i-bg-$color-input-background i-border-$color-input-border hover:i-border-$color-input-border-hover active:i-border-$color-input-border-active rounded-4 py-12 px-8 block border-1 w-full focusable focus:[--w-outline-offset:-2px] caret-current',
  textArea: 'min-h-[42] sm:min-h-[45]',
  disabled: 'i-bg-$color-input-background-disabled i-border-$color-input-border-disabled hover:i-border-$color-input-border-disabled! i-text-$color-input-text-disabled pointer-events-none',
  invalid: 'i-border-$color-input-border-error i-text-$color-input-text-error!',
  readOnly: 'pl-0 bg-transparent border-0 pointer-events-none i-text-$color-input-text-read-only',
  placeholder: 'placeholder:s-text-placeholder',
  wrapper: 'relative',
  suffix: 'pr-40',
  prefix: 'pl-40'
}

export const select = {
  default: 'block text-m mb-0 leading-m i-text-$color-select-text i-bg-$color-select-background i-border-$color-select-border hover:i-border-$color-select-border-hover active:i-border-$color-select-border-active rounded-4 py-12 px-8 block border-1 w-full focusable focus:[--w-outline-offset:-2px] appearance-none pr-32 cursor-pointer caret-current',
  disabled: 'i-bg-$color-select-background-disabled i-border-$color-select-border-disabled hover:i-border-$color-select-border-disabled! active:i-border-$color-select-border-disabled! i-text-$color-select-text-disabled pointer-events-none',
  invalid: 'i-border-$color-select-border-negative',
  readOnly: 'pl-0 bg-transparent border-0 pointer-events-none before:hidden',
  wrapper: 'relative',
  selectWrapper: `relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:pointer-events-none `,
  chevron: 'absolute top-[30%] block right-0 bottom-0 w-32 h-full i-text-$color-select-icon',
  chevronDisabled: 'opacity-25',
}

export const label = {
    label: 'antialiased block relative text-s font-bold pb-4 cursor-pointer i-text-$color-label-text',
    labelInvalid: 'i-text-$color-label-text-negative',
    optional: 'pl-8 font-normal text-s i-text-$color-label-optional-text',
}

export const helpText = {
    helpText: 'text-xs mt-4 block i-text-$color-helptext-text',
    helpTextValid: 'i-text-$color-helptext-text-positive',
    helpTextInvalid: 'i-text-$color-helptext-text-negative'
}

const prefixSuffixWrapperBase =
  'absolute top-0 bottom-0 flex justify-center items-center focusable focus:[--w-outline-offset:-2px] ';

export const suffix = {
  wrapper: prefixSuffixWrapperBase + 'right-0',
  wrapperWithLabel: 'w-max pr-12',
  wrapperWithIcon: 'w-40',
  label: `${label.label} pb-0! text-xs!`,
};

export const prefix = {
  wrapper: prefixSuffixWrapperBase + 'left-0',
  wrapperWithLabel: 'w-max pl-12',
  wrapperWithIcon: 'w-40',
  label: `${label.label} pb-0! text-xs!`,
};

export const breadcrumbs = {
  wrapper: 'flex space-x-8',
  text: 'i-text-$color-breadcrumbs-text',
  link: 'i-text-$color-breadcrumbs-link-text',
  separator: 'select-none i-text-$color-breadcrumbs-icon',
  a11y: 'sr-only',
}

export const toggle = {
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
  indeterminate: `leading-[11] before:s-text-inverted before:text-center before:font-bold before:content-["-"] peer-indeterminate:before:i-border-$color-checkbox-border-active peer-indeterminate:before:i-bg-$color-checkbox-background-active peer-indeterminate:hover:before:i-border-$color-checkbox-border-hover peer-indeterminate:hover:before:i-bg-$color-checkbox-background-active-hover`,
  labelDisabled: 'pointer-events-none',
  checkbox: 'before:rounded-2 hover:before:i-border-$color-checkbox-border-hover hover:before:i-bg-$color-checkbox-background-hover',
  checkboxChecked: 'peer-checked:before:i-border-$color-checkbox-border-active peer-checked:before:i-bg-$color-checkbox-background-active peer-checked:peer-hover:before:i-border-$color-checkbox-border-active-hover peer-checked:peer-hover:before:i-bg-$color-checkbox-background-active-hover',
  checkboxInvalid: 'before:i-bg-$color-checkbox-negative-background hover:before:i-bg-$color-checkbox-negative-background-hover peer-checked:before:i-border-$color-checkbox-negative-border-active hover:before:i-border-$color-checkbox-negative-border-hover peer-checked:before:i-bg-$color-checkbox-negative-background-active peer-checked:peer-hover:before:i-bg-$color-checkbox-negative-background-active-hover peer-checked:peer-hover:before:i-border-$color-checkbox-negative-border-active-hover',
  checkboxDisabled: 'before:i-bg-$color-checkbox-background-disabled before:i-border-$color-checkbox-border-disabled peer-checked:before:i-border-$color-checkbox-border-active-disabled peer-checked:before:i-bg-$color-checkbox-background-active-disabled',
  labelCheckboxBorder: 'i-border-$color-checkbox-border',
  radio: 'before:rounded-full peer-checked:before:border-[6] peer-checked:peer-hover:before:i-border-$color-radio-border-active-hover peer-hover:before:i-border-$color-radio-border-hover peer-hover:before:i-bg-$color-radio-background-hover',
  radioChecked: 'peer-checked:before:i-border-$color-radio-border-active',
  radioInvalid: 'before:i-bg-$color-radio-negative-background peer-hover:before:i-bg-$color-radio-negative-background-hover before:i-border-$color-radio-negative-border peer-hover:before:i-border-$color-radio-negative-border-hover peer-checked:before:i-border-$color-radio-negative-border-active peer-checked:peer-hover:before:i-border-$color-radio-negative-border-active-hover ',
  radioDisabled: 'before:i-bg-$color-radio-background-disabled before:i-border-$color-radio-border-disabled peer-checked:before:i-border-$color-radio-border-active-disabled',
  labelRadioBorder: 'i-border-$color-radio-border',
  radioButtons: 'inline-flex relative font-bold rounded-8',
  radioButtonsGroup: 'group',
  radioButtonsLabel: 'peer-hover:peer-not-checked:i-bg-$color-buttongroup-primary-background-hover peer-checked:i-text-$color-buttongroup-primary-text-active peer-checked:i-bg-$color-buttongroup-primary-background-active peer-checked:i-border-$color-buttongroup-primary-border-active block relative text-s font-bold cursor-pointer i-text-$color-buttongroup-primary-text text-center s-bg-default border-2 i-border-$color-buttongroup-primary-border py-8 pl-12 pr-14 group-first-of-type:rounded-tl-8 group-first-of-type:rounded-bl-8 group-last-of-type:rounded-tr-8 group-last-of-type:rounded-br-8 group-not-last-of-type:border-r-0 peer-checked:z-10 group-not-first:-ml-2',
  radioButtonsJustified: 'flex!',
  radioButtonsGroupJustified: 'grow-1 shrink-0 basis-auto',
  radioButtonsLabelSmall: 'text-xs py-[5px]! px-[8px]!',
  icon: `peer-checked:before:bg-center before:bg-[url(var(--w-form-check-mark))]`,
  a11y: 'sr-only',
};

export const clickable = {
  clickable: 'absolute inset-0 h-full w-full appearance-none cursor-pointer focusable focusable-inset',
  clickableNotToggle: 'inset-0 absolute',
  label: `px-12 ${label.label} py-8! cursor-pointer focusable focusable-inset`, 
}

export const combobox = {
  wrapper: 'relative',
  combobox: 'absolute left-0 right-0 pb-8 rounded-8 s-bg-default shadow-m',
  textMatch: 'font-bold',
  listbox: 'm-0 p-0 select-none list-none',
  option: 'block cursor-pointer p-8 hover:s-bg-hover',
  optionSelected: 's-bg-selected',
  a11y: 'sr-only',
}