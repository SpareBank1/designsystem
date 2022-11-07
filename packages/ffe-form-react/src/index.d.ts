import * as React from 'react';

export interface CheckboxProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'children'> {
    noMargins?: boolean;
    hiddenLabel?: boolean;
    id?: string;
    inline?: boolean;
    children?:
        | React.ReactNode
        | ((labelProps: {
              className: string;
              htmlFor: string;
          }) => React.ReactNode);
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
    countryCodeFieldMessage?: string | React.ReactNode;
    numberFieldMessage?: string | React.ReactNode;
    countryCodeAndNumberFieldMessage?: string | React.ReactNode;
    className?: string;
    extraMargin?: boolean;
    countryCodeRef?: React.Ref<HTMLInputElement>;
    numberRef?: React.Ref<HTMLInputElement>;
}

export interface LabelProps
    extends React.LabelHTMLAttributes<HTMLLabelElement> {
    block?: boolean;
    children: React.ReactNode;
    className?: string;
    htmlFor?: string;
}

export interface InputGroupProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    inputId?: string;
    /** Unless you only have one element in your `InputGroup` you will have to use the function-as-a-child pattern. */
    children:
        | React.ReactNode
        | ((extraProps: {
              id: string;
              'aria-invalid': 'true' | 'false';
              'aria-describedby': string;
          }) => React.ReactNode);
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
    onClick?: (e: React.MouseEvent | undefined) => void;
    tabIndex?: number;
    ref?: React.ForwardedRef<HTMLButtonElement>;
}

export interface RadioBlockProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    checked?: boolean;
    children?: React.ReactNode;
    className?: string;
    innerRef?: React.Ref<HTMLInputElement>;
    label: string | React.ReactNode;
    labelClass?: string;
    name: string;
    selectedValue?: boolean | string | number | null;
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
    labelProps?: {};
    inline?: boolean;
    innerRef?: React.Ref<HTMLElement>;
    name: string;
    selectedValue?: boolean | string | number | null;
    tooltip?: string;
    tooltipProps?: TooltipProps;
    value: boolean | string | number;
}

// As onChange has a different type than React.FieldsetHTMLAttributes<T> we have to weaken it
interface WeakFieldSetAttributes
    extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
    onChange?: any;
}

export interface RadioButtonInputGroupProps
    extends Omit<WeakFieldSetAttributes, 'children'> {
    children:
        | React.ReactNode
        | ((inputProps: {
              'aria-invalid'?: 'true' | 'false';
              inline?: boolean;
              name: string;
              onChange: (...args: any) => any;
              selectedValue?: boolean | string | number | null;
          }) => React.ReactNode);
    className?: string;
    description?: string | React.ReactNode;
    extraMargin?: boolean;
    fieldMessage?: string | React.ReactNode;
    inline?: boolean;
    label?: string | React.ReactNode;
    name: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    selectedValue?: string | boolean | number | null;
    tooltip?: string | React.ReactNode;
}

export interface RadioSwitchProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    checked?: boolean;
    className?: string;
    labelProps?: {};
    leftLabel: string;
    leftValue: boolean | string | number;
    leftInnerRef?: React.Ref<HTMLInputElement>;
    rightLabel: string;
    rightValue: boolean | string | number;
    rightInnerRef?: React.Ref<HTMLInputElement>;
    name: string;
    selectedValue?: boolean | string | number | null;
    tooltip?: string;
    tooltipProps?: TooltipProps;
    condensed?: boolean;
}

export interface TextAreaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
}

export interface ToggleSwitchProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode;
    className?: string;
    locale?: 'nb' | 'nn' | 'en';
    id?: string;
    description?: string;
    onText?: string;
    offText?: string;
    hideOnOff?: boolean;
    value?: string;
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
declare class ToggleSwitch extends React.Component<ToggleSwitchProps, any> {}
declare class RadioBlock extends React.Component<RadioBlockProps, any> {}
declare class RadioButton extends React.Component<RadioButtonProps, any> {}
declare class RadioButtonInputGroup extends React.Component<
    RadioButtonInputGroupProps,
    any
> {}
declare class RadioSwitch extends React.Component<RadioSwitchProps, any> {}
declare class TextArea extends React.Component<TextAreaProps, any> {}
