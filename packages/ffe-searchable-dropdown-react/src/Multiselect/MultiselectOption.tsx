import React from 'react';
import classnames from 'classnames';
import { MicroText } from '@sb1/ffe-core-react';
import { Checkbox } from '@sb1/ffe-form-react';

interface MultiselectOptionProps<Item extends Record<string, any>> {
    item: Item;
    dropdownAttributes: (keyof Item)[];
    isHighlighted: boolean;
    isSelected: boolean;
    onClick: React.MouseEventHandler<HTMLDivElement>;
    onChange: (item: Item) => void;
}

export function MultiselectOption<Item extends Record<string, any>>({
    item,
    dropdownAttributes,
    isHighlighted,
    isSelected,
    onClick,
    onChange,
}: MultiselectOptionProps<Item>) {
    const [titleAttribute, ...restAttributes] = dropdownAttributes;
    const title = item[titleAttribute];
    const rest = restAttributes.map((attribute, index) => (
        <MicroText key={index}>{item[attribute]}</MicroText>
    ));
    return (
        <div
            className={classnames('ffe-searchable-dropdown__list-item-body', {
                'ffe-searchable-dropdown__list-item-body--highlighted':
                    isHighlighted,
            })}
        >
            <Checkbox
                checked={isSelected}
                onClick={onClick}
                onChange={() => onChange(item)}
            >
                {title}
                {!!rest.length && (
                    <div className="ffe-searchable-dropdown__list-item-body-details">
                        {rest}
                    </div>
                )}
            </Checkbox>
        </div>
    );
}
