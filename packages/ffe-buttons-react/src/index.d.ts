import * as React from 'react';

export interface MinimalBaseButtonProps extends React.ComponentPropsWithoutRef<'html'> {
    className?: string;
    element?: HTMLElement | string | React.ElementType;
    innerRef?: React.Ref<HTMLElement>;
}

export interface BaseButtonProps extends MinimalBaseButtonProps {
    children?: React.ReactNode;
    ariaLoadingMessage?: string;
    disabled?: boolean;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export interface ActionButtonProps extends BaseButtonProps {}

export interface BackButtonProps extends MinimalBaseButtonProps {
    children?: React.ReactNode;
}

export interface ButtonGroupProps {
    className?: string;
    thin?: boolean;
    inline?: boolean;
    children: React.ReactNode;
}

export interface ExpandButtonProps extends MinimalBaseButtonProps {
    children: React.ReactNode;
    closeLabel?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    isExpanded: boolean;
    onClick: (e: React.MouseEvent | undefined) => void;
}

export interface InlineExpandButtonProps extends MinimalBaseButtonProps {
    children?: React.ReactNode;
    innerRef?: React.Ref<HTMLElement>;
    isExpanded: boolean;
    onClick: (e: React.MouseEvent | undefined) => void;
}

export interface PrimaryButtonProps extends BaseButtonProps {}

export interface SecondaryButtonProps extends BaseButtonProps {}

export interface ShortcutButtonProps extends MinimalBaseButtonProps {
    children?: React.ReactNode;
    disabled?: boolean;
    leftIcon?: React.ReactNode;
}

export interface TaskButtonProps extends MinimalBaseButtonProps {
    children?: React.ReactNode;
    disabled?: boolean;
    icon: React.ReactNode;
}

export interface TertiaryButtonProps extends MinimalBaseButtonProps {
    children?: React.ReactNode;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

type NoInfer<T> = [T][T extends any ? 0 : never];

declare class ActionButton<T = {}> extends React.Component<
    NoInfer<T> & ActionButtonProps,
    any
> {}
declare class BackButton<T = {}> extends React.Component<
    NoInfer<T> & BackButtonProps,
    any
> {}
declare class ButtonGroup<T = {}> extends React.Component<
    NoInfer<T> & ButtonGroupProps,
    any
> {}
declare class ExpandButton<T = {}> extends React.Component<
    NoInfer<T> & ExpandButtonProps,
    any
> {}
declare class InlineExpandButton<T = {}> extends React.Component<
    NoInfer<T> & InlineExpandButtonProps,
    any
> {}
declare class PrimaryButton<T = {}> extends React.Component<
    NoInfer<T> & PrimaryButtonProps,
    any
> {}
declare class SecondaryButton<T = {}> extends React.Component<
    NoInfer<T> & SecondaryButtonProps,
    any
> {}
declare class ShortcutButton<T = {}> extends React.Component<
    NoInfer<T> & ShortcutButtonProps,
    any
> {}
declare class TaskButton<T = {}> extends React.Component<
    NoInfer<T> & TaskButtonProps,
    any
> {}
declare class TertiaryButton<T = {}> extends React.Component<
    NoInfer<T> & TertiaryButtonProps,
    any
> {}
