import React from 'react';
import { DatepickerProvider } from './DatepickerContext';
import { DatepickerComp, DatepickerCompProps } from './DatepickerComp';
import { Locale } from '../datelogic/types';

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
