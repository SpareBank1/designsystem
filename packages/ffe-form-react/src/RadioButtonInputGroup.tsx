import React, { useRef } from 'react';
import classNames from 'classnames';
import { ErrorFieldMessage } from './message';
import { Tooltip } from './Tooltip';
import { v4 as uuid } from 'uuid';

export interface RadioButtonInputGroupProps
    extends Omit<
        React.ComponentPropsWithoutRef<'fieldset'>,
        'children' | 'onChange'
    > {
    /**
     * Function receiving props relevant to each radio button as an object
     * argument. Expected to return a set of radio buttons, which should get
     * these properties applied to them.
     * */
    children: (inputProps: {
        inline?: boolean;
        name: string;
        onChange: React.ChangeEventHandler<HTMLInputElement>;
        selectedValue?: boolean | string | number | null;
        onColoredBg?: boolean;
    }) => React.ReactNode;
    /** Additional class names applied to the fieldset */
    className?: string;
    /** To just render a static, always visible tooltip, use this. */
    description?: React.ReactNode;
    /** Reserve space for showing `fieldMessage`s so content below don't move
     *  vertically if an errormessage shows up. Note that this will only reserve
     *  space for one line of content, so keep messages short.
     */
    extraMargin?: boolean;
    /** String or ErrorFieldMessage component with message */
    fieldMessage?:
        | string
        | React.ReactElement<{ onColoredBg?: boolean }>
        | null;
    /**
     * Indicates whether the radio buttons inside this radio button group is
     * rendered inline or as a block.
     * */
    inline?: boolean;
    /**
     * The text describing the radio button set. Note that if you don't use this
     * prop but provide your own label you should make sure your solution passes
     * acessibility validation using a tool such as aXe DevTools.
     */
    label?: React.ReactNode;
    /** The name of the radio button, required to avoid missing name */
    name: string;
    /** Change handler, receives value of selected radio button */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    /** The currently selected value */
    selectedValue?: string | boolean | number | null;
    /**
     * String or Tooltip component with further detail about the radio button
     * set
     * */
    tooltip?: React.ReactNode;
    /** Adds alternative styling for better contrast on certain backgrounds */
    onColoredBg?: boolean;
}

export const RadioButtonInputGroup: React.FC<RadioButtonInputGroupProps> = ({
    children,
    className,
    extraMargin = true,
    description,
    fieldMessage,
    inline,
    label,
    name,
    selectedValue,
    tooltip,
    onChange,
    onColoredBg,
    ...rest
}) => {
    if (tooltip && description) {
        throw new Error(
            'Don\'t use both "tooltip" and "description" on an <RadioButtonInputGroup />, pick one of them',
        );
    }
    const id = useRef(uuid()).current;

    return (
        <fieldset
            aria-labelledby={id}
            className={classNames(
                'ffe-input-group',
                { 'ffe-input-group--on-colored-bg': onColoredBg },
                { 'ffe-input-group--no-extra-margin': !extraMargin },
                { 'ffe-input-group--message': !!fieldMessage },
                className,
            )}
            {...rest}
        >
            {label && (
                <div
                    id={id}
                    className={classNames(
                        'ffe-form-label',
                        'ffe-form-label--block',
                        { 'ffe-form-label--on-colored-bg': onColoredBg },
                    )}
                >
                    {label}
                    {typeof tooltip === 'string' && (
                        <Tooltip onColoredBg={onColoredBg}>{tooltip}</Tooltip>
                    )}
                    {React.isValidElement(tooltip) && tooltip}
                </div>
            )}

            {description && (
                <div className="ffe-input-group__description ffe-small-text">
                    {description}
                </div>
            )}
            {children({
                inline,
                name,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                    onChange?.(e);
                },
                selectedValue,
                onColoredBg,
            })}

            {typeof fieldMessage === 'string' ? (
                <ErrorFieldMessage as="p" onColoredBg={onColoredBg}>
                    {fieldMessage}
                </ErrorFieldMessage>
            ) : (
                React.isValidElement(fieldMessage) &&
                React.cloneElement(fieldMessage, {
                    onColoredBg,
                })
            )}
        </fieldset>
    );
};
