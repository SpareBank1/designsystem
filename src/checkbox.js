import React from 'react';
import {
    array,
    bool,
    func,
    string,
} from 'prop-types';
import hash from 'nfe-hash';
import classNames from 'classnames';

export default function CheckBox(props) {
    const {
        children,
        label,
        noMargins,
        inline,
        invalid,
        ...rest
    } = props;

    const id = `checkbox-${hash(rest.name)}`;

    return (
        <span>
            <input
                className="ffe-hidden-checkbox"
                id={id}
                type="checkbox"
                aria-invalid={String(!!invalid)}
                {...rest}
            />
            <label
                className={classNames({
                    'ffe-checkbox': true,
                    'ffe-checkbox--inline': inline,
                    'ffe-checkbox--no-margin': noMargins
                })}
                htmlFor={id}
            >
                {label || children}
            </label>
        </span>);
}

CheckBox.propTypes = {
    name: string.isRequired,
    label: string.isRequired,
    onChange: func,
    checked: bool,
    noMargins: bool,
    inline: bool,
    invalid: bool,
    children: array,
};

CheckBox.defaultProps = {
    noMargins: false,
    inline: true,
    invalid: false
};
