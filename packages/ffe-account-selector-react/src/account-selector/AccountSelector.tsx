import React, { useState } from 'react';
import classNames from 'classnames';
import {
    AccountSuggestionSingle,
    AccountSuggestionSingleProps,
} from './AccountSuggestionSingle';
import { AccountDetails } from './AccountDetails';
import { Account } from '../types';
import { formatIncompleteAccountNumber } from '../util/format';
import { SearchableDropdown } from '@sb1/ffe-searchable-dropdown-react';

const getAccountsWithCustomAccounts = ({
    accounts,
    selectedAccount,
    inputValue,
}: {
    accounts: Account[];
    selectedAccount: Account | undefined;
    inputValue: string;
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

export interface AccountSelectorProps {
    /**
     * Array of objects:
     *  {
     *      accountNumber: string.isRequired,
     *      name: string.isRequired,
     *      balance: number,
     *      currencyCode: string,
     *  }
     */
    accounts: Account[];
    className?: string;
    id: string;
    locale?: 'nb' | 'nn' | 'en';
    /** Overrides default string for all locales. */
    noMatches?: {
        text: string;
        dropdownList?: Account[];
    };
    /** Props passed to the input field */
    inputProps?: React.ComponentPropsWithoutRef<'input'>;
    /** Returns the selected account object */
    onAccountSelected: (account: Account) => void;
    /**
     * Called when emptying the input field and moving focus away from the account selector
     * *
    onReset: () => void;
    selectedAccount?: T
    /** Determines if account details should be shown (balance and account number under the input field) */
    hideAccountDetails?: boolean;
    /** Default false. */
    showBalance?: boolean;
    /** Default true. */
    formatAccountNumber?: boolean;
    /** id of element that labels input field */
    labelledById?: string;
    /*
     * Allows selecting the text the user writes even if it does not match anything in the accounts array.
     * Useful e.g. if you want to pay to account that is not in yur recipients list.
     */
    allowCustomAccount?: boolean;
    /** Custom element to use for each item in the dropdown list */
    listElementBody?: React.ComponentType<AccountSuggestionSingleProps>;
    /** Element to be shown below dropDownList */
    postListElement?: React.ReactNode;
    /** Sets aria-invalid on input field  */
    ariaInvalid?: React.ComponentProps<'input'>['aria-invalid'];
    /** Prop passed to the dropdown list */
    onOpen?: () => void;
    onClose?: () => void;
    selectedAccount?: Account;

    onReset: () => void;
}

export const AccountSelector: React.FC<AccountSelectorProps> = ({
    id,
    className,
    locale = 'nb',
    selectedAccount,
    hideAccountDetails = false,
    showBalance = false,
    noMatches,
    accounts,
    onAccountSelected,
    allowCustomAccount = false,
    labelledById,
    listElementBody: ListElementBody,
    postListElement,
    onReset,
    inputProps,
    formatAccountNumber = true,
    ariaInvalid,
    onOpen,
    onClose,
}) => {
    const [inputValue, setInputValue] = useState(selectedAccount?.name || '');

    const formatter = formatAccountNumber
        ? formatIncompleteAccountNumber
        : undefined;

    /**
     * This matcher function closely resembles the default one of SearchableDropdown,
     * but it ignores all spaces and periods so that account number formatting won't mess with the search.
     */
    const searchMatcherIgnoringAccountNumberFormatting =
        (searchString: string, searchAttributes: (keyof Account)[]) =>
        (item: Account) => {
            const cleanString = (value: unknown) =>
                `${value}`
                    .replace(/(\s|\.)/g, '') // Remove all spaces and periods
                    .toLowerCase();
            const cleanedSearchString = cleanString(searchString);
            return searchAttributes.some(searchAttribute =>
                cleanString(item[searchAttribute as keyof Account]).includes(
                    cleanedSearchString,
                ),
            );
        };
    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        if (inputProps?.onChange) {
            inputProps.onChange(event);
        }
    };

    const handleAccountSelected = (value: Account | null) => {
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

    const dropdownList = allowCustomAccount
        ? getAccountsWithCustomAccounts({
              selectedAccount,
              accounts,
              inputValue,
          })
        : accounts;

    return (
        <div
            className={classNames('ffe-account-selector-single', className)}
            id={`${id}-account-selector-container`}
        >
            <SearchableDropdown<Account>
                id={id}
                labelledById={labelledById}
                inputProps={{
                    ...inputProps,
                    onChange: onInputChange,
                }}
                dropdownAttributes={
                    showBalance
                        ? ['name', 'accountNumber', 'balance']
                        : ['name', 'accountNumber']
                }
                postListElement={postListElement}
                dropdownList={dropdownList}
                noMatch={customNoMatch}
                formatter={formatter}
                onChange={handleAccountSelected}
                searchAttributes={['name', 'accountNumber']}
                locale={locale}
                listElementBody={ListElementBody || AccountSuggestionSingle}
                ariaInvalid={ariaInvalid}
                searchMatcher={searchMatcherIgnoringAccountNumberFormatting}
                selectedItem={selectedAccount}
                onOpen={onOpen}
                onClose={onClose}
            />

            {!hideAccountDetails && (
                <AccountDetails
                    ariaInvalid={ariaInvalid}
                    account={selectedAccount}
                    locale={locale}
                    showBalance={
                        showBalance &&
                        ['string', 'number'].includes(
                            typeof selectedAccount?.balance,
                        )
                    }
                />
            )}
        </div>
    );
};
