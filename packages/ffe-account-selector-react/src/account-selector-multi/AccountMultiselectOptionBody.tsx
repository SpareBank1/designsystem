import React from 'react';
import classnames from 'classnames';
import { SmallText } from '@sb1/ffe-core-react';
import { Icon } from '@sb1/ffe-icons-react';
import { Account, Locale } from '../types.js';
import { accountFormatter, balanceWithCurrency } from '../format.js';

interface MultiselectOptionBodyProps<Item extends Account> {
    item: Item;
    isHighlighted: boolean;
    showBalance: boolean;
    locale: Locale;
}

const checkIcon =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPgogICAgPHBhdGgKICAgICAgICBkPSJtMzgyLTM2Mi4xMzEgMzM0LjY5Ni0zMzQuNjk1UTczMC4zNy03MTAuNSA3NDguNzYxLTcxMC41dDMyLjA2NSAxMy42NzRRNzk0LjUtNjgzLjE1MiA3OTQuNS02NjQuMzhxMCAxOC43NzEtMTMuNjc0IDMyLjQ0NUw0MTQuMDY1LTI2NC40MTNRNDAwLjM5MS0yNTAuNzM5IDM4Mi0yNTAuNzM5dC0zMi4wNjUtMTMuNjc0TDE3OC40MTMtNDM1LjkzNXEtMTMuNjc0LTEzLjY3NC0xMy4yOTQtMzIuNDQ1LjM4MS0xOC43NzIgMTQuMDU1LTMyLjQ0NlQyMTEuNjItNTE0LjVxMTguNzcxIDAgMzIuNDQ1IDEzLjY3NEwzODItMzYyLjEzMVoiIC8+Cjwvc3ZnPg==';

export function AccountMultiselectOptionBody<Item extends Account>({
    item,
    isHighlighted,
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
            <div className="ffe-searchable-dropdown__list-item-body-content">
                {item.name}
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
            <Icon
                fileUrl={checkIcon}
                size="md"
                className="ffe-searchable-dropdown__selected-icon"
            />
        </div>
    );
}
