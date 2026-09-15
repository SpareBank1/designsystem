import React from 'react';
import classnames from 'classnames';
import { SmallText } from '@sb1/ffe-core-react';
import { Account, Locale } from '../types';
import { accountFormatter, balanceWithCurrency } from '../format';

interface MultiselectOptionBodyProps<Item extends Account> {
    item: Item;
    isHighlighted: boolean;
    isSelected: boolean;
    showBalance: boolean;
    locale: Locale;
}

export function AccountMultiselectOptionBody<Item extends Account>({
    item,
    isHighlighted,
    isSelected,
    showBalance,
    locale,
}: MultiselectOptionBodyProps<Item>) {
    return (
        <div
            className={classnames(
                'ffe-searchable-dropdown__list-item-body',
                'ffe-searchable-dropdown__list-item-body--condensed',
                {
                    'ffe-searchable-dropdown__list-item-body--highlighted':
                        isHighlighted,
                },
            )}
        >
            {/* Dekorativ boks: en ekte <input> er ikke lov inne i
                role="option", som har presentasjonelle barn. Radens
                aria-selected er det som annonseres. */}
            <span
                aria-hidden="true"
                className={classnames(
                    'ffe-checkbox',
                    'ffe-checkbox--no-margin',
                    {
                        'ffe-checkbox--checked': isSelected,
                    },
                )}
            />
            <div className="ffe-searchable-dropdown__list-item-body-content">
                <span className="ffe-searchable-dropdown__list-item-title">
                    {item.name}
                </span>
                <div className="ffe-searchable-dropdown__list-item-body-details">
                    <SmallText className="ffe-searchable-dropdown__detail-text">
                        {accountFormatter(item.accountNumber)}
                    </SmallText>
                    {showBalance && (
                        <SmallText className="ffe-searchable-dropdown__detail-text">
                            {balanceWithCurrency(
                                item.balance,
                                locale,
                                item.currencyCode,
                            )}
                        </SmallText>
                    )}
                </div>
            </div>
        </div>
    );
}
