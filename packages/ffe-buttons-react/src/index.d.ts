import * as React from 'react';

export type MinimalBaseButtonProps = {
    className?: string;
    element?: HTMLElement | string | React.ElementType;
    innerRef?: React.Ref<HTMLElement>;
} & (React.ComponentProps<'button'> | React.ComponentProps<'a'>);

export type BaseButtonProps = {
    children?: React.ReactNode;
    ariaLoadingMessage?: string;
    disabled?: boolean;
    isLoading?: boolean;
    leftIcon?: HTMLElement | React.ElementType;
    rightIcon?: HTMLElement | React.ElementType;
} & MinimalBaseButtonProps;

type ActionButtonProps = BaseButtonProps;

export type BackButtonProps = {
    children?: React.ReactNode;
} & MinimalBaseButtonProps;

export interface ButtonGroupProps {
    className?: string;
    thin?: boolean;
    inline?: boolean;
    children: React.ReactNode;
}

export type ExpandButtonProps = {
    children: React.ReactNode;
    closeLabel?: string;
    isExpanded: boolean;
    onClick: (e: React.MouseEvent | undefined) => void;
} & MinimalBaseButtonProps;

export type InlineExpandButtonProps = {
    children?: React.ReactNode;
    innerRef?: React.Ref<HTMLElement>;
    isExpanded: boolean;
    onClick: (e: React.MouseEvent | undefined) => void;
} & MinimalBaseButtonProps;

export type PrimaryButtonProps = BaseButtonProps;

export type SecondaryButtonProps = BaseButtonProps;

export type ShortcutButtonProps = {
    children?: React.ReactNode;
    disabled?: boolean;
} & MinimalBaseButtonProps;

export type TaskButtonProps = {
    children?: React.ReactNode;
    disabled?: boolean;
    icon: React.ReactNode;
} & MinimalBaseButtonProps;

export type TertiaryButtonProps = {
    children?: React.ReactNode;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
} & MinimalBaseButtonProps;

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
