import React from 'react';
import { Locale } from '../datelogic/types';
import { DatepickerComp, DatepickerCompProps } from './DatepickerComp';
import { DatepickerProvider } from './DatepickerContext';

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
