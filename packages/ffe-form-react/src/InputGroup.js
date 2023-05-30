import React, { useState } from 'react';
import { bool, func, node, oneOfType, string } from 'prop-types';
import { v4 as uuid } from 'uuid';
import Tooltip from './Tooltip';
import Label from './Label';
import classNames from 'classnames';
import ErrorFieldMessage from './ErrorFieldMessage';

const InputGroup = ({
    inputId,
    children,
    className,
    extraMargin = true,
    description,
    label,
    fieldMessage,
    tooltip,
    onTooltipToggle,
    labelId,
    ...rest
}) => {
    const [id] = useState(inputId ? inputId : `input-${uuid()}`);
    const descriptionId = description ? `${id}-description` : undefined;
    const fieldMessageReturn =
        typeof fieldMessage === 'function'
            ? fieldMessage(`${id}-fieldmessage`)
            : null;

    if (React.Children.count(children) > 1) {
        throw new Error(
            'This element does not support more than one child. If you need more than one element inside your ' +
                'InputGroup, please use the function-as-a-child pattern outlined in the documentation.',
        );
    }

    const getFieldMessageId = () => {
        if (fieldMessage?.props?.id) {
            return fieldMessage.props.id;
        } else if (typeof fieldMessage === 'string' || fieldMessageReturn) {
            return `${id}-fieldmessage`;
        }
    };

    const fieldMessageId = getFieldMessageId();

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

    const isInvalid =
        !!fieldMessage &&
        (typeof fieldMessage === 'string' ||
            fieldMessage.type === ErrorFieldMessage ||
            !!fieldMessageReturn);

    const hasMessage = !!fieldMessage;

    const ariaDescribedBy =
        `${fieldMessageId || ''} ${descriptionId || ''}`.trim() || undefined;

    const extraProps = {
        id,
        'aria-invalid': String(isInvalid),
        'aria-describedby': ariaDescribedBy,
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
                { 'ffe-input-group--message': hasMessage },
                className,
            )}
            {...rest}
        >
            {typeof label === 'string' && (
                <Label htmlFor={id} id={labelId}>
                    {label}
                </Label>
            )}

            {React.isValidElement(label) &&
                React.cloneElement(label, {
                    htmlFor: id,
                    id: labelId,
                })}

            {(typeof tooltip === 'string' || React.isValidElement(tooltip)) && (
                <Tooltip onClick={onTooltipToggle}>{tooltip}</Tooltip>
            )}

            {tooltip === true && <Tooltip onClick={onTooltipToggle} />}

            {description && (
                <div
                    className="ffe-small-text ffe-input-group__description"
                    id={descriptionId}
                >
                    {description}
                </div>
            )}

            {modifiedChildren}

            {typeof fieldMessage === 'string' && (
                <ErrorFieldMessage element="p" id={fieldMessageId}>
                    {fieldMessage}
                </ErrorFieldMessage>
            )}
            {React.isValidElement(fieldMessage) &&
                React.cloneElement(fieldMessage, {
                    id: fieldMessageId,
                })}
            {fieldMessageReturn}
        </div>
    );
};

InputGroup.propTypes = {
    /** The id that will be used on the input child if you don't want a generated one */
    inputId: string,
    /** The id used on the label in this component. Could be necessary if your component needs a aria-labelledby. */
    labelId: string,
    /** Unless you only have one element in your `InputGroup` you will have to use the function-as-a-child pattern. */
    children: oneOfType([func, node]).isRequired,
    className: string,
    /** Reserve space for showing `fieldMessage`s so content below don't move
     *  vertically if an errormessage shows up. Note that this will only reserve
     *  space for one line of content, so keep messages short.
     */
    extraMargin: bool,
    /** Use the ErrorFieldMessage component if you need more flexibility in how the content is rendered. */
    fieldMessage: oneOfType([string, node, func]),
    /** To just render a static, always visible tooltip, use this. */
    description: string,
    /** Use the Label component if you need more flexibility in how the content is rendered. */
    label: oneOfType([node, string]),
    onTooltipToggle: func,
    /** Use the Tooltip component if you need more flexibility in how the content is rendered. */
    tooltip: oneOfType([bool, node]),
};

export default InputGroup;
