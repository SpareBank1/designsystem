import React, { Component } from 'react';
import {
    bool,
    func,
    number,
    oneOf,
    oneOfType,
    string
} from 'prop-types';

import RadioBase from './radio-base';

class RadioButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            labelClasses: `ffe-radio-button ${props.inline ? 'ffe-radio-button--inline' : ''}`
        };
    }

    render() {
        return (
            <RadioBase labelClasses={ this.state.labelClasses } {...this.props} />
        );
    }
}

RadioButton.propTypes = {
    'aria-invalid': oneOf(['true', 'false', true, false]),
    checked: bool,
    disabled: bool,
    inline: bool,
    invalid: oneOf(['true', 'false', true, false]),
    label: string,
    name: string,
    onChange: func,
    value: oneOfType([
        string,
        number,
        bool
    ]).isRequired,
};

export default RadioButton;
