import React from 'react';
import {
    bool,
    func,
    node,
    number as numberType,
    oneOf,
    oneOfType,
    string,
} from 'prop-types';
import classNames from 'classnames';

/**
 * @deprecated This card comes with an outdated design. Use one of the new cards instead.
 */
const LinkCard = props => {
    const {
        center,
        className,
        details,
        elementType: ElementType,
        heading,
        icon,
        number,
        plain,
        size,
        status,
        subHeading,
        ...rest
    } = props;

    return (
        <ElementType
            className={classNames(
                'ffe-link-card',
                { 'ffe-link-card--center': center },
                { [`ffe-link-card--${size}`]: !!size },
                { 'ffe-link-card--plain': plain },
                className,
            )}
            {...rest}
        >
            {status && <div className="ffe-link-card__status">{status}</div>}
            {icon &&
                React.cloneElement(icon, {
                    className: classNames(
                        'ffe-link-card__icon',
                        icon.props.className,
                    ),
                })}
            {number && <span className="ffe-link-card__number">{number}</span>}
            {heading && <p className="ffe-link-card__heading">{heading}</p>}
            {subHeading && (
                <p className="ffe-link-card__sub-heading">{subHeading}</p>
            )}
            {details && <p className="ffe-link-card__details">{details}</p>}
        </ElementType>
    );
};

LinkCard.defaultProps = {
    elementType: 'a',
};

LinkCard.propTypes = {
    /** Center the card's content horizontally */
    center: bool,
    className: string,
    /** Bottom text - should only be used with `size="large"` */
    details: node,
    /** The element to render the card as. Typically `'a'`, `Link` or `'button'` */
    elementType: oneOfType([func, string]),
    /** Text shown at the top */
    heading: string,
    /** A rendered icon - will be sized appropriately */
    icon: node,
    /**
     * An enumerating number, typically to show which "step" a card represents. Should be used only when `plain` is true
     */
    number: numberType,
    /** Optional size modifiers */
    size: oneOf(['medium', 'large']),
    /** Make less "clickable" - works well with specifying `number` prop */
    plain: bool,
    /** Status text displayed at the top of the card with a 1 second delay */
    status: string,
    subHeading: string,
};

export default LinkCard;
