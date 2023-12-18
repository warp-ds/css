export const backwardsCompatibleClasses = {
  modalBackdrop: 'z-20', // replaced by z-30 in v1.4.0
  chevronBox: 'right-16', //removed in v1.4.0
  chevronNonBox: 'left-8', //removed in v1.4.0
  checkboxInvalid: 'peer-checked:before:i-border-$color-checkbox-negative-border-selected peer-checked:peer-hover:before:i-border-$color-checkbox-negative-border-selected-hover', //replaced in v1.5.0
  radioInvalid: 'peer-checked:before:i-border-$color-radio-negative-border-selected peer-checked:peer-hover:before:i-border-$color-radio-negative-border-selected-hover ', //replaced in v1.5.0
  radioDisabled: 'peer-checked:before:i-border-$color-radio-border-selected-disabled', //replaced in v1.5.0
};