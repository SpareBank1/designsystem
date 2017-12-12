import React from 'react';
import { node } from 'prop-types';
import Button from './Button';

export default function ActionButton(props) {
    const {
        children,
        ...rest
    } = props;

    return (
        <Button
            {...rest}
            buttonType="action"
        >
            {children}
        </Button>
    );
}

ActionButton.propTypes = {
    children: node,
};
