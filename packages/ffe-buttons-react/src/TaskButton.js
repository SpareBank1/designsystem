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
import Symbol from '@sb1/ffe-symbols-react';

const TaskButton = ({ icon, ...rest }) => (
    <Button
        buttonType="task"
        leftIcon={
            <Symbol ariaLabel="" size="sm">
                {icon}
            </Symbol>
        }
        {...rest}
    />
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
    /** Name of Task icon, shown to the left of the label */
    icon: string.isRequired,
    /** Ref-setting function, or ref created by useRef, passed to the button element */
    innerRef: oneOfType([func, shape({ current: object })]),
};

export default TaskButton;
