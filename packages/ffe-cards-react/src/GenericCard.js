import React from 'react';
import classNames from 'classnames';
import { oneOfType, node, func, string } from 'prop-types';

const GenericCard = props => {
    const {
        className,
        element: Element,
        children,
        ...rest
    } = props;

    return (
        <Element
            className={ classNames(
                'ffe-generic-card',
                className
            ) }
            { ...rest }
        >
            {children}
        </Element>
    );
};

GenericCard.defaultProps = {
    element: 'button',
};

GenericCard.propTypes = {
    className: string,
    children: node,
    /** The element to render the card as. */
    element: oneOfType([func, string]),
};

export default GenericCard;
