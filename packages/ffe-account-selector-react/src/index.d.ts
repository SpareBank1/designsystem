import { Component, HTMLAttributes, ChangeEventHandler } from 'react';

interface Account {
    accountNumber: string;
    name: string;
    currencyCode?: string;
    balance?: number;
}

interface AccountSelectorProps {
    accounts?: Array<Account>;
    className?: string;
    id: string;
    locale: Array<String>;
    noMatches?: string;
    onAccountSelected: ChangeEventHandler<HTMLInputElement>;
    onChange: ChangeEventHandler<HTMLInputElement>;
    selectedAccount?: Account;
    showBalance?: boolean;
    value: string;
    readonly?: boolean;
}

declare class AccountSelector extends Component<AccountSelectorProps, any> {}

interface AccountSelectorMultiProps {
    accounts?: Array<Account>;
    id: string;
    isLoading?: boolean;
    locale: Array<String>;
    noMatches?: string;
    onAccountSelected: ChangeEventHandler<HTMLInputElement>;
    onBlur: Function;
    onSelectAll: Function;
    selectedAccounts?: Array<Account>;
    showSelectAllOption?: boolean;
    value?: string;
}

declare class AccountSelectorMulti extends Component<
    AccountSelectorMultiProps,
    any
> {}

interface BaseSelectorProps {
    suggestions: Array<object>;
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
    onChange?: ChangeEventHandler<Element>;
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
}

declare class BaseSelector extends Component<BaseSelectorProps, any> {}

export default {
    AccountSelector,
    AccountSelectorMulti,
    BaseSelector,
};
