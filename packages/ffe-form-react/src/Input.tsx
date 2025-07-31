import React from 'react';
import classNames from 'classnames';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
    /** Input fields default to `display: block;`. Set this to `true` to apply the inline modifier. */
    inline?: boolean;
    /** Make the text right aligned */
    textRightAlign?: boolean;
    prefix?: string;
    suffix?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, inline, textRightAlign, prefix, suffix, ...rest }, ref) => {
        return (
            <div className={classNames(
                'ffe-input-field__wrapper',
                'ffe-default-mode',
                { 'ffe-input-field__wrapper--inline': inline },
                className,
            )}>
                {prefix && (
                    <div className="ffe-input-field__prefix">
                        {prefix}
                    </div>
                )}
                <input
                    className={classNames(
                        'ffe-input-field',
                        'ffe-default-mode',
                        { 'ffe-input-field--text-right-align': textRightAlign },
                    )}
                    ref={ref}
                    {...rest}
                />
                {suffix && (
                    <div className="ffe-input-field__suffix">
                        {suffix}
                    </div>
                )}
                <div className="ffe-input-field__backdrop" />
            </div>
        );
    },
);
