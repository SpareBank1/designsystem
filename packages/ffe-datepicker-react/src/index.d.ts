import React from 'react';

interface IinputProps {
    className?: string;
    id?: string;
}

export interface DatepickerProps
    extends React.SelectHTMLAttributes<HTMLSelectElement> {
    'aria-invalid'?: string;
    ariaInvalid?: boolean | string;
    calendarAbove?: boolean;
    hideErrors?: boolean;
    onValidationComplete?: Function;
    inputProps?: IinputProps;
    label?: string;
    language?: string;
    maxDate?: string;
    minDate?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onError?: Function;
    value: string;
    keepDisplayStateOnError: boolean;
    fullWidth?: boolean;
}

declare class Datepicker extends React.Component<DatepickerProps, any> {}

export default Datepicker;
