import React from 'react';
import { func, node, oneOfType, string, bool } from 'prop-types';
import InlineButton from './InlineBaseButton';

const TertiaryButton = props => (
    <InlineButton buttonType="tertiary" {...props} />
);

TertiaryButton.propTypes = {
    /** The button label */
    children: node,
    /** Extra class names */
    className: string,
    /** The rendered element, like an `<a />` or `<Link />` */
    element: oneOfType([func, string]),
    /** Ref-setting function passed to the button element */
    innerRef: func,
    /** Icon shown to the left of the label */
    leftIcon: node,
    /** Icon shown to the right of the label */
    rightIcon: node,
    /** Dark variant */
    dark: bool,
};

TertiaryButton.defaultProps = {
    dark: false,
};

export default TertiaryButton;
