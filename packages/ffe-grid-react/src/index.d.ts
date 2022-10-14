import * as React from 'react';

type Gap = 'none' | '2xs' | 'xs' | 'md' | 'lg';

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    element?: string;
    gap?: Gap;
}

type BackgroundColors =
    | 'frost-30'
    | 'sand'
    | 'sand-70'
    | 'sand-30'
    | 'syrin-70'
    | 'syrin-30'
    | 'vann'
    | 'vann-30'
    | 'fjell'
    | 'hvit';

type Margin =
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl';

type Padding =
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl';

export interface GridRowProps extends React.HTMLAttributes<HTMLElement> {
    background?: BackgroundColors;
    children: React.ReactNode;
    className?: string;
    element?: string;
    padding?: Padding;
    margin?: Margin;
}

type ColumnsRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridColSize {
    cols: ColumnsRange | string;
    offset: ColumnsRange | string;
}

export interface GridColProps extends React.HTMLAttributes<HTMLElement> {
    background?: BackgroundColors;
    children?: React.ReactNode;
    className?: string;
    element?: React.ReactNode;
    center?: boolean;
    centerText?: boolean;
    sm?: ColumnsRange | string | GridColSize;
    md?: ColumnsRange | string | GridColSize;
    lg?: ColumnsRange | string | GridColSize;
}

declare class Grid extends React.Component<GridProps, any> {}
declare class GridRow extends React.Component<GridRowProps, any> {}
declare class GridCol extends React.Component<GridColProps, any> {}
