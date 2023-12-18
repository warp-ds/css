const wrapperDefault = 'absolute top-0 bottom-0 flex justify-center items-center focusable focus:[--w-outline-offset:-2px] bg-transparent';
const wrapperWithIcon = 'w-40';
const label = 'antialiased block relative cursor-default pb-0 font-bold text-xs i-text-$color-label-text';

export const suffix = {
  wrapper: `right-0 ${wrapperDefault}`,
  wrapperWithLabel: 'w-max pr-12',
  wrapperWithIcon,
  label,
};

export const prefix = {
  wrapper: `left-0 ${wrapperDefault}`,
  wrapperWithLabel: 'w-max pl-12',
  wrapperWithIcon,
  label,
};
