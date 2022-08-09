import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import {
    bool,
    node,
    oneOfType,
    shape,
    string,
    func,
    object,
    number,
} from 'prop-types';
import { v4 as uuid } from 'uuid';

import Tooltip from './Tooltip';

class BaseRadioButton extends Component {
    id = `base-radio-button-${uuid()}`;

    render() {
        const {
            children,
            checked,
            className,
            labelProps,
            selectedValue,
            tooltip,
            tooltipProps,
            value,
            innerRef,
            ...inputProps
        } = this.props;

        const labelClasses = classNames(
            { 'ffe-radio-button--with-tooltip': tooltip },
            className,
        );

        const isSelected =
            selectedValue !== undefined ? selectedValue === value : checked;

        return (
            <Fragment>
                <input
                    className="ffe-radio-input"
                    id={this.id}
                    ref={innerRef}
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
    selectedValue: oneOfType([bool, string, number]),
    /** Tooltip providing further detail about the choice */
    tooltip: string,
    /** Additional props passed to the Tooltip component */
    tooltipProps: shape({}),
    /** The value of the radio button */
    value: oneOfType([bool, string, number]).isRequired,
    /** Ref-setting function, or ref created by useRef, passed to the input element */
    innerRef: oneOfType([func, shape({ current: object })]),
};

export default BaseRadioButton;
