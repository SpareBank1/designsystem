import React, { AriaAttributes, useState } from 'react';
import classNames from 'classnames';
import { AccountDetails } from './AccountDetails.js';
import { Account, Locale } from '../types.js';
import { formatIncompleteAccountNumber } from '../format.js';
import { SearchableDropdown } from '@sb1/ffe-searchable-dropdown-react';
import { getAccountsWithCustomAccounts } from './getAccountsWithCustomAccounts.js';
import { searchMatcherIgnoringAccountNumberFormatting } from '../searchMatcherIgnoringAccountNumberFormatting.js';
import { texts } from '../texts.js';
import { AccountActionBody } from './AccountOptionBody.js';

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
    /** Attribute used in the input when an item is selected. **/
    displayAttribute?: keyof T;
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
    onReset: () => void /** @deprecated as part of update to Semantic Colors
     *
     * Use the `ffe-accent-color` class on the component or on the container of the component instead
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */;
    onColoredBg?: never;
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
    displayAttribute,
    ...rest
}: AccountSelectorProps<T>) => {
    const [inputValue, setInputValue] = useState(selectedAccount?.name || '');

    const formatter = formatAccountNumber
        ? formatIncompleteAccountNumber
        : undefined;

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (allowCustomAccount) {
            setInputValue(event.target.value);
        }

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
                ...(displayAttribute ? { [displayAttribute]: value.name } : {}),
            } as T);
            setInputValue(value.name);
        } else {
            onAccountSelected(value);
            setInputValue(value.name);
        }
    };

    const _ariaInvalid = rest['aria-invalid'] ?? ariaInvalid;

    return (
        <div
            className={classNames('ffe-account-selector-single', className)}
            id={`${id}-account-selector-container`}
        >
            <SearchableDropdown<T>
                id={id}
                labelledById={labelledById}
                displayAttribute={displayAttribute}
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
                              accounts,
                              inputValue,
                          })
                        : accounts
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
                                      ...(displayAttribute
                                          ? {
                                                [displayAttribute]: formatter
                                                    ? formatter(inputValue)
                                                    : inputValue,
                                            }
                                          : {}),
                                  } as T,
                              ],
                          }
                        : (noMatches ?? { text: texts[locale].noMatch })
                }
                formatter={formatter}
                onChange={handleAccountSelected}
                searchAttributes={[
                    'name',
                    'accountNumber',
                    ...(displayAttribute ? [displayAttribute] : []),
                ]}
                locale={locale}
                optionBody={({ item, isHighlighted, ...restOptionBody }) => {
                    if (OptionBody) {
                        return (
                            <OptionBody
                                item={item}
                                isHighlighted={isHighlighted}
                                {...restOptionBody}
                            />
                        );
                    }

                    return (
                        <AccountActionBody
                            item={item}
                            isHighlighted={isHighlighted}
                            locale={locale}
                            showBalance={showBalance}
                        />
                    );
                }}
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
                    locale={locale}
                />
            )}
        </div>
    );
};
