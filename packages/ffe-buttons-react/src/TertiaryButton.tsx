import React, { ElementType, ForwardedRef } from 'react';
import { InlineBaseButton, InlineBaseButtonProps } from './InlineBaseButton.js';
import { fixedForwardRef } from './fixedForwardRef.js';

export type TertiaryButtonProps<As extends ElementType = 'button'> = Omit<
    InlineBaseButtonProps<As>,
    'buttonType'
>;

function TertiaryButtonPropsForwardRef<As extends ElementType>(
    props: TertiaryButtonProps<As>,
    ref: ForwardedRef<any>,
) {
    return <InlineBaseButton {...props} ref={ref} buttonType="tertiary" />;
}

export const TertiaryButton = fixedForwardRef(TertiaryButtonPropsForwardRef);
