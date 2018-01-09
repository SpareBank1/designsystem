import React from 'react';
import {
    oneOf,
    bool,
    shape,
    node,
    oneOfType,
    string,
    number,
    func
} from 'prop-types';
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
    'aria-invalid': oneOf(['true', 'false', true, false]),
    disabled: bool,
    firstOption: shape({
        label: node.isRequired,
        value: oneOfType([
            string,
            number,
            bool
        ]).isRequired,
    }).isRequired,
    invalid: oneOf(['true', 'false', true, false]),
    label: string,
    lastOption: shape({
        label: node.isRequired,
        value: oneOfType([
            string,
            number,
            bool
        ]).isRequired,
    }).isRequired,
    name: string,
    onChange: func,
    value: oneOfType([
        string,
        number,
        bool
    ]),
};

export default RadioSwitch;
