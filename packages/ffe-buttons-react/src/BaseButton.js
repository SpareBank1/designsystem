import React from 'react';
import {
    bool,
    func,
    node,
    oneOf,
    oneOfType,
    string,
    object,
    shape,
    elementType,
} from 'prop-types';
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
        element: Element,
        innerRef,
        isLoading,
        leftIcon,
        rightIcon,
        onClick,
        ...rest
    } = props;

    const supportsSpinner = ['action', 'primary', 'secondary'].includes(
        buttonType,
    );
    return (
        <Element
            aria-busy={isLoading && supportsSpinner}
            aria-disabled={rest.disabled || (isLoading && supportsSpinner)}
            className={classNames(
                'ffe-button',
                `ffe-button--${buttonType}`,
                { 'ffe-button--loading': isLoading && supportsSpinner },
                className,
            )}
            ref={innerRef}
            onClick={event => {
                if (isLoading && supportsSpinner) {
                    event.preventDefault();
                    event.stopPropagation();
                } else if (onClick) {
                    onClick(event);
                }
            }}
            {...rest}
        >
            <span className="ffe-button__label">
                {leftIcon &&
                    React.cloneElement(leftIcon, {
                        className: 'ffe-button__icon ffe-button__icon--left',
                        weight: 300,
                    })}
                {children}
                {rightIcon &&
                    React.cloneElement(rightIcon, {
                        className: 'ffe-button__icon ffe-button__icon--right',
                        weight: 300,
                    })}
            </span>
            {supportsSpinner && isLoading && (
                <span
                    aria-label={ariaLoadingMessage}
                    role="img"
                    className="ffe-button__spinner"
                />
            )}
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
    buttonType: oneOf(['action', 'primary', 'secondary', 'shortcut', 'task']),
    /** The button label */
    children: node,
    /** Extra class names */
    className: string,
    /** Disable a button in certain situations */
    disabled: bool,
    /** The rendered element, like an `<a />` or `<Link />` */
    element: oneOfType([func, string, elementType]),
    /** Ref-setting function, or ref created by useRef, passed to the button element */
    innerRef: oneOfType([func, shape({ current: object })]),
    /** Shows a loader if true */
    isLoading: bool,
    /** Icon shown to the left of the label */
    leftIcon: node,
    /** Icon shown to the right of the label */
    rightIcon: node,
    /** Called when button is clicked if not loading or disabled */
    onClick: func,
};

BaseButton.defaultProps = {
    ariaLoadingMessage: 'Vennligst vent',
    element: 'button',
};

export default BaseButton;
