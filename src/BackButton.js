import React, { PropTypes } from 'react';
import Button from './Button';

export default function BackButton(props) {
    return <Button {...props} buttonType="back" simpleContent>
                <span className="ffe-back-button__label">{props.children}</span>
            </Button>;
}

BackButton.propTypes = {
    children: PropTypes.node
};
