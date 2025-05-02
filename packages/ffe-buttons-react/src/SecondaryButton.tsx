import React, { ElementType, ForwardedRef } from 'react';
import { BaseButton, BaseButtonProps } from './BaseButton.js';
import { fixedForwardRef } from './fixedForwardRef.js';

export type SecondaryButtonProps<As extends ElementType = 'button'> = Omit<
    BaseButtonProps<As>,
    'buttonType'
>;

function SecondaryButtonWithForwardRef<As extends ElementType>(
    props: SecondaryButtonProps<As>,
    ref: ForwardedRef<any>,
) {
    return <BaseButton {...props} ref={ref} buttonType="secondary" />;
}

export const SecondaryButton = fixedForwardRef(SecondaryButtonWithForwardRef);
