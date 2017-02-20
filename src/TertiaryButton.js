import React, { PropTypes } from 'react';
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
    children: PropTypes.node
};
