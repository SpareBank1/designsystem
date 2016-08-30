import React, { PropTypes } from 'react';
import Button from './Button';

export default function SecondaryButton(props) {
    return <Button {...props} buttonType="secondary">
                {props.children}
            </Button>;
}


SecondaryButton.propTypes = {
    children: PropTypes.node
};
