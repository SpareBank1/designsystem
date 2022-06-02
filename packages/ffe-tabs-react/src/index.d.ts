import * as React from 'react';

export interface TabProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    selected?: boolean;
    className?: string;
}

export interface TabGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    noBreak?: boolean;
}

declare class Tab extends React.Component<TabProps, any> {}
declare class TabGroup extends React.Component<TabGroupProps, any> {}
