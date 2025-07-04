import React, { useId } from 'react';
import classNames from 'classnames';
import { SelectedRadioValue } from './types';

export interface RadioBlockProps
    extends React.ComponentPropsWithoutRef<'input'> {
    /** Whether the radio block is selected */
    checked?: boolean;
    /** The always visible label of the radio block */
    label: React.ReactNode;
    /** Additional class names applied to the label element */
    labelClass?: string;
    /** The name of the radio button set */
    name: string;
    /** The selected value of the radio button set */
    selectedValue?: SelectedRadioValue;
    /** Whether children are always visible */
    showChildren?: boolean;
    /** The value of the radio block */
    value: string;
}

export const RadioBlock = React.forwardRef<HTMLInputElement, RadioBlockProps>(
    (
        {
            checked,
            children,
            className,
            label,
            labelClass,
            name,
            selectedValue,
            showChildren,
            value,
            ...inputProps
        },
        ref,
    ) => {
        const id = useId();

        const isSelected = checked || selectedValue === value;

        return (
            <div
                className={classNames(
                    'ffe-radio-block',
                    'ffe-default-mode',
                    className,
                )}
            >
                <input
                    checked={isSelected}
                    className="ffe-radio-input"
                    id={id}
                    ref={ref}
                    type="radio"
                    name={name}
                    value={value}
                    aria-describedby={
                        (children && showChildren) || (children && isSelected)
                            ? `${id}-described`
                            : undefined
                    }
                    {...inputProps}
                />
                <div className="ffe-radio-block__content">
                    <label
                        className={classNames(
                            'ffe-radio-block__header',
                            labelClass,
                        )}
                        htmlFor={id}
                    >
                        {label}
                    </label>
                    {(isSelected || showChildren) && children && (
                        <div
                            className={classNames('ffe-radio-block__wrapper')}
                            id={`${id}-described`}
                        >
                            {children}
                        </div>
                    )}
                </div>
            </div>
        );
    },
);
