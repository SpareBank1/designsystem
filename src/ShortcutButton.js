import React, { PropTypes } from 'react';
import ChevronIcon from 'ffe-icons-react/chevron-ikon';
import Button from './Button';

export default function ShortcutButton(props) {
    const children = props.label ? props.label : props.children;

    return <Button {...props} label={null} buttonType="shortcut">
                {children}
                <ChevronIcon className="ffe-shortcut-button__label-icon" />
            </Button>;
}

ShortcutButton.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string
};
