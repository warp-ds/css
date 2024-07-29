export const pageIndicator = {
  wrapper: 'flex space-x-8 p-8',
  dot: 'h-8 w-8 rounded-full',
  inactive: 's-bg-disabled-subtle hover:bg-[--w-s-icon-subtle]',
  active: 'bg-[--w-s-icon-selected]',
};

export const badge = {
  base: 'py-4 px-8 border-0 rounded-4 text-xs inline-flex',
  neutral: 'bg-[--w-color-badge-neutral-background] s-text',
  info: 'bg-[--w-color-badge-info-background] s-text',
  positive: 'bg-[--w-color-badge-positive-background] s-text',
  warning: 'bg-[--w-color-badge-warning-background] s-text',
  negative: 'bg-[--w-color-badge-negative-background] s-text',
  disabled: 's-bg-disabled s-text',
  price: 'bg-[--w-black/70] s-text-inverted-static',
  sponsored: 'bg-[--w-color-badge-sponsored-background] s-text',
  positionBase: 'absolute backdrop-blur',
  positionTL: 'rounded-tl-0 rounded-tr-0 rounded-bl-0 top-0 left-0',
  positionTR: 'rounded-tl-0 rounded-tr-0 rounded-br-0 top-0 right-0',
  positionBR: 'rounded-tr-0 rounded-br-0 rounded-bl-0 bottom-0 right-0',
  positionBL: 'rounded-tl-0 rounded-br-0 rounded-bl-0 bottom-0 left-0',
};

export const slider = {
  wrapper: 'touch-pan-y relative w-full h-44 py-2',
  track: 'absolute s-bg-disabled-subtle h-4 top-20 rounded-4 w-full',
  trackDisabled: 'pointer-events-none',
  activeTrack: 'absolute h-6 top-[19px] rounded-4',
  activeTrackEnabled: 's-bg-primary',
  activeTrackDisabled: 's-bg-disabled pointer-events-none',
  thumb: 'absolute transition-shadow w-24 h-24 bottom-10 rounded-4 outline-none',
  thumbEnabled:
    'border-2 shadow-[--w-shadow-slider] cursor-pointer s-bg-primary s-border-primary hover:s-bg-primary-hover hover:s-border-primary-hover hover:shadow-[--w-shadow-slider-handle-hover] active:s-bg-primary-active active:s-border-primary-active active:shadow-[--w-shadow-slider-handle-active] focus:shadow-[--w-shadow-slider-handle-hover] focus:s-border-primary-hover focus:s-bg-primary-hover',
  thumbDisabled: 's-bg-disabled cursor-disabled pointer-events-none',
};

export const box = {
  box: 'group block relative break-words last-child:mb-0 p-16 rounded-8', // Relative here enables w-clickable
  bleed: '-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8', // We target L and R to override the default rounded-8
  info: 's-bg-info-subtle',
  neutral: 's-surface-sunken',
  bordered: 'border-2 s-border s-bg',
};

export const pill = {
  pill: 'flex items-center',
  button: 'inline-flex items-center focusable text-xs transition-all',
  suggestion:
    'bg-[--w-color-pill-suggestion-background] hover:bg-[--w-color-pill-suggestion-background-hover] active:bg-[--w-color-pill-suggestion-background-active] s-text font-bold',
  filter: 's-bg-primary hover:s-bg-primary-hover active:s-bg-primary-active s-text-inverted',
  label: 'pl-12 py-8 rounded-l-full',
  labelWithoutClose: 'pr-12 rounded-r-full',
  labelWithClose: 'pr-2',
  close: 'pr-12 pl-4 py-8 rounded-r-full',
  a11y: 'sr-only',
};

