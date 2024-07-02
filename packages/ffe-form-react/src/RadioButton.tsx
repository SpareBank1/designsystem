import React from 'react';
import classNames from 'classnames';

import { BaseRadioButton, BaseRadioButtonProps } from './BaseRadioButton';

export interface RadioButtonProps extends BaseRadioButtonProps {
    /** Indicates whether the radio button is rendered inline or as a block */
    inline?: boolean;
    /** Adds alternative styling for better contrast on certain backgrounds */
    onColoredBg?: boolean;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
    className,
    inline,
    onColoredBg,
    ...rest
}) => {
    return (
        <BaseRadioButton
            className={classNames(
                'ffe-radio-button',

                {
                    'ffe-radio-button--inline': inline,
                    'ffe-radio-button--on-colored-bg': onColoredBg,
                },
                className,
            )}
            {...rest}
        />
    );
};
