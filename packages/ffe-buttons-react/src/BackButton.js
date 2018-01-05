import React from 'react';
import { node } from 'prop-types';
import Button from './Button';

export default function BackButton(props) {
    const { children, ...rest } = props;

    return (
        <Button {...rest} buttonType="back" simpleContent={true}>
            <span className="ffe-back-button__label">{children}</span>
        </Button>
    );
}

BackButton.propTypes = {
    children: node,
};
