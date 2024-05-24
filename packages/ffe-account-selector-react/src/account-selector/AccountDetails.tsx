import React from 'react';
import { accountFormatter, balanceWithCurrency } from '../util/format';
import { Account, Locale } from '../types';
import classnames from 'classnames';

interface AccountDetailsProps {
    account?: Account;
    locale: Locale;
    showBalance: boolean;
    ariaInvalid: React.ComponentPropsWithoutRef<'div'>['aria-invalid'];
}

export function AccountDetails({
    account,
    locale,
    showBalance = true,
    ariaInvalid,
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
