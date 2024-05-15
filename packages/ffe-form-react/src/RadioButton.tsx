import React from 'react';
import classNames from 'classnames';

import { BaseRadioButton, BaseRadioButtonProps } from './BaseRadioButton';

export interface RadioButtonProps extends BaseRadioButtonProps {
    /** Indicates whether the radio button is rendered inline or as a block */
    inline?: boolean;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
    className,
    inline,
    ...rest
}) => {
    return (
        <BaseRadioButton
            className={classNames(
                'ffe-radio-button',
                { 'ffe-radio-button--inline': inline },
                className,
            )}
            {...rest}
        />
    );
};
