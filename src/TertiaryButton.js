import React from 'react';
import { node } from 'prop-types';
import Button from './Button';

export default function TertiaryButton(props) {
    const {
        children,
        ...rest
    } = props;
    return (
        <Button
            {...rest}
            buttonType="tertiary"
            simpleContent={true}
        >
            {children}
        </Button>
    );
}

TertiaryButton.propTypes = {
    children: node
};
