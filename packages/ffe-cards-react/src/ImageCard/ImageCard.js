import React from 'react';
import classNames from 'classnames';
import { node, string, func, oneOfType, elementType } from 'prop-types';

import * as components from '../components';

const ImageCard = props => {
    const {
        className,
        imageSrc,
        imageAltText,
        element: Element = 'a',
        children,
        ...rest
    } = props;

    return (
        <Element className={classNames('ffe-image-card', className)} {...rest}>
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
                    ? children(components)
                    : children}
            </div>
        </Element>
    );
};

ImageCard.propTypes = {
    className: string,
    /** The src for the image */
    imageSrc: string.isRequired,
    /** The alt text for the image */
    imageAltText: string.isRequired,
    /** The element to render the card as */
    element: oneOfType([func, string, elementType]),
    /** Function that's passed available sub-components as arguments, or regular children */
    children: oneOfType([func, node]),
};

export default ImageCard;