export const step = {
  container: 'group/step',
  vertical: 'group/stepv grid-rows-[20px_auto] grid grid-flow-col gap-x-16',
  horizontal: 'group/steph grid-rows-[auto_20px] grid-cols-[1fr_20px_1fr] flex-1 grid gap-y-16 items-center',

  alignLeft: 'grid-cols-[20px_1fr]',
  alignRight: 'grid-cols-[1fr_20px] text-right',

  dot: 'rounded-full border-2 h-20 w-20 transition-colors duration-300 s-icon-inverted',
  dotAlignRight: 'col-start-2',
  dotHorizontal: 'row-start-2 justify-self-end',
  dotActive: 's-border-primary s-bg-primary',
  dotIncomplete: 's-border s-bg',

  line: 'group-last/stepv:hidden transition-colors duration-300',
  lineVertical: 'w-2 h-full justify-self-center',
  lineAlignRight: 'col-start-2',
  lineHorizontal: 'h-2 w-full row-start-2',
  lineHorizontalAlignRight: 'group-last/steph:bg-transparent',
  lineHorizontalAlignLeft: 'group-first/steph:bg-transparent',

  lineIncomplete: 's-bg-disabled',
  lineComplete: 's-bg-primary',

  content: 'last:mb-0 group-last/step:last:pb-0',
  contentVertical: 'row-span-2 pb-32',
  contentHorizontal: 'col-span-3 px-16 row-start-1 text-center',
};

export const steps = {
  container: 'w-full',
  horizontal: 'flex',
};

export const card = {
  card: 'cursor-pointer overflow-hidden relative transition-all',
  cardShadow: 'group rounded-8 s-surface-elevated-200 hover:s-surface-elevated-200-hover active:s-surface-elevated-200-active',
  cardSelected: '!s-bg-selected !hover:s-bg-selected-hover !active:s-bg-selected-active',
  cardOutline: 'absolute border-2 rounded-8 inset-0 transition-all',
  cardOutlineUnselected: 'border-transparent group-active:s-border-active',
  cardOutlineSelected: 's-border-selected group-hover:s-border-selected-hover group-active:s-border-selected-active',
  cardFlat: 'border-2 rounded-4',
  cardFlatUnselected: 's-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active',
  cardFlatSelected:
    's-bg-selected hover:s-bg-selected-hover active:s-bg-selected-active s-border-selected hover:s-border-selected-hover active:s-border-selected-active',
  a11y: 'sr-only',
};

export const switchToggle = {
  label: 'block relative h-24 w-44 cursor-pointer group',
  labelDisabled: 'pointer-events-none',
  track: 'absolute top-0 left-0 h-full w-full rounded-full transition-colors',
  trackActive: 's-bg-primary group-hover:s-bg-primary-hover',
  trackInactive: 'bg-[--w-color-switch-track-background] group-hover:bg-[--w-color-switch-track-background-hover]',
  trackDisabled: 's-bg-disabled-subtle',
  handle: 'absolute transform-gpu h-16 w-16 top-4 left-4 rounded-full transition-transform',
  handleSelected: 'translate-x-20',
  handleNotDisabled: 's-bg shadow-s',
  handleDisabled: 's-bg-disabled',
  a11y: 'sr-only',
};

export const toaster = {
  container: 'fixed transform translate-z-0 bottom-16 left-0 right-0 mx-8 sm:mx-16 z-50 pointer-events-none',
  content: 'w-full',
  toaster: 'grid auto-rows-auto justify-items-center justify-center mx-auto pointer-events-none',
};

export const toast = {
  wrapper: 'relative overflow-hidden w-full',
  base: 'flex group p-8 mt-16 rounded-8 border-2 pointer-events-auto transition-all',
  positive: 's-bg-positive-subtle s-border-positive-subtle s-text',
  warning: 's-bg-warning-subtle s-border-warning-subtle s-text',
  negative: 's-bg-negative-subtle s-border-negative-subtle s-text',
  iconBase: 'shrink-0 rounded-full w-[16px] h-[16px] m-[8px]',
  iconPositive: 's-icon-positive',
  iconWarning: 's-icon-warning',
  iconNegative: 's-icon-negative',
  iconLoading: 'animate-bounce',
  content: 'self-center mr-8 py-4 last-child:mb-0',
  close: 'bg-transparent ml-auto p-[8px] s-icon hover:s-icon-hover active:s-icon-active',
};

