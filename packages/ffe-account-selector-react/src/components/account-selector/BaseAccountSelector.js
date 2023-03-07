import React, { useState } from 'react';
import {
    func,
    string,
    arrayOf,
    bool,
    shape,
    object,
    oneOfType,
    node,
} from 'prop-types';
import classNames from 'classnames';
import {
    AccountDetails,
    AccountSuggestionSingle,
} from '../../subcomponents/account-selector-single';
import { Account, Locale } from '../../util/types';
import { formatIncompleteAccountNumber } from '../../util/format';

const getAccountsWithCustomAccounts = ({
    accounts,
    selectedAccount,
    inputValue,
}) => {
    const shouldAddSelectedAccountNotFoundInList =
        selectedAccount &&
        selectedAccount.name === inputValue &&
        !accounts.find(
            account => account.accountNumber === selectedAccount.accountNumber,
        );

    return shouldAddSelectedAccountNotFoundInList
        ? [...accounts, selectedAccount]
        : accounts;
};

export const BaseAccountSelector = ({
    id,
    className,
    locale,
    selectedAccount,
    showBalance = false,
    noMatches,
    accounts,
    onAccountSelected,
    allowCustomAccount = false,
    labelledById,
    listElementBody,
    postListElement,
    onReset,
    inputProps,
    formatAccountNumber = true,
    ariaInvalid,
    withSpaceForDetails = true,
    onOpen,
    onClose,
    children,
}) => {
    const [inputValue, setInputValue] = useState(selectedAccount?.name || '');

    const formatter = formatAccountNumber
        ? formatIncompleteAccountNumber
        : undefined;

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
            inputProps.onChange(event);
        }
    };

    const handleAccountSelected = value => {
        const hasResetSelection = value === null;
        const hasSelectedCustomAccount = !value?.accountNumber;
        if (hasResetSelection) {
            setInputValue('');
            onReset();
        } else if (hasSelectedCustomAccount) {
            onAccountSelected({ name: value.name, accountNumber: value.name });
            setInputValue(value.name);
        } else {
            onAccountSelected(value);
            setInputValue(value.name);
        }
    };

    const customNoMatch =
        allowCustomAccount && inputValue.trim() !== ''
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

    const dropdownList = allowCustomAccount
        ? getAccountsWithCustomAccounts({
              selectedAccount,
              accounts,
              inputValue,
          })
        : accounts;

    return (
        <div className="ffe-account-selector-single-container">
            <div
                className={classNames(
                    'ffe-account-selector-single',
                    {
                        'ffe-account-selector-single--with-space-for-details':
                            !selectedAccount && withSpaceForDetails,
                    },
                    className,
                )}
                id={`${id}-account-selector-container`}
            >
                {children({
                    id,
                    labelledById,
                    inputProps: {
                        ...inputProps,
                        onChange: onInputChange,
                    },
                    dropdownAttributes,
                    postListElement,
                    dropdownList,
                    noMatch: customNoMatch,
                    formatter,
                    onChange: handleAccountSelected,
                    searchAttributes: ['name', 'accountNumber'],
                    locale,
                    listElementBody: listElementBody || AccountSuggestionSingle,
                    ariaInvalid,
                    searchMatcher: searchMatcherIgnoringAccountNumberFormatting,
                    selectedItem: selectedAccount,
                    onOpen,
                    onClose,
                })}
                {selectedAccount && (
                    <AccountDetails
                        account={selectedAccount}
                        locale={locale}
                        showBalance={
                            showBalance &&
                            ['string', 'number'].includes(
                                typeof selectedAccount.balance,
                            )
                        }
                    />
                )}
            </div>
        </div>
    );
};

BaseAccountSelector.propTypes = {
    id: string.isRequired,
    className: string,
    /** 'nb', 'nn', or 'en' */
    locale: Locale.isRequired,
    selectedAccount: Account,
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
    /** Default false. */
    showBalance: bool,
    /** Overrides default string for all locales. */
    noMatches: shape({
        text: string.isRequired,
        dropdownList: arrayOf(object),
    }),
    /** Returns the selected account object */
    onAccountSelected: func.isRequired,
    /**
     * Allows selecting the text the user writes even if it does not match anything in the accounts array.
     * Useful e.g. if you want to pay to account that is not in your recipients list.
     */
    allowCustomAccount: bool,
    /** Id of element that labels input field */
    labelledById: string,
    /** Custom element to use for each item in the dropdown list */
    listElementBody: func,
    /** Element to be shown below dropDownList */
    postListElement: node,
    /**
     * Called when emptying the input field and moving focus away from the account selector
     * */
    onReset: func.isRequired,
    /** Props passed to the input field */
    inputProps: shape(),
    /** Sets aria-invalid on input field  */
    ariaInvalid: oneOfType([string, bool]).isRequired,
    /** Default true. */
    formatAccountNumber: bool,
    /** Defines if you should save space for account details that is shown when an account is selected */
    withSpaceForDetails: bool,
    /** Prop passed to the dropdown list */
    onClose: func,
    /** Prop passed to the dropdown list */
    onOpen: func,
    children: func,
};
