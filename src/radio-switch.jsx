import React, { PropTypes } from 'react';

import RadioButtonGroup from './radio-button-group';
import RadioBase from './radio-base';

const RadioSwitch = (props) => {
    const {
        value,
        disabled,
        label,
        switch1Label,
        switch2Label,
        name,
        onChange,
        switch1Value,
        switch2Value,
    } = props;

    return (
        <RadioButtonGroup
            disabled={disabled}
            inline={true}
            name={name}
            label={label}
            onChange={onChange}
        >
            <RadioBase
                checked={value === switch1Value}
                label={switch1Label}
                labelClasses="ffe-radio-switch"
                value={switch1Value}
            />
            <RadioBase
                checked={value === switch2Value}
                label={switch2Label}
                labelClasses="ffe-radio-switch"
                value={switch2Value}
            />
        </RadioButtonGroup>
    );
};

RadioSwitch.propTypes = {
    value: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    switch1Label: PropTypes.string.isRequired,
    switch2Label: PropTypes.string.isRequired,
    name: PropTypes.string,
    onChange: PropTypes.func,
    switch1Value: PropTypes.string.isRequired,
    switch2Value: PropTypes.string.isRequired,
};

export default RadioSwitch;
