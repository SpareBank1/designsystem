import * as React from 'react';

export interface Account {
    accountNumber: string;
    name: string;
    currencyCode?: string;
    balance?: number;
}

export interface AccountSelectorProps {
    accounts?: Array<Account>;
    className?: string;
    id: string;
    locale: string;
    noMatches?: string;
    onAccountSelected: (account: Account) => void;
    onChange: (value: string) => void;
    selectedAccount?: Account;
    showBalance?: boolean;
    value: string;
    readonly?: boolean;
    highCapacity?: boolean;
}

declare class AccountSelector extends React.Component<
    AccountSelectorProps,
    any
> {}

export interface AccountSelectorMultiProps {
    accounts?: Array<Account>;
    id: string;
    isLoading?: boolean;
    locale: Array<string>;
    noMatches?: string;
    onAccountSelected: (account: Account) => void;
    onBlur: Function;
    onSelectAll: Function;
    selectedAccounts?: Array<Account>;
    showSelectAllOption?: boolean;
    value?: string;
    highCapacity?: boolean;
}

declare class AccountSelectorMulti extends React.Component<
    AccountSelectorMultiProps,
    any
> {}

export interface BaseSelectorProps {
    suggestions: Array<any>;
    suggestionsFilter: Function;
    onSelect: Function;
    value: string;
    locale: Array<String>;
    shouldHideSuggestionsOnSelect: boolean;
    shouldSelectHighlightedOnTab: boolean;
    shouldHideSuggestionsOnBlur: boolean;
    shouldHideSuggestionsOnReset: boolean;
    shouldShowSuggestionsOnFocus?: boolean;
    onSuggestionSelect: Function;
    onChange?: React.ChangeEventHandler<Element>;
    onBlur?: Function;
    onClick?: Function;
    onReset?: Function;
    onFocus?: Function;
    onSuggestionListChange?: Function;
    placeholder?: string;
    ariaInvalid?: boolean;
    suggestionsHeightMax?: number;
    id?: string;
    name?: string;
    readonly?: boolean;
    highCapacity?: boolean;
}

declare class BaseSelector extends React.Component<BaseSelectorProps, any> {}

export { AccountSelector, AccountSelectorMulti, BaseSelector };
