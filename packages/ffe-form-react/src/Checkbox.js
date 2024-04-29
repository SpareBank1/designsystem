import React from 'react';
import { bool, node, string, func, oneOfType } from 'prop-types';
import { v4 as uuid } from 'uuid';
import classNames from 'classnames';

const Checkbox = React.forwardRef(
    (
        {
            children,
            hiddenLabel,
            inline = true,
            noMargins,
            id = `checkbox-${uuid()}`,
            ...rest
        },
        ref,
    ) => {
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
            <>
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
                        <span
                            className={classNames('ffe-checkbox__content', {
                                'ffe-screenreader-only': hiddenLabel,
                            })}
                        >
                            {children}
                        </span>
                    </label>
                )}
            </>
        );
    },
);

Checkbox.propTypes = {
    /** Removes vertical margins from the checkbox */
    noMargins: bool,
    /** If you plan to render the checkbox without a visible label */
    hiddenLabel: bool,
    /** Override the automatically generated ID */
    id: string,
    inline: bool,
    /** The label for the checkbox */
    children: oneOfType([node, func]).isRequired,
};

export default Checkbox;
