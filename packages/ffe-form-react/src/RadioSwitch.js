import React, { Fragment } from 'react';
import {
    bool,
    oneOf,
    oneOfType,
    string,
    number,
    func,
    object,
    shape,
} from 'prop-types';
import classNames from 'classnames';

import BaseRadioButton from './BaseRadioButton';

const RadioSwitch = props => {
    const {
        className,
        leftLabel,
        leftValue,
        leftInnerRef,
        rightLabel,
        rightValue,
        rightInnerRef,
        condensed,
        'aria-invalid': ariaInvalid,
        ...rest
    } = props;

    const noneSelected = [null, undefined, ''].includes(props.selectedValue);

    return (
        <Fragment>
            <BaseRadioButton
                className={classNames('ffe-radio-switch', className, {
                    'ffe-radio-switch--condensed': condensed,
                })}
                value={leftValue}
                innerRef={leftInnerRef}
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
                })}
                value={rightValue}
                innerRef={rightInnerRef}
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
    leftValue: oneOfType([bool, string, number]).isRequired,
    /** Ref-setting function, or ref created by useRef, passed to the input element */
    leftInnerRef: oneOfType([func, shape({ current: object })]),
    /** The label of the choice to the right */
    rightLabel: string.isRequired,
    /** The value of the choice to the right */
    rightValue: oneOfType([bool, string, number]).isRequired,
    /** Ref-setting function, or ref created by useRef, passed to the input element */
    rightInnerRef: oneOfType([func, shape({ current: object })]),
    /** The selected value of the radio button set */
    selectedValue: oneOfType([bool, string, number]),
    /** Condensed modifier. Use in condensed designs */
    condensed: bool,
    /**
     * Indicates whether the radio buttons inside this radio button group is
     * invalid or not. Propagated to all children.
     * */
    'aria-invalid': oneOf(['true', 'false']),
};

export default RadioSwitch;
