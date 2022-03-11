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
import { ChevronIkon } from '@sb1/ffe-icons-react';
import Button from './BaseButton';

const ShortcutButton = props => (
    <Button buttonType="shortcut" rightIcon={<ChevronIkon />} {...props} />
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
    /** Icon shown to the left of the label */
    leftIcon: node,
};

export default ShortcutButton;
