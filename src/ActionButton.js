import React, { PropTypes } from 'react';
import Button from './Button';

export default function ActionButton(props) {
    return <Button {...props} type="action">
                {props.children}
            </Button>;
}


ActionButton.propTypes = {
    children: PropTypes.node
};