import { buttonTextSizes, buttonTypes, buttonColors } from '_shared.js'

export const modal = {
  //TODO: this class can be removed when we have the solution for opacity and we can add rgba values to the background of the backdrop
  transparentBg: `before:i-bg-$color-modal-backdrop-background before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:opacity-25`,
  backdrop: 'fixed inset-0 flex sm:place-content-center sm:place-items-center items-end z-30 [--w-modal-max-height:80%] [--w-modal-width:640px]',
  modal: 'pb-safe-[32] i-shadow-$shadow-modal max-h-[--w-modal-max-height] min-h-[--w-modal-min-height] w-[--w-modal-width] h-[--w-modal-height] relative transition-300 ease-in-out backface-hidden will-change-height rounded-8 mx-0 sm:mx-16 i-bg-$color-modal-background flex flex-col overflow-hidden outline-none space-y-16 pt-8 sm:pt-32 sm:pb-32 rounded-b-0 sm:rounded-b-8',
  content: 'block overflow-y-auto overflow-x-hidden last-child:mb-0 grow shrink px-16 sm:px-32 relative',
  footer: 'flex justify-end shrink-0 px-16 sm:px-32',
  transitionTitle: 'transition-all duration-300',
  transitionTitleCenter: 'justify-self-center',
  transitionTitleColSpan: 'col-span-2',
  title: '-mt-4 sm:-mt-8 h-40 sm:h-48 grid gap-8 sm:gap-16 grid-cols-[auto_1fr_auto] items-center px-16 sm:px-32 border-b sm:border-b-0 shrink-0',
  titleText: 'mb-0 h4 sm:h3',
  titleButton: `${buttonTextSizes.medium} ${buttonTypes.pill} ${buttonColors.pill} sm:min-h-[44px] sm:min-w-[44px] min-h-[32px] min-w-[32px]`,
  titleButtonLeft: '-ml-8 sm:-ml-12 justify-self-start',
  titleButtonRight: '-mr-8 sm:-mr-12 justify-self-end',
  titleButtonIcon: 'h-16 w-16 sm:h-24 sm:w-24',
  titleButtonIconRotated: 'transform rotate-90',
};
