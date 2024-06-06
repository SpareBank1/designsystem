import React from 'react';
// @ts-ignore
import autoBind from 'react-auto-bind';
import { Checkbox } from '@sb1/ffe-form-react';
import { BaseSelector } from '../base-selector';
import { AccountNoMatch } from './AccountNoMatch';
import { AccountSuggestionMulti } from './AccountSuggestionMulti';
import { SuggestionListStatusBar } from './SuggestionListStatusBar';
import { Account, Locale } from '../types';
import { accountFilter } from '../util/filters';
import { texts } from '../i18n/texts';

type AllAccountsElement = { id: 'all-accounts'; accountNumber: '' };
const allAccountsElement: AllAccountsElement = {
    id: 'all-accounts',
    accountNumber: '',
};

const isAllAccountsElement = <T extends Account>(
    suggestion: T | AllAccountsElement,
): suggestion is AllAccountsElement =>
    (suggestion as AllAccountsElement)?.id === 'all-accounts';

const renderSelectAll = (allSelected: boolean, locale: Locale) => (
    <div className="ffe-account-suggestion-multi ffe-account-suggestion-multi__select-all">
        <Checkbox
            checked={allSelected}
            name="ffe-account-suggestion-multi__select-all-label"
            inline={false}
            tabIndex={-1}
            disabled={true}
            hiddenLabel={true}
        >
            {texts[locale].SELECT_ALL}
        </Checkbox>
        <div className="ffe-account-suggestion-multi__content-wrapper">
            <span className="ffe-account-suggestion-multi__name">
                {texts[locale].SELECT_ALL}
            </span>
        </div>
    </div>
);

export interface AccountSelectorMultiProps<T extends Account = Account> {
    /**
     * Array of objects:
     *  {
     *      accountNumber: string.isRequired,
     *      balance: number,
     *      currencyCode: string.
     *      name: string.isRequired,
     *  }
     */
    accounts?: T[];
    id: string;
    isLoading?: boolean;
    /** 'nb', 'nn', or 'en' */
    locale: Locale;
    /** Overrides default string for all locales. */
    noMatches?: string;
    /** Called when an account is clicked */
    onAccountSelected: (account: T | AllAccountsElement) => void;
    onChange?: (value: string) => void;
    onFocus?: () => void;
    onBlur: () => void;
    onReset?: () => void;
    onSelectAll: (allSelected: boolean) => void;
    /**
     * Array of objects:
     *  {
     *      accountNumber: string.isRequired,
     *      balance: number,
     *      currencyCode: string.
     *      name: string.isRequired,
     *  }
     */
    selectedAccounts?: T[];
    showSelectAllOption?: boolean;
    value?: string;
}

interface AccountSelectorMultiState {
    suggestionListHeight: number;
}

export class AccountSelectorMulti<
    T extends Account = Account,
> extends React.Component<
    AccountSelectorMultiProps<T>,
    AccountSelectorMultiState
> {
    private shouldShowSuggestions?: boolean;
    private baseRef?: BaseSelector<T | AllAccountsElement> | null;
    constructor(props: AccountSelectorMultiProps<T>) {
        super(props);
        autoBind(this);
        this.state = {
            suggestionListHeight: 0,
        };
    }

    filterSuggestions(value?: string) {
        const { accounts = [], showSelectAllOption } = this.props;
        if (showSelectAllOption && !value) {
            return [
                allAccountsElement,
                ...accounts.filter(accountFilter(value)),
            ];
        }
        return accounts.filter(accountFilter(value));
    }

    onSuggestionSelect(suggestion: AllAccountsElement | T) {
        const {
            onAccountSelected,
            selectedAccounts = [],
            accounts,
        } = this.props;
        if (suggestion) {
            if (
                isAllAccountsElement(suggestion) &&
                suggestion.id === allAccountsElement.id
            ) {
                const allSelected =
                    selectedAccounts.length === accounts?.length;
                if (this.props.onSelectAll) {
                    this.props.onSelectAll(!allSelected);
                }
                return;
            }
            onAccountSelected(suggestion);
        }
    }

    renderSuggestion(account: T | AllAccountsElement) {
        const { locale, selectedAccounts = [], accounts } = this.props;
        const isSelected = selectedAccounts.filter(
            it => it.accountNumber === account.accountNumber,
        );
        if (!isAllAccountsElement(account)) {
            return (
                <AccountSuggestionMulti
                    account={account}
                    locale={locale}
                    selected={isSelected.length > 0}
                />
            );
        }
        return renderSelectAll(
            selectedAccounts.length === accounts?.length,
            locale,
        );
    }

    onBlur() {
        if (!this.shouldShowSuggestions) {
            this.props.onBlur();
        }
        this.baseRef?.showOrHideSuggestions(!!this.shouldShowSuggestions);
        this.shouldShowSuggestions = false;
    }

    onDone() {
        this.baseRef?.showOrHideSuggestions(false);
        this.props.onBlur();
    }

    renderSuggestionDetails(listHeight = 0) {
        if (this.baseRef) {
            let statusText;
            const { selectedAccounts = [], isLoading = false } = this.props;
            if (selectedAccounts.length === 0) {
                statusText = texts[this.props.locale].NO_ACCOUNTS_SELECTED;
            } else if (selectedAccounts.length === 1) {
                statusText = texts[this.props.locale].ONE_ACCOUNT_SELECTED;
            } else {
                statusText = `${selectedAccounts.length} ${
                    texts[this.props.locale].MULTIPLE_ACCOUNTS_SELECTED
                }`;
            }
            const height = listHeight + this.baseRef.getInputHeight();
            return (
                !isLoading && (
                    <SuggestionListStatusBar
                        renderSelectionStatus={() => statusText}
                        onDone={this.onDone}
                        labelDoneButton={
                            texts[this.props.locale].DROPDOWN_MULTISELECT_DONE
                        }
                        style={{
                            position: 'absolute',
                            zIndex: 100,
                            top: height,
                        }}
                    />
                )
            );
        }
        return null;
    }

    onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === 'Tab') {
            this.shouldShowSuggestions = !event.shiftKey;
        }
    }

    render() {
        const { id, noMatches, locale, value, onChange, onFocus, onReset } =
            this.props;
        return (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div
                className="ffe-account-selector-multi"
                onKeyDown={this.onKeyDown}
            >
                <BaseSelector
                    id={id}
                    value={value ?? ''}
                    onChange={onChange}
                    onFocus={onFocus}
                    onReset={onReset}
                    renderSuggestion={account => this.renderSuggestion(account)}
                    renderNoMatches={() => (
                        <AccountNoMatch value={noMatches} locale={locale} />
                    )}
                    shouldSelectHighlightedOnTab={false}
                    shouldHideSuggestionsOnReset={true}
                    onSuggestionSelect={this.onSuggestionSelect}
                    locale={locale}
                    onSuggestionListChange={height => {
                        this.setState({ suggestionListHeight: height });
                    }}
                    suggestions={this.filterSuggestions(value)}
                    ref={element => {
                        this.baseRef = element;
                    }}
                    onBlur={this.onBlur}
                />
                {this.state.suggestionListHeight > 0 &&
                    this.renderSuggestionDetails(
                        this.state.suggestionListHeight,
                    )}
            </div>
        );
    }
}
