import { buttonReset, boxDefault } from "./_shared.js";

export const expandable = {
  expandable: 'will-change-height',
  expandableTitle: 'font-bold i-text-$color-expandable-title-text',
  expandableBox: `i-bg-$color-expandable-background hover:i-bg-$color-expandable-background-hover py-0 px-0 ${boxDefault}`,
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
  button: `${buttonReset} hover:underline focus-visible:underline`,
  buttonBox: `w-full text-left relative inline-flex items-center justify-between ${boxDefault}`,
  paddingTop: 'pt-0',
  title: 'flex w-full justify-between items-center',
  titleType: 'h4',
};
