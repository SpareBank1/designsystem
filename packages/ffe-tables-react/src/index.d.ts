import * as React from 'react';

export interface RowRenderTrProps extends React.ComponentProps<'tr'> {}

export interface TableRowProps {
    cells: Data;
    columns: Column[];
    expandable?: boolean;
    expanded?: boolean;
    onClick?: (e: React.MouseEvent | undefined) => void;
    rowRender?: (
        trprops: RowRenderTrProps,
        props: TableRowProps,
        rowIndex: number,
    ) => JSX.Element;
    headerRender?: (
        trprops: HeaderRenderTrProps,
        columns: Column[],
    ) => JSX.Element;
    footerRender?: (
        trprops: HeaderRenderTrProps,
        columns: Column[],
    ) => JSX.Element;
    onKeyDown?: (e: React.KeyboardEvent | undefined) => void;
    trClasses?: string;
    rowIndex?: number;
}

export interface SpanProps {
    className?: string;
}

export interface ThProps {
    className: string;
    key: number;
    'aria-sort': 'none' | 'ascending' | 'descending' | 'other';
    scope: string;
}

export interface TdProps {
    classNames: string;
    'data-th': string;
    key: number;
}

export interface Column {
    header: React.ReactNode | '';
    key: string;
    footer?: React.ReactNode;
    alignRight?: boolean;
    alignTop?: boolean;
    hideOnDesktop?: boolean;
    hideOnTablet?: boolean;
    hideOnSmallTablet?: boolean;
    hideOnMobile?: boolean;
    compare?: (a: any, b: any) => number;
    notSortable?: boolean;
    cellRender?: (
        value: any,
        col: Column,
        props: TableRowProps,
        index: number,
    ) => JSX.Element;
    columnHeaderRender?: (
        value: React.ReactNode | '',
        dataWindow: Data[],
        spanProps: SpanProps,
        thProps: ThProps,
        columns: Column[],
        index: number,
    ) => JSX.Element;
    columnFooterRender?: (
        value: any,
        dataWindow: Data[],
        tdProps: TdProps,
        spanProps: SpanProps,
        columns: Column[],
        index: number,
    ) => JSX.Element;
}

export interface Data {
    id?: string | number;
    [propName: string]: any;
}

export interface HeaderRenderTrProps {
    className: string;
    children: any;
}

export type OnSortParam = {
    sortBy: string;
    descending: boolean;
    tableData: Data[];
};

export interface TableProps {
    caption?: React.ReactNode;
    srOnlyCaption?: boolean;
    expandedContentMapper?: (data: Data) => JSX.Element | false;
    sortable?: boolean;
    sortBy?: string;
    onSort?: (config: OnSortParam) => void;
    descending?: boolean;
    offset?: number;
    limit?: number;
    condensed?: boolean;
    smallHeader?: boolean;
    alignLeft?: boolean;
    columnLayoutMobile?: boolean;
    breakpoint?: 'sm' | 'none';
    rowRender?: (
        trprops: RowRenderTrProps,
        props: TableRowProps,
        rowIndex: number,
    ) => JSX.Element;
    headerRender?: (
        trprops: HeaderRenderTrProps,
        columns: Column[],
    ) => JSX.Element;
    footerRender?: (
        trprops: HeaderRenderTrProps,
        columns: Column[],
    ) => JSX.Element;
    data?: Data[];
    columns?: Column[];
    className?: string;
}

declare class Table extends React.Component<TableProps, any> {}

export default Table;
