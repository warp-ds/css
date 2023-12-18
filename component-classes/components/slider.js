export const slider = {
  wrapper: 'touch-pan-y relative w-full h-44 py-2',
  track: 'absolute i-bg-$color-slider-track-background h-4 top-20 rounded-4 w-full ',
  trackDisabled: 'pointer-events-none i-bg-$color-slider-track-background-disabled',
  activeTrack: 'absolute i-bg-$color-slider-track-background-active h-6 top-[19px] rounded-4',
  activeTrackDisabled: 'i-bg-$color-slider-track-background-disabled pointer-events-none',
  thumb: 'absolute transition-shadow w-24 h-24 bottom-10 rounded-4 outline-none',
  thumbEnabled: 'border-2 i-shadow-$shadow-slider cursor-pointer i-bg-$color-slider-handle-background i-border-$color-slider-handle-border hover:i-bg-$color-slider-handle-background-hover hover:i-border-$color-slider-handle-border-hover hover:slider-handle-shadow-hover active:i-bg-$color-slider-handle-background-active active:i-border-$color-slider-handle-border-active active:slider-handle-shadow-active focus:slider-handle-shadow-hover focus:i-border-$color-slider-handle-border-hover focus:i-bg-$color-slider-handle-background-hover',
  thumbDisabled: 'i-bg-$color-slider-handle-background-disabled cursor-disabled pointer-events-none',
};
