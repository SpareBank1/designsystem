import React from 'react';
import { CardRenderProps } from '../types';
import classNames from 'classnames';
import { CardName, Subtext, Text, Title, WithCardAction } from '../components';

export interface TextCardProps
    extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
    /** Left-aligned text on the card */
    leftAlign?: boolean;
    /** Function that's passed available sub-components as arguments, or regular children */
    children:
        | React.ReactNode
        | ((cardRenderProps: CardRenderProps) => React.ReactNode);
}

export const TextCard: React.FC<TextCardProps> = ({
    className,
    leftAlign,
    children,
    ...rest
}) => {
    return (
        <WithCardAction
            className={classNames(
                'ffe-text-card',
                { 'ffe-text-card--left-align': leftAlign },
                className,
            )}
            {...rest}
        >
            {({ CardAction }) =>
                typeof children === 'function'
                    ? children({ Text, Subtext, Title, CardName, CardAction })
                    : children
            }
        </WithCardAction>
    );
};
