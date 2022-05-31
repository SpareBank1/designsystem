import * as React from 'react';

interface ListElementBodyProps<T> {
    item: T;
    isHighlighted: boolean;
}

interface NoMatch<T> {
    text?: string;
    dropdownList?: T[];
}

export interface SearchableDropdownProps<T> {
    id: string;
    labelledById?: string;
    className?: string;
    dropdownList: T[];
    dropdownAttributes: (keyof T)[];
    searchAttributes: (keyof T)[];
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    selectedItem?: T;
    maxRenderedDropdownElements?: number;
    onChange?: (dropdownListItem: T) => any;
    listElementBody?: (props: ListElementBodyProps<T>) => React.ReactNode;
    noMatch?: NoMatch<T>;
    locale: 'nn' | 'nb' | 'en';
    ariaInvalid?: 'true' | 'false' | boolean;
    formatter?: (value: string) => string;
    searchMatcher?: (
        inputValue: string,
        searchAttributes: (keyof T)[],
    ) => (item: T) => boolean;
    highCapacity?: boolean;
    isLoading?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

declare class SearchableDropdown<T> extends React.Component<
    SearchableDropdownProps<T>
> {}

export default SearchableDropdown;
