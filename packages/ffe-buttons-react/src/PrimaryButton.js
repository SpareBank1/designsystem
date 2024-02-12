import React from 'react';
import {
    bool,
    func,
    oneOfType,
    node,
    string,
    object,
    shape,
    elementType,
} from 'prop-types';
import Button from './BaseButton';

const PrimaryButton = props => {
    const { leftIcon, rightIcon, ...rest } = props;
    return (
        <Button
            buttonType="primary"
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            {...rest}
        />
    );
};

PrimaryButton.propTypes = {
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
    /** Icon shown to the left of the label */
    leftIcon: node,
    /** Icon shown to the right of the label */
    rightIcon: node,
};

export default PrimaryButton;
