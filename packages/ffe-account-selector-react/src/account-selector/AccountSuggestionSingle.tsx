import React from 'react';
import classNames from 'classnames';
import { accountFormatter, balanceWithCurrency } from '../util/format';
import { Account, Locale } from '../types';

export interface AccountSuggestionSingleProps {
    item: Account;
    locale: Locale;
    isHighlighted: boolean;
    dropdownAttributes: (keyof Account)[];
}

export const AccountSuggestionSingle = ({
    item,
    isHighlighted,
    locale,
    dropdownAttributes,
}: AccountSuggestionSingleProps) => {
    const { accountNumber, balance, name, currencyCode } = item;
    const shouldShowBalance =
        dropdownAttributes.includes('balance') &&
        ['string', 'number'].includes(typeof balance);
    return (
        <div
            className={classNames('ffe-account-suggestion-single', {
                'ffe-account-suggestion-single--highlighted': isHighlighted,
            })}
        >
            <span className="ffe-account-suggestion-single__name">{name}</span>
            <div className="ffe-account-suggestion-single__details">
                <span className="ffe-account-suggestion-single__number">
                    {accountFormatter(accountNumber)}
                </span>
                {shouldShowBalance && (
                    <span className="ffe-account-suggestion-single__balance">
                        {balanceWithCurrency(balance, locale, currencyCode)}
                    </span>
                )}
            </div>
        </div>
    );
};
