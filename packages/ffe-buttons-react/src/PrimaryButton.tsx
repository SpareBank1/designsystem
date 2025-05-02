import React, { ElementType, ForwardedRef } from 'react';
import { BaseButton, BaseButtonProps } from './BaseButton.js';
import { fixedForwardRef } from './fixedForwardRef.js';

export type PrimaryButtonProps<As extends ElementType = 'button'> = Omit<
    BaseButtonProps<As>,
    'buttonType'
>;

function PrimaryButtonWithForwardRef<As extends ElementType>(
    props: PrimaryButtonProps<As>,
    ref: ForwardedRef<any>,
) {
    return <BaseButton {...props} ref={ref} buttonType="primary" />;
}

export const PrimaryButton = fixedForwardRef(PrimaryButtonWithForwardRef);
