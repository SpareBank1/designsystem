import React from 'react';
import {
    node,
    oneOf,
    oneOfType,
    shape,
    string
} from 'prop-types';
import uuid from 'uuid';
import Tooltip from "./Tooltip";
import Label from './Label';
import classNames from 'classnames';
import ErrorFieldMessage from './ErrorFieldMessage';
import SuccessFieldMessage from './SuccessFieldMessage';
import InfoFieldMessage from './InfoFieldMessage';

const InputGroup = ({
    children,
    className,
    label,
    fieldMessage,
    tooltip,
    ...rest
}) => {
    const childId = !!children.props.id ? children.props.id : uuid.v4();
    const invalid = !!fieldMessage && (typeof fieldMessage === 'string' || fieldMessage.type === ErrorFieldMessage);

    return (
        <div
            className={ classNames(
                'ffe-input-group',
                className
            )}
            { ...rest }
        >

            { typeof label === 'string' && <Label htmlFor={ childId }>{ label }</Label> }
            { React.isValidElement(label) && React.cloneElement( label, { htmlFor : childId }) }

            { typeof tooltip === 'string' && <Tooltip>{ tooltip }</Tooltip> }
            { React.isValidElement(tooltip) && tooltip }

            { React.cloneElement(children, {
                'aria-invalid': String(invalid),
                id: childId
            })}

            { typeof fieldMessage === 'string' && <ErrorFieldMessage>{ fieldMessage }</ErrorFieldMessage> }
            { React.isValidElement(fieldMessage) && fieldMessage }
        </div>
    );
};

const instanceOfComponent = component => shape({ type: oneOf([ component ])});

InputGroup.propTypes = {
    children: node.isRequired,
    className: string,
    fieldMessage: oneOfType([
        string,
        instanceOfComponent(ErrorFieldMessage),
        instanceOfComponent(SuccessFieldMessage),
        instanceOfComponent(InfoFieldMessage)
    ]),
    label: oneOfType([ string, instanceOfComponent(Label) ]).isRequired,
    tooltip: oneOfType([ string, instanceOfComponent(Tooltip) ])
};

export default InputGroup;
