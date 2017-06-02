import React, { PropTypes } from 'react';
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
                {...rest}
                aria-invalid={String(!!invalid)}
            />
            <label
                className={classNames({
                    'ffe-checkbox': true,
                    'ffe-checkbox--inline': inline,
                    'ffe-checkbox--invalid': invalid,
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
    inline: PropTypes.bool,
    invalid: PropTypes.bool,
    children: PropTypes.array,
};

CheckBox.defaultProps = {
    noMargins: false,
    inline: true,
    invalid: false
};
