import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { ListItemContainer } from './ListItemContainer';
import { NoMatch } from './NoMatch';
import { Locale } from './types';

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
    }>;
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
    ListItemBodyElement,
    refs,
    highlightedIndex,
    dropdownAttributes,
    locale,
    onChange,
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
            {listToRender.map((item, index) => (
                <ListItemContainer
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
            ))}
        </Scrollbars>
    );
}
