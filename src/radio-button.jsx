import React, { Component, PropTypes } from 'react';
import hash from 'nfe-hash';

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
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    inline: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string.isRequired,
};

export default RadioButton;
