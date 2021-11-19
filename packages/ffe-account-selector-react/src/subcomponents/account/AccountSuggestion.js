import React from 'react';
import { bool, arrayOf, string } from 'prop-types';
import classNames from 'classnames';

import { accountFormatter, balanceWithCurrency } from '../../util/format';
import { Account, Locale } from '../../util/types';

const AccountSuggestionItem = ({
    item,
    isHighlighted,
    locale,
    dropdownAttributes,
}) => {
    const { accountNumber, balance, name, currencyCode } = item;
    const shouldShowBalance =
        dropdownAttributes.includes('balance') && typeof balance === 'number';
    return (
        <div
            className={classNames(
                'ffe-account-suggestion ffe-account-suggestion__account',
                {
                    'ffe-account-suggestion--highlighted': isHighlighted,
                },
            )}
        >
            <span className="ffe-account-suggestion__name">{name}</span>
            <div className="ffe-account-suggestion__details">
                <span className="ffe-account-suggestion__number">
                    {accountFormatter(accountNumber)}
                </span>
                {shouldShowBalance && (
                    <span className="ffe-account-suggestion__balance">
                        {balanceWithCurrency(balance, locale, currencyCode)}
                    </span>
                )}
            </div>
        </div>
    );
};

AccountSuggestionItem.propTypes = {
    item: Account.isRequired,
    locale: Locale.isRequired,
    isHighlighted: bool.isRequired,
    dropdownAttributes: arrayOf(string).isRequired,
};

export default AccountSuggestionItem;
