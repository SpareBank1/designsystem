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
    /** @deprecated as part of update to Semantic Colors
     *
     * Use the `ffe-accent-color` class on the component or on the container of the component instead
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    onColoredBg?: never;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    (
        {
            children,
            hiddenLabel,
            inline = true,
            noMargins,
            id,
            checked,
            onChange,
            disabled,
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
                    disabled={disabled}
                    onChange={!disabled ? onChange : undefined}
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
