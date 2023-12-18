import { boxBleed, boxDefault } from "./_shared.js";

export const box = {
  box: boxDefault,
  bleed: boxBleed,
  info: 'i-bg-$color-box-info-background i-text-$color-box-info-text',
  neutral: 'i-bg-$color-box-neutral-background i-text-$color-box-neutral-text',
  bordered: 'border-2 i-border-$color-box-bordered-border i-bg-$color-box-bordered-background i-text-$color-box-bordered-text',
  infoClickable: 'hover:i-bg-$color-box-info-background-hover active:i-bg-$color-box-info-background-hover',
  neutralClickable: 'hover:i-bg-$color-box-neutral-background-hover active:i-bg-$color-box-neutral-background-hover',
  borderedClickable: 'hover:i-bg-$color-box-bordered-background-hover active:i-bg-$color-box-bordered-background-hover hover:i-border-$color-box-bordered-border-hover active:i-border-$color-box-bordered-border-hover',
};
