import * as React from 'react';

export interface CheckboxProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * @deprecated
     * Use `children` instead
     */
    label?: string;
    noMargins?: boolean;
    hiddenLabel?: boolean;
    id?: string;
    inline?: boolean;
    innerRef?: React.Ref<T>;
    /**
     * @deprecated
     * Use `aria-invalid` directly instead
     */
    invalid?: boolean;
    children?: React.ReactNode;
    dark?: boolean;
}

export interface BaseFieldMessageProps
    extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    element?: string;
}

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    inline?: boolean;
    textLike?: boolean;
    dark?: boolean;
}

export interface PhoneNumberProps {
    number?: string;
    countryCode?: string;
    onCountryCodeChange?: React.FormEventHandler<HTMLInputElement>;
    onNumberChange?: React.FormEventHandler<HTMLInputElement>;
    onCountryCodeBlur?: React.FocusEventHandler<HTMLInputElement>;
    onNumberBlur?: React.FocusEventHandler<HTMLInputElement>;
    locale?: string;
    disabled?: boolean;
    countryCodeInvalid?: boolean;
    numberInvalid?: boolean;
    className?: string;
    dark?: boolean;
    countryCodeRef?: React.Ref<T>;
    numberRef?: React.Ref<T>;
}

export interface LabelProps
    extends React.LabelHTMLAttributes<HTMLLabelElement> {
    block?: boolean;
    children: React.ReactNode;
    className?: string;
    htmlFor?: string;
    dark?: boolean;
}

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    inputId?: string;
    /** Unless you only have one element in your `InputGroup` you will have to use the function-as-a-child pattern. */
    children: React.ReactNode;
    className?: string;
    extraMargin?: boolean;
    fieldMessage?: string | React.ReactNode;
    description?: string;
    label?: string | React.ReactNode;
    labelId?: string;
    onTooltipToggle?: (e: React.MouseEvent | undefined) => void;
    tooltip?: React.ReactNode;
}

export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
    'aria-controls'?: string;
    children?: React.ReactNode;
    className?: string;
    isOpen?: boolean;
    onClick: (e: React.MouseEvent | undefined) => void;
    tabIndex?: number;
    dark?: boolean;
}

export interface RadioBlockProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    checked?: boolean;
    children?: React.ReactNode;
    className?: string;
    /* Support for the dark theme has not been added for this component
     * but can still be passed down from a parent `RadioButtonInputGroup`.
     * It should not be passed down manually unless support for dark theme
     * is implemented.
     */
    dark?: boolean;
    label: string | React.ReactNode;
    labelClass?: string;
    name: string;
    selectedValue?: string;
    showChildren?: boolean;
    value: string;
}

// As value has a different type than InputHTMLAttributes<T> we have to weaken it
interface WeakInputAttributes
    extends React.InputHTMLAttributes<HTMLInputElement> {
    value: any;
}

export interface RadioButtonProps extends WeakInputAttributes {
    checked?: boolean;
    children: React.ReactNode;
    className?: string;
    labelProps?: object;
    inline?: boolean;
    name: string;
    selectedValue?: boolean | string | number;
    tooltip?: string;
    tooltipProps?: TooltipProps;
    value: boolean | string | number;
    dark?: boolean;
}

export interface RadioButtonInputGroupProps
    extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
    children: React.ReactNode;
    className?: string;
    description?: string;
    extraMargin?: boolean;
    fieldMessage?: string | React.ReactNode;
    inline?: boolean;
    label?: string | React.ReactNode;
    name?: string;
    onChange?: React.FormEventHandler<HTMLElement>;
    selectedValue?: string | boolean | number;
    tooltip?: string | React.ReactNode;
    dark?: boolean;
}

export interface RadioSwitchProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    checked?: boolean;
    children: React.ReactNode;
    className?: string;
    labelProps?: object;
    leftLabel: string;
    leftValue: boolean | string | number;
    rightLabel: string;
    rightValue: boolean | string | number;
    name: string;
    selectedValue?: boolean | string | number;
    tooltip?: string;
    tooltipProps?: TooltipProps;
    condensed?: boolean;
    dark?: boolean;
}

export interface TextAreaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    dark?: boolean;
}

declare class Checkbox extends React.Component<CheckboxProps, any> {}
declare class ErrorFieldMessage extends React.Component<
    BaseFieldMessageProps,
    any
> {}
declare class InfoFieldMessage extends React.Component<
    BaseFieldMessageProps,
    any
> {}
declare class SuccessFieldMessage extends React.Component<
    BaseFieldMessageProps,
    any
> {}
declare class Input extends React.Component<InputProps, any> {}
declare class PhoneNumber extends React.Component<PhoneNumberProps, any> {}
declare class Label extends React.Component<LabelProps, any> {}
declare class InputGroup extends React.Component<InputGroupProps, any> {}
declare class Tooltip extends React.Component<TooltipProps, any> {}
declare class RadioBlock extends React.Component<RadioBlockProps, any> {}
declare class RadioButton extends React.Component<RadioButtonProps, any> {}
declare class RadioButtonInputGroup extends React.Component<
    RadioButtonInputGroupProps,
    any
> {}
declare class RadioSwitch extends React.Component<RadioSwitchProps, any> {}
declare class TextArea extends React.Component<TextAreaProps, any> {}
