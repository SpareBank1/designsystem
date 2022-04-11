import * as React from 'react';

type To =
    | string
    | {
          pathname: string;
          search?: string;
          hash?: string;
          state?: { [key: string]: any };
      };

export interface MinimalBaseButtonProps extends React.HTMLProps<HTMLElement> {
    className?: string;
    element?: HTMLElement | string | React.ElementType;
    innerRef?: React.Ref<HTMLElement>;
    to?: To; //used in order to make buttons work with react-router functionality in typescript-files.
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

declare class ActionButton extends React.Component<ActionButtonProps, any> {}
declare class BackButton extends React.Component<BackButtonProps, any> {}
declare class ButtonGroup extends React.Component<ButtonGroupProps, any> {}
declare class ExpandButton extends React.Component<ExpandButtonProps, any> {}
declare class InlineExpandButton extends React.Component<
    InlineExpandButtonProps,
    any
> {}
declare class PrimaryButton extends React.Component<PrimaryButtonProps, any> {}
declare class SecondaryButton extends React.Component<
    SecondaryButtonProps,
    any
> {}
declare class ShortcutButton extends React.Component<
    ShortcutButtonProps,
    any
> {}
declare class TaskButton extends React.Component<TaskButtonProps, any> {}
declare class TertiaryButton extends React.Component<
    TertiaryButtonProps,
    any
> {}
