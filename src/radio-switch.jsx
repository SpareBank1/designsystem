import React, { PropTypes } from 'react';

import RadioButtonGroup from './radio-button-group';
import RadioBase from './radio-base';

const RadioSwitch = (props) => {
    const {
        value,
        disabled,
        label,
        firstOption,
        lastOption,
        name,
        onChange,
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
    value: PropTypes.string,
    disabled: PropTypes.bool,
    firstOption: PropTypes.shape({
        label: PropTypes.node.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.boolean
        ]).isRequired,
    }).isRequired,
    label: PropTypes.string,
    lastOption: PropTypes.shape({
        label: PropTypes.node.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.boolean
        ]).isRequired,
    }).isRequired,
    name: PropTypes.string,
    onChange: PropTypes.func,
};

export default RadioSwitch;
