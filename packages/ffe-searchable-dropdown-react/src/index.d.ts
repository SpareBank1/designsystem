import * as React from 'react';

interface ListElementBodyProps<T> {
    item: T;
    isHighlighted: boolean;
}

interface NoMatch<T> {
    text: string;
    dropdownList?: T[];
}

export interface SearchableDropdownProps<T> {
    id: string;
    labelId: string;
    className?: string;
    dropdownList: T[];
    dropdownAttributes: (keyof T)[];
    searchAttributes: (keyof T)[];
    inputProps?: React.HTMLProps<HTMLInputElement>;
    initialValue?: T;
    maxRenderedDropdownElements?: number;
    onChange?: (dropdownListItem: T) => any;
    dark?: boolean;
    listElementBody?: (
        props: ListElementBodyProps<T>,
    ) => React.FC<HTMLDivElement>;
    noMatch?: NoMatch<T>;
    locale: 'nn' | 'nb' | 'en';
    'aria-invalid': 'true' | 'false' | boolean;
}

declare class SearchableDropdown<T> extends React.Component<
    SearchableDropdownProps<T>
> {}

export default SearchableDropdown;
