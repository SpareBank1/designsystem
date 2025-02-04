import React, { useId } from 'react';
import classNames from 'classnames';

export interface CheckboxProps
    extends Omit<React.ComponentPropsWithoutRef<'input'>, 'children'> {
    /** Removes vertical margins from the checkbox */
    noMargins?: boolean;
    /** If you plan to render the checkbox without a visible label */
    hiddenLabel?: boolean;
    /** Display inline */
    inline?: boolean;
    children:
        | React.ReactNode
        | ((labelProps: {
              className: string;
              htmlFor: string;
          }) => React.ReactNode);
    /**@deprecated Adds alternative styling for better contrast on certain backgrounds */
    onColoredBg?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    (
        {
            children,
            hiddenLabel,
            inline = true,
            noMargins,
            id,
            onColoredBg,
            checked,
            ...rest
        },
        ref,
    ) => {
        const generatedId = useId();
        const inputId = id ?? generatedId;
        const labelProps = {
            className: classNames({
                'ffe-checkbox': true,
                'ffe-checkbox--inline': inline,
                'ffe-checkbox--no-margin': noMargins,
                'ffe-checkbox--hidden-label': hiddenLabel,
            }),
            htmlFor: inputId,
        };

        return (
            <>
                <input
                    ref={ref}
                    className="ffe-hidden-checkbox"
                    id={inputId}
                    type="checkbox"
                    checked={checked}
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
