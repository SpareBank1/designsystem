import React from 'react';
import {
    string,
    array,
    bool,
    func
} from 'prop-types';
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
    id: string,
    children: array,
    className: string,
    containerClassName: string,
    defaultValue: string,
    errorMessage: string,
    invalid: bool,
    isLoading: bool,
    label: string,
    name: string,
    onChange: func.isRequired,
    onBlur: func,
    selectedValue: string,
    autoFocus: bool
};

export default Dropdown;
