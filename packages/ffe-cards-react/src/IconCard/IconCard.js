import React from 'react';
import classNames from 'classnames';
import { node, string, bool, func, oneOfType, elementType } from 'prop-types';

import * as components from '../components';

const IconCard = props => {
    const {
        className,
        icon,
        condensed,
        greyCharcoal,
        element: Element,
        children,
        ...rest
    } = props;

    return (
        <Element
            className={classNames(
                'ffe-icon-card',
                { 'ffe-icon-card--condensed': condensed },
                { 'ffe-icon-card--grey-charcoal': greyCharcoal },
                className,
            )}
            {...rest}
        >
            {React.cloneElement(icon, {
                className: classNames(
                    'ffe-icon-card__icon',
                    icon.props.className,
                ),
            })}
            <div className="ffe-icon-card__body">
                {typeof children === 'function'
                    ? children(components)
                    : children}
            </div>
        </Element>
    );
};

IconCard.defaultProps = {
    element: 'div',
};

IconCard.propTypes = {
    className: string,
    /** A rendered icon */
    icon: node.isRequired,
    /** Smaller icon and less space */
    condensed: bool,
    /** Icon and text will all be ffe-grey-charcoal */
    greyCharcoal: bool,
    /** The element to render the card as */
    element: oneOfType([func, string, elementType]),
    /** Function that's passed available sub-components as arguments, or regular children */
    children: oneOfType([func, node]),
};

export default IconCard;
