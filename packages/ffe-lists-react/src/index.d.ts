import * as React from 'react';

export interface BaseListItemProps {
    children?: React.ReactNode;
    className?: string;
}

export interface BaseListProps {
    children: React.ReactNode;
    className?: string;
}

export interface BulletListProps extends BaseListProps {
    condensed?: boolean;
}

export interface CheckListItemProps extends BaseListItemProps {
    isCross?: boolean;
}

export interface CheckListProps extends BaseListProps {
    columns?: 1 | 2 | '1' | '2';
}

export interface NumberedListProps extends BaseListProps {
    condensed?: boolean;
}

export interface DescriptionListProps extends BaseListProps {
    medium?: boolean;
    large?: boolean;
}

declare class BulletList extends React.Component<
    BulletListProps & React.HTMLAttributes<HTMLUListElement>,
    any
> {}
declare class BulletListItem extends React.Component<
    BaseListItemProps & React.LiHTMLAttributes<HTMLLIElement>,
    any
> {}
declare class CheckList extends React.Component<
    CheckListProps & React.HTMLAttributes<HTMLUListElement>,
    any
> {}
declare class CheckListItem extends React.Component<
    CheckListItemProps & React.LiHTMLAttributes<HTMLLIElement>,
    any
> {}
declare class NumberedList extends React.Component<
    NumberedListProps & React.OlHTMLAttributes<HTMLOListElement>,
    any
> {}
declare class NumberedListItem extends React.Component<
    BaseListItemProps & React.LiHTMLAttributes<HTMLLIElement>,
    any
> {}
declare class StylizedNumberedList extends React.Component<
    BaseListProps & React.OlHTMLAttributes<HTMLOListElement>,
    any
> {}
declare class StylizedNumberedListItem extends React.Component<
    BaseListItemProps & React.LiHTMLAttributes<HTMLLIElement>,
    any
> {}
declare class DescriptionList extends React.Component<
    DescriptionListProps & React.HTMLAttributes<HTMLDListElement>,
    any
> {}
declare class DescriptionListMultiCol extends React.Component<
    BaseListProps & React.HTMLAttributes<HTMLDivElement>,
    any
> {}
declare class DescriptionListTerm extends React.Component<
    BaseListItemProps & React.HTMLAttributes<HTMLElement>,
    any
> {}
declare class DescriptionListDescription extends React.Component<
    BaseListItemProps & React.HTMLAttributes<HTMLElement>,
    any
> {}
