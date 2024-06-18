import React, { ElementType, ForwardedRef } from 'react';
import { CardRenderProps, ComponentAsPropParams } from '../types';
import classNames from 'classnames';
import { CardName, Subtext, Text, Title, WithCardAction } from '../components';
import { fixedForwardRef } from '../fixedForwardRef';

export type TextCardProps<As extends ElementType = 'div'> = Omit<
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
    const { className, leftAlign, children, ...rest } = props;

    const withCardActionProps: React.ComponentProps<typeof WithCardAction> = {
        ...rest,
    };

    return (
        <WithCardAction
            className={classNames(
                'ffe-text-card',
                { 'ffe-text-card--left-align': leftAlign },
                className,
            )}
            {...withCardActionProps}
            ref={ref}
        >
            {({ CardAction }) =>
                typeof children === 'function'
                    ? children({ Text, Subtext, Title, CardName, CardAction })
                    : children
            }
        </WithCardAction>
    );
}

export const TextCard = fixedForwardRef(TextCardWithForwardRef);
