import React, { PropTypes } from 'react';
import hash from 'nfe-hash';

const createID = (label, options) => {
    // Use props only to avoid circular references
    const stringifiedOptions = JSON.stringify(options.map(c => c.props));
    return `Dropdown-${hash(label + stringifiedOptions)}`;
};

function Dropdown({ id,  label, onChange, selectedValue, defaultValue, children, invalid, errorMessage }) {
    const domId = id || createID(label, children);

    return  <div className="ffe-input-group" aria-live="polite">
                { label &&
                        <label className="ffe-form-label" htmlFor={ domId }>
                            { label }
                        </label>
                }
                <select
                        className="ffe-dropdown"
                        id={ domId }
                        onChange={ onChange }
                        value={ selectedValue }
                        defaultValue={ defaultValue }
                        aria-invalid={ invalid }
                >
                    { children }
                </select>
                {!errorMessage ? null :
                    <div className="ffe-info-message ffe-info-message--error">
                        { errorMessage }
                    </div>
                }
            </div>;
}

Dropdown.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    selectedValue: PropTypes.string,
    defaultValue: PropTypes.string,
    children: PropTypes.array,
    invalid: PropTypes.bool
};

export default Dropdown;
