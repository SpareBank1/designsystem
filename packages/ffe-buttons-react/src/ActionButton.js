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
import Symbol from '@sb1/ffe-symbols-react';

import Button from './BaseButton';

export default function ActionButton(props) {
    const { className, leftIcon, rightIcon, ...rest } = props;

    return (
        <Button
            buttonType="action"
            className={classNames(className)}
            leftIcon={leftIcon && <Symbol icon={leftIcon} size="md" />}
            rightIcon={rightIcon && <Symbol icon={rightIcon} size="md" />}
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
    /** Disable a button in certain situations */
    disabled: bool,
    /** The rendered element, like an `<a />` or `<Link />` */
    element: oneOfType([func, string, elementType]),
    /** Ref-setting function, or ref created by useRef, passed to the button element */
    innerRef: oneOfType([func, shape({ current: object })]),
    /** Shows a loader if true */
    isLoading: bool,
    /** Name of Icon shown to the left of the label */
    leftIcon: string,
    /** Name of Icon shown to the right of the label */
    rightIcon: string,
};
