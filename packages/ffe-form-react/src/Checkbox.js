import React, { Fragment } from 'react';
import { bool, node, string, func, oneOfType } from 'prop-types';
import { v4 as hash } from 'uuid';
import classNames from 'classnames';

const Checkbox = React.forwardRef((props, ref) => {
    const { children, hiddenLabel, inline, noMargins, ...rest } = props;

    const id = props.id || `checkbox-${hash()}`;
    const labelProps = {
        className: classNames({
            'ffe-checkbox': true,
            'ffe-checkbox--inline': inline,
            'ffe-checkbox--no-margin': noMargins,
            'ffe-checkbox--hidden-label': hiddenLabel,
        }),
        htmlFor: id,
    };

    return (
        <Fragment>
            <input
                ref={ref}
                className="ffe-hidden-checkbox"
                id={id}
                type="checkbox"
                {...rest}
            />
            {typeof children === 'function' ? (
                children(labelProps)
            ) : (
                // eslint-disable-next-line jsx-a11y/label-has-for
                <label {...labelProps}>
                    <span className="ffe-checkbox__content">
                        {!hiddenLabel && children}
                    </span>
                </label>
            )}
        </Fragment>
    );
});

Checkbox.propTypes = {
    /** Removes vertical margins from the checkbox */
    noMargins: bool,
    /** If you plan to render the checkbox without a visible label */
    hiddenLabel: bool,
    /** Override the automatically generated ID */
    id: string,
    inline: bool,
    /** The label for the checkbox */
    children: oneOfType([node, func]),
};

Checkbox.defaultProps = {
    inline: true,
};

export default Checkbox;
