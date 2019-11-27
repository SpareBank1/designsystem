import React from 'react';
import BaseRadioButton from './BaseRadioButton';
import classNames from 'classnames';

const StepRadioButton = ({ className, ...rest }) => {
    return (
        <BaseRadioButton
            className={classNames('ffe-step-selector-radio-button', className)}
            {...rest}
        />
    );
};

export default StepRadioButton;