export const tabs = {
  tabContainer: 'inline-grid relative -mb-1',
  wunderbar: 'absolute s-border-selected -bottom-0 border-b-4 transition-all',
  wrapperUnderlined: 'inline-block border-b s-border mb-32',
};

export const tab = {
  tab: 'grid items-center font-bold gap-8 focusable antialias p-16 pb-8 border-b-4 bg-transparent border-transparent hover:s-text-link hover:s-border-primary',
  tabInactive: 's-text-subtle',
  tabActive: 's-text-link',
  icon: 'mx-auto',
  content: 'flex items-center justify-center gap-8',
  contentUnderlined: 'content-underlined', // content-underlined is a no-op that prevents a quirk in how Vue handles class bindings
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

export const buttonReset = 'focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 p-0 inline-block';

export const expandable = {
  expandable: 'will-change-height s-text',
  expandableBox:
    's-surface-sunken hover:s-bg-hover active:s-bg-active py-0 px-0 group block relative break-words last-child:mb-0 rounded-8',
  expandableBleed: '-mx-16 rounded-l-0 rounded-r-0 sm:mx-0 sm:rounded-8',
  chevron: 'inline-block align-middle s-icon',
  chevronNonBox: 'ml-8',
  chevronTransform: 'transform transition-transform transform-gpu ease-in-out',
  chevronExpand: '-rotate-180',
  chevronCollapse: 'rotate-180',

  // These are web component specific classes, using the ::part-selector:
  elementsChevronDownTransform:
    'part-[w-icon-chevron-down-16-part]:transform part-[w-icon-chevron-down-16-part]:transition-transform part-[w-icon-chevron-down-16-part]:transform-gpu part-[w-icon-chevron-down-16-part]:ease-in-out',
  elementsChevronUpTransform:
    'part-[w-icon-chevron-up-16-part]:transform part-[w-icon-chevron-up-16-part]:transition-transform part-[w-icon-chevron-up-16-part]:transform-gpu part-[w-icon-chevron-up-16-part]:ease-in-out',
  elementsChevronExpand: 'part-[w-icon-chevron-down-16-part]:-rotate-180',
  elementsChevronCollapse: 'part-[w-icon-chevron-up-16-part]:rotate-180',

  expansion: 'overflow-hidden',
  expansionNotExpanded: 'h-0 invisible',
  button: 'focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 hover:underline focus-visible:underline',
  buttonBox: 'w-full text-left relative inline-flex items-center justify-between group relative break-words last-child:mb-0 p-16 rounded-8',
  paddingTop: 'pt-0',
  title: 'flex w-full justify-between items-center',
  titleType: 'h4',
};

const buttonDefaultStyling = 'font-bold focusable justify-center transition-colors ease-in-out';

const buttonColors = {
  primary:
    's-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]',
  secondary: 's-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active',
  utility: 's-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active',
  destructive: 's-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active',
  pill: 's-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]',
  disabled: 's-text-inverted s-bg-disabled',
  quiet: 'bg-transparent s-text-link hover:s-bg-hover active:s-bg-active',
  utilityQuiet: 's-text bg-transparent hover:s-bg-hover active:s-bg-active',
  negativeQuiet: 'bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active',
  loading: 's-text s-bg-subtle',
  link: 's-text-link',
};

const buttonTypes = {
  primary: `border-0 rounded-8 ${buttonDefaultStyling}`,
  secondary: `border-2 rounded-8 ${buttonDefaultStyling}`,
  utility: `border rounded-4 ${buttonDefaultStyling}`,
  negative: `border-0 rounded-8 ${buttonDefaultStyling}`,
  pill: `p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${buttonDefaultStyling}`,
  link: `bg-transparent focusable ease-in-out inline active:underline hover:underline focus:underline ${buttonColors.link}`,
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
  inProgress: `border-transparent animate-inprogress pointer-events-none ${buttonColors.loading}`, // .button--in-progress, a.button--in-progress:visited
  quiet: `border-0 rounded-8 ${buttonDefaultStyling}`,
  utilityQuiet: `border-0 rounded-4 ${buttonDefaultStyling}`,
  negativeQuiet: `border-0 rounded-8 ${buttonDefaultStyling}`,
  isDisabled: `font-bold justify-center transition-colors ease-in-out cursor-default pointer-events-none ${buttonColors.disabled}`, // .button:disabled, .button--is-disabled
};

export const button = {
  // Buttontypes
  secondary: `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.secondary} ${buttonColors.secondary}`, // .button--secondary, .button--default, .button
  secondaryHref: `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.secondary} ${buttonColors.secondary}`,
  secondaryDisabled: `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.secondary} ${buttonVariants.isDisabled}`,
  secondarySmall: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonTypes.secondary} ${buttonColors.secondary}`,
  secondarySmallDisabled: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonTypes.secondary} ${buttonVariants.isDisabled}`,
  secondaryQuiet: `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonVariants.quiet} ${buttonColors.quiet}`,
  secondaryQuietDisabled: `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonVariants.quiet} ${buttonVariants.isDisabled}`,
  secondarySmallQuiet: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonVariants.quiet} ${buttonColors.quiet}`,
  secondarySmallQuietDisabled: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonVariants.quiet} ${buttonVariants.isDisabled}`,
  secondaryLoading: `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.secondary} ${buttonVariants.inProgress}`,
  secondarySmallLoading: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall}  ${buttonTypes.secondary} ${buttonVariants.inProgress}`,
  secondarySmallQuietLoading: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonVariants.quiet} ${buttonVariants.inProgress}`,
  secondaryQuietLoading: `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonVariants.quiet} ${buttonVariants.inProgress}`,

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
  linkAsButton: 'inline-block active:no-underline hover:no-underline focus:no-underline text-center',
  a11y: 'sr-only',
  fullWidth: 'w-full max-w-full',
  contentWidth: 'max-w-max',
};

