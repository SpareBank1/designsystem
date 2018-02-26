import React from 'react';
import { oneOfType, func, node, string } from 'prop-types';
import InlineButton from './InlineBaseButton';

const BackButton = props => <InlineButton buttonType="back" {...props} />;

BackButton.propTypes = {
    /** The button label */
    children: node,
    /** Extra class names */
    className: string,
    /** The rendered element, like an `<a />` or `<Link />` */
    element: oneOfType([func, string]),
    /** Ref-setting function passed to the button element */
    innerRef: func,
};
export default BackButton;

