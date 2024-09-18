import React from 'react';
import classNames from 'classnames';

import { BaseRadioButton } from './BaseRadioButton';

type Value = boolean | string | number;

export interface RadioSwitchProps
    extends Omit<React.ComponentPropsWithoutRef<'input'>, 'value'> {
    /** Additional class names applied to both radio buttons */
    className?: string;
    /** The label of the choice to the left */
    leftLabel: string;
    /** The value of the choice to the left */
    leftValue: Value /** Ref-setting function, or ref created by useRef, passed to the input element */;
    /** Ref to left radio */
    leftInnerRef?: React.Ref<HTMLInputElement>;
    /** The label of the choice to the right */
    rightLabel: string;
    /** The value of the choice to the right */
    rightValue: Value;
    /** Ref to right radio */
    rightInnerRef?: React.Ref<HTMLInputElement>;
    /** The selected value of the radio button set */
    selectedValue?: Value | null;
    /** Condensed modifier. Use in condensed designs */
    condensed?: boolean;
}

export const RadioSwitch: React.FC<RadioSwitchProps> = ({
    className,
    leftLabel,
    leftValue,
    leftInnerRef,
    rightLabel,
    rightValue,
    rightInnerRef,
    condensed,
    'aria-invalid': ariaInvalid,
    selectedValue,
    ...rest
}) => {
    const noneSelected =
        selectedValue === null ||
        selectedValue === undefined ||
        selectedValue === '';

    return (
        <>
            <BaseRadioButton
                className={classNames('ffe-radio-switch', className, {
                    'ffe-radio-switch--condensed': condensed,
                })}
                value={leftValue}
                ref={leftInnerRef}
                aria-invalid={
                    ariaInvalid === 'true' &&
                    (selectedValue === leftValue || noneSelected)
                }
                selectedValue={selectedValue}
                {...rest}
            >
                {leftLabel}
            </BaseRadioButton>
            <BaseRadioButton
                className={classNames('ffe-radio-switch', className, {
                    'ffe-radio-switch--condensed': condensed,
                })}
                value={rightValue}
                ref={rightInnerRef}
                aria-invalid={
                    ariaInvalid === 'true' &&
                    (selectedValue === rightValue || noneSelected)
                }
                selectedValue={selectedValue}
                {...rest}
            >
                {rightLabel}
            </BaseRadioButton>
        </>
    );
};
