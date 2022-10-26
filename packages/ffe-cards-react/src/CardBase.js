import React from 'react';
import classNames from 'classnames';
import { oneOfType, node, func, string, elementType } from 'prop-types';

const CardBase = React.forwardRef((props, ref) => {
    const { className, element: Element, children, ...rest } = props;
    return (
        <Element
            className={classNames('ffe-card-base', className)}
            ref={ref}
            {...rest}
        >
            {children}
        </Element>
    );
});

CardBase.defaultProps = {
    element: 'a',
};

CardBase.propTypes = {
    className: string,
    children: node,
    /** The element to render the card as */
    element: oneOfType([func, string, elementType]),
};

export default CardBase;
