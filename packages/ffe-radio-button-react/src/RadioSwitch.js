import React, { Fragment } from 'react';
import { bool, oneOfType, string } from 'prop-types';
import classNames from 'classnames';

import BaseRadioButton from './BaseRadioButton';

const RadioSwitch = props => {
    const {
        className,
        leftLabel,
        leftValue,
        rightLabel,
        rightValue,
        condensed,
        dark,
        ...rest
    } = props;

    return (
        <Fragment>
            <BaseRadioButton
                className={classNames('ffe-radio-switch', className, {
                    'ffe-radio-switch--condensed': condensed,
                    'ffe-radio-switch--dark': dark,
                })}
                value={leftValue}
                dark={dark}
                {...rest}
            >
                {leftLabel}
            </BaseRadioButton>
            <BaseRadioButton
                className={classNames('ffe-radio-switch', className, {
                    'ffe-radio-switch--condensed': condensed,
                    'ffe-radio-switch--dark': dark,
                })}
                value={rightValue}
                dark={dark}
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
    leftValue: oneOfType([bool, string]).isRequired,
    /** The label of the choice to the right */
    rightLabel: string.isRequired,
    /** The value of the choice to the right */
    rightValue: oneOfType([bool, string]).isRequired,
    /** Condensed modifier. Use in condensed designs */
    condensed: bool,
    /** Dark variant */
    dark: bool,
};

RadioSwitch.defaultProps = {
    dark: false,
};

export default RadioSwitch;
