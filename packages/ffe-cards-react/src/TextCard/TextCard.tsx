import React, { ElementType, ForwardedRef } from 'react';
import { fixedForwardRef } from '../fixedForwardRef';
import { ComponentAsPropParams, CardRenderProps } from '../types';
import classNames from 'classnames';
import { Text, Subtext, Title, CardName } from '../components';

export type TextCardProps<As extends ElementType = 'a'> = Omit<
    ComponentAsPropParams<As>,
    'children'
> & {
    /** Left-aligned text on the card */
    leftAlign?: boolean;
    /** Function that's passed available sub-components as arguments, or regular children */
    children:
        | React.ReactNode
        | ((cardRenderProps: CardRenderProps) => React.ReactNode);
};

function TextCardWithForwardRef<As extends ElementType>(
    props: TextCardProps<As>,
    ref: ForwardedRef<any>,
) {
    const { as: Comp = 'a', className, leftAlign, children, ...rest } = props;

    return (
        <Comp
            className={classNames(
                'ffe-text-card',
                { 'ffe-text-card--left-align': leftAlign },
                className,
            )}
            {...rest}
            ref={ref}
        >
            {typeof children === 'function'
                ? children({ Text, Subtext, Title, CardName })
                : children}
        </Comp>
    );
}

export const TextCard = fixedForwardRef(TextCardWithForwardRef);
