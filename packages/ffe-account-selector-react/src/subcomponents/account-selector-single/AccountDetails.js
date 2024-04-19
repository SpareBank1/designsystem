import React from 'react';
import { bool, oneOfType, string } from 'prop-types';
import { accountFormatter, balanceWithCurrency } from '../../util/format';
import { Account, Locale } from '../../util/types';
import classnames from 'classnames';

function AccountDetails({ account, locale, showBalance = true, ariaInvalid }) {
    const { balance, accountNumber, currencyCode } = account ?? {};
    const isInvalidWithNoAccount =
        !account && (ariaInvalid === 'true' || ariaInvalid === true);

    return (
        <div
            className={classnames(
                'ffe-small-text',
                'ffe-account-selector-single__details',
                {
                    'ffe-account-selector-single__details--invalid-empty': isInvalidWithNoAccount,
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

AccountDetails.propTypes = {
    account: Account,
    locale: Locale.isRequired,
    showBalance: bool,
    ariaInvalid: oneOfType([string, bool]),
};

export default AccountDetails;
