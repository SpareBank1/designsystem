import React, { useMemo } from 'react';
import classNames from 'classnames';
import i18n from '../i18n/i18n';
import { isIOSSafari } from '../util/isIOSSafari';

export interface DateInputProps extends React.ComponentPropsWithRef<'input'> {
    ariaInvalid: string;
    value: string;
    locale: 'nb' | 'nn' | 'en';
}

export const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
    ({ ariaInvalid, value, className, locale = 'nb', ...rest }, ref) => {
        // VoiceOver on iOS Safari blocks interaction with date-related inputs.
        // Using role="textbox" as a workaround on that platform.
        // https://dev.to/mfranzke/voiceover-bug-on-ios-safari-blocks-date-time-related-inputs-especially-in-react-4f61
        const role = useMemo(() => (isIOSSafari() ? 'textbox' : undefined), []);

        return (
            <input
                type="date"
                role={role}
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
                {...rest}
            />
        );
    },
);
