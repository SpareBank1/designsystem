import React, { ElementType, ForwardedRef } from 'react';
import {
    CardRenderProps,
    ComponentAsPropParams,
    CardActionRenderProps,
} from '../types.js';
import classNames from 'classnames';
import { CardName, Subtext, Text, Title, WithCardAction } from '../components/index.js';
import { fixedForwardRef } from '../fixedForwardRef.js';

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
    children:
        | React.ReactNode
        | ((cardRenderProps: CardRenderProps) => React.ReactNode);
};

function ImageCardWithForwardRef<As extends ElementType>(
    props: ImageCardProps<As>,
    ref: ForwardedRef<any>,
) {
    const { className, imageSrc, imageAltText, noMargin, children, ...rest } =
        props;

    return (
        <WithCardAction
            baseClassName="ffe-image-card"
            className={classNames(
                'ffe-image-card',
                { 'ffe-image-card--no-margin': noMargin },
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
