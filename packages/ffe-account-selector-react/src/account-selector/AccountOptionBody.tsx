import React from 'react';
import { MicroText } from '@sb1/ffe-core-react';
import classnames from 'classnames';
import { balanceWithCurrency, accountFormatter } from '../format.js';
import { Account, Locale } from '../types.js';

interface Props<Item extends Account> {
    item: Item;
    isHighlighted: boolean;
    showBalance: boolean;
    locale: Locale;
}

export function AccountActionBody<Item extends Account>({
    item,
    isHighlighted,
    showBalance,
    locale,
}: Props<Item>) {
    return (
        <div
            className={classnames('ffe-searchable-dropdown__list-item-body', {
                'ffe-searchable-dropdown__list-item-body--highlighted':
                    isHighlighted,
            })}
        >
            {item.name}
            <div className="ffe-searchable-dropdown__list-item-body-details">
                <MicroText className="ffe-searchable-dropdown__detail-text">
                    {accountFormatter(item.accountNumber)}
                </MicroText>
                {showBalance && (
                    <MicroText className="ffe-searchable-dropdown__detail-text">
                        {balanceWithCurrency(
                            item.balance,
                            locale,
                            item.currencyCode,
                        )}
                    </MicroText>
                )}
            </div>
        </div>
    );
}
