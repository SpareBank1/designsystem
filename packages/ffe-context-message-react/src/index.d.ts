import * as React from 'react';

export interface ContextMessageProps extends React.ComponentProps<'div'> {
    animationLengthMs?: number;
    children: React.ReactNode;
    className?: string;
    compact?: boolean;
    contentElementId?: string;
    headerText?: string;
    headerElementId?: string;
    headerElement?: string;
    locale?: 'nb' | 'nn' | 'en';
    onClose?: (event: React.MouseEvent) => void;
    showCloseButton?: boolean;
    style?: React.CSSProperties;
    onColoredBg?: boolean;
}

export interface ContextErrorMessageProps extends ContextMessageProps {
    alert?: boolean;
}

declare class ContextInfoMessage extends React.Component<
    ContextMessageProps,
    any
> {}

declare class ContextTipsMessage extends React.Component<
    ContextMessageProps,
    any
> {}

declare class ContextSuccessMessage extends React.Component<
    ContextMessageProps,
    any
> {}

declare class ContextErrorMessage extends React.Component<
    ContextErrorMessageProps,
    any
> {}
