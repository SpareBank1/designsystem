import React, { PropTypes } from 'react';
import Button from './Button';

export default function PrimaryButton(props) {
    return <Button {...props} buttonType="primary">
                {props.children}
            </Button>;
}

PrimaryButton.propTypes = {
    children: PropTypes.node
};
