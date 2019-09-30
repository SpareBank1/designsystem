import React from 'react';
import {
    oneOfType,
    func,
    node,
    string,
    bool,
    object,
    shape,
    elementType,
} from 'prop-types';
import InlineButton from './InlineBaseButton';

const BackButton = props => <InlineButton buttonType="back" {...props} />;

BackButton.propTypes = {
    /** The button label */
    children: node,
    /** Extra class names */
    className: string,
    /** The rendered element, like an `<a />` or `<Link />` */
    element: oneOfType([func, string, elementType]),
    /** Ref-setting function, or ref created by useRef, passed to the button element */
    innerRef: oneOfType([func, shape({ current: object })]),
    /** Dark variant */
    dark: bool,
};

BackButton.defaultProps = {
    dark: false,
};

export default BackButton;
