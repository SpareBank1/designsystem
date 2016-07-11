import React, { PropTypes } from 'react';
import Button from './Button';

export default function TertiaryButton(props) {
    return <Button {...props} type="tertiary" simpleContent>
                {props.children}
            </Button>;
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
