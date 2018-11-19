import React from 'react';
import { oneOfType, node, func, string } from 'prop-types';
import classNames from 'classnames';

/**
 * @deprecated This card comes with an outdated design. Use one of the new cards instead.
 */
const ProductCard = props => {
    const {
        className,
        details,
        elementType: ElementType,
        heading,
        icon,
        status,
        ...rest
    } = props;

    return (
        <ElementType
            className={classNames('ffe-product-card', className)}
            {...rest}
        >
            {status && <div className="ffe-product-card__status">{status}</div>}
            {icon &&
                React.cloneElement(icon, {
                    className: classNames(
                        'ffe-product-card__icon',
                        icon.props.className,
                    ),
                })}
            {heading && <p className="ffe-product-card__heading">{heading}</p>}
            {details && <p className="ffe-product-card__details">{details}</p>}
        </ElementType>
    );
};

ProductCard.defaultProps = {
    elementType: 'div',
};

ProductCard.propTypes = {
    className: string,
    /** Bottom text - should only be used with `size="large"` */
    details: node,
    /** The element to render the card as. */
    elementType: oneOfType([func, string]),
    /** Text shown at the top */
    heading: string,
    /** A rendered icon - will be sized appropriately */
    icon: node,
    /** Status text displayed at the top of the card with a 1 second delay */
    status: string,
};

export default ProductCard;
