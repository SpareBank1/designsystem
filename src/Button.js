import React, { cloneElement } from 'react';
import {
    bool,
    func,
    node,
    object,
    oneOf,
    string
} from 'prop-types';

export default function Button(props) {
    const decorate = (icon, buttonType) => cloneElement(icon, { className: `ffe-${buttonType}-button__label-icon` });
    const {
        action,
        ariaLoadingMessage = 'Vennligst vent',
        buttonType = 'primary',
        children,
        className = '',
        disableButton,
        isLoading,
        isTabbable,
        label,
        leftIcon,
        rightIcon,
        condensed,
        simpleContent = false,
        buttonRef,
        ...rest
    } = props;

    const loadingClass = isLoading ? `ffe-${buttonType}-button--loading` : '';
    const condensedClass = condensed ? `ffe-${buttonType}-button--condensed` : '';

    return (
        <button
            aria-disabled={disableButton}
            aria-busy={isLoading}
            className={`ffe-${buttonType}-button ${loadingClass} ${condensedClass} ${className}`}
            data-action={action}
            disabled={disableButton || isLoading}
            ref={buttonRef}
            {... isTabbable === false ? { tabIndex: -1 } : {}}
            {...rest}
        >
            {simpleContent ?
                (label || children) :
                <span className={`ffe-${buttonType}-button__label`}>
                    <span
                        className={`ffe-${buttonType}-button__label-text
                        ${isLoading ? `ffe-${buttonType}-button__label-text--loading` : ''}`}
                    >
                        {leftIcon && decorate(leftIcon, buttonType)}
                        {label || children}
                        {rightIcon && rightIcon}
                    </span>
                    <span
                        className={`ffe-${buttonType}-button__label-spinner`}
                        aria-hidden={!isLoading}
                    >
                        {ariaLoadingMessage}
                    </span>
                </span>
            }
        </button>
    );
}

Button.propTypes = {
    action: string,
    ariaLoadingMessage: string,
    children: node,
    className: string,
    condensed: bool,
    disableButton: bool,
    buttonType: oneOf([
        'action',
        'primary',
        'secondary',
        'shortcut',
        'tertiary',
        'back',
    ]),
    id: string,
    isLoading: bool,
    isTabbable: bool,
    autoFocus: bool,
    label: string,
    leftIcon: node,
    onClick: func,
    rightIcon: node,
    simpleContent: bool,
    style: object,
    type: oneOf(['button', 'submit', 'reset']),
    buttonRef: func,
};
