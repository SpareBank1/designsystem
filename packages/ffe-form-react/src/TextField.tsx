import React from 'react';
import classNames from 'classnames';

export interface TextFieldProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'prefix' | 'suffix'> {
    /** Text fields default to `display: block;`. Set this to `true` to apply the inline modifier. */
    inline?: boolean;
    /** Make the text right aligned */
    textRightAlign?: boolean;
    /** Add a prefix inside the input */
    prefix?: React.ReactNode;
    /** Add a suffix inside the input */
    suffix?: React.ReactNode;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
    ({ className, inline, textRightAlign, prefix, suffix, ...rest }, ref) => {
        return (
            <div className={classNames(
                'ffe-text-field__wrapper',
                'ffe-default-mode',
                { 'ffe-text-field__wrapper--inline': inline },
                className,
            )}>
                {prefix && (
                    <div className="ffe-text-field__prefix">
                        {prefix}
                    </div>
                )}
                <input
                    className={classNames(
                        'ffe-text-field',
                        'ffe-default-mode',
                        { 'ffe-text-field--text-right-align': textRightAlign },
                    )}
                    ref={ref}
                    {...rest}
                />
                {suffix && (
                    <div className="ffe-text-field__suffix">
                        {suffix}
                    </div>
                )}
            </div>
        );
    },
);
