import React from 'react';
import { node } from 'prop-types';
import Button from './Button';

export default function ActionButton(props) {
    return <Button {...props} buttonType="action">
                {props.children}
            </Button>;
}

ActionButton.propTypes = {
    children: node
};
