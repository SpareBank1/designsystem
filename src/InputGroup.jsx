import React, { Component } from 'react';
import {
    bool,
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
    constructor(props) {
        super();

        this.id = `input-${uuid.v4()}`;
    }

    render() {
        const {
            children,
            className,
            label,
            fieldMessage,
            tooltip,
            onTooltipToggle,
            ...rest
        } = this.props;

        if (React.Children.count(children) > 1) {
            throw new Error(
                'This element does not support more than one child. If you need more than one element inside your ' +
                'InputGroup, please use the function-as-a-child pattern outlined in the documentation.'
            );
        }

        if (onTooltipToggle && typeof tooltip !== 'boolean' && typeof tooltip !== 'string') {
            throw new Error(
                'Only use the "onTooltipToggle" prop if you\'re not sending a component of type ' +
                '<Tooltip /> in the "tooltip" prop. If you are, use "onClick" on that component instead'
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

                { typeof tooltip === 'string' && <Tooltip onClick={onTooltipToggle}>{ tooltip }</Tooltip> }
                { tooltip === true && <Tooltip onClick={onTooltipToggle} /> }
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
    fieldMessage: oneOfType([string, node]),
    label: oneOfType([ string, instanceOfComponent(Label) ]),
    onTooltipToggle: func,
    tooltip: oneOfType([ bool, string, instanceOfComponent(Tooltip) ])
};

export default InputGroup;
