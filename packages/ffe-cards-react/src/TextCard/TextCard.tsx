import React, { ElementType, ForwardedRef } from 'react';
import {
    CardRenderProps,
    ComponentAsPropParams,
    CardActionRenderProps,
} from '../types.js';
import classNames from 'classnames';
import {
    CardName,
    Subtext,
    Text,
    Title,
    WithCardAction,
} from '../components/index.js';
import { fixedForwardRef } from '../fixedForwardRef.js';

export type TextCardProps<As extends ElementType = 'div'> = Omit<
    ComponentAsPropParams<As>,
    'children'
> & {
    /** Left-aligned text on the card */
    leftAlign?: boolean;
    /** No margin on card */
    noMargin?: boolean;
    /** Function that's passed available subcomponents as arguments, or regular children */
    children:
        | React.ReactNode
        | ((cardRenderProps: CardRenderProps) => React.ReactNode);
};

function TextCardWithForwardRef<As extends ElementType>(
    props: TextCardProps<As>,
    ref: ForwardedRef<any>,
) {
    const { className, leftAlign, noMargin, children, ...rest } = props;

    return (
        <WithCardAction
            baseClassName="ffe-text-card"
            className={classNames(
                'ffe-text-card',
                { 'ffe-text-card--left-align': leftAlign },
                { 'ffe-text-card--no-margin': noMargin },
                className,
            )}
            {...(rest as Record<string, unknown>)}
            ref={ref}
        >
            {({ CardAction }: CardActionRenderProps) =>
                typeof children === 'function'
                    ? children({ Text, Subtext, Title, CardName, CardAction })
                    : children
            }
        </WithCardAction>
    );
}

export const TextCard = fixedForwardRef(TextCardWithForwardRef);
