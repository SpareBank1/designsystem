import React from 'react';
import classNames from 'classnames';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
    /** Input fields default to `display: block;`. Set this to `true` to apply the inline modifier. */
    inline?: boolean;
    /** Make the text right aligned */
    textRightAlign?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, inline, textRightAlign, ...rest }, ref) => {
        return (
            <input
                className={classNames(
                    'ffe-input-field',
                    { 'ffe-input-field--inline': inline },
                    { 'ffe-input-field--text-right-align': textRightAlign },
                    className,
                )}
                ref={ref}
                {...rest}
            />
        );
    },
);
