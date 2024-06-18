import React, { ReactNode } from 'react';
import { CardRenderProps } from '../types';
import classNames from 'classnames';
import { CardName, Subtext, Text, Title, WithCardAction } from '../components';

export interface StippledCardProps
    extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
    /** Smaller icon and less space */
    condensed?: boolean;
    /** Image to be rendered*/
    img?: {
        element: ReactNode;
        type: 'icon' | 'custom';
    };
    children:
        | React.ReactNode
        | ((cardRenderProps: CardRenderProps) => React.ReactNode);
}

export const StippledCard: React.FC<StippledCardProps> = ({
    className,
    condensed,
    img,
    children,
    ...rest
}) => {
    return (
        <WithCardAction
            className={classNames(
                'ffe-stippled-card',
                { 'ffe-stippled-card--condensed': condensed },
                className,
            )}
            {...rest}
        >
            {({ CardAction }) => (
                <>
                    <div
                        className={classNames('ffe-stippled-card__img', {
                            'ffe-stippled-card__img--icon':
                                img?.type === 'icon',
                        })}
                        aria-hidden={img?.type === 'icon'}
                    >
                        {img?.element}
                    </div>
                    <div>
                        {typeof children === 'function'
                            ? children({
                                  CardName,
                                  Title,
                                  Text,
                                  Subtext,
                                  CardAction,
                              })
                            : children}
                    </div>
                </>
            )}
        </WithCardAction>
    );
};
