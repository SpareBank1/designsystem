import React, { PropTypes } from 'react';
import hash from 'nfe-hash';

export default function CheckBox({ name, label, onChange, checked, children }) {
    const id = `checkbox-${hash(name)}`;

    return  <span>
                <input 
                    onChange={() => onChange(!checked) }
                    className="ffe-hidden-checkbox"
                    type="checkbox"
                    checked={checked}
                    name={name}
                    id={id}
                />
                <label className="ffe-checkbox ffe-checkbox--inline" htmlFor={id}>
                    {label || children}
                </label>
            </span>;
}

CheckBox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    checked: PropTypes.bool
};