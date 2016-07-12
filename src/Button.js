import React, { PropTypes } from 'react';

export default function Button(props) {
    const {
        action,
        ariaLoadingMessage = 'Vennligst vent',
        children,
        className = '',
        disableButton,
        id,
        isLoading,
        label,
        onClick,
        type = 'primary',
        simpleContent = false,
        style = {},
        isTabbable,
    } = props;
    const tabIndex = isTabbable ? 0 : -1;
    const loadingClass = isLoading ? `ffe-${type}-button--loading` : '';

    return (
        <button
            onClick={onClick}
            className={`ffe-${type}-button ${loadingClass} ${className}`}
            data-action={action}
            id={id}
            disabled={disableButton}
            aria-disabled={disableButton}
            tabIndex={tabIndex}
            style={style}
        >
            {simpleContent ?
                (label || children) :
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
    id: PropTypes.string,
    isLoading: PropTypes.bool,
    label: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string,
    simpleContent: PropTypes.bool,
    isTabbable: PropTypes.bool,
    style: PropTypes.object
};
