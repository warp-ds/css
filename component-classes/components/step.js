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
