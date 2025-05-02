import React from 'react';
import classNames from 'classnames';

import { BaseRadioButton, BaseRadioButtonProps } from './BaseRadioButton.js';

export interface RadioButtonProps extends BaseRadioButtonProps {
    /** Indicates whether the radio button is rendered inline or as a block */
    inline?: boolean;
    /** @deprecated as part of update to Semantic Colors
     *
     * Use the `ffe-accent-color` class on the component or on the container of the component instead
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    onColoredBg?: never;
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

                {
                    'ffe-radio-button--inline': inline,
                },
                className,
            )}
            {...rest}
        />
    );
};
