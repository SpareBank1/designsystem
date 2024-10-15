import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { MultiselectResultContainer } from './MultiselectResultContainer';
import { NoMatch } from '../NoMatch';
import { Locale } from '../types';
import isEqual from 'lodash.isequal';

interface ResultProps<Item extends Record<string, any>> {
    noMatch?: {
        text?: string;
        dropdownList?: Item[];
    };
    listToRender: Item[];
    noMatchMessageId: string;
    MultiselectResultList: React.ComponentType<{
        item: Item;
        isHighlighted: boolean;
        dropdownAttributes: (keyof Item)[];
        locale: Locale;
        isSelected: boolean;
        onClick: React.MouseEventHandler<HTMLDivElement>;
        onChange: (item: Item) => void;
    }>;
    selectedItems?: Item[] | null;
    highlightedIndex?: number;
    refs: React.Ref<HTMLDivElement>[];
    dropdownAttributes: (keyof Item)[];
    locale: Locale;
    onChange: (item: Item) => void;
}

export function Results<Item extends Record<string, any>>({
    noMatch,
    listToRender,
    noMatchMessageId,
    MultiselectResultList,
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
                    <MultiselectResultContainer
                        isSelected={
                            selectedItems?.some(selected =>
                                isEqual(item, selected),
                            ) ?? false
                        }
                        key={Object.values(item).join('-')}
                        ref={refs[index]}
                        isHighlighted={highlightedIndex === index}
                        onClick={() => {
                            onChange(item);
                        }}
                        onChange={() => {
                            onChange(item);
                        }}
                        item={item}
                    >
                        {props => (
                            <MultiselectResultList
                                {...props}
                                locale={locale}
                                dropdownAttributes={dropdownAttributes}
                            />
                        )}
                    </MultiselectResultContainer>
                );
            })}
        </Scrollbars>
    );
}
