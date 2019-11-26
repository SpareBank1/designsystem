import React from 'react';
import BaseRadioButton from './BaseRadioButton';
import classNames from 'classnames';

const StepRadioButton = ({ className, inline, dark, ...rest }) => {
    return (
        <BaseRadioButton
            className={classNames(
                'ffe-step-selector-radio-button ffe-step-selector-radio-button--text-center',
                className,
            )}
            dark={dark}
            {...rest}
        />
    );
};

export default StepRadioButton;
