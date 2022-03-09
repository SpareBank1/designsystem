import React from 'react';
import classNames from 'classnames';
import { node, string, func, oneOfType, elementType } from 'prop-types';

import * as components from '../components';

const ImageCard = props => {
    const { className, image, element: Element, children, ...rest } = props;

    return (
        <Element className={classNames('ffe-image-card', className)} {...rest}>
            <div className="ffe-image-card__image-container">
                <div className="ffe-image-card__image-overlay" />
                {React.cloneElement(image, {
                    className: classNames(
                        'ffe-image-card__image',
                        image.props.className,
                    ),
                })}
            </div>
            <div className="ffe-image-card__body">
                {typeof children === 'function'
                    ? children(components)
                    : children}
            </div>
        </Element>
    );
};

ImageCard.defaultProps = {
    element: 'div',
};

ImageCard.propTypes = {
    className: string,
    /** A rendered image */
    image: node.isRequired,
    /** The element to render the card as */
    element: oneOfType([func, string, elementType]),
    /** Function that's passed available sub-components as arguments, or regular children */
    children: oneOfType([func, node]),
};

export default ImageCard;
