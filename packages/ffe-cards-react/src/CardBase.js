import React from 'react';
import classNames from 'classnames';
import { oneOfType, node, func, string } from 'prop-types';

const CardBase = props => {
    const { className, element: Element, children, ...rest } = props;

    return (
        <Element className={classNames('ffe-card-base', className)} {...rest}>
            {children}
        </Element>
    );
};

CardBase.defaultProps = {
    element: 'div',
};

CardBase.propTypes = {
    className: string,
    children: node,
    /** The element to render the card as. */
    element: oneOfType([func, string]),
};

export default CardBase;
