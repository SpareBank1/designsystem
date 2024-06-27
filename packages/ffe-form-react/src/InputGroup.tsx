import React, { useRef } from 'react';
import { v4 as uuid } from 'uuid';
import { Tooltip, TooltipProps } from './Tooltip';
import { Label } from './Label';
import classNames from 'classnames';
import { ErrorFieldMessage } from './message';

type ChildrenExtraProps = {
    id: string;
    'aria-invalid': 'true' | 'false';
    'aria-describedby': string | undefined;
    onColoredBg?: boolean;
};

export interface InputGroupProps
    extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
    /** The id that will be used on the input child if you don't want a generated one */
    inputId?: string;
    /** The id used on the label in this component. Could be necessary if your component needs a aria-labelledby. */
    labelId?: string;
    /** Unless you only have one element in your `InputGroup` you will have to use the function-as-a-child pattern. */
    children:
        | NonNullable<React.ReactNode>
        | ((extraProps: ChildrenExtraProps) => React.ReactNode);
    /** Reserve space for showing `fieldMessage`s so content below don't move
     *  vertically if an errormessage shows up. Note that this will only reserve
     *  space for one line of content, so keep messages short.
     */
    extraMargin?: boolean;
    /** Use the ErrorFieldMessage component if you need more flexibility in how the content is rendered. */
    fieldMessage?:
        | string
        | React.ReactElement<{ id: string; onColoredBg?: boolean }>
        | null;
    /** To just render a static, always visible tooltip, use this. */
    description?: string;
    /** Use the Label component if you need more flexibility in how the content is rendered. */
    label?:
        | string
        | React.ReactElement<{
              id: string;
              htmlFor: string;
              onColoredBg?: boolean;
          }>;
    onTooltipToggle?: TooltipProps['onClick'];
    /** Use the Tooltip component if you need more flexibility in how the content is rendered. */
    tooltip?: React.ReactNode;
    /** Adds alternative styling for better contrast on certain backgrounds */
    onColoredBg?: boolean;
}
const getChildrenWithExtraProps = (
    children: InputGroupProps['children'],
    extraProps: ChildrenExtraProps,
) => {
    if (typeof children === 'function') {
        return children(extraProps);
    } else if (React.isValidElement(children)) {
        return React.cloneElement(children, extraProps);
    }
    return children;
};

export const InputGroup: React.FC<InputGroupProps> = ({
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
    onColoredBg,
    ...rest
}) => {
    const id = useRef(inputId ? inputId : `input-${uuid()}`).current;
    const descriptionId = description ? `${id}-description` : undefined;

    if (React.Children.count(children) > 1) {
        throw new Error(
            'This element does not support more than one child. If you need more than one element inside your ' +
                'InputGroup, please use the function-as-a-child pattern outlined in the documentation.',
        );
    }

    const getFieldMessageId = () => {
        if (typeof fieldMessage === 'string') {
            return `${id}-fieldmessage`;
        } else if (fieldMessage?.props?.id) {
            return fieldMessage.props.id;
        }
        return fieldMessage ? `${id}-fieldmessage` : undefined;
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
            fieldMessage.type === ErrorFieldMessage);

    const hasMessage = !!fieldMessage;
    const ariaDescribedBy =
        fieldMessageId || descriptionId
            ? [fieldMessageId, descriptionId].filter(Boolean).join(' ')
            : undefined;

    const extraProps = {
        id,
        'aria-invalid': isInvalid ? 'true' : 'false',
        'aria-describedby': ariaDescribedBy,
        onColoredBg,
    } as const;

    const modifiedChildren = getChildrenWithExtraProps(children, extraProps);

    return (
        <div
            className={classNames(
                'ffe-input-group',
                {
                    'ffe-input-group--on-colored-bg': onColoredBg,
                    'ffe-input-group--no-extra-margin': !extraMargin,
                    'ffe-input-group--message': hasMessage,
                },
                className,
            )}
            {...rest}
        >
            {typeof label === 'string' ? (
                <Label htmlFor={id} id={labelId} onColoredBg={onColoredBg}>
                    {label}
                </Label>
            ) : (
                React.isValidElement(label) &&
                React.cloneElement(label, {
                    htmlFor: id,
                    id: labelId,
                    onColoredBg,
                })
            )}

            {typeof tooltip === 'string' && (
                <Tooltip onClick={onTooltipToggle} onColoredBg={onColoredBg}>
                    {tooltip}
                </Tooltip>
            )}

            {tooltip === true && (
                <Tooltip onClick={onTooltipToggle} onColoredBg={onColoredBg} />
            )}

            {React.isValidElement(tooltip) && tooltip}

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
                <ErrorFieldMessage
                    as="p"
                    id={fieldMessageId}
                    onColoredBg={onColoredBg}
                >
                    {fieldMessage}
                </ErrorFieldMessage>
            )}
            {React.isValidElement(fieldMessage) &&
                React.cloneElement(fieldMessage, {
                    id: fieldMessageId,
                    onColoredBg,
                })}
        </div>
    );
};
