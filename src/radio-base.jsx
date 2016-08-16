import React, { PropTypes } from 'react';
import hash from 'nfe-hash';

const inlined = {
    display: 'inline-block'
};

const RadioBase = ({
    checked,
    children,
    disabled,
    inline,
    label,
    labelClasses,
    name,
    onChange,
    value,
}) => {

    const id = `radio-button-${ hash({ name, value, label, inline }) }`;

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

RadioBase.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    inline: PropTypes.bool,
    label: PropTypes.string,
    labelClasses: PropTypes.string.isRequired,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string.isRequired,
};

export default RadioBase;
