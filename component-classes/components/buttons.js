import { buttonSizes, buttonTextSizes, buttonTypes, buttonVariants, buttonColors } from '_shared.js'

export { buttonReset } from '_shared.js'

// noinspection DuplicatedCode
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
  linkAsButton: 'inline-block hover:no-underline text-center',
  a11y: 'sr-only',
  fullWidth: "w-full max-w-full",
  contentWidth: "max-w-max",
};
