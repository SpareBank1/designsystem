/* eslint jsx-a11y/no-static-element-interactions:0 */
import React from 'react';
import { func, string, arrayOf, bool } from 'prop-types';
import autoBind from 'react-auto-bind';

import { Checkbox } from '@sb1/ffe-form-react';

import BaseSelector from '../base-selector';
import {
    AccountNoMatch,
    AccountSuggestionMulti,
    SuggestionListStatusBar,
} from '../../subcomponents/account-selector-multi';
import { Account, Locale, KeyCodes } from '../../util/types';
import { accountFilter } from '../../filter/filters';
import txt from '../../i18n/i18n';

const allAccountsElement = { id: 'all-accounts', accountNumber: '' };

const renderSelectAll = (allSelected, locale) => (
    <div className="ffe-account-suggestion-multi ffe-account-suggestion-multi__select-all">
        <Checkbox
            checked={allSelected}
            name="ffe-account-suggestion-multi__select-all-label"
            inline={false}
            tabIndex={-1}
            disabled={true}
        />
        <div className="ffe-account-suggestion-multi__content-wrapper">
            <span className="ffe-account-suggestion-multi__name">
                {txt[locale].SELECT_ALL}
            </span>
        </div>
    </div>
);

class AccountSelectorMulti extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            suggestionListHeight: 0,
        };
    }

    filterSuggestions(value) {
        const { accounts, showSelectAllOption } = this.props;
        if (showSelectAllOption && !value) {
            return [
                allAccountsElement,
                ...accounts.filter(accountFilter(value)),
            ];
        }
        return accounts.filter(accountFilter(value));
    }

    onSuggestionSelect(suggestion) {
        const {
            onAccountSelected,
            selectedAccounts = [],
            accounts,
        } = this.props;
        if (suggestion) {
            if (suggestion.id === allAccountsElement.id) {
                const allSelected = selectedAccounts.length === accounts.length;
                if (this.props.onSelectAll) {
                    this.props.onSelectAll(!allSelected);
                }
                return;
            }
            onAccountSelected(suggestion);
        }
    }

    renderSuggestion(account) {
        const { locale, selectedAccounts = [], accounts } = this.props;
        const isSelected = selectedAccounts.filter(
            a => a.accountNumber === account.accountNumber,
        );
        if (account.id !== allAccountsElement.id) {
            return (
                <AccountSuggestionMulti
                    account={account}
                    locale={locale}
                    selected={isSelected.length > 0}
                />
            );
        }
        return renderSelectAll(
            selectedAccounts.length === accounts.length,
            locale,
        );
    }

    onBlur() {
        if (!this.shouldShowSuggestions) {
            this.props.onBlur();
        }
        this.baseRef.showOrHideSuggestions(this.shouldShowSuggestions);
        this.shouldShowSuggestions = false;
    }

    onDone() {
        this.baseRef.showOrHideSuggestions(false);
        this.props.onBlur();
    }

    renderSuggestionDetails(listHeight) {
        if (this.baseRef) {
            let statusText;
            const { selectedAccounts = [], isLoading = false } = this.props;
            if (selectedAccounts.length === 0) {
                statusText = txt[this.props.locale].NO_ACCOUNTS_SELECTED;
            } else if (selectedAccounts.length === 1) {
                statusText = txt[this.props.locale].ONE_ACCOUNT_SELECTED;
            } else {
                statusText = `${selectedAccounts.length} ${
                    txt[this.props.locale].MULTIPLE_ACCOUNTS_SELECTED
                }`;
            }
            const height = listHeight + this.baseRef.getInputHeight();
            return (
                !isLoading && (
                    <SuggestionListStatusBar
                        renderSelectionStatus={() => statusText}
                        onDone={this.onDone}
                        labelDoneButton={
                            txt[this.props.locale].DROPDOWN_MULTISELECT_DONE
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

    onKeyDown(event) {
        if (event.which === KeyCodes.TAB) {
            this.shouldShowSuggestions = !event.shiftKey;
        }
    }

    render() {
        const {
            id,
            noMatches,
            locale,
            value,
            highCapacity,
            onChange,
            onFocus,
            onReset,
        } = this.props;
        return (
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
                    suggestionDetails={this.renderSuggestionDetails()}
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
                    onBlur={e => this.onBlur(e)}
                    highCapacity={highCapacity}
                />
                {this.state.suggestionListHeight > 0 &&
                    this.renderSuggestionDetails(
                        this.state.suggestionListHeight,
                    )}
            </div>
        );
    }
}

AccountSelectorMulti.propTypes = {
    /**
     * Array of objects:
     *  {
     *      accountNumber: string.isRequired,
     *      balance: number,
     *      currencyCode: string.
     *      name: string.isRequired,
     *  }
     */
    accounts: arrayOf(Account),
    id: string.isRequired,
    isLoading: bool,
    /** 'nb', 'nn', or 'en' */
    locale: Locale.isRequired,
    /** Overrides default string for all locales. */
    noMatches: string,
    /** Called when an account is clicked */
    onAccountSelected: func.isRequired,
    onChange: func,
    onFocus: func,
    onBlur: func.isRequired,
    onReset: func,
    onSelectAll: func,
    /**
     * Array of objects:
     *  {
     *      accountNumber: string.isRequired,
     *      balance: number,
     *      currencyCode: string.
     *      name: string.isRequired,
     *  }
     */
    selectedAccounts: arrayOf(Account),
    showSelectAllOption: bool,
    value: string,
    /**
     * For situations where AccountSelector might be populated with hundreds of accounts
     * uses react-window for performance optimization, default false
     */
    highCapacity: bool,
};

export default AccountSelectorMulti;
