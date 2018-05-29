import React, { Component } from 'react';
import autoBind from 'react-auto-bind';
import { func, string, arrayOf, bool } from 'prop-types';
import classNames from 'classnames';

import BaseSelector from '../base-selector';
import {
    AccountDetails,
    AccountNoMatch,
    AccountSuggestion,
} from '../../subcomponents/account';
import { Account, Locale } from '../../util/types';
import { createAccountFilter } from '../../filter/filters';

class AccountSelector extends Component {
    constructor(props) {
        super(props);
        autoBind(this);

        this.baseSelector = null;

        this.enableFilter = false;
    }

    renderSuggestion(account) {
        return (
            <AccountSuggestion
                account={account}
                locale={this.props.locale}
                showBalance={this.props.showBalance}
            />
        );
    }

    assignBaseSelectorRef(baseSelector) {
        this.baseSelector = baseSelector;
    }

    renderNoMatches() {
        return (
            <AccountNoMatch
                value={this.props.noMatches}
                locale={this.props.locale}
            />
        );
    }

    onAccountSelect(account) {
        this.enableFilter = false;
        this.props.onAccountSelected(account);
    }

    onInputChange(value) {
        this.enableFilter = true;
        this.props.onChange(value);
    }

    onSuggestionSelect(suggestion) {
        if (suggestion) {
            this.baseSelector.showOrHideSuggestions(false, () =>
                this.onAccountSelect(suggestion),
            );
        }
    }

    filterSuggestions() {
        const { value, accounts } = this.props;
        const suggFilt = createAccountFilter(this.enableFilter);
        return accounts.filter(suggFilt(value));
    }

    render() {
        const {
            className,
            id,
            locale,
            selectedAccount,
            showBalance,
        } = this.props;
        return (
            <div
                className={classNames('ffe-account-selector', className)}
                id={`${id}-container`}
            >
                <BaseSelector
                    ref={this.assignBaseSelectorRef}
                    renderSuggestion={this.renderSuggestion}
                    renderNoMatches={this.renderNoMatches}
                    shouldHideSuggestionsOnSelect={true}
                    shouldSelectHighlightedOnTab={true}
                    shouldHideSuggestionsOnBlur={true}
                    shouldHideSuggestionsOnReset={false}
                    onSuggestionSelect={this.onSuggestionSelect}
                    suggestionFilter={createAccountFilter(this.enableFilter)}
                    suggestions={this.filterSuggestions()}
                    {...this.props}
                    onSelect={this.onAccountSelect}
                    onChange={this.onInputChange}
                    locale={locale}
                />
                {selectedAccount && (
                    <AccountDetails
                        account={selectedAccount}
                        locale={locale}
                        showBalance={showBalance}
                    />
                )}
            </div>
        );
    }
}

AccountSelector.propTypes = {
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
    className: string,
    id: string.isRequired,
    /** 'nb', 'nn', or 'en' */
    locale: Locale.isRequired,
    /** Overrides default string for all locales. */
    noMatches: string,
    /** Called when an account is clicked (or Enter is pressed when highlighted) */
    onAccountSelected: func.isRequired,
    /** Called on changes in the input field */
    onChange: func.isRequired,
    selectedAccount: Account,
    /** Default true. */
    showBalance: bool,
    value: string.isRequired,
    /**
     * Disables the input-field. Useful when shown in native apps,
     * where the textual input and keyboard can be distracting.
     */
    readOnly: bool,
};

export default AccountSelector;
