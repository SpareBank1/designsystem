import React from 'react';
import { bool } from 'prop-types';
import { Checkbox } from '@sb1/ffe-form-react';

import { accountFormatter, balanceWithCurrency } from '../../util/format';
import { Account, Locale } from '../../util/types';

function AccountSuggestionMulti({ account, locale, selected = false }) {
    const { accountNumber, balance, name, currencyCode } = account;
    const hasBalance = balance !== null;
    return (
        <div className="ffe-account-suggestion-multi">
            <Checkbox
                checked={selected}
                name="my-checkbox-label"
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

AccountSuggestionMulti.propTypes = {
    account: Account.isRequired,
    locale: Locale.isRequired,
    selected: bool.isRequired,
};

export default AccountSuggestionMulti;
