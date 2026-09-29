import React from 'react';
import classnames from 'classnames';
import { SmallText } from '@sb1/ffe-core-react';
import { getBalanceAriaLabel } from '../translations';
import { Locale } from '../types';

interface MultiselectOptionBodyProps<Item extends Record<string, any>> {
    item: Item;
    dropdownAttributes: (keyof Item)[];
    isHighlighted: boolean;
    isSelected: boolean;
    locale: Locale;
}

export function MultiselectOptionBody<Item extends Record<string, any>>({
    item,
    dropdownAttributes,
    isHighlighted,
    isSelected,
    locale,
}: MultiselectOptionBodyProps<Item>) {
    const [titleAttribute, ...restAttributes] = dropdownAttributes;
    const title = item[titleAttribute];
    const rest = restAttributes.map((attribute, index) => (
        <SmallText
            aria-label={
                attribute === 'balance'
                    ? getBalanceAriaLabel(locale, item[attribute])
                    : undefined
            }
            className="ffe-searchable-dropdown__detail-text"
            key={index}
        >
            {item[attribute]}
        </SmallText>
    ));

    return (
        <div
            className={classnames('ffe-searchable-dropdown__list-item-body', {
                'ffe-searchable-dropdown__list-item-body--highlighted':
                    isHighlighted,
                'ffe-searchable-dropdown__list-item-body--condensed':
                    !!rest.length,
            })}
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
                    {title}
                </span>
                {!!rest.length && (
                    <div className="ffe-searchable-dropdown__list-item-body-details">
                        {rest}
                    </div>
                )}
            </div>
        </div>
    );
}
