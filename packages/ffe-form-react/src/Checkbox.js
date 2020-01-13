import React, { Fragment } from 'react';
import { bool, node, string, func, oneOfType, shape, object } from 'prop-types';
import { v4 as hash } from 'uuid';
import classNames from 'classnames';

export default function Checkbox(props) {
    const {
        children,
        hiddenLabel,
        inline,
        invalid,
        innerRef,
        label,
        noMargins,
        dark,
        ...rest
    } = props;

    const id = props.id || `checkbox-${hash()}`;
    const labelProps = {
        className: classNames({
            'ffe-checkbox': true,
            'ffe-checkbox--inline': inline,
            'ffe-checkbox--no-margin': noMargins,
            'ffe-checkbox--hidden-label': hiddenLabel,
            'ffe-checkbox--dark': dark,
        }),
        htmlFor: id,
    };

    return (
        <Fragment>
            <input
                className={classNames('ffe-hidden-checkbox', {
                    'ffe-hidden-checkbox--dark': dark,
                })}
                id={id}
                type="checkbox"
                aria-invalid={String(invalid)}
                ref={innerRef}
                {...rest}
            />
            {typeof children === 'function' ? (
                children(labelProps)
            ) : (
                // eslint-disable-next-line jsx-a11y/label-has-for
                <label {...labelProps}>
                    {!hiddenLabel && (label || children)}
                </label>
            )}
        </Fragment>
    );
}

Checkbox.propTypes = {
    /**
     * @deprecated
     * Use `children` instead
     */
    label: string,
    /** Removes vertical margins from the checkbox */
    noMargins: bool,
    /** If you plan to render the checkbox without a visible label */
    hiddenLabel: bool,
    /** Override the automatically generated ID */
    id: string,
    inline: bool,
    /**
     * @deprecated
     * Use `aria-invalid` directly instead
     */
    invalid: bool,
    /** Ref-setting function, or ref created by useRef, passed to the input element */
    innerRef: oneOfType([func, shape({ current: object })]),
    /** The label for the checkbox */
    children: oneOfType([node, func]),
    /** Dark variant */
    dark: bool,
};

Checkbox.defaultProps = {
    inline: true,
    invalid: false,
    dark: false,
};
