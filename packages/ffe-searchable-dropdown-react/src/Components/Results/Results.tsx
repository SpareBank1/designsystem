import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { ListItemContainer } from './ListItemContainer';
import { NoMatch } from '../../NoMatch';
import { Locale } from '../../types';
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
        isHighlighted: boolean;
        dropdownAttributes: (keyof Item)[];
        locale: Locale;
        isSelected?: boolean;
    }>;
    selectedItem?: Item[] | Item | null;
    highlightedIndex?: number;
    refs: React.Ref<HTMLDivElement>[];
    dropdownAttributes: (keyof Item)[];
    locale: Locale;
    onChange: (item: Item) => void;
}

function isItemSelected<Item extends Record<string, any>>(item: Item, selectedItem?: Item[] | Item | null): boolean {
    if (Array.isArray(selectedItem)) {
        return selectedItem.some(selected => isEqual(item, selected));
    }
    return isEqual(item, selectedItem);
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
                                                              selectedItem,
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
                console.log("item", item);
                console.log("selectedItem", selectedItem);
                console.log(isEqual(item, selectedItem));
                return (
                    <ListItemContainer
                        isSelected={isItemSelected(item, selectedItem)}
                        key={Object.values(item).join('-')}
                        ref={refs[index]}
                        isHighlighted={highlightedIndex === index}
                        onClick={() => {
                            console.log("Results onClick");
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
