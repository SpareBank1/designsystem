import * as React from 'react';

export interface TabProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    selected?: boolean;
    className?: string;
    'aria-controls': string;
}

export interface TabButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    selected?: boolean;
    ghost?: boolean;
    condensed?: boolean;
    className?: string;
    'aria-controls': string;
}

export interface TabGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    noBreak?: boolean;
}

declare class Tab extends React.Component<TabProps, any> {}
declare class TabButton extends React.Component<TabButtonProps, any> {}
declare class TabGroup extends React.Component<TabGroupProps, any> {}
declare class TabButtonGroup extends React.Component<TabGroupProps, any> {}
