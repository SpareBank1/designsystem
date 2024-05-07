import React, { ElementType, ForwardedRef } from 'react';
import { fixedForwardRef } from '../fixedForwardRef';
import { ComponentAsPropParams, CardRenderProps } from '../types';
import classNames from 'classnames';
import { Text, Subtext, Title, CardName } from '../components';

export type ImageCardProps<As extends ElementType = 'a'> = Omit<
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
    const {
        as: Comp = 'a',
        className,
        imageSrc,
        imageAltText,
        children,
        ...rest
    } = props;

    return (
        <Comp
            className={classNames('ffe-image-card', className)}
            {...rest}
            ref={ref}
        >
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
                    ? children({ Text, Subtext, Title, CardName })
                    : children}
            </div>
        </Comp>
    );
}

export const ImageCard = fixedForwardRef(ImageCardWithForwardRef);
