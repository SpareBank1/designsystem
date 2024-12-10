import React from 'react';
import { DatepickerProvider } from '../datelogic/DatepickerContext';
import { DatepickerComp, DatepickerProps } from './DatepickerComp';
import { Locale } from '../datelogic/types';

export interface DatepickerProviderProps extends DatepickerProps {
    value: string;
    locale: Locale;
}
export const Datepicker: React.FC<DatepickerProviderProps> = ({
    locale = 'nb',
    value,
    ...props
}: DatepickerProviderProps) => {
    return (
        <DatepickerProvider locale={locale} value={value}>
            <DatepickerComp {...props} />
        </DatepickerProvider>
    );
};
