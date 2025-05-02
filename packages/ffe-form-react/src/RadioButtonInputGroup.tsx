import React, { useId } from 'react';
import classNames from 'classnames';
import { ErrorFieldMessage } from './message/index.js';
import { Tooltip } from './Tooltip.js';
import { SelectedRadioValue } from './types.js';

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
        selectedValue?: SelectedRadioValue;
        /** @deprecated as part of update to Semantic Colors
         *
         * Use the `ffe-accent-color` class on the component or on the container of the component instead
         * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
        onColoredBg?: never;
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
        | React.ReactElement<{
              /** @deprecated as part of update to Semantic Colors
               *
               * Use the `ffe-accent-color` class on the component or on the container of the component instead
               * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
              onColoredBg?: never;
          }>
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
    selectedValue?: SelectedRadioValue;
    /**
     * String or Tooltip component with further detail about the radio button
     * set
     * */
    tooltip?: React.ReactNode;
    /** @deprecated as part of update to Semantic Colors
     *
     * Use the `ffe-accent-color` class on the component or on the container of the component instead
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    onColoredBg?: never;
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
    ...rest
}) => {
    if (tooltip && description) {
        throw new Error(
            'Don\'t use both "tooltip" and "description" on an <RadioButtonInputGroup />, pick one of them',
        );
    }
    const id = useId();

    return (
        <fieldset
            aria-labelledby={id}
            className={classNames(
                'ffe-input-group',
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
                    )}
                >
                    {label}
                    {typeof tooltip === 'string' && (
                        <Tooltip>{tooltip}</Tooltip>
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
            })}

            {typeof fieldMessage === 'string' ? (
                <ErrorFieldMessage as="p">{fieldMessage}</ErrorFieldMessage>
            ) : (
                fieldMessage
            )}
        </fieldset>
    );
};