export const buttonGroup = {
  wrapper: 'inline-flex rounded-4 overflow-hidden',
  raised: 'shadow-s',
  vertical: 'flex-col',
  nonOutlinedVertical: 'divide-y',
  nonOutlinedHorizontal: 'divide-x',
};

export const buttonGroupItem = {
  wrapper: 'relative s-text',
  outlined: 'border hover:z-30',
  outlinedVertical: '-mb-1 last:mb-0 first:rounded-lt-4 first:rounded-rt-4 last:rounded-lb-4 last:rounded-rb-4',
  outlinedHorizontal: '-mr-1 last:mr-0 first:rounded-lt-4 first:rounded-lb-4 last:rounded-rt-4 last:rounded-rb-4',
  outlinedVerticalResets: 'px-1 pt-1 last:pb-1 -mb-1 last:mb-0',
  outlinedHorizontalResets: 'py-1 pl-1 last:pr-1 -mr-1 last:mr-0',
  outlinedUnselected: 'border-[--w-color-buttongroup-utility-border] active:border-[--w-color-buttongroup-utility-border-selected]',
  outlinedSelected: 'border-[--w-color-buttongroup-utility-border-selected]',
  unSelected:
    's-bg hover:bg-[--w-color-buttongroup-utility-background-hover] active:s-text active:bg-[--w-color-buttongroup-utility-background-selected]',
  selected: 'z-30 bg-[--w-color-buttongroup-utility-background-selected]',
};

