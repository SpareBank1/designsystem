import React, { PropTypes } from 'react';
import hash from 'nfe-hash';

const createID = (label, options) => {
    // Use props only to avoid circular references
    const stringifiedOptions = JSON.stringify(options.map(c => c.props));
    return `Dropdown-${hash(label + stringifiedOptions)}`;
};

export default function Dropdown({ label, onChange, selectedValue, children }) {
    const id = createID(label, children);

    return  <div className="ffe-input-group" aria-live="polite">
                <label className="ffe-form-label" htmlFor={ id }>
                    { label }
                </label>
                <select 
                        className="ffe-select-box" 
                        id={ id } 
                        onChange={ onChange } 
                        value={ selectedValue }>
                    { children }
                </select>
            </div>;
}

Dropdown.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    selectedValue: PropTypes.string,
    children: PropTypes.array.isRequired
};