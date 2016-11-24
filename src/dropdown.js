import React, { PropTypes } from 'react';
import hash from 'nfe-hash';

const createID = (label, options) => {
    // Use props only to avoid circular references
    const stringifiedOptions = JSON.stringify(options.map(c => c.props));
    return `Dropdown-${hash(label + stringifiedOptions)}`;
};

function Dropdown(props) {
    const {
        id,
        children,
        className = '',
        containerClassName = '',
        defaultValue,
        errorMessage,
        invalid,
        isLoading,
        label,
        name,
        onChange,
        onBlur,
        selectedValue
    } = props;

    const domId = id || createID(label, children);

    return (
        <div className={`ffe-input-group ${containerClassName}`} aria-live="polite">
            {label &&
                <label className="ffe-form-label ffe-form-label--block" htmlFor={domId}>
                    {label}
                </label>
            }
            <select
                className={`ffe-dropdown ${className}`}
                id={domId}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={selectedValue}
                defaultValue={defaultValue}
                aria-invalid={invalid}
            >
                {children}
            </select>

            {isLoading &&
                <div className="ffe-loading-spinner"></div>
            }

            {errorMessage &&
                <div className="ffe-field-error-message">
                    {errorMessage}
                </div>
            }
        </div>
    );
}

Dropdown.propTypes = {
    id: PropTypes.string,
    children: PropTypes.array,
    className: PropTypes.string,
    containerClassName: PropTypes.string,
    defaultValue: PropTypes.string,
    errorMessage: PropTypes.string,
    invalid: PropTypes.bool,
    isLoading: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    selectedValue: PropTypes.string
};

export default Dropdown;
