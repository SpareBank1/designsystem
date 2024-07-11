import React, { ElementType, ForwardedRef, ReactElement } from 'react';
import { CardRenderProps, ComponentAsPropParams } from '../types';
import classNames from 'classnames';
import { WithCardAction, Text, Subtext, Title, CardName } from '../components';
import { fixedForwardRef } from '../fixedForwardRef';

export type IllustrationCardProps<As extends ElementType = 'div'> = Omit<
    ComponentAsPropParams<As>,
    'children'
> & {
    /** Element of illustration */
    img: ReactElement;
    /** Smaller illustration and less space */
    condensed?: boolean;
    children:
        | React.ReactNode
        | ((cardRenderProps: CardRenderProps) => React.ReactNode);
};

function IllustrationCardWithForwardRef<As extends ElementType>(
    props: IllustrationCardProps<As>,
    ref: ForwardedRef<any>,
) {
    const { className, condensed, img, children, ...rest } = props;
    return (
        <WithCardAction
            baseClassName="ffe-illustration-card"
            className={classNames(
                'ffe-illustration-card',
                { 'ffe-illustration-card--condensed': condensed },
                className,
            )}
            {...(rest as Record<string, unknown>)}
            ref={ref}
        >
            {({ CardAction }) => (
                <>
                    <div
                        className={classNames(
                            'ffe-illustration-card__illustration',
                        )}
                    >
                        {img}
                    </div>
                    <div className="ffe-illustration-card__body">
                        {typeof children === 'function'
                            ? children({
                                  Text,
                                  Subtext,
                                  Title,
                                  CardName,
                                  CardAction,
                              })
                            : children}
                    </div>
                </>
            )}
        </WithCardAction>
    );
}

export const IllustrationCard = fixedForwardRef(IllustrationCardWithForwardRef);
