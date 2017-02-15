import React, { PropTypes } from 'react';
import ChevronIcon from 'ffe-icons-react/chevron-ikon';
import Button from './Button';

export default function ShortcutButton(props) {
    const children = props.label ? props.label : props.children;

    return (
        <Button
            {...props}
            label={null}
            buttonType="shortcut"
            rightIcon={<ChevronIcon className="ffe-shortcut-button__icon-chevron" />}
        >
            {children}
        </Button>
    );
}

ShortcutButton.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string
};
