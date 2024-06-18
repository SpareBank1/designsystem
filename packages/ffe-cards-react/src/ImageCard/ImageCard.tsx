import React, { ElementType, ForwardedRef } from 'react';
import { CardRenderProps, ComponentAsPropParams } from '../types';
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
    children:
        | React.ReactNode
        | ((cardRenderProps: CardRenderProps) => React.ReactNode);
};

function ImageCardWithForwardRef<As extends ElementType>(
    props: ImageCardProps<As>,
    ref: ForwardedRef<any>,
) {
    const { className, imageSrc, imageAltText, children, ...rest } = props;
    const withCardActionProps: React.ComponentProps<typeof WithCardAction> = {
        ...rest,
    };
    return (
        <WithCardAction
            className={classNames('ffe-image-card', className)}
            {...withCardActionProps}
            ref={ref}
        >
            {({ CardAction }) => (
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
