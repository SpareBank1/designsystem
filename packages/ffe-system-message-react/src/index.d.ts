import * as React from 'react';

export interface SystemMessageProps
    extends React.ComponentPropsWithoutRef<'div'> {
    animationLengthMs?: number;
    icon?: React.ReactNode;
    locale?: 'en' | 'nb' | 'nn';
    onClose?: React.MouseEventHandler<HTMLButtonElement>;
    onColoredBg?: boolean;
}

export interface SystemErrorMessageProps extends SystemMessageProps {
    alert?: boolean;
}

declare class SystemErrorMessage extends React.Component<
    SystemErrorMessageProps,
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
