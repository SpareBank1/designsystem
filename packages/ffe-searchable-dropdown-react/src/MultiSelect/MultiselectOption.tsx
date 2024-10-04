import React from 'react';
import classnames from 'classnames';
import { MicroText } from '@sb1/ffe-core-react';
import { Checkbox } from '@sb1/ffe-form-react';
import { ListItemBodyProps } from '../Components/Results/ListItemBody';


interface MultiselectOptionProps<Item extends Record<string, any>> {
    item: Item;
    dropdownAttributes: (keyof Item)[];
    isHighlighted: boolean;
    isSelected: boolean;
}

export function MultiselectOption<Item extends Record<string, any>>({
    item,
    dropdownAttributes,
    isHighlighted,
    isSelected,
}: ListItemBodyProps<Item>) {
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
            >
                {title}
                {!!rest.length && (
                    <div className="ffe-searchable-dropdown__list-item-body-details">
                        {rest}
                    </div>
                )}
            </Checkbox>
            {/*<div className="ffe-account-suggestion-multi">*/}
            {/*    /!* @ts-ignore *!/*/}
            {/*    <Checkbox*/}
            {/*        checked={isSelected}*/}
            {/*        name="checkbox-label"*/}
            {/*        inline={false}*/}
            {/*        tabIndex={-1}*/}
            {/*        disabled={true}*/}
            {/*    />*/}
            {/*    <div className="ffe-account-suggestion-multi__content-wrapper">*/}
            {/*    <span className="ffe-account-suggestion-multi__name">*/}
            {/*        {title}*/}
            {/*    </span>*/}
            {/*        <div className="ffe-account-suggestion-multi__details">*/}
            {/*            {!!rest.length && (*/}
            {/*                <div className="ffe-searchable-dropdown__list-item-body-details">*/}
            {/*                    {rest}*/}
            {/*                </div>*/}
            {/*            )}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}
