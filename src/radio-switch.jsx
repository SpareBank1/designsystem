import React, { PropTypes } from 'react';

import RadioButtonGroup from './radio-button-group';
import RadioBase from './radio-base';

const RadioSwitch = (props) => {
    const {
        'aria-invalid': ariaInvalid,
        firstOption,
        invalid,
        lastOption,
        value,
        ...rest
    } = props;

    return (
        <RadioButtonGroup inline={true} {...rest}>
            <RadioBase
                aria-invalid={ariaInvalid}
                checked={value === firstOption.value}
                invalid={invalid}
                label={firstOption.label}
                labelClasses="ffe-radio-switch"
                value={firstOption.value}
                style={ { marginRight: '5px' } }
            />
            <RadioBase
                aria-invalid={ariaInvalid}
                checked={value === lastOption.value}
                invalid={invalid}
                label={lastOption.label}
                labelClasses="ffe-radio-switch"
                value={lastOption.value}
            />
        </RadioButtonGroup>
    );
};

RadioSwitch.propTypes = {
    'aria-invalid': PropTypes.oneOf(['true', 'false', true, false]),
    disabled: PropTypes.bool,
    firstOption: PropTypes.shape({
        label: PropTypes.node.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool
        ]).isRequired,
    }).isRequired,
    invalid: PropTypes.oneOf(['true', 'false', true, false]),
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
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
    ]),
};

export default RadioSwitch;