export const modal = {
  backdrop:
    'fixed inset-0 flex sm:place-content-center sm:place-items-center items-end z-30 [--w-modal-max-height:80%] [--w-modal-width:640px] bg-[--w-black/25]',
  modal:
    'pb-safe-[32] shadow-m max-h-[--w-modal-max-height] min-h-[--w-modal-min-height] w-[--w-modal-width] h-[--w-modal-height] relative transition-300 ease-in-out backface-hidden will-change-height rounded-8 mx-0 sm:mx-16 bg-[--w-s-color-surface-elevated-100] flex flex-col overflow-hidden outline-none space-y-16 pt-8 sm:pt-32 sm:pb-32 rounded-b-0 sm:rounded-b-8',
  content: 'block overflow-y-auto overflow-x-hidden last-child:mb-0 grow shrink px-16 sm:px-32 relative',
  footer: 'flex justify-end shrink-0 px-16 sm:px-32',
  transitionTitle: 'transition-all duration-300',
  transitionTitleCenter: 'justify-self-center self-center',
  transitionTitleColSpan: 'col-span-2',
  title:
    'py-8 sm:py-0 -mt-4 sm:-mt-8 min-h-40 sm:min-h-48 grid gap-8 sm:gap-16 grid-cols-[auto_1fr_auto] items-start px-16 sm:px-32 border-b sm:border-b-0 shrink-0',
  titleText: 'mb-0 h4 sm:h3',
  titleButton: `${buttonTextSizes.medium} ${buttonTypes.pill} ${buttonColors.pill} sm:min-h-[44px] sm:min-w-[44px] min-h-[32px] min-w-[32px]`,
  titleButtonLeft: '-ml-8 sm:-ml-12 justify-self-start',
  titleButtonRight: '-mr-8 sm:-mr-12 justify-self-end',
  titleButtonIcon: 'h-16 w-16 sm:h-24 sm:w-24',
  titleButtonIconRotated: 'transform rotate-90',
};

export const modalElement = {
  // several items in here are 'resets' for the <dialog> element
  dialogEl:
    'bg-transparent backface-hidden w-unset h-unset max-w-unset max-h-unset p-0 m-auto border-0 inset-0 open:flex open:fixed sm:place-content-center sm:place-items-center items-end [--w-modal-max-height:80%] [--w-modal-width:640px]',
  dialogInner:
    'transition-all relative pb-safe-[32] sm:pb-32 shadow-m max-h-[--w-modal-max-height] min-h-[--w-modal-min-height] w-[--w-modal-width] h-[--w-modal-height] ease-in-out backface-hidden will-change-height rounded-8 sm:mx-16 s-bg flex flex-col overflow-hidden lt-sm:rounded-b-0',
  contentSlot: 'block overflow-y-auto overflow-x-hidden last-child:mb-0 grow shrink px-16 sm:px-32 relative',
  header: 'relative pb-8',
  headerTitleBar: 'pt-16 sm:pt-24 px-16 sm:px-32 grid gap-12 grid-cols-[auto_1fr_auto] items-start shrink-0!',
  headerButton:
    'sm:min-h-[32px] sm:min-w-[32px] min-h-[40px] min-w-[40px] text-m leading-[24] p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding font-bold focusable transition-colors ease-in-out',
  headerButtonLeft:
    '-ml-8 s-icon bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]',
  headerCloseButton:
    '-mr-8 s-icon bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]',
  headerCloseButtonOnImage: `absolute right-8 top-8 z-10 s-color-inverted bg-[var(--w-black)/70] hover:bg-[var(--w-black)/85] active:bg-[var(--w-black)] s-text-inverted`,
  headerTitle: 'mb-0 t3 self-center',
  headerTitleWithBackButton: 'justify-self-center',
  headerTitleWithoutBackButton: 'col-span-2',
  headerTitleWithTopArea: 'pt-16 px-16 sm:px-32',
  footer: 'flex justify-end shrink-0 px-16 sm:px-32 pt-24',
};

export const alert = {
  alert: 'flex p-16 border border-l-4 rounded-4 s-text',
  willChangeHeight: 'will-change-height',
  textWrapper: 'last-child:mb-0 text-s',
  title: 'text-s',
  icon: 'w-16 mr-8 min-w-16',
  negative: 's-border-negative-subtle s-border-l-negative s-bg-negative-subtle',
  negativeIcon: 's-icon-negative',
  positive: 's-border-positive-subtle s-border-l-positive s-bg-positive-subtle',
  positiveIcon: 's-icon-positive',
  warning: 's-border-warning-subtle s-border-l-warning s-bg-warning-subtle',
  warningIcon: 's-icon-warning',
  info: 's-border-info-subtle s-border-l-info s-bg-info-subtle',
  infoIcon: 's-icon-info',
};

