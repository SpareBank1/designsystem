import classNames from 'classnames';
import React, { ElementType, ForwardedRef } from 'react';
import { fixedForwardRef } from './fixedForwardRef';
import { ComponentAsPropParams } from './types';

type LeftIcon = {
    /**  Icon on left side */
    leftIcon?: React.ReactNode;
    rightIcon?: never;
};
type RightIcon = {
    /**  Icon on right side */
    rightIcon?: React.ReactNode;
    leftIcon?: never;
};

type LeftOrRightIcon = LeftIcon | RightIcon;

export type ChipProps<As extends ElementType = 'button'> =
    ComponentAsPropParams<As> & {
        /** Size of chip*/
        size: 'sm' | 'md' | 'lg';
        /** Adds alternative styling for better contrast on certain backgrounds */
    } & LeftOrRightIcon;

function ChipWithForwardRef<As extends ElementType>(
    props: ChipProps<As>,
    ref: ForwardedRef<any>,
) {
    const {
        as: Comp = 'button',
        className,
        size,
        leftIcon,
        rightIcon,
        children,
        ...rest
    } = props;

    const wrappedChildren = (
        <span
            className={classNames(
                'ffe-chip__label',
                size === 'sm' ? 'ffe-small-text' : 'ffe-body-paragraph',
            )}
        >
            {children}
        </span>
    );

    return (
        <Comp
            className={classNames(
                'ffe-chip',
                {
                    'ffe-chip--sm': size === 'sm',
                    'ffe-chip--md': size === 'md',
                    'ffe-chip--lg': size === 'lg',
                    'ffe-chip--icon-left': !!leftIcon,
                    'ffe-chip--icon-right': !!rightIcon,
                },
                className,
            )}
            {...rest}
            ref={ref}
        >
            {leftIcon}
            {wrappedChildren}
            {rightIcon}
        </Comp>
    );
}

export const Chip = fixedForwardRef(ChipWithForwardRef);
