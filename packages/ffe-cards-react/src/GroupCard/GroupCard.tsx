import classNames from 'classnames';
import React, { ForwardedRef } from 'react';
import { fixedForwardRef } from '../fixedForwardRef';
import { BackgroundColor } from '../types';

export interface GroupCardProps
    extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
    /** The children of the GroupCard component */
    children: React.ReactNode;
    /** The background color of the whole groupcard element */
    bgColor?: BackgroundColor;
    /** No margin on card */
    noMargin?: boolean;
}

function GroupCardWithForwardRef(
    {
        className,
        children,
        bgColor = 'primary',
        noMargin,
        ...rest
    }: GroupCardProps,
    ref: ForwardedRef<any>,
) {
    return (
        <div
            className={classNames(
                'ffe-group-card',
                {
                    'ffe-group-card--no-margin': noMargin,
                    [`ffe-group-card--bg-${bgColor}`]: bgColor,
                },
                className,
            )}
            role="group"
            {...rest}
            ref={ref}
        >
            {children}
        </div>
    );
}
export const GroupCard = fixedForwardRef(GroupCardWithForwardRef);
