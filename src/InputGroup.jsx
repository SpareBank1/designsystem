import React, { Component } from 'react';
import {
    func,
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

class InputGroup extends Component {
    constructor() {
        super();

        this.id = uuid.v4();
    }

    render() {
        const {
            children,
            className,
            label,
            fieldMessage,
            tooltip,
            ...rest
        } = this.props;

        if (React.Children.count(children) > 1) {
            throw new Error(
                'This element does not support more than one child. If you need more than one element inside your ' +
                'InputGroup, please use the function-as-a-child pattern outlined in the documentation.'
            );
        }

        const extraProps = {
            id: this.id,
            'aria-invalid': String(!!fieldMessage && (typeof fieldMessage === 'string' || fieldMessage.type === ErrorFieldMessage)),
        };

        const modifiedChildren = typeof children === 'function' ? children(extraProps) : React.cloneElement(children, extraProps);

        return (
            <div
                className={ classNames(
                    'ffe-input-group',
                    className
                )}
                { ...rest }
            >

                { typeof label === 'string' && <Label htmlFor={ this.id }>{ label }</Label> }
                { React.isValidElement(label) && React.cloneElement( label, { htmlFor : this.id }) }

                { typeof tooltip === 'string' && <Tooltip>{ tooltip }</Tooltip> }
                { React.isValidElement(tooltip) && tooltip }

                { modifiedChildren }

                { typeof fieldMessage === 'string' && <ErrorFieldMessage>{ fieldMessage }</ErrorFieldMessage> }
                { React.isValidElement(fieldMessage) && fieldMessage }
            </div>
        );
    }
}

const instanceOfComponent = component => shape({ type: oneOf([ component ])});

InputGroup.propTypes = {
    children: oneOfType([ func, node ]).isRequired,
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
