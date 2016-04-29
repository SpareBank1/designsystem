import React, { PropTypes } from 'react';

export default function FFEButton(props) {
    const {
        action,
        ariaLoadingMessage = 'Vennligst vent',
        children,
        id,
        isLoading,
        label,
        onClick,
        type = 'primary',
        } = props;

    return (
        <button
            onClick={onClick}
            className={`ffe-${type}-button ${isLoading ? `ffe-${type}-button--loading` : ''}`}
            data-action={action}
            id={id}
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

FFEButton.propTypes = {
    action: PropTypes.string,
    ariaLoadingMessage: PropTypes.string,
    children: PropTypes.node,
    id: PropTypes.string,
    isLoading: PropTypes.bool,
    label: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string,
};
