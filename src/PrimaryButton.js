import React from 'react';
import { node } from 'prop-types';
import Button from './Button';

export default function PrimaryButton(props) {
    return <Button {...props} buttonType="primary">
                {props.children}
            </Button>;
}

PrimaryButton.propTypes = {
    children: node
};
