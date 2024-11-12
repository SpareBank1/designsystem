import { CalendarProvider } from '../datelogic/CalendarContext';
import React from 'react';
import { DatepickerInner, DatepickerProps } from './DatepickerInner';

export const Datepicker: React.FC<DatepickerProps> = props => {
    return (
        <CalendarProvider initialDate={props.value}>
            <DatepickerInner {...props} />
        </CalendarProvider>
    );
};
