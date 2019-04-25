import React, { Fragment } from 'react';
import { bool, oneOf, oneOfType, string } from 'prop-types';
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
        'aria-invalid': ariaInvalid,
        ...rest
    } = props;

    const noneSelected = [null, undefined, ''].includes(props.selectedValue);

    return (
        <Fragment>
            <BaseRadioButton
                className={classNames('ffe-radio-switch', className, {
                    'ffe-radio-switch--condensed': condensed,
                    'ffe-radio-switch--dark': dark,
                })}
                value={leftValue}
                dark={dark}
                aria-invalid={String(
                    ariaInvalid === 'true' &&
                        (props.selectedValue === leftValue || noneSelected),
                )}
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
                aria-invalid={String(
                    ariaInvalid === 'true' &&
                        (props.selectedValue === rightValue || noneSelected),
                )}
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
    /** The selected value of the radio button set */
    selectedValue: oneOfType([bool, string]),
    /** Condensed modifier. Use in condensed designs */
    condensed: bool,
    /** Dark variant */
    dark: bool,
    /**
     * Indicates whether the radio buttons inside this radio button group is
     * invalid or not. Propagated to all children.
     * */
    'aria-invalid': oneOf(['true', 'false']),
};

RadioSwitch.defaultProps = {
    dark: false,
};

export default RadioSwitch;
