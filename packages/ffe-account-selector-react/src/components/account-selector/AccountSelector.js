import React, { useState } from 'react';
import {
    func,
    string,
    arrayOf,
    bool,
    shape,
    object,
    oneOfType,
} from 'prop-types';
import classNames from 'classnames';
import SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';

import { AccountDetails, AccountSuggestion } from '../../subcomponents/account';
import { Account, Locale } from '../../util/types';
import {
    formatIncompleteAccountNumber,
    isValidNorwegianAccountNumber,
} from '../../util/format';

const AccountSelector = ({
    className,
    id,
    locale,
    selectedAccount,
    showBalance = false,
    noMatches,
    accounts,
    onAccountSelected,
    allowCustomAccount = false,
    labelId,
    listElementBody,
    onReset,
    inputProps,
    formatAccountNumber = true,
    ariaInvalid,
    withSpaceForDetails = true,
}) => {
    const [inputValue, setInputValue] = useState('');

    let formatter;
    if (formatAccountNumber) {
        formatter = formatIncompleteAccountNumber;
    }

    /*
     * This matcher function closely resembles the default one of SearchableDropdown,
     * but it ignores all spaces and periods so that account number formatting won't mess with the search.
     */
    const searchMatcherIgnoringAccountNumberFormatting = (
        searchString,
        searchAttributes,
    ) => item => {
        const cleanString = value =>
            `${value}`
                .replace(/(\s|\.)/g, '') // Remove all spaces and periods
                .toLowerCase();
        const cleanedSearchString = cleanString(searchString);
        return searchAttributes.some(searchAttribute =>
            cleanString(item[searchAttribute]).includes(cleanedSearchString),
        );
    };

    const onInputChange = event => {
        setInputValue(event.target.value);
        if (inputProps?.onChange) {
            inputProps.onChange();
        }
    };

    const handleBlur = () => {
        const accountsMatchingInputValue = accounts.filter(
            searchMatcherIgnoringAccountNumberFormatting(inputValue, [
                'name',
                'accountNumber',
            ]),
        );

        const inputValueWithoutSpacesAndPeriods = inputValue.replace(
            /(\s|\.)/g,
            '',
        );

        const shouldSetCustomName =
            inputValue &&
            inputValue !== selectedAccount?.name &&
            allowCustomAccount;

        const shouldSetCustomAccount =
            isValidNorwegianAccountNumber(inputValueWithoutSpacesAndPeriods) &&
            allowCustomAccount;

        if (accountsMatchingInputValue.length === 1) {
            onAccountSelected(accountsMatchingInputValue[0]);
        } else if (shouldSetCustomAccount) {
            onAccountSelected({
                name: inputValue,
                accountNumber: inputValue,
            });
        } else if (shouldSetCustomName) {
            onAccountSelected({
                name: inputValue,
                accountNumber: '',
            });
        }

        if (inputProps?.onBlur) {
            inputProps.onBlur();
        }
    };

    const handleAccountSelected = value => {
        const hasResetSelection = value === null;
        const hasSelectedCustomAccount = !value?.accountNumber;
        if (hasResetSelection) {
            setInputValue('');
            onReset();
        } else if (hasSelectedCustomAccount) {
            onAccountSelected({
                name: value.name,
                accountNumber: value.name,
            });
            setInputValue(value.name);
        } else {
            onAccountSelected(value);
            setInputValue(value.name);
        }
    };

    const customNoMatch = allowCustomAccount
        ? {
              dropdownList: [
                  {
                      name: formatter ? formatter(inputValue) : inputValue,
                      accountNumber: '',
                  },
              ],
          }
        : noMatches;

    const dropdownAttributes = showBalance
        ? ['name', 'accountNumber', 'balance']
        : ['name', 'accountNumber'];

    return (
        <div className="ffe-account-selector-container">
            <div
                className={classNames('ffe-account-selector', {
                    'ffe-account-selector--with-space-for-details':
                        !selectedAccount && withSpaceForDetails,
                    className,
                })}
                id={`${id}-account-selector-container`}
            >
                <SearchableDropdown
                    id={id}
                    labelId={labelId}
                    inputProps={{
                        ...inputProps,
                        onChange: onInputChange,
                        onBlur: handleBlur,
                    }}
                    dropdownAttributes={dropdownAttributes}
                    dropdownList={accounts}
                    noMatch={customNoMatch}
                    formatter={formatter}
                    onChange={handleAccountSelected}
                    searchAttributes={['name', 'accountNumber']}
                    locale={locale}
                    listElementBody={listElementBody || AccountSuggestion}
                    ariaInvalid={ariaInvalid}
                    searchMatcher={searchMatcherIgnoringAccountNumberFormatting}
                    selectedItem={selectedAccount}
                    allowCustomItem={allowCustomAccount}
                />
                {selectedAccount && (
                    <AccountDetails
                        account={selectedAccount}
                        locale={locale}
                        showBalance={
                            showBalance &&
                            typeof selectedAccount.balance === 'number'
                        }
                    />
                )}
            </div>
        </div>
    );
};

AccountSelector.propTypes = {
    /**
     * Array of objects:
     *  {
     *      accountNumber: string.isRequired,
     *      name: string.isRequired,
     *      balance: number,
     *      currencyCode: string,
     *  }
     */
    accounts: arrayOf(Account).isRequired,
    className: string,
    id: string.isRequired,
    /** 'nb', 'nn', or 'en' */
    locale: Locale.isRequired,
    /** Overrides default string for all locales. */
    noMatches: shape({
        text: string.isRequired,
        dropdownList: arrayOf(object),
    }),
    labelId: string.isRequired,
    /** Returns the selected account object */
    onAccountSelected: func.isRequired,
    /**
     * Called when clicking the clear button X or when
     * emptying the input field and moving focus away from the account selector
     * */
    onReset: func.isRequired,
    selectedAccount: Account,
    /** Default false. */
    showBalance: bool,
    /** Default true. */
    formatAccountNumber: bool,
    /**
     * Allows selecting the text the user writes even if it does not match anything in the accounts array.
     * Useful e.g. if you want to pay to account that is not in your recipients list.
     */
    allowCustomAccount: bool,
    /** Custom element to use for each item in the dropdown list */
    listElementBody: func,
    /** Props passed to the input field */
    inputProps: shape(),
    /** Defines if should save space for account details that is shown when an account is selected */
    withSpaceForDetails: bool,
    /** Sets aria-invalid on input field  */
    ariaInvalid: oneOfType([string, bool]).isRequired,
};

export default AccountSelector;
