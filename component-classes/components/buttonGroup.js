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
