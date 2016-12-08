import React, { PropTypes } from 'react';
import hash from 'nfe-hash';
import classNames from 'classnames';

export default function CheckBox(props) {
    const {
        children,
        label,
        noMargins,
        onChange,
        ...rest,
    } = props;

    const id = `checkbox-${hash(rest.name)}`;

    return (
        <span>
            <input
                onChange={onChange || (f => f)}
                className="ffe-hidden-checkbox"
                id={id}
                type="checkbox"
                {...rest}
            />
            <label
                className={classNames({
                    'ffe-checkbox': true,
                    'ffe-checkbox--inline': true,
                    'ffe-checkbox--no-margin': noMargins
                })}
                htmlFor={id}
            >
                {label || children}
            </label>
        </span>);
}

CheckBox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    noMargins: PropTypes.bool,
    children: PropTypes.array,
};
