import React, { AriaAttributes } from 'react';
import { Account, Locale } from '../types';
import { SearchableDropdownMultiSelect } from '@sb1/ffe-searchable-dropdown-react';
import { formatIncompleteAccountNumber } from '../format';
import { searchMatcherIgnoringAccountNumberFormatting } from '../searchMatcherIgnoringAccountNumberFormatting';
import { texts } from '../texts';
import { AccountMultiselectOptionBody } from './AccountMultiselectOptionBody';

export interface AccountSelectorMultiProps<T extends Account = Account> {
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
    /** Called when a value is selected */
    onChange: (account: T, actionType: 'selected' | 'removed') => void;
    /** Default false. */
    showBalance?: boolean;
    /** Default true. */
    formatAccountNumber?: boolean;
    /** id of element that labels input field */
    labelledById?: string;
    /** Custom element to use for each item in the dropdown list */
    optionBody?: React.ComponentType<{
        item: T;
        dropdownAttributes: (keyof T)[];
        isHighlighted: boolean;
        locale: Locale;
        isSelected: boolean;
    }>;
    /** Element to be shown below dropDownList */
    postListElement?: React.ReactNode;
    /** Sets aria-invalid on input field  */
    'aria-invalid'?: AriaAttributes['aria-invalid'];
    ariaInvalid?: AriaAttributes['aria-invalid'];
    /** Prop passed to the dropdown list */
    onOpen?: () => void;
    onClose?: () => void;
    selectedAccounts?: T[];
    /**
     * Called when emptying the input field and moving focus away from the account selector
     * */
    onReset: () => void;
    /** Adds alternative styling for better contrast on certain backgrounds */
    onColoredBg?: boolean;
    /** Limits number of rendered dropdown elements */
    maxRenderedDropdownElements?: number;
}

export const AccountSelectorMulti = <T extends Account = Account>({
    id,
    className,
    locale = 'nb',
    selectedAccounts,
    showBalance = false,
    noMatches,
    accounts,
    onChange,
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
    maxRenderedDropdownElements,
    ...rest
}: AccountSelectorMultiProps<T>) => {
    const formatter = formatAccountNumber
        ? formatIncompleteAccountNumber
        : undefined;

    return (
        <SearchableDropdownMultiSelect<T>
            id={id}
            labelledById={labelledById}
            inputProps={inputProps}
            dropdownAttributes={
                showBalance
                    ? ['name', 'accountNumber', 'balance']
                    : ['name', 'accountNumber']
            }
            postListElement={postListElement}
            dropdownList={accounts}
            noMatch={noMatches ?? { text: texts[locale].noMatch }}
            formatter={formatter}
            onChange={onChange}
            searchAttributes={['name', 'accountNumber']}
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
                    <AccountMultiselectOptionBody
                        item={item}
                        isHighlighted={isHighlighted}
                        locale={locale}
                        showBalance={showBalance}
                    />
                );
            }}
            ariaInvalid={rest['aria-invalid'] ?? ariaInvalid}
            searchMatcher={searchMatcherIgnoringAccountNumberFormatting}
            selectedItems={selectedAccounts}
            onOpen={onOpen}
            onClose={onClose}
            maxRenderedDropdownElements={maxRenderedDropdownElements}
            isEqual={(accountA, accountB) =>
                accountA.accountNumber === accountB.accountNumber
            }
        />
    );
};
