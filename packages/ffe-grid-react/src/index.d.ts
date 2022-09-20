import * as React from 'react';

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    condensed?: boolean;
    element?: string;
}

export interface InlineGridProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    element?: string;
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

export interface GridRowProps extends React.HTMLAttributes<HTMLElement> {
    background?: BackgroundColors;
    children: React.ReactNode;
    className?: string;
    element?: string;
    padding?: boolean;
    margin?: boolean;
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
    centerText?: boolean;
    sm?: ColumnsRange | string | GridColSize;
    md?: ColumnsRange | string | GridColSize;
    lg?: ColumnsRange | string | GridColSize;
}

declare class Grid extends React.Component<GridProps, any> {}
declare class InlineGrid extends React.Component<InlineGridProps, any> {}
declare class GridRow extends React.Component<GridRowProps, any> {}
declare class GridCol extends React.Component<GridColProps, any> {}
