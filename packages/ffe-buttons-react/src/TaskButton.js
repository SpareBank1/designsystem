import React from 'react';
import { bool, func, node, string, oneOfType } from 'prop-types';
import Button from './BaseButton';

const TaskButton = props => (
    <Button
        buttonType="task"
        leftIcon={props.icon}
        {...props}
    />
);

TaskButton.propTypes = {
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
    /** Task icon, show to the left of the label */
    icon: node.isRequired,
    /** Ref-setting function passed to the button element */
    innerRef: func,
};

export default TaskButton;
