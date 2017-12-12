import React from 'react';
import { node, string } from 'prop-types';
import ChevronIcon from 'ffe-icons-react/chevron-ikon';
import Button from './Button';

export default function ShortcutButton(props) {
    const {
        children,
        ...rest
    } = props;

    return (
        <Button
            {...rest}
            buttonType="shortcut"
            rightIcon={<ChevronIcon className="ffe-shortcut-button__icon-chevron" />}
        >
            {children}
        </Button>
    );
}

ShortcutButton.propTypes = {
    children: node
};
