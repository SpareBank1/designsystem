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
        errorMessage,
        invalid,
        isLoading,
        label,
        selectedValue,
        ...rest
    } = props;

    const domId = id || createID(label, children);

    return (
        <div className={`ffe-input-group ${containerClassName}`}>
            {label &&
                <label className="ffe-form-label ffe-form-label--block" htmlFor={domId}>
                    {label}
                </label>
            }
            <select
                className={`ffe-dropdown ${className}`}
                id={domId}
                value={selectedValue}
                aria-invalid={invalid}
                {...rest}
            >
                {children}
            </select>

            {isLoading &&
                <div className="ffe-loading-spinner"/>
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
    selectedValue: PropTypes.string,
    autoFocus: PropTypes.bool
};

export default Dropdown;
