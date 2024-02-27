import * as React from 'react';

export type InputProps = React.ComponentProps<'input'>;

type AriaInvalid = boolean | 'false' | 'true' | 'grammar' | 'spelling';

export type DatePickerErrorType =
    | 'INVALID_DATE_FORMAT'
    | 'INVALID_DATE'
    | 'MAX_DATE'
    | 'MIN_DATE';

export interface DatepickerProps {
    'aria-invalid'?: AriaInvalid;
    ariaInvalid?: AriaInvalid;
    calendarAbove?: boolean;
    hideErrors?: boolean;
    onValidationComplete?: Function;
    inputProps?: InputProps;
    label?: string;
    language?: 'nb' | 'en' | 'nn';
    maxDate?: string;
    minDate?: string;
    onChange: (value: string) => void;
    onError?: (type: DatePickerErrorType, errorText: string) => void;
    value: string;
    keepDisplayStateOnError?: boolean;
    fullWidth?: boolean;
    innerRef?: React.Ref<HTMLInputElement>;
}

declare class Datepicker extends React.Component<DatepickerProps, any> {}

export interface DateInputProps {
    'aria-invalid'?: AriaInvalid;
    ariaInvalid?: AriaInvalid;
    fullWidth?: boolean;
    inputProps?: InputProps;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    value: string;
}

declare class DateInput extends React.Component<DateInputProps, any> {}

export { DateInput };

export default Datepicker;
