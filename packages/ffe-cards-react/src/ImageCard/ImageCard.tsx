import React from 'react';
import { CardRenderProps } from '../types';
import classNames from 'classnames';
import { CardName, Subtext, Text, Title, WithCardAction } from '../components';

export interface ImageCardProps
    extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
    /** The src for the image */
    imageSrc: string;
    /** The alt text for the image */
    imageAltText: string;
    children:
        | React.ReactNode
        | ((cardRenderProps: CardRenderProps) => React.ReactNode);
}

export const ImageCard: React.FC<ImageCardProps> = ({
    className,
    imageSrc,
    imageAltText,
    children,
    ...rest
}) => {
    return (
        <WithCardAction
            className={classNames('ffe-image-card', className)}
            {...rest}
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
};
