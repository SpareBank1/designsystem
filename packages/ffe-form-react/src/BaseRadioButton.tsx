import React, { useRef } from 'react';
import classNames from 'classnames';
import { v4 as uuid } from 'uuid';
import { Tooltip, TooltipProps } from './Tooltip';

export interface BaseRadioButtonProps
    extends Omit<React.ComponentPropsWithoutRef<'input'>, 'value'> {
    /** Additional props passed to the label element */
    labelProps?: React.ComponentProps<'label'>;
    /** The selected value of the radio button set */
    selectedValue?: boolean | string | number | null;
    /** The value of the radio button */
    value: boolean | string | number;
    /** Tooltip providing further detail about the choice */
    tooltip?: string;
    tooltipProps?: TooltipProps;
}

export const BaseRadioButton = React.forwardRef<
    HTMLInputElement,
    BaseRadioButtonProps
>(
    (
        {
            children,
            checked,
            className,
            labelProps,
            selectedValue,
            tooltip,
            tooltipProps = {},
            value,
            onChange = () => {},
            ...inputProps
        },
        ref,
    ) => {
        const id = useRef(`base-radio-button-${uuid()}`).current;

        const labelClasses = classNames(
            { 'ffe-radio-button--with-tooltip': tooltip },
            className,
        );

        const isSelected =
            selectedValue === undefined ? checked : selectedValue === value;
        return (
            <>
                <input
                    className="ffe-radio-input"
                    id={id}
                    ref={ref}
                    type="radio"
                    checked={!!isSelected}
                    value={`${value}`}
                    onChange={onChange}
                    {...inputProps}
                />
                <label htmlFor={id} {...labelProps} className={labelClasses}>
                    <span className="ffe-radio-input__content">{children}</span>
                </label>
                {tooltip && <Tooltip {...tooltipProps}>{tooltip}</Tooltip>}
            </>
        );
    },
);
