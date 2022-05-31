import * as React from 'react';

export interface Account {
    accountNumber: string;
    name: string;
    currencyCode?: string;
    balance?: number;
}

interface ListElementBodyProps {
    item?: Account;
    isHighlighted?: boolean;
    locale?: 'nb' | 'nn' | 'en';
    dropdownAttributes?: string[];
}

interface NoMatch {
    text: string;
    dropdownList?: Account[];
}

export interface AccountSelectorProps {
    accounts: Array<Account>;
    className?: string;
    id: string;
    locale: 'nb' | 'nn' | 'en';
    noMatches?: NoMatch;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    onAccountSelected: (account: Account) => void;
    onReset: () => void;
    selectedAccount?: Account;
    showBalance?: boolean;
    formatAccountNumber?: boolean;
    labelledById?: string;
    allowCustomAccount?: boolean;
    listElementBody?: (props: ListElementBodyProps) => React.ReactElement;
    withSpaceForDetails?: boolean;
    ariaInvalid: boolean;
    highCapacity?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

declare class AccountSelector extends React.Component<AccountSelectorProps> {}

export interface AccountSelectorMultiProps {
    accounts?: Array<Account>;
    id: string;
    isLoading?: boolean;
    locale: 'nb' | 'nn' | 'en';
    noMatches?: string;
    onAccountSelected: (account: Account) => void;
    onChange?: (value: string) => void;
    onFocus?: Function;
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

export { AccountSelector, AccountSelectorMulti, BaseSelector };
