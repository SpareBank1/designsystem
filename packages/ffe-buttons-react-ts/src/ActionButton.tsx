import React, { ElementType, ForwardedRef } from 'react';
import { BaseButton, BaseButtonProps } from './BaseButton';
import { fixedForwardRef } from './fixedForwardRef';

export type ActionButtonProps<As extends ElementType = 'button'> = Omit<
    BaseButtonProps<As>,
    'buttonType'
>;

function ActionButtonWithForwardRef<As extends ElementType>(
    props: ActionButtonProps<As>,
    ref: ForwardedRef<any>,
) {
    return <BaseButton {...props} ref={ref} buttonType="action" />;
}

export const ActionButton = fixedForwardRef(ActionButtonWithForwardRef);
