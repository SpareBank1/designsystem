import React, { Component } from 'react';
import { bool, func, node, oneOf, oneOfType, shape, string } from 'prop-types';
import uuid from 'uuid';
import Tooltip from './Tooltip';
import Label from './Label';
import classNames from 'classnames';
import ErrorFieldMessage from './ErrorFieldMessage';

class InputGroup extends Component {
    constructor(props) {
        super();

        this.id = `input-${uuid.v4()}`;
    }

    render() {
        const {
            children,
            className,
            extraMargin,
            description,
            label,
            fieldMessage,
            tooltip,
            onTooltipToggle,
            ...rest
        } = this.props;

        if (React.Children.count(children) > 1) {
            throw new Error(
                'This element does not support more than one child. If you need more than one element inside your ' +
                    'InputGroup, please use the function-as-a-child pattern outlined in the documentation.',
            );
        }

        if (
            onTooltipToggle &&
            typeof tooltip !== 'boolean' &&
            typeof tooltip !== 'string'
        ) {
            throw new Error(
                'Only use the "onTooltipToggle" prop if you\'re not sending a component of type ' +
                    '<Tooltip /> in the "tooltip" prop. If you are, use "onClick" on that component instead',
            );
        }

        if (tooltip && description) {
            throw new Error(
                'Don\'t use both "tooltip" and "description" on an <InputGroup />, pick one of them',
            );
        }

        const extraProps = {
            id: this.id,
            'aria-invalid': String(
                !!fieldMessage &&
                    (typeof fieldMessage === 'string' ||
                        fieldMessage.type === ErrorFieldMessage),
            ),
        };

        const modifiedChildren =
            typeof children === 'function'
                ? children(extraProps)
                : React.cloneElement(children, extraProps);

        return (
            <div
                className={classNames(
                    'ffe-input-group',
                    { 'ffe-input-group--no-extra-margin': !extraMargin },
                    className,
                )}
                {...rest}
            >
                {typeof label === 'string' && (
                    <Label htmlFor={this.id}>{label}</Label>
                )}
                {React.isValidElement(label) &&
                    React.cloneElement(label, { htmlFor: this.id })}

                {typeof tooltip === 'string' && (
                    <Tooltip onClick={onTooltipToggle}>{tooltip}</Tooltip>
                )}

                {tooltip === true && <Tooltip onClick={onTooltipToggle} />}

                {React.isValidElement(tooltip) && tooltip}

                {description && (
                    <div className="ffe-small-text">{description}</div>
                )}

                {modifiedChildren}

                {typeof fieldMessage === 'string' && (
                    <ErrorFieldMessage element="p">
                        {fieldMessage}
                    </ErrorFieldMessage>
                )}
                {React.isValidElement(fieldMessage) && fieldMessage}
            </div>
        );
    }
}

const instanceOfComponent = component => shape({ type: oneOf([component]) });

InputGroup.propTypes = {
    /** Unless you only have one element in your `InputGroup` you will have to use the function-as-a-child pattern. */
    children: oneOfType([func, node]).isRequired,
    className: string,
    /** Reserve space for showing `fieldMessage`s so content below don't move
     *  vertically if an errormessage shows up. Note that this will only reserve
     *  space for one line of content, so keep messages short.
     */
    extraMargin: bool,
    /** Use the ErrorFieldMessage component if you need more flexibility in how the content is rendered. */
    fieldMessage: oneOfType([string, node]),
    /** To just render a static, always visible tooltip, use this. */
    description: string,
    /** Use the Label component if you need more flexibility in how the content is rendered. */
    label: oneOfType([string, instanceOfComponent(Label)]),
    onTooltipToggle: func,
    /** Use the Tooltip component if you need more flexibility in how the content is rendered. */
    tooltip: oneOfType([bool, string, instanceOfComponent(Tooltip)]),
};

InputGroup.defaultProps = {
    extraMargin: true,
};

export default InputGroup;
