import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { ListItemContainer } from './ListItemContainer';
import { NoMatch } from './NoMatch';
import { Locale } from './types';
import isEqual from 'lodash.isequal';

interface ResultProps<Item extends Record<string, any>> {
    noMatch?: {
        text?: string;
        dropdownList?: Item[];
    };
    listToRender: Item[];
    noMatchMessageId: string;
    ListItemBodyElement: React.ComponentType<{
        item: Item;
        dropdownAttributes: (keyof Item)[];
        isHighlighted: boolean;
        locale: Locale;
        isSelected: boolean;
    }>;
    selectedItems?: Item[];
    highlightedIndex?: number;
    refs: React.Ref<HTMLDivElement>[];
    dropdownAttributes: (keyof Item)[];
    locale: Locale;
    onChange: (item: Item) => void;
}

function isItemSelected<Item extends Record<string, any>>(
    item: Item,
    selectedItems: Item[],
): boolean {
    return selectedItems.some(selected => isEqual(item, selected));
}

export function Results<Item extends Record<string, any>>({
    noMatch,
    listToRender,
    noMatchMessageId,
    ListItemBodyElement,
    refs,
    highlightedIndex,
    dropdownAttributes,
    locale,
    onChange,
    selectedItems,
}: ResultProps<Item>) {
    return (
        <Scrollbars autoHeight={true} autoHeightMax={335}>
            {noMatch && (
                <NoMatch
                    noMatch={noMatch}
                    noMatchMessageId={noMatchMessageId}
                    listToRender={listToRender}
                    locale={locale}
                />
            )}
            {listToRender.map((item, index) => {
                return (
                    <ListItemContainer
                        isSelected={isItemSelected(item, selectedItems ?? [])}
                        key={Object.values(item).join('-')}
                        ref={refs[index]}
                        isHighlighted={highlightedIndex === index}
                        onClick={() => {
                            onChange(item);
                        }}
                        item={item}
                    >
                        {props => (
                            <ListItemBodyElement
                                {...props}
                                locale={locale}
                                dropdownAttributes={dropdownAttributes}
                            />
                        )}
                    </ListItemContainer>
                );
            })}
        </Scrollbars>
    );
}
