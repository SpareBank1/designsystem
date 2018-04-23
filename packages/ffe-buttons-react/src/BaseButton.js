import React from 'react';
import { bool, func, node, oneOf, oneOfType, string } from 'prop-types';
import classNames from 'classnames';

/**
 * Internal component
 */
const BaseButton = props => {
    const {
        ariaLoadingMessage,
        buttonType,
        children,
        className,
        condensed,
        disabled,
        element: Element,
        innerRef,
        isLoading,
        leftIcon,
        rightIcon,
        ...rest
    } = props;

    const supportsSpinner = ['action', 'primary', 'secondary', 'shortcut'].includes(buttonType);
    return (
        <Element
            aria-busy={isLoading}
            aria-disabled={disabled || isLoading}
            className={classNames(
                'ffe-button',
                `ffe-button--${buttonType}`,
                { 'ffe-button--condensed': condensed },
                { 'ffe-button--loading': isLoading },
                className,
            )}
            disabled={disabled || isLoading}
            ref={innerRef}
            {...rest}
        >
            <span className="ffe-button__label">
                {leftIcon &&
                    React.cloneElement(leftIcon, {
                        className: 'ffe-button__icon ffe-button__icon--left',
                    })}
                {children}
                {rightIcon &&
                    React.cloneElement(rightIcon, {
                        className: 'ffe-button__icon ffe-button__icon--right',
                    })}
            </span>
            {supportsSpinner &&
                <div
                    aria-hidden={!isLoading}
                    aria-label={ariaLoadingMessage}
                    className="ffe-button__spinner"
                />
            }
        </Element>
    );
};

BaseButton.propTypes = {
    /** Aria label for loading indicator */
    ariaLoadingMessage: string,
    /**
     * Enum of supported prop types. Used internally only.
     * @ignore
     */
    buttonType: oneOf([
        'action',
        'primary',
        'secondary',
        'shortcut',
        'task',
    ]),
    /** The button label */
    children: node,
    /** Extra class names */
    className: string,
    /** Condensed modifier. Use in condensed designs */
    condensed: bool,
    /** Disable a button in certain situations */
    disabled: bool,
    /** The rendered element, like an `<a />` or `<Link />` */
    element: oneOfType([func, string]),
    /** Ref-setting function passed to the button element */
    innerRef: func,
    /** Shows a loader if true */
    isLoading: bool,
    /** Icon shown to the left of the label */
    leftIcon: node,
    /** Icon shown to the right of the label */
    rightIcon: node,
};

BaseButton.defaultProps = {
    ariaLoadingMessage: 'Vennligst vent',
    element: 'button',

};

export default BaseButton;
