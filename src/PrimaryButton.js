import React from 'react';
import { node } from 'prop-types';
import Button from './Button';

export default function PrimaryButton(props) {
    const {
        children,
        ...rest
    } = props;

    return (
        <Button
            {...rest}
            buttonType="primary"
        >
            {children}
        </Button>
    );
}

PrimaryButton.propTypes = {
    children: node,
};
