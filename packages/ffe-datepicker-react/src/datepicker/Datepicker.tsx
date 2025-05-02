import React from 'react';
import { Locale } from '../datelogic/types.js';
import { DatepickerComp, DatepickerCompProps } from './DatepickerComp.js';
import { DatepickerProvider } from './DatepickerContext.js';

export interface DatepickerProps extends DatepickerCompProps {
    value: string;
    locale: Locale;
}

export const Datepicker: React.FC<DatepickerProps> = ({
    locale = 'nb' as const,
    value,
    ...props
}: DatepickerProps) => {
    return (
        <DatepickerProvider locale={locale} value={value}>
            <DatepickerComp {...props} />
        </DatepickerProvider>
    );
};
