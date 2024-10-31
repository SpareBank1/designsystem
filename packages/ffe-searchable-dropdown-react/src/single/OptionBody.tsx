import React from 'react';
import classnames from 'classnames';
import { MicroText } from '@sb1/ffe-core-react';

interface ListItemBodyProps<Item extends Record<string, any>> {
    item: Item;
    dropdownAttributes: Array<keyof Item>;
    isHighlighted: boolean;
}

export function OptionBody<Item extends Record<string, any>>({
    item,
    dropdownAttributes,
    isHighlighted,
}: ListItemBodyProps<Item>) {
    const [titleAttribute, ...restAttributes] = dropdownAttributes;
    const title = item[titleAttribute];
    const rest = restAttributes.map((attribute, index) => (
        <MicroText className="ffe-searchable-dropdown__detail-text" key={index}>
            {item[attribute]}
        </MicroText>
    ));
    return (
        <div
            className={classnames('ffe-searchable-dropdown__list-item-body', {
                'ffe-searchable-dropdown__list-item-body--highlighted':
                    isHighlighted,
            })}
        >
            {title}
            {!!rest.length && (
                <div className="ffe-searchable-dropdown__list-item-body-details">
                    {rest}
                </div>
            )}
        </div>
    );
}
