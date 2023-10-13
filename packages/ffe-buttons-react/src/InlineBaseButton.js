import React from 'react';
import {
    func,
    string,
    oneOf,
    oneOfType,
    node,
    object,
    shape,
    elementType,
} from 'prop-types';
import classNames from 'classnames';

/**
 * Internal component
 * @ignore
 */
const InlineBaseButton = props => {
    const {
        buttonType,
        children,
        className,
        element: Element,
        innerRef,
        leftIcon,
        rightIcon,
        ...rest
    } = props;

    return (
        <Element
            className={classNames(
                'ffe-inline-button',
                `ffe-inline-button--${buttonType}`,
                className,
            )}
            ref={innerRef}
            {...rest}
        >
            {leftIcon &&
                React.cloneElement(leftIcon, {
                    className:
                        'ffe-inline-button__icon ffe-inline-button__icon--left',
                    weight: 300,
                })}
            <span className="ffe-inline-button__label">{children}</span>
            {rightIcon &&
                React.cloneElement(rightIcon, {
                    className:
                        'ffe-inline-button__icon ffe-inline-button__icon--right',
                    weight: 300,
                })}
        </Element>
    );
};

InlineBaseButton.propTypes = {
    /**
     * Enum of supported prop types. Used internally only.
     * @ignore
     */
    buttonType: oneOf(['tertiary', 'back', 'expand']),
    /** The button label */
    children: node.isRequired,
    /** Extra class names */
    className: string,
    /** The rendered element, like an `<a />` or `<Link />` */
    element: oneOfType([string, func, elementType]),
    /** Ref-setting function, or ref created by useRef, passed to the button element */
    innerRef: oneOfType([func, shape({ current: object })]),
    /** Icon shown to the left of the label */
    leftIcon: node,
    /** Icon shown to the right of the label */
    rightIcon: node,
};

InlineBaseButton.defaultProps = {
    element: 'button',
};

export default InlineBaseButton;
