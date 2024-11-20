import React from 'react';
import { DatePickerProvider } from './DatePickerContext';
import { DatePickerComp } from './DatePickerComp';

interface Props {
    locale?: 'nb' | 'nn' | 'en';
}

export const DatePicker: React.FC<Props> = () => {
    return (
        <DatePickerProvider>
            <DatePickerComp />
        </DatePickerProvider>
    );
};
