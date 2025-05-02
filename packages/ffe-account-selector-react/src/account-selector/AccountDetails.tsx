import React from 'react';
import { Account, Locale } from '../types.js';
import classnames from 'classnames';
import { balanceWithCurrency, accountFormatter } from '../format.js';

interface AccountDetailsProps {
    account?: Account;
    showBalance: boolean;
    ariaInvalid: React.ComponentPropsWithoutRef<'div'>['aria-invalid'];
    locale: Locale;
}

export function AccountDetails({
    account,
    showBalance = true,
    ariaInvalid,
    locale,
}: AccountDetailsProps) {
    const { balance, accountNumber, currencyCode } = account ?? {};
    const isInvalidWithNoAccount =
        !account && (ariaInvalid === 'true' || ariaInvalid === true);

    return (
        <div
            className={classnames(
                'ffe-small-text',
                'ffe-account-selector-single__details',
                {
                    'ffe-account-selector-single__details--invalid-empty':
                        isInvalidWithNoAccount,
                },
            )}
        >
            {account && (
                <>
                    <div className="ffe-account-selector-single__details--left">
                        {accountFormatter(accountNumber)}
                    </div>
                    {showBalance && (
                        <div className="ffe-account-selector-single__details--right">
                            {balanceWithCurrency(balance, locale, currencyCode)}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
