import React from 'react';
import { func, string, oneOf, oneOfType, node, bool } from 'prop-types';
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
        dark,
        ...rest
    } = props;

    return (
        <Element
            className={classNames(
                'ffe-inline-button',
                `ffe-inline-button--${buttonType}`,
                { 'ffe-inline-button--dark': dark },
                className,
            )}
            ref={innerRef}
            {...rest}
        >
            {leftIcon &&
                React.cloneElement(leftIcon, {
                    className:
                        'ffe-inline-button__icon ffe-inline-button__icon--left',
                })}
            <span className="ffe-inline-button__label">{children}</span>
            {rightIcon &&
                React.cloneElement(rightIcon, {
                    className:
                        'ffe-inline-button__icon ffe-inline-button__icon--right',
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
    element: oneOfType([string, func]),
    /** Ref-setting function passed to the button element */
    innerRef: func,
    /** Icon shown to the left of the label */
    leftIcon: node,
    /** Icon shown to the right of the label */
    rightIcon: node,
    /** Dark variant */
    dark: bool,
};

InlineBaseButton.defaultProps = {
    element: 'button',
    dark: false,
};

export default InlineBaseButton;
