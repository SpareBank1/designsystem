import React, { ElementType, ForwardedRef } from 'react';
import { BaseButton, BaseButtonProps } from './BaseButton';
import { fixedForwardRef } from './fixedForwardRef';

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
