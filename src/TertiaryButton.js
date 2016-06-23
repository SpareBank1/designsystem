import React, { PropTypes } from 'react';
import Button from './Button';

export default function TertiaryButton(props) {
    const {
        action,
        children,
        disableButton,
        id,
        label,
        onClick,
        isTabbable = true,
    } = props;
    return (
        <Button
            action={action}
            disableButton={disableButton}
            id={id}
            label={label}
            onClick={onClick}
            type="tertiary"
            simpleContent
            isTabbable={isTabbable}
        >
            {children}
        </Button>
    );
}

TertiaryButton.propTypes = {
    action: PropTypes.string,
    children: PropTypes.node,
    disableButton: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    isTabbable: PropTypes.bool,
};
