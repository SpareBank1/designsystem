import React, { ElementType, ForwardedRef, ReactNode } from 'react';
import { CardRenderProps, ComponentAsPropParams } from '../types';
import classNames from 'classnames';
import { CardName, Subtext, Text, Title, WithCardAction } from '../components';
import { fixedForwardRef } from '../fixedForwardRef';

export type StippledCardProps<As extends ElementType = 'div'> = Omit<
    ComponentAsPropParams<As>,
    'children'
> & {
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
};

function StippledCardWithForwardRef<As extends ElementType>(
    props: StippledCardProps<As>,
    ref: ForwardedRef<any>,
) {
    const { className, condensed, img, children, ...rest } = props;

    return (
        <WithCardAction
            className={classNames(
                'ffe-stippled-card',
                { 'ffe-stippled-card--condensed': condensed },
                className,
            )}
            {...(rest as Record<string, unknown>)}
            ref={ref}
        >
            {({ CardAction }) => (
                <>
                    {img && (
                        <div
                            className={classNames('ffe-stippled-card__img', {
                                'ffe-stippled-card__img--icon':
                                    img?.type === 'icon',
                            })}
                            aria-hidden={img?.type === 'icon'}
                        >
                            {img?.element}
                        </div>
                    )}
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
}
export const StippledCard = fixedForwardRef(StippledCardWithForwardRef);
