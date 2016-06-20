import React, { PropTypes } from 'react';
import Button from './Button';

export default function ActionButton(props) {
    const {
        action,
        ariaLoadingMessage,
        children,
        disableButton,
        id,
        isLoading,
        label,
        onClick,
        isTabbable,
    } = props;

    return (
        <Button
            action={action}
            ariaLoadingMessage={ariaLoadingMessage}
            disableButton={disableButton}
            id={id}
            isLoading={isLoading}
            label={label}
            onClick={onClick}
            type="action"
            isTabbable={isTabbable}
        >
            {children}
        </Button>
    );
}

ActionButton.propTypes = {
    action: PropTypes.string,
    ariaLoadingMessage: PropTypes.string,
    children: PropTypes.node,
    disableButton: PropTypes.bool,
    id: PropTypes.string,
    isLoading: PropTypes.bool,
    label: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    isTabbable: PropTypes.bool,
};
