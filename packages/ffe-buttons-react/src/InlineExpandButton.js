import React from 'react';
import { bool, func, node, oneOfType, object, shape, string } from 'prop-types';
import { Icon } from '@sb1/ffe-icons-react';
import classNames from 'classnames';
import InlineButton from './InlineBaseButton';

const InlineExpandButton = props => {
    const { isExpanded, className, ...rest } = props;
    const expandMoreIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtMzczLjUzOXEtNy4yMzEgMC0xMy40NjEtMi4zMDgtNi4yMzEtMi4zMDgtMTEuODQ2LTcuOTIzTDI3NC45MjQtNTYzLjUzOXEtOC4zMDgtOC4zMDctOC41LTIwLjg4NC0uMTkzLTEyLjU3NyA4LjUtMjEuMjY5IDguNjkyLTguNjkyIDIxLjA3Ni04LjY5MnQyMS4wNzYgOC42OTJMNDgwLTQ0Mi43NjhsMTYyLjkyNC0xNjIuOTI0cTguMzA3LTguMzA3IDIwLjg4NC04LjUgMTIuNTc2LS4xOTIgMjEuMjY4IDguNSA4LjY5MyA4LjY5MiA4LjY5MyAyMS4wNzcgMCAxMi4zODQtOC42OTMgMjEuMDc2TDUwNS4zMDctMzgzLjc3cS01LjYxNSA1LjYxNS0xMS44NDYgNy45MjMtNi4yMyAyLjMwOC0xMy40NjEgMi4zMDhaIi8+PC9zdmc+';
    return (
        <InlineButton
            buttonType="expand"
            type="button"
            className={classNames(className, {
                'ffe-inline-button--expanded': isExpanded,
            })}
            rightIcon={<Icon size="md" fileUrl={expandMoreIcon} />}
            {...rest}
        />
    );
};

InlineExpandButton.propTypes = {
    /** Text that should reflect the isExpanded state. */
    children: node,
    /** Ref-setting function, or ref created by useRef, passed to the button element */
    innerRef: oneOfType([func, shape({ current: object })]),
    /** When true it will indicate the button is in its open state */
    isExpanded: bool.isRequired,
    /** Listen for clicks to toggle the isExpanded state. */
    onClick: func.isRequired,
    /** Extra class names */
    className: string,
};

export default InlineExpandButton;
