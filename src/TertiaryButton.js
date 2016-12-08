import React, { PropTypes } from 'react';
import Button from './Button';

export default function TertiaryButton(props) {
    return <Button {...props} buttonType="tertiary" simpleContent={true}>
                {props.children}
            </Button>;
}

TertiaryButton.propTypes = {
    children: PropTypes.node
};
