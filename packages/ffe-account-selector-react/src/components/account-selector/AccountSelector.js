import React from 'react';
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
import { SearchableDropdown } from '@sb1/ffe-searchable-dropdown-react';
import { Account, Locale } from '../../util/types';
import { BaseAccountSelector } from './BaseAccountSelector';

export const AccountSelector = ({
    id,
    className,
    locale,
    selectedAccount,
    hideAccountDetails,
    showBalance,
    noMatches,
    accounts,
    onAccountSelected,
    allowCustomAccount,
    labelledById,
    listElementBody,
    postListElement,
    onReset,
    inputProps,
    formatAccountNumber,
    ariaInvalid,
    withSpaceForDetails,
    onOpen,
    onClose,
}) => {
    return (
        <BaseAccountSelector
            id={id}
            className={className}
            labelledById={labelledById}
            inputProps={inputProps}
            locale={locale}
            listElementBody={listElementBody}
            postListElement={postListElement}
            ariaInvalid={ariaInvalid}
            selectedAccount={selectedAccount}
            onOpen={onOpen}
            onClose={onClose}
            hideAccountDetails={hideAccountDetails}
            showBalance={showBalance}
            noMatches={noMatches}
            accounts={accounts}
            onAccountSelected={onAccountSelected}
            allowCustomAccount={allowCustomAccount}
            onReset={onReset}
            formatAccountNumber={formatAccountNumber}
            withSpaceForDetails={withSpaceForDetails}
        >
            {props => <SearchableDropdown {...props} />}
        </BaseAccountSelector>
    );
};

AccountSelector.propTypes = {
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
    /** Determines if account details should be shown (balance and account number under the input field) */
    hideAccountDetails: bool,
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
    /** id of element that labels input field */
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
    /** Default true. */
    formatAccountNumber: bool,
    /** Sets aria-invalid on input field  */
    ariaInvalid: oneOfType([string, bool]).isRequired,
    /** Defines if you should save space for account details that is shown when an account is selected */
    withSpaceForDetails: bool,
    /**
     * For situations where AccountSelector might be populated with hundreds of accounts,
     * uses react-window for performance optimization, default false.
     * This prop will be passed on to SearchableDropdown.
     * The account selector with highCapacity is currently not working with VoiceOver on ios.
     */
    onClose: func,
    /** Prop passed to the dropdown list */
    onOpen: func,
};
