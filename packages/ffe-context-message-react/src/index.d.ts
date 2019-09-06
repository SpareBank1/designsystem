import * as React from 'react';

export interface ContextMessageProps
    extends React.HTMLAttributes<HTMLDivElement> {
    animationLengthMs?: number;
    children: React.ReactNode;
    className?: string;
    compact?: boolean;
    contentElementId?: string;
    header?: string;
    headerElementId?: string;
    icon?: React.ReactNode;
    locale?: 'nb' | 'nn' | 'en';
    onClose?: (event: React.MouseEvent) => void;
    showCloseButton?: boolean;
    style?: React.CSSProperties;
}

declare class ContextInfoMessage extends React.Component<
    ContextMessageProps,
    any
> {}
declare class ContextTipMessage extends React.Component<
    ContextMessageProps,
    any
> {}
declare class ContextSuccessMessage extends React.Component<
    ContextMessageProps,
    any
> {}
declare class ContextErrorMessage extends React.Component<
    ContextMessageProps,
    any
> {}
