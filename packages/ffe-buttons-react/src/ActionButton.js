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
import classNames from 'classnames';

import Button from './BaseButton';

export default function ActionButton(props) {
    const { className, ...rest } = props;

    return (
        <Button
            buttonType="action"
            className={classNames(className)}
            {...rest}
        />
    );
}

ActionButton.propTypes = {
    /** Aria label for loading indicator */
    ariaLoadingMessage: string,
    /** The button label */
    children: node,
    /** Extra class names */
    className: string,
    /** Condensed modifier. Use in condensed designs */
    condensed: bool,
    /** Disable a button in certain situations */
    disabled: bool,
    /** The rendered element, like an `<a />` or `<Link />` */
    element: oneOfType([func, string, elementType]),
    /** Ref-setting function, or ref created by useRef, passed to the button element */
    innerRef: oneOfType([func, shape({ current: object })]),
    /** Shows a loader if true */
    isLoading: bool,
    /** Icon shown to the left of the label */
    leftIcon: node,
    /** Icon shown to the right of the label */
    rightIcon: node,
};
