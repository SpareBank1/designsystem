import React from 'react';
import { bool, func, oneOfType, string, node } from 'prop-types';
import Button from './BaseButton';

const SecondaryButton = props => <Button buttonType="secondary" {...props} />;

SecondaryButton.propTypes = {
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
    element: oneOfType([func, string]),
    /** Ref-setting function passed to the button element */
    innerRef: func,
    /**  Shows a loader if true */
    isLoading: bool,
    /** Icon shown to the left of the label */
    leftIcon: node,
    /** Icon shown to the right of the label */
    rightIcon: node,
    /** Dark variant */
    dark: bool,
};

SecondaryButton.defaultProps = {
    dark: false,
};

export default SecondaryButton;
