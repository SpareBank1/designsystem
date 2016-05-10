import React, { PropTypes } from 'react';
import FFEButton from './FFEButton';

export default function FFEShortcutButton(props) {
    const {
        action,
        ariaLoadingMessage,
        children,
        disableButton,
        id,
        isLoading,
        label,
        onClick,
    } = props;

    return (
        <FFEButton
            action={action}
            ariaLoadingMessage={ariaLoadingMessage}
            disableButton={disableButton}
            id={id}
            isLoading={isLoading}
            label={label}
            onClick={onClick}
            type="shortcut"
        >
            {children}
        </FFEButton>
    );
}

FFEShortcutButton.propTypes = {
    action: PropTypes.string,
    ariaLoadingMessage: PropTypes.string,
    children: PropTypes.node,
    disableButton: PropTypes.bool,
    id: PropTypes.string,
    isLoading: PropTypes.bool,
    label: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};
