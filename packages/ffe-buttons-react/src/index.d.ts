import * as React from 'react';

export type MinimalBaseButtonProps<ExtraProps> = React.HTMLProps<HTMLElement> &
    ExtraProps & {
        className?: string;
        element?: HTMLElement | string | React.ElementType;
        innerRef?: React.Ref<HTMLElement>;
    };

export interface BaseButtonProps<ExtraProps>
    extends MinimalBaseButtonProps<ExtraProps> {
    children?: React.ReactNode;
    ariaLoadingMessage?: string;
    condensed?: boolean;
    disabled?: boolean;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export interface ActionButtonProps<ExtraProps>
    extends BaseButtonProps<ExtraProps> {
    ghost?: boolean;
}

export interface BackButtonProps<ExtraProps>
    extends MinimalBaseButtonProps<ExtraProps> {
    children?: React.ReactNode;
}

export interface ButtonGroupProps {
    className?: string;
    thin?: boolean;
    inline?: boolean;
}

export interface ExpandButtonProps<ExtraProps>
    extends MinimalBaseButtonProps<ExtraProps> {
    children: React.ReactNode;
    closeLabel?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    isExpanded: boolean;
    onClick: (e: React.MouseEvent | undefined) => void;
}

export interface InlineExpandButtonProps<ExtraProps>
    extends MinimalBaseButtonProps<ExtraProps> {
    children?: React.ReactNode;
    innerRef?: React.Ref<HTMLElement>;
    isExpanded: boolean;
    onClick: (e: React.MouseEvent | undefined) => void;
}

export interface PrimaryButtonProps<ExtraProps>
    extends BaseButtonProps<ExtraProps> {}

export interface SecondaryButtonProps<ExtraProps>
    extends BaseButtonProps<ExtraProps> {}

export interface ShortcutButtonProps<ExtraProps>
    extends MinimalBaseButtonProps<ExtraProps> {
    children?: React.ReactNode;
    condensed?: boolean;
    disabled?: boolean;
    leftIcon?: React.ReactNode;
}

export interface TaskButtonProps<ExtraProps>
    extends MinimalBaseButtonProps<ExtraProps> {
    children?: React.ReactNode;
    condensed?: boolean;
    disabled?: boolean;
    icon: React.ReactNode;
}

export interface TertiaryButtonProps<ExtraProps>
    extends MinimalBaseButtonProps<ExtraProps> {
    children?: React.ReactNode;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

declare class ActionButton<ExtraProps> extends React.Component<
    ActionButtonProps<ExtraProps>,
    any
> {}
declare class BackButton<ExtraProps> extends React.Component<
    BackButtonProps<ExtraProps>,
    any
> {}
declare class ButtonGroup extends React.Component<ButtonGroupProps, any> {}
declare class ExpandButton<ExtraProps> extends React.Component<
    ExpandButtonProps<ExtraProps>,
    any
> {}
declare class InlineExpandButton<ExtraProps> extends React.Component<
    InlineExpandButtonProps<ExtraProps>,
    any
> {}
declare class PrimaryButton<ExtraProps> extends React.Component<
    PrimaryButtonProps<ExtraProps>,
    any
> {}
declare class SecondaryButton<ExtraProps> extends React.Component<
    SecondaryButtonProps<ExtraProps>,
    any
> {}
declare class ShortcutButton<ExtraProps> extends React.Component<
    ShortcutButtonProps<ExtraProps>,
    any
> {}
declare class TaskButton<ExtraProps> extends React.Component<
    TaskButtonProps<ExtraProps>,
    any
> {}
declare class TertiaryButton<ExtraProps> extends React.Component<
    TertiaryButtonProps<ExtraProps>,
    any
> {}
