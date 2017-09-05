import React from 'react';
import { node } from 'prop-types';
import Button from './Button';

export default function BackButton(props) {
    return <Button {...props} buttonType="back" simpleContent={true}>
                <span className="ffe-back-button__label">{props.children}</span>
            </Button>;
}

BackButton.propTypes = {
    children: node
};
