import React, { PropTypes } from 'react';

export default function CheckBox({ name, label, onChange}) {
    return (
        <fieldset>
            <input onChange={onChange}
                className="ffe-hidden-checkbox"
                type="checkbox"
                name={name}
                id={`${name}-id`}
            />
            <label className="ffe-check-box" htmlFor={`${name}-id`}>
                {label}
            </label>
        </fieldset>
    );
}

CheckBox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};