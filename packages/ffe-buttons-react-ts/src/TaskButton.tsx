import React, { ElementType, ForwardedRef, ReactElement } from 'react';
import { BaseButton, BaseButtonProps } from './BaseButton';
import { fixedForwardRef } from './fixedForwardRef';

export type TaskButtonProps<As extends ElementType = 'button'> = Omit<
    BaseButtonProps<As>,
    'buttonType' | 'leftIcon' | 'rightIcon'
> & {
    /** icon element shown to the left of the label */
    icon: ReactElement;
};

function TaskButtonWithForwardRef<As extends ElementType>(
    props: TaskButtonProps<As>,
    ref: ForwardedRef<any>,
) {
    return (
        <BaseButton
            leftIcon={props.icon}
            {...props}
            ref={ref}
            buttonType="task"
        />
    );
}

export const TaskButton = fixedForwardRef(TaskButtonWithForwardRef);
