import React from 'react';
import {
    bool,
    func,
    node,
    string,
    oneOfType,
    object,
    shape,
    elementType,
} from 'prop-types';
import Button from './BaseButton';
import Symbol from '@sb1/ffe-symbols-react';

const ShortcutButton = props => (
    <Button
        buttonType="shortcut"
        rightIcon={<Symbol icon="chevron_right" size="md" />}
        {...props}
    />
);

ShortcutButton.propTypes = {
    /** The button label */
    children: node,
    /** Extra class names */
    className: string,
    /** Disable a button in certain situations */
    disabled: bool,
    /** The rendered element, like an `<a />` or `<Link />` */
    element: oneOfType([func, string, elementType]),
    /** Ref-setting function, or ref created by useRef, passed to the button element */
    innerRef: oneOfType([func, shape({ current: object })]),
};

export default ShortcutButton;
