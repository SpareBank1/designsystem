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

const TaskButton = ({ icon, ...rest }) => (
    <Button buttonType="task" leftIcon={icon} {...rest} />
);

TaskButton.propTypes = {
    /** The button label */
    children: node,
    /** Extra class names */
    className: string,
    /** Disable a button in certain situations */
    disabled: bool,
    /** The rendered element, like an `<a />` or `<Link />` */
    element: oneOfType([func, string, elementType]),
    /** Task icon, show to the left of the label */
    icon: node.isRequired,
    /** Ref-setting function, or ref created by useRef, passed to the button element */
    innerRef: oneOfType([func, shape({ current: object })]),
};

export default TaskButton;
