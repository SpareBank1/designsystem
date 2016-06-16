import React, { PropTypes } from 'react';

export default function Button(props) {
    const {
        action,
        ariaLoadingMessage = 'Vennligst vent',
        children,
        disableButton,
        id,
        isLoading,
        label,
        onClick,
        type = 'primary',
        isTabbable,
        } = props;
    const tabIndex = isTabbable ? 0 : -1;
    return (
        <button
            onClick={onClick}
            className={`ffe-${type}-button ${isLoading ? `ffe-${type}-button--loading` : ''}`}
            data-action={action}
            id={id}
            disabled={disableButton}
            aria-disabled={disableButton}
            tabIndex={tabIndex}
        >
            <span className={`ffe-${type}-button__label`}>
                <span
                    className={`ffe-${type}-button__label-text
                    ${isLoading ? `ffe-${type}-button__label-text--loading` : ''}`}
                >
                    {label || children}
                </span>
                <span
                    className={`ffe-${type}-button__label-spinner`}
                    aria-hidden={!isLoading}
                >
                    {ariaLoadingMessage}
                </span>
            </span>
        </button>
    );
}

Button.propTypes = {
    action: PropTypes.string,
    ariaLoadingMessage: PropTypes.string,
    children: PropTypes.node,
    disableButton: PropTypes.bool,
    id: PropTypes.string,
    isLoading: PropTypes.bool,
    label: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string,
    isTabbable: PropTypes.bool,
};
