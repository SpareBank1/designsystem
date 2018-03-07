import React, { Fragment } from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

import BaseRadioButton from './BaseRadioButton';

const RadioSwitch = props => {
    const {
        className,
        leftLabel,
        leftValue,
        rightLabel,
        rightValue,
        ...rest
    } = props;

    return (
        <Fragment>
            <BaseRadioButton
                className={classNames('ffe-radio-switch', className)}
                value={leftValue}
                {...rest}
            >
                {leftLabel}
            </BaseRadioButton>
            <BaseRadioButton
                className={classNames('ffe-radio-switch', className)}
                value={rightValue}
                {...rest}
            >
                {rightLabel}
            </BaseRadioButton>
        </Fragment>
    );
};

RadioSwitch.propTypes = {
    /** Additional class names applied to both radio buttons */
    className: string,
    /** The label of the choice to the left */
    leftLabel: string.isRequired,
    /** The value of the choice to the left */
    leftValue: string.isRequired,
    /** The label of the choice to the right */
    rightLabel: string.isRequired,
    /** The value of the choice to the right */
    rightValue: string.isRequired,
};

export default RadioSwitch;