export const input = {
  // wrapper classes
  wrapper: 'relative',
  // input classes
  base: 'block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current', // true
  default: 'border-1 s-text s-bg s-border hover:s-border-hover active:s-border-selected', // !isInvalid && !isDisabled && !isReadOnly
  disabled: 'border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none', // !isInvalid && isDisabled && !isReadOnly
  invalid: 'border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!', // isInvalid && !isDisabled && !isReadOnly
  readOnly: 'pl-0 bg-transparent pointer-events-none', // !isInvalid && !isDisabled && isReadOnly
  placeholder: 'placeholder:s-text-placeholder',
  suffix: 'pr-40',
  prefix: 'pl-[var(--w-prefix-width,_40px)]',
  // textarea classes
  textArea: 'min-h-[42] sm:min-h-[45]',
};

export const select = {
  base: 'block text-m mb-0 py-12 pr-32 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] appearance-none cursor-pointer caret-current',
  default: 's-text s-bg pl-8 border-1 s-border hover:s-border-hover active:s-border-active',
  disabled:
    's-text-disabled s-bg-disabled-subtle pl-8 border-1 s-border-disabled hover:s-border-disabled active:s-border-disabled pointer-events-none',
  invalid:
    's-text s-bg pl-8 border-1 s-border-negative hover:s-border-negative-hover active:s-border-active outline-[--w-s-color-border-negative]!',
  readOnly: 's-text bg-transparent pl-0 border-0 pointer-events-none before:hidden',
  wrapper: 'relative',
  selectWrapper: `relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:pointer-events-none `,
  chevron: 'block absolute top-[30%] right-0 bottom-0 w-32 h-full s-icon pointer-events-none cursor-pointer',
  chevronDisabled: 'opacity-25',
};

export const label = {
  label: 'antialiased block relative text-s font-bold pb-4 cursor-pointer s-text',
  optional: 'pl-8 font-normal text-s s-text-subtle',
};

export const helpText = {
  helpText: 'text-xs mt-4 block',
  helpTextColor: 's-text-subtle',
  helpTextColorInvalid: 's-text-negative',
};

const prefixSuffixWrapperBase =
  'absolute top-0 bottom-0 flex justify-center items-center focusable rounded-4 focus:[--w-outline-offset:-2px] bg-transparent ';

export const suffix = {
  wrapper: prefixSuffixWrapperBase + 'right-0',
  wrapperWithLabel: 'w-max pr-12',
  wrapperWithIcon: 'w-40',
  label: 'antialiased block relative cursor-default pb-0 font-bold text-xs s-text',
};

export const prefix = {
  wrapper: prefixSuffixWrapperBase + 'left-0',
  wrapperWithLabel: 'w-max pl-12',
  wrapperWithIcon: 'w-40',
  label: 'antialiased block relative cursor-default pb-0 font-bold text-xs s-text',
};

export const breadcrumbs = {
  wrapper: 'flex space-x-8',
  text: 's-text',
  link: 's-text-link',
  separator: 'select-none s-icon',
  a11y: 'sr-only',
};

