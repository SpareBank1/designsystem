import * as React from 'react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

type AriaInvalid = boolean | 'false' | 'true' | 'grammar' | 'spelling';

export interface DatepickerProps {
    'aria-invalid'?: AriaInvalid;
    ariaInvalid?: AriaInvalid;
    calendarAbove?: boolean;
    hideErrors?: boolean;
    onValidationComplete?: Function;
    inputProps?: InputProps;
    label?: string;
    language?: string;
    maxDate?: string;
    minDate?: string;
    onChange: (value: string) => void;
    onError?: (event: React.SyntheticEvent<HTMLInputElement, Event>) => void;
    value: string;
    keepDisplayStateOnError: boolean;
    fullWidth?: boolean;
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
