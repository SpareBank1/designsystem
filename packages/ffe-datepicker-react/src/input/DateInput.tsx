import React from 'react';
import classNames from 'classnames';
import i18n from '../i18n/i18n.js';

export interface DateInputProps extends React.ComponentPropsWithRef<'input'> {
    ariaInvalid: string;
    value: string;
    locale: 'nb' | 'nn' | 'en';
}

export const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
    ({ ariaInvalid, value, className, locale = 'nb', ...rest }, ref) => {
        return (
            <input
                {...rest}
                aria-invalid={
                    ariaInvalid as unknown as React.ComponentPropsWithRef<'input'>['aria-invalid']
                }
                maxLength={10}
                ref={ref}
                aria-placeholder={i18n[locale].DATE_FORMAT}
                value={value}
                className={classNames(
                    'ffe-input-field ffe-dateinput__field',
                    className,
                )}
            />
        );
    },
);