export const toggle = {
  // wrapper classes
  field: 'relative text-m', // true
  wrapper: 'relative py-1', // true
  wrapperRadioButtons: 'inline-flex font-bold rounded-8 focus-within:focusable', // isRadioButton && !isEqualWidth
  wrapperRadioButtonsJustified: 'flex font-bold rounded-8 focus-within:focusable', // isRadioButton && isEqualWidth,

  // group classes
  radioButtonsGroup: 'group', // isRadioButton
  radioButtonsGroupJustified: 'grow-1 shrink-0 basis-auto', // isRadioButton && isEqualWidth

  // input classes
  input: 'peer',
  a11y: 'sr-only',

  // label classes
  label:
    'peer-focus:focusable cursor-pointer text-m s-text s-border py-2 pl-28 select-none relative block before:border before:absolute before:transition-all before:left-0 before:w-20 before:h-20 before:top-2', // !isRadioButton
  labelBefore: 'before:content-[""] before:block', // !isRadioButton && !isIndeterminate
  checkbox:
    'before:s-bg before:rounded-2 hover:before:s-border-primary hover:before:s-bg-hover peer-checked:before:bg-center peer-checked:before:bg-[url(var(--w-icon-toggle-checked))] peer-checked:before:s-border-primary peer-checked:before:s-bg-primary peer-checked:peer-hover:before:s-border-primary-hover peer-checked:peer-hover:before:s-bg-primary-hover', // isCheckbox && !isIndeterminate && !isInvalid && !isDisabled
  checkboxInvalid:
    'before:s-bg before:s-border-negative before:rounded-2 hover:before:s-bg-negative-subtle-hover hover:before:s-border-negative-hover peer-checked:before:bg-center peer-checked:before:bg-[url(var(--w-icon-toggle-checked))] peer-checked:before:s-bg-negative peer-checked:before:s-border-negative peer-checked:peer-hover:before:s-bg-negative-hover peer-checked:peer-hover:before:s-border-negative-hover', // isCheckbox && !isIndeterminate && isInvalid && !isDisabled
  checkboxDisabled:
    'before:s-bg-disabled-subtle before:s-border-disabled pointer-events-none before:rounded-2 peer-checked:before:bg-center peer-checked:before:bg-[url(var(--w-icon-toggle-checked))] peer-checked:before:s-border-disabled peer-checked:before:s-bg-disabled', // isCheckbox && !isIndeterminate && !isInvalid && isDisabled
  indeterminate:
    'before:content-["–"] before:rounded-2 before:leading-xs before:text-center before:font-bold before:s-icon-inverted peer-indeterminate:before:s-border-primary peer-indeterminate:before:s-bg-primary peer-indeterminate:hover:before:s-border-primary-hover peer-indeterminate:hover:before:s-bg-primary-hover', // isCheckbox && isIndeterminate && !isInvalid && !isDisabled
  indeterminateInvalid:
    'before:content-["–"] before:rounded-2 before:leading-xs before:text-center before:font-bold before:s-icon-inverted peer-indeterminate:before:s-border-negative peer-indeterminate:before:s-bg-negative peer-indeterminate:hover:before:s-border-negative-hover peer-indeterminate:hover:before:s-bg-negative-hover', // isCheckbox && isIndeterminate && isInvalid && !isDisabled
  indeterminateDisabled:
    'before:content-["–"] before:rounded-2 before:leading-xs before:text-center before:font-bold pointer-events-none before:s-icon-inverted peer-indeterminate:before:s-border-disabled peer-indeterminate:before:s-bg-disabled', // isCheckbox && isIndeterminate && !isInvalid && isDisabled
  radio:
    'before:s-bg before:rounded-full peer-checked:before:border-[6] peer-checked:before:s-border-selected peer-checked:peer-hover:before:s-border-selected-hover peer-hover:before:s-border-primary peer-hover:before:s-bg-hover', // isRadio && !isDisabled && !isInvalid
  radioInvalid:
    'before:s-bg before:s-border-negative before:rounded-full peer-checked:before:border-[6] peer-hover:before:s-bg-negative-subtle peer-hover:before:s-border-negative-hover peer-checked:before:s-border-negative peer-checked:peer-hover:before:s-border-negative-hover', // isRadio && isInvalid && !isDisabled
  radioDisabled:
    'before:s-bg-disabled-subtle before:s-border-disabled pointer-events-none before:rounded-full peer-checked:before:border-[6]', // isRadio && !isInvalid && isDisabled
  radioButtonsLabel:
    'peer-hover:peer-not-checked:s-bg-hover peer-checked:s-text-inverted peer-checked:s-bg-primary peer-checked:s-border-primary block relative font-bold cursor-pointer s-text-link text-center s-bg border-2 s-border group-first-of-type:rounded-tl-8 group-first-of-type:rounded-bl-8 group-last-of-type:rounded-tr-8 group-last-of-type:rounded-br-8 group-not-last-of-type:border-r-0 peer-checked:z-10 group-not-first:-ml-2', // isRadioButtons
  radioButtonsRegular: 'text-s py-8 pl-12 pr-14', // isRadioButtons && !isSmall
  radioButtonsSmall: 'text-xs py-[5px] px-[8px]', // isRadioButtons && isSmall
};

