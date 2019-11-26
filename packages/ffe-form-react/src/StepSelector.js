import React, { useState } from 'react';
import BaseRadioButton from './BaseRadioButton';
import classNames from 'classnames';

import RadioButtonInputGroup from './RadioButtonInputGroup';
import RadioButton from './RadioButton';
import { arrayOf, string, shape, func, number } from 'prop-types';

const StepRadioButton = ({ className, inline, dark, ...rest }) => {
    return (
        <BaseRadioButton
            className={classNames(
                'ffe-step-selector-option ffe-step-selector-option--text-center',
                className,
            )}
            dark={dark}
            {...rest}
        />
    );
};

export default StepRadioButton;
