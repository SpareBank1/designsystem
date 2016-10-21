import React, { PropTypes } from 'react';

import RadioButtonGroup from './radio-button-group';
import RadioBase from './radio-base';

const RadioSwitch = (props) => {
    const {
        value,
        disabled,
        firstOption,
        invalid,
        label,
        lastOption,
        name,
        onChange,
    } = props;

    return (
        <RadioButtonGroup
            disabled={disabled}
            inline={true}
            invalid={invalid}
            name={name}
            label={label}
            onChange={onChange}
        >
            <RadioBase
                checked={value === firstOption.value}
                label={firstOption.label}
                labelClasses="ffe-radio-switch"
                value={firstOption.value}
                style={ { marginRight: '5px' } }
            />
            <RadioBase
                checked={value === lastOption.value}
                label={lastOption.label}
                labelClasses="ffe-radio-switch"
                value={lastOption.value}
            />
        </RadioButtonGroup>
    );
};

RadioSwitch.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
    ]),
    disabled: PropTypes.bool,
    firstOption: PropTypes.shape({
        label: PropTypes.node.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool
        ]).isRequired,
    }).isRequired,
    invalid: PropTypes.bool,
    label: PropTypes.string,
    lastOption: PropTypes.shape({
        label: PropTypes.node.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool
        ]).isRequired,
    }).isRequired,
    name: PropTypes.string,
    onChange: PropTypes.func,
};

export default RadioSwitch;
