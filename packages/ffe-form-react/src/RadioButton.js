import React from 'react';
import { bool, string } from 'prop-types';
import classNames from 'classnames';

import BaseRadioButton from './BaseRadioButton';

const RadioButton = props => {
    const { className, inline, ...rest } = props;

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

RadioButton.propTypes = {
    /** Additional class names applied to the label */
    className: string,
    /** Indicates whether the radio button is rendered inline or as a block */
    inline: bool,
};

export default RadioButton;
