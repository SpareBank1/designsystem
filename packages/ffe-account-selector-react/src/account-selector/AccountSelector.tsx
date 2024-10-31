import React, { AriaAttributes, useState } from 'react';
import classNames from 'classnames';
import { AccountDetails } from './AccountDetails';
import { Account, Locale } from '../types';
import { balanceWithCurrency, formatIncompleteAccountNumber } from '../format';
import { SearchableDropdown } from '@sb1/ffe-searchable-dropdown-react';
import { getAccountsWithCustomAccounts } from './getAccountsWithCustomAccounts';
import { searchMatcherIgnoringAccountNumberFormatting } from '../searchMatcherIgnoringAccountNumberFormatting';
import { texts } from '../texts';

export interface AccountSelectorProps<T extends Account = Account> {
    /**
     * Array of objects:
     *  {
     *      accountNumber: string.isRequired,
     *      name: string.isRequired,
     *      balance: number,
     *      currencyCode: string,
     *  }
     */
    accounts: T[];
    className?: string;
    id: string;
    locale?: Locale;
    /** Overrides default string for all locales. */
    noMatches?: {
        text: string;
        dropdownList?: T[];
    };
    /** Props passed to the input field */
    inputProps?: React.ComponentPropsWithoutRef<'input'>;
    /** Returns the selected account object */
    onAccountSelected: (account: T) => void;
    /** Determines if account details should be shown (balance and account number under the input field) */
    hideAccountDetails?: boolean;
    /** Default false. */
    showBalance?: boolean;
    /** Default true. */
    formatAccountNumber?: boolean;
    /** id of element that labels input field */
    labelledById?: string;
    /**
     * Allows selecting the text the user writes even if it does not match anything in the accounts array.
     * Useful e.g. if you want to pay to account that is not in yur recipients list.
     */
    allowCustomAccount?: boolean;
    /** Custom element to use for each item in the dropdown list */
    optionBody?: React.ComponentType<{
        item: T;
        locale: Locale;
        isHighlighted: boolean;
        dropdownAttributes: (keyof T)[];
    }>;
    /** Element to be shown below dropDownList */
    postListElement?: React.ReactNode;
    /** Sets aria-invalid on input field  */
    'aria-invalid'?: AriaAttributes['aria-invalid'];
    ariaInvalid?: AriaAttributes['aria-invalid'];
    /** Prop passed to the dropdown list */
    onOpen?: () => void;
    onClose?: () => void;
    selectedAccount?: T;
    /**
     * Called when emptying the input field and moving focus away from the account selector
     * */
    onReset: () => void;
    /** Adds alternative styling for better contrast on certain backgrounds */
    onColoredBg?: boolean;
}

export const AccountSelector = <T extends Account = Account>({
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
    optionBody: OptionBody,
    postListElement,
    onReset,
    inputProps,
    formatAccountNumber = true,
    ariaInvalid,
    onOpen,
    onClose,
    onColoredBg,
    ...rest
}: AccountSelectorProps<T>) => {
    const [inputValue, setInputValue] = useState(selectedAccount?.name || '');

    const formatter = formatAccountNumber
        ? formatIncompleteAccountNumber
        : undefined;

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        if (inputProps?.onChange) {
            inputProps.onChange(event);
        }
    };

    const handleAccountSelected = (value: T | null) => {
        const hasResetSelection = value === null;
        const hasSelectedCustomAccount = !value?.accountNumber;
        if (hasResetSelection) {
            setInputValue('');
            onReset();
        } else if (hasSelectedCustomAccount) {
            onAccountSelected({
                name: value.name,
                accountNumber: value.name,
            } as T);
            setInputValue(value.name);
        } else {
            onAccountSelected(value);
            setInputValue(value.name);
        }
    };

    const _ariaInvalid = rest['aria-invalid'] ?? ariaInvalid;

    const dropdownListAccounts = accounts.map(it => ({
        ...it,
        balance: OptionBody
            ? it.balance
            : balanceWithCurrency(it.balance, locale, it.currencyCode),
    }));

    return (
        <div
            className={classNames(
                'ffe-account-selector-single',
                { 'ffe-account-selector-single--on-colored-bg': onColoredBg },
                className,
            )}
            id={`${id}-account-selector-container`}
        >
            <SearchableDropdown<T>
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
                dropdownList={
                    allowCustomAccount
                        ? getAccountsWithCustomAccounts({
                              selectedAccount,
                              accounts: dropdownListAccounts,
                              inputValue,
                          })
                        : dropdownListAccounts
                }
                noMatch={
                    allowCustomAccount && inputValue.trim() !== ''
                        ? {
                              dropdownList: [
                                  {
                                      name: formatter
                                          ? formatter(inputValue)
                                          : inputValue,
                                      accountNumber: '',
                                  } as T,
                              ],
                          }
                        : (noMatches ?? { text: texts[locale].noMatch })
                }
                formatter={formatter}
                onChange={handleAccountSelected}
                searchAttributes={['name', 'accountNumber']}
                locale={locale}
                optionBody={OptionBody}
                ariaInvalid={_ariaInvalid}
                searchMatcher={searchMatcherIgnoringAccountNumberFormatting}
                selectedItem={selectedAccount}
                onOpen={onOpen}
                onClose={onClose}
                isEqual={(accountA, accountB) =>
                    accountA.accountNumber === accountB.accountNumber
                }
            />

            {!hideAccountDetails && (
                <AccountDetails
                    ariaInvalid={_ariaInvalid}
                    account={selectedAccount}
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
