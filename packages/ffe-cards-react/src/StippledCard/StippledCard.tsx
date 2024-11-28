import React, { ElementType, ForwardedRef, ReactNode } from 'react';
import { CardRenderProps, ComponentAsPropParams } from '../types';
import classNames from 'classnames';
import { CardName, Subtext, Text, Title, WithCardAction } from '../components';
import { fixedForwardRef } from '../fixedForwardRef';

type Img = {
    element: ReactNode;
    type: 'icon' | 'custom';
};
export type StippledCardProps<As extends ElementType = 'div'> = Omit<
    ComponentAsPropParams<As>,
    'children'
> & {
    /** Smaller icon and less space */
    condensed?: boolean;
    /** Image to be rendered*/
    img?: Img;
    rightImg?: Img;
    /** No margin on card */
    noMargin?: boolean;
    children:
        | React.ReactNode
        | ((cardRenderProps: CardRenderProps) => React.ReactNode);
};

function StippledCardWithForwardRef<As extends ElementType>(
    props: StippledCardProps<As>,
    ref: ForwardedRef<any>,
) {
    const { className, condensed, img, noMargin, rightImg, children, ...rest } =
        props;

    return (
        <WithCardAction
            baseClassName="ffe-stippled-card"
            className={classNames(
                'ffe-stippled-card',
                { 'ffe-stippled-card--condensed': condensed },
                { 'ffe-stippled-card--no-margin': noMargin },
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
                    <div className={'ffe-stippled-card__content'}>
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
                    {rightImg && (
                        <div
                            className={classNames('ffe-stippled-card__img', {
                                'ffe-stippled-card__img--icon':
                                    rightImg?.type === 'icon',
                            })}
                            aria-hidden={rightImg?.type === 'icon'}
                        >
                            {rightImg?.element}
                        </div>
                    )}
                </>
            )}
        </WithCardAction>
    );
}
export const StippledCard = fixedForwardRef(StippledCardWithForwardRef);
