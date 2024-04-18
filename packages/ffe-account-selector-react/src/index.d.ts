import * as React from 'react';

export interface Account {
    accountNumber: string;
    name: string;
    currencyCode?: string;
    balance?: number | string;
}

export interface ListElementBodyProps<T extends Account> {
    item: T;
    isHighlighted: boolean;
    locale?: 'nb' | 'nn' | 'en';
    dropdownAttributes?: string[];
}

interface NoMatch<T extends Account> {
    text: string;
    dropdownList?: T[];
}

export interface AccountSelectorProps<T extends Account = Account> {
    accounts: Array<T>;
    className?: string;
    id: string;
    locale: 'nb' | 'nn' | 'en';
    noMatches?: NoMatch<T>;
    inputProps?: React.ComponentPropsWithoutRef<'input'>;
    onAccountSelected: (account: T) => void;
    onReset: () => void;
    selectedAccount?: T;
    hideAccountDetails?: boolean;
    showBalance?: boolean;
    formatAccountNumber?: boolean;
    labelledById?: string;
    allowCustomAccount?: boolean;
    listElementBody?: (props: ListElementBodyProps<T>) => React.ReactElement;
    postListElement?: React.ReactNode;
    ariaInvalid?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

declare class AccountSelector<
    T extends Account = Account
> extends React.Component<AccountSelectorProps<T>> {}

export interface AccountSelectorMultiProps<T extends Account = Account> {
    accounts?: Array<T>;
    id: string;
    isLoading?: boolean;
    locale: 'nb' | 'nn' | 'en';
    noMatches?: string;
    onAccountSelected: (account: T) => void;
    onChange?: (value: string) => void;
    onFocus?: () => void;
    onBlur: () => void;
    onReset?: () => void;
    onSelectAll: (allSelected: boolean) => void;
    selectedAccounts?: Array<T>;
    showSelectAllOption?: boolean;
    value?: string;
    highCapacity?: boolean;
}

declare class AccountSelectorMulti<
    T extends Account = Account
> extends React.Component<AccountSelectorMultiProps<T>, any> {}

export interface BaseSelectorProps<T> {
    suggestions: Array<T>;
    renderSuggestion: (suggestion: T) => React.ReactNode;
    value: string;
    locale: 'nb' | 'nn' | 'en';
    shouldSelectHighlightedOnTab: boolean;
    shouldHideSuggestionsOnReset: boolean;
    shouldShowSuggestionsOnFocus?: boolean;
    onSuggestionSelect: (suggestion?: T) => void;
    onChange?: (value: string) => void;
    onBlur?: () => void;
    onClick?: () => void;
    onReset?: () => void;
    onFocus?: () => void;
    onSuggestionListChange?: (height: number) => void;
    renderNoMatches?: () => React.ReactNode;
    placeholder?: string;
    ariaInvalid?: boolean;
    suggestionsHeightMax?: number;
    id?: string;
    name?: string;
    readOnly?: boolean;
    highCapacity?: boolean;
}

declare class BaseSelector<T> extends React.Component<
    BaseSelectorProps<T>,
    any
> {}

export { AccountSelector, AccountSelectorMulti, BaseSelector };
