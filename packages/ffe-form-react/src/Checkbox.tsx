import React, { useRef } from 'react';
import { v4 as uuid } from 'uuid';
import classNames from 'classnames';

export interface CheckboxProps
    extends Omit<React.ComponentPropsWithoutRef<'input'>, 'children'> {
    /** Removes vertical margins from the checkbox */
    noMargins?: boolean;
    /** If you plan to render the checkbox without a visible label */
    hiddenLabel?: boolean;
    inline?: boolean;
    children:
        | React.ReactNode
        | ((labelProps: {
              className: string;
              htmlFor: string;
          }) => React.ReactNode);
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ children, hiddenLabel, inline = true, noMargins, id, ...rest }, ref) => {
        const generatedId = useRef(id ?? `checkbox-${uuid()}`).current;
        const labelProps = {
            className: classNames({
                'ffe-checkbox': true,
                'ffe-checkbox--inline': inline,
                'ffe-checkbox--no-margin': noMargins,
                'ffe-checkbox--hidden-label': hiddenLabel,
            }),
            htmlFor: generatedId,
        };

        return (
            <>
                <input
                    ref={ref}
                    className="ffe-hidden-checkbox"
                    id={generatedId}
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
