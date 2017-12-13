import React from 'react';
import { node, string } from 'prop-types';
import ChevronIcon from 'ffe-icons-react/chevron-ikon';
import Button from './Button';

const ShortcutButton = props => (
    <Button
        buttonType="shortcut"
        rightIcon={<ChevronIcon className="ffe-shortcut-button__icon-chevron" />}
        {...props}
    />
);

export default ShortcutButton;
