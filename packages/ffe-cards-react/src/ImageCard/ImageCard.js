import React from 'react';
import classNames from 'classnames';
import { node, string, func, oneOfType } from 'prop-types';

import CardBase from '../CardBase';
import * as components from '../components';

const ImageCard = props => {
    const { className, image, children, ...rest } = props;

    return (
        <CardBase className={classNames('ffe-image-card', className)} {...rest}>
            <div className="ffe-image-card__image">
                <div className="ffe-image-card__image__overlay" />
                {image}
            </div>
            <div className="ffe-image-card__body">
                {typeof children === 'function'
                    ? children(components)
                    : children}
            </div>
        </CardBase>
    );
};

ImageCard.propTypes = {
    className: string,
    /** A rendered image */
    image: node.isRequired,
    /** Function that's passed available sub-components as arguments, or regular children */
    children: oneOfType([func, node]),
};

export default ImageCard;
