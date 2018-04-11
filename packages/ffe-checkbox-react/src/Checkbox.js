import React from 'react';
import { bool, node, string, func } from 'prop-types';
import { v4 as hash } from 'uuid';
import classNames from 'classnames';

export default function CheckBox(props) {
    const { children, inline, invalid, label, noMargins, onClick, stopPropagation, ...rest } = props;

    const id = props.id || `checkbox-${hash()}`;

    const onClickInput = event => {
        if (stopPropagation) {
            event.stopPropagation();
        }
        onClick(event);
    };

    return (
        <span>
            <input
                className="ffe-hidden-checkbox"
                id={id}
                type="checkbox"
                aria-invalid={String(invalid)}
                onClick={ onClickInput }
                {...rest}
            />
            <label
                className={classNames({
                    'ffe-checkbox': true,
                    'ffe-checkbox--inline': inline,
                    'ffe-checkbox--no-margin': noMargins,
                })}
                htmlFor={id}
                role="presentation"
                onClick={ event => { if (stopPropagation) { event.stopPropagation() } } }
            >
                {label || children}
            </label>
        </span>
    );
}

CheckBox.propTypes = {
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
    onClick: func,
    /** Stops onClick from bubbling from the checkbox/label */
    stopPropagation: bool,
};

CheckBox.defaultProps = {
    inline: true,
    invalid: false,
    onClick: () => {},
    stopPropagation: false,
};
