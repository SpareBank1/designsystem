import React, { ElementType, ForwardedRef } from 'react';
import {
    CardRenderProps,
    ComponentAsPropParams,
    CardActionRenderProps,
} from '../types';
import classNames from 'classnames';
import { CardName, Subtext, Text, Title, WithCardAction } from '../components';
import { fixedForwardRef } from '../fixedForwardRef';

export type ImageCardProps<As extends ElementType = 'div'> = Omit<
    ComponentAsPropParams<As>,
    'children'
> & {
    /** The src for the image */
    imageSrc: string;
    /** The alt text for the image */
    imageAltText: string;
    /** No margin on card */
    noMargin?: boolean;
    /** Avgjør utseende i kontekst accent. Hvis man ønsker et blått utseende i kontekst accent, velg appearance: 'accent' */
    appearance?: 'default' | 'accent';
    children:
        | React.ReactNode
        | ((cardRenderProps: CardRenderProps) => React.ReactNode);
};

function ImageCardWithForwardRef<As extends ElementType>(
    props: ImageCardProps<As>,
    ref: ForwardedRef<any>,
) {
    const {
        className,
        imageSrc,
        imageAltText,
        noMargin,
        appearance = 'default',
        children,
        ...rest
    } = props;

    return (
        <WithCardAction
            baseClassName="ffe-image-card"
            className={classNames(
                'ffe-image-card',
                {
                    'ffe-image-card--no-margin': noMargin,
                    'ffe-default-mode': appearance === 'default',
                },
                className,
            )}
            {...(rest as Record<string, unknown>)}
            ref={ref}
        >
            {({ CardAction }: CardActionRenderProps) => (
                <>
                    <div className="ffe-image-card__image-container">
                        <div className="ffe-image-card__image-overlay" />
                        <img
                            src={imageSrc}
                            alt={imageAltText}
                            className="ffe-image-card__image"
                        />
                    </div>
                    <div className="ffe-image-card__body">
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
export const ImageCard = fixedForwardRef(ImageCardWithForwardRef);
