import * as React from 'react';

export interface SystemMessageProps {
    children: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
    locale?: 'en' | 'nb' | 'nn';
    onClose?: (e: React.MouseEvent | undefined) => void;
}

declare class SystemErrorMessage extends React.Component<
    SystemMessageProps,
    any
> {}
declare class SystemInfoMessage extends React.Component<
    SystemMessageProps,
    any
> {}
declare class SystemNewsMessage extends React.Component<
    SystemMessageProps,
    any
> {}
declare class SystemSuccessMessage extends React.Component<
    SystemMessageProps,
    any
> {}
