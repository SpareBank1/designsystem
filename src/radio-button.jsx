import React, { PropTypes } from 'react';
import hash from 'nfe-hash';

const inlined = {
    display: 'inline-block'
};

const RadioButton = ({ name, value, label, onChange, inline, checked, disabled, children }) => {

    const id = `radio-button-${ hash({ name, value, label, inline }) }`;
    const labelClasses = `ffe-radio-button ${ inline ? 'ffe-radio-button--inline' : '' }`;

    return (
        <div style={ inline ? inlined : {} }>
            <input type="radio"
                   className="ffe-radio-input"
                   name={ name }
                   value={ value }
                   id={ id }
                   checked={ checked }
                   disabled={ disabled }
                   onChange={ onChange }
            />
            <label className={ labelClasses } htmlFor={ id }>
                { label || children }
            </label>
        </div>
    );
};

RadioButton.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
    name: PropTypes.string,
    inline: PropTypes.bool,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
};

export default RadioButton;
