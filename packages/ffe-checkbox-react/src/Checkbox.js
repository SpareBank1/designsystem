import React from 'react';
import { bool, node, string } from 'prop-types';
import hash from 'sdbm';
import classNames from 'classnames';

export default function CheckBox(props) {
    const { children, inline, invalid, label, noMargins, ...rest } = props;

    const id = props.id || `checkbox-${hash(rest.name || '')}`;

    return (
        <span>
            <input
                className="ffe-hidden-checkbox"
                id={id}
                type="checkbox"
                aria-invalid={String(invalid)}
                {...rest}
            />
            <label
                className={classNames({
                    'ffe-checkbox': true,
                    'ffe-checkbox--inline': inline,
                    'ffe-checkbox--no-margin': noMargins,
                })}
                htmlFor={id}
            >
                {label || children}
            </label>
        </span>
    );
}

CheckBox.propTypes = {
    /** Name of input field */
    name: string.isRequired,
    /**
     * @deprecated
     * Use `children` instead
     */
    label: string,
    /** Removes vertical margins from the checkbox */
    noMargins: bool,
    /** Override the automatically generated ID */
    id: string,
    inline: bool,
    /**
     * @deprecated
     * Use `aria-invalid` directly instead
     */
    invalid: bool,
    /** The label for the checkbox */
    children: node,
};

CheckBox.defaultProps = {
    inline: true,
    invalid: false,
};
