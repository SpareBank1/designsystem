import React, { useEffect, useId, useMemo, useRef } from 'react';
import classNames from 'classnames';
import { mergeRefs } from './mergeRefs';

export interface CheckboxProps
    extends Omit<React.ComponentPropsWithoutRef<'input'>, 'children'> {
    /** Removes vertical margins from the checkbox */
    noMargins?: boolean;
    /** If you plan to render the checkbox without a visible label */
    hiddenLabel?: boolean;
    /** Display inline */
    inline?: boolean;
    /** Shows the checkbox in a mixed state, for when it represents a set of
     * checkboxes where only some are checked. Sets the `indeterminate` DOM
     * property on the input, which is what makes screen readers announce the
     * mixed state. Does not change `checked`. */
    indeterminate?: boolean;
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
            indeterminate,
            onChange,
            disabled,
            ...rest
        },
        ref,
    ) => {
        const generatedId = useId();
        const inputId = id ?? generatedId;
        const innerRef = useRef<HTMLInputElement>(null);
        const mergedRef = useMemo(() => mergeRefs([innerRef, ref]), [ref]);

        /* `indeterminate` finnes bare som DOM-egenskap, ikke som attributt, så
         * den må settes imperativt. Ingen dep-array: nettleseren nullstiller
         * egenskapen når brukeren klikker på checkboxen, så den må settes på
         * nytt hver render for ikke å bli stille utdatert. */
        useEffect(() => {
            if (innerRef.current) {
                innerRef.current.indeterminate = !!indeterminate;
            }
        });
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
                    ref={mergedRef}
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
