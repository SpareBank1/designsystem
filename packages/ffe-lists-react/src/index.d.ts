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
    horizontal?: boolean;
}

declare class BulletList extends React.Component<
    BulletListProps & React.ComponentProps<'ul'>,
    any
> {}
declare class BulletListItem extends React.Component<
    BaseListItemProps & React.ComponentProps<'li'>,
    any
> {}
declare class CheckList extends React.Component<
    CheckListProps & React.ComponentProps<'ul'>,
    any
> {}
declare class CheckListItem extends React.Component<
    CheckListItemProps & React.ComponentProps<'li'>,
    any
> {}
declare class NumberedList extends React.Component<
    NumberedListProps & React.ComponentProps<'ol'>,
    any
> {}
declare class NumberedListItem extends React.Component<
    BaseListItemProps & React.ComponentProps<'li'>,
    any
> {}
declare class StylizedNumberedList extends React.Component<
    BaseListProps & React.ComponentProps<'ol'>,
    any
> {}
declare class StylizedNumberedListItem extends React.Component<
    BaseListItemProps & React.ComponentProps<'li'>,
    any
> {}
declare class DescriptionList extends React.Component<
    DescriptionListProps & React.ComponentProps<'dl'>,
    any
> {}
declare class DescriptionListMultiCol extends React.Component<
    BaseListProps & React.ComponentProps<'div'>,
    any
> {}
declare class DescriptionListTerm extends React.Component<
    BaseListItemProps & React.ComponentProps<'html'>,
    any
> {}
declare class DescriptionListDescription extends React.Component<
    BaseListItemProps & React.ComponentProps<'html'>,
    any
> {}