export const deadToggle = {
  wrapper: `${toggle.wrapper} h-20 w-20 pointer-events-none`,
  input: `${toggle.input} hidden`,
  inputVue: 'hidden',
  labelRadio: `${toggle.label} ${toggle.labelBefore} ${toggle.radio}`,
  labelCheckbox: `${toggle.label} ${toggle.labelBefore} ${toggle.checkbox}`,
  labelVue: '-mt-2',
};

export const clickable = {
  toggle: 'absolute inset-0 h-full w-full appearance-none cursor-pointer focusable focusable-inset',
  label: `px-12 ${label.label} py-8! cursor-pointer focusable focusable-inset`,
  buttonOrLink: 'bg-transparent focusable',
  buttonOrLinkStretch: 'inset-0 absolute',
};

export const combobox = {
  wrapper: 'relative',
  base: 'absolute left-0 right-0 pb-8 rounded-8 shadow-m',
  listbox: 'm-0 p-0 select-none list-none',
  option: 'block cursor-pointer p-8',
  optionUnselected: 's-bg hover:s-bg-hover',
  optionSelected: 's-bg-selected hover:s-bg-selected-hover',
  textMatch: 'font-bold',
  a11y: 'sr-only',
};

export const attention = {
  base: 'border-2 relative flex items-start',
  tooltip: 's-bg-inverted border-[--w-s-color-background-inverted] shadow-m s-text-inverted-static rounded-4 py-6 px-8',
  callout: 'bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8',
  highlight: 'bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8 drop-shadow-m translate-z-0',
  popover:
    'bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300] s-text rounded-8 p-16 drop-shadow-m translate-z-0',
  arrowBase: 'absolute h-[14px] w-[14px] border-2 border-b-0 border-r-0 rounded-tl-4 transform',
  arrowDirectionLeftStart: '-left-[8px]',
  arrowDirectionLeft: '-left-[8px]',
  arrowDirectionLeftEnd: '-left-[8px]',
  arrowDirectionRightStart: '-right-[8px]',
  arrowDirectionRight: '-right-[8px]',
  arrowDirectionRightEnd: '-right-[8px]',
  arrowDirectionBottomStart: '-bottom-[8px]',
  arrowDirectionBottom: '-bottom-[8px]',
  arrowDirectionBottomEnd: '-bottom-[8px]',
  arrowDirectionTopStart: '-top-[8px]',
  arrowDirectionTop: '-top-[8px]',
  arrowDirectionTopEnd: '-top-[8px]',
  arrowTooltip: 's-bg-inverted border-[--w-s-color-background-inverted]',
  arrowCallout: 'bg-[--w-color-callout-background] border-[--w-color-callout-border]',
  arrowPopover: 'bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300]',
  arrowHighlight: 'bg-[--w-color-callout-background] border-[--w-color-callout-border]',
  content: 'last-child:mb-0',
  notCallout: 'absolute z-50',
  closeBtn: `${buttonTextSizes.medium} ${buttonTypes.pill} ${buttonColors.pill} justify-self-end -mr-8 ml-8`,
};

export const pagination = {
  link: 'hover:no-underline focus:no-underline focusable inline-flex justify-center items-center transition-colors ease-in-out min-h-[44px] min-w-[44px] p-4 rounded-full border-0 hover:bg-clip-padding',
  currentPage: 'block md:hidden p-8 font-bold',
  icon: 's-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]',
  containerNav: 'flex items-center justify-center p-8',
  a11y: 'sr-only',
  pages: 'hidden md:block s-text-link',
  active: 's-bg-primary s-text-inverted',
  notActive: 'hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]',
};
