import React, { cloneElement, PropTypes } from 'react';

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
        simpleContent = false,
        ...rest
    } = props;
    const loadingClass = isLoading ? `ffe-${buttonType}-button--loading` : '';

    return (
        <button
            aria-disabled={disableButton}
            aria-busy={isLoading}
            className={`ffe-${buttonType}-button ${loadingClass} ${className}`}
            data-action={action}
            disabled={disableButton || isLoading}
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
    action: PropTypes.string,
    ariaLoadingMessage: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    disableButton: PropTypes.bool,
    buttonType: PropTypes.oneOf([
        'action',
        'primary',
        'secondary',
        'shortcut',
        'tertiary',
        'back',
    ]),
    id: PropTypes.string,
    isLoading: PropTypes.bool,
    isTabbable: PropTypes.bool,
    autoFocus: PropTypes.bool,
    label: PropTypes.string,
    leftIcon: PropTypes.node,
    onClick: PropTypes.func,
    rightIcon: PropTypes.node,
    simpleContent: PropTypes.bool,
    style: PropTypes.object,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
};
