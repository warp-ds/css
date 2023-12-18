export const tabs = {
  tabContainer: 'inline-grid relative',
  wunderbar: 'absolute i-border-$color-tabs-border-selected -bottom-0 border-b-4 transition-all',
  wrapperUnderlined: 'border-b i-border-$color-tabs-border -mx-16 sm:mx-0 px-4 sm:px-0 mb-32 ',
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
