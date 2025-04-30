import React, { ElementType, ForwardedRef, ReactElement } from 'react';
import {
    CardRenderProps,
    ComponentAsPropParams,
    CardActionRenderProps,
} from '../types';
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
    /** Position illustration at left (default) or right of the card content */
    illustrationPosition?: 'right' | 'left';
    /** No margin on card */
    noMargin?: boolean;
    /** Avgjør utseende i kontekst accent. Hvis man ønsker et blått utseende i kontekst accent, velg appearance: 'accent' */
    appearance?: 'default' | 'accent';
    children:
        | React.ReactNode
        | ((cardRenderProps: CardRenderProps) => React.ReactNode);
};

function IllustrationCardWithForwardRef<As extends ElementType>(
    props: IllustrationCardProps<As>,
    ref: ForwardedRef<any>,
) {
    const {
        className,
        condensed,
        img,
        illustrationPosition,
        noMargin,
        appearance = 'default',
        children,
        ...rest
    } = props;
    return (
        <WithCardAction
            baseClassName="ffe-illustration-card"
            className={classNames(
                'ffe-illustration-card',
                { 'ffe-illustration-card--condensed': condensed },
                { 'ffe-illustration-card--no-margin': noMargin },
                {
                    'ffe-illustration-card--right':
                        illustrationPosition === 'right',
                },
                { ' ffe-default-mode': appearance === 'default' },
                className,
            )}
            {...(rest as Record<string, unknown>)}
            ref={ref}
        >
            {({ CardAction }: CardActionRenderProps) => {
                const illustrationElement = (
                    <div
                        className={classNames(
                            'ffe-illustration-card__illustration',
                        )}
                    >
                        {img}
                    </div>
                );

                const bodyElement = (
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
                );

                return illustrationPosition === 'right' ? (
                    <>
                        {bodyElement}
                        {illustrationElement}
                    </>
                ) : (
                    <>
                        {illustrationElement}
                        {bodyElement}
                    </>
                );
            }}
        </WithCardAction>
    );
}

export const IllustrationCard = fixedForwardRef(IllustrationCardWithForwardRef);
