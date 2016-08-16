import React, { PropTypes } from 'react';
import hash from 'nfe-hash';

import RadioBase from './radio-base';

const RadioButton = (props) => {
    const labelClasses = `ffe-radio-button ${ props.inline ? 'ffe-radio-button--inline' : '' }`;

    return (
        <RadioBase labelClasses={ labelClasses } {...props} />
    );
};

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
