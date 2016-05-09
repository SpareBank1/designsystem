import React, { PropTypes } from 'react';
import hash from 'nfe-hash';

const createID = (label, options) => {
    // Use props only to avoid circular references
    const stringifiedOptions = JSON.stringify(options.map(c => c.props));
    return `Dropdown-${hash(label + stringifiedOptions)}`;
};

function Dropdown({ id,  label, onChange, selectedValue, children }) {
    const domId = id || createID(label, children);

    return  <div className="ffe-input-group" aria-live="polite">
                { label &&
                        <label className="ffe-form-label" htmlFor={ domId }>
                            { label }
                        </label>
                }
                <select
                        className="ffe-select-box"
                        id={ domId }
                        onChange={ onChange }
                        value={ selectedValue }>
                    { children }
                </select>
            </div>;
}

Dropdown.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    selectedValue: PropTypes.string,
    children: PropTypes.array.isRequired
};

export default Dropdown;
