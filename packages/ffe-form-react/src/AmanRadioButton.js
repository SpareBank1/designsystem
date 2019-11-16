import React from 'react';
import { bool, string } from 'prop-types';
import classNames from 'classnames';

import BaseRadioButton from './BaseRadioButton';

const AmanRadioButton = ({ className, inline, dark, ...rest }) => {
    return (
        <BaseRadioButton
            className={classNames('aman-radio-button', className)}
            dark={dark}
            {...rest}
        />
    );
};

export default AmanRadioButton;
