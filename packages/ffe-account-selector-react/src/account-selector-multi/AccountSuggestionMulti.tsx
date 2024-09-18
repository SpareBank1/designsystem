import React from 'react';
import { Checkbox } from '@sb1/ffe-form-react';
import { accountFormatter, balanceWithCurrency } from '../util/format';
import { Account, Locale } from '../types';

interface AccountSuggestionMultiProps {
    account: Account;
    locale: Locale;
    selected?: boolean;
}

export function AccountSuggestionMulti({
    account,
    locale,
    selected = false,
}: AccountSuggestionMultiProps) {
    const { accountNumber, balance, name, currencyCode } = account;
    const hasBalance = balance !== undefined;

    return (
        <div className="ffe-account-suggestion-multi">
            {/* @ts-ignore */}
            <Checkbox
                checked={selected}
                name="checkbox-label"
                inline={false}
                tabIndex={-1}
                disabled={true}
            />
            <div className="ffe-account-suggestion-multi__content-wrapper">
                <span className="ffe-account-suggestion-multi__name">
                    {name}
                </span>
                <div className="ffe-account-suggestion-multi__details">
                    <span className="ffe-account-suggestion-multi__number">
                        {accountFormatter(accountNumber)}
                    </span>
                    {hasBalance && (
                        <span className="ffe-account-suggestion-multi__balance">
                            {balanceWithCurrency(balance, locale, currencyCode)}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
