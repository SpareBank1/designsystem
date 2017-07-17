import React, { Component, PropTypes } from 'react';

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
    'aria-invalid': PropTypes.oneOf(['true', 'false', true, false]),
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    inline: PropTypes.bool,
    invalid: PropTypes.oneOf(['true', 'false', true, false]),
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
    ]).isRequired,
};

export default RadioButton;
