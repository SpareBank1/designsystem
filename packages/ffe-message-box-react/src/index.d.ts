import * as React from 'react';

export interface MessageBoxProps
    extends Omit<React.ComponentProps<'div'>, 'title'> {
    children?: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
    title?: React.ReactNode;
    onColoredBg?: boolean;
}

export interface ErrorMessageBoxProps extends MessageBoxProps {
    alert?: boolean;
}

export interface InfoMessageListItemProps {
    children: string;
    href?: string;
}

export interface InfoMessageListProps {
    children: React.ReactNode;
}

declare class SuccessMessage extends React.Component<MessageBoxProps, any> {}
declare class ErrorMessage extends React.Component<ErrorMessageBoxProps, any> {}
declare class InfoMessage extends React.Component<MessageBoxProps, any> {}
declare class TipsMessage extends React.Component<MessageBoxProps, any> {}
declare class InfoMessageList extends React.Component<
    InfoMessageListProps,
    any
> {}
declare class InfoMessageListItem extends React.Component<
    InfoMessageListItemProps,
    any
> {}
