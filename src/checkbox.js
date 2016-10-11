import React, { PropTypes } from 'react';
import hash from 'nfe-hash';
import classNames from 'classnames';

export default function CheckBox({ name, label, onChange, checked, children, noMargins, isTabbable }) {
    const id = `checkbox-${hash(name)}`;
    const classes = classNames({
        'ffe-checkbox': true,
        'ffe-checkbox--inline': true,
        'ffe-checkbox--no-margin': noMargins
    });

    return  <span>
                <input
                    onChange={() => onChange(!checked) }
                    className="ffe-hidden-checkbox"
                    type="checkbox"
                    checked={checked}
                    name={name}
                    id={id}
                    {... isTabbable === false ? { tabIndex: '-1' } : {}}
                />
                <label className={ classes } htmlFor={id}>
                    {label || children}
                </label>
            </span>;
}

CheckBox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    noMargins: PropTypes.bool,
    children: PropTypes.array,
    isTabbable: PropTypes.bool
};

CheckBox.defaultProps = {
    isTabbable: true
};
