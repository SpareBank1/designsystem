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
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    onAccountSelected: (account: T) => void;
    onReset: () => void;
    selectedAccount?: T;
    showBalance?: boolean;
    formatAccountNumber?: boolean;
    labelledById?: string;
    allowCustomAccount?: boolean;
    listElementBody?: (props: ListElementBodyProps<T>) => React.ReactElement;
    postListElement?: React.ReactNode;
    withSpaceForDetails?: boolean;
    ariaInvalid: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

export interface AccountSelectorHighCapacityProps<T extends Account = Account>
    extends AccountSelectorProps<T> {}

declare class AccountSelector<
    T extends Account = Account
> extends React.Component<AccountSelectorProps<T>> {}

declare class AccountSelectorHighCapacity<
    T extends Account = Account
> extends React.Component<AccountSelectorHighCapacityProps<T>> {}

export interface AccountSelectorMultiProps<T extends Account = Account> {
    accounts?: Array<T>;
    id: string;
    isLoading?: boolean;
    locale: 'nb' | 'nn' | 'en';
    noMatches?: string;
    onAccountSelected: (account: T) => void;
    onChange?: (value: string) => void;
    onFocus?: Function;
    onBlur: Function;
    onSelectAll: Function;
    selectedAccounts?: Array<T>;
    showSelectAllOption?: boolean;
    value?: string;
    highCapacity?: boolean;
}

declare class AccountSelectorMulti<
    T extends Account = Account
> extends React.Component<AccountSelectorMultiProps<T>, any> {}

export interface BaseSelectorProps {
    suggestions: Array<any>;
    suggestionsFilter: Function;
    onSelect: Function;
    value: string;
    locale: 'nb' | 'nn' | 'en';
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
    readOnly?: boolean;
    highCapacity?: boolean;
}

declare class BaseSelector extends React.Component<BaseSelectorProps, any> {}

export {
    AccountSelector,
    AccountSelectorMulti,
    BaseSelector,
    AccountSelectorHighCapacity,
};
