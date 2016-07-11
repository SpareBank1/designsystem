import React, { PropTypes } from 'react';
import Button from './Button';

export default function ShortcutButton(props) {
    return <Button {...props} type="shortcut">
                {props.children}
            </Button>;
}

ShortcutButton.propTypes = {
    children: PropTypes.node
};