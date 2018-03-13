import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import { bool, node, oneOf, shape, string } from 'prop-types';
import uuid from 'uuid';

import { Tooltip } from '@sb1/ffe-form-react';

class BaseRadioButton extends Component {
    id = `base-radio-button-${uuid.v4()}`;

    render() {
        const {
            'aria-invalid': ariaInvalid,
            children,
            checked,
            className,
            labelProps,
            selectedValue,
            tooltip,
            tooltipProps,
            value,
            ...inputProps
        } = this.props;

        const labelClasses = classNames(
            { 'ffe-radio-button--invalid': ariaInvalid === 'true' },
            { 'ffe-radio-button--with-tooltip': tooltip },
            className,
        );

        const isSelected = checked || selectedValue === value;

        return (
            <Fragment>
                <input
                    aria-invalid={ariaInvalid}
                    className="ffe-radio-input"
                    id={this.id}
                    type="radio"
                    checked={isSelected}
                    value={value}
                    {...inputProps}
                />
                <label
                    htmlFor={this.id}
                    {...labelProps}
                    className={labelClasses}
                >
                    {children}
                </label>
                {tooltip && <Tooltip {...tooltipProps}>{tooltip}</Tooltip>}
            </Fragment>
        );
    }
}

BaseRadioButton.defaultProps = {
    labelProps: {},
    tooltipProps: {},
};

BaseRadioButton.propTypes = {
    /** Indicates whether the radio button is invalid or not */
    'aria-invalid': oneOf(['true', 'false']),
    /** Whether or not the radio button is selected */
    checked: bool,
    /** The label of the radio button */
    children: node.isRequired,
    /** Additional class names applied to the label */
    className: string,
    /** Additional props passed to the label element */
    labelProps: shape({}),
    /** The name of the radio button */
    name: string.isRequired,
    /** The selected value of the radio button set */
    selectedValue: string,
    /** Tooltip providing further detail about the choice */
    tooltip: string,
    /** Additional props passed to the Tooltip component */
    tooltipProps: shape({}),
    /** The value of the radio button */
    value: string.isRequired,
};

export default BaseRadioButton;
