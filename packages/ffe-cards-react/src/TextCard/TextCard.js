import React from 'react';
import classNames from 'classnames';
import { string, func, node, oneOfType, bool, elementType } from 'prop-types';

import * as components from '../components';

const TextCard = props => {
    const { className, leftAlign, element: Element, children, ...rest } = props;

    return (
        <Element
            className={classNames(
                'ffe-text-card',
                { 'ffe-text-card--left-align': leftAlign },
                className,
            )}
            {...rest}
        >
            {typeof children === 'function' ? children(components) : children}
        </Element>
    );
};

TextCard.defaultProps = {
    element: 'div',
};

TextCard.propTypes = {
    className: string,
    /** Left-aligned text on the card */
    leftAlign: bool,
    /** The element to render the card as */
    element: oneOfType([func, string, elementType]),
    /** Function that's passed available sub-components as arguments, or regular children */
    children: oneOfType([func, node]),
};

export default TextCard;
