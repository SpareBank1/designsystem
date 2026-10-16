import { SearchMatcher, State } from './types';
import { getListToRender } from './getListToRender';

export const getSelectedItemOnFocusOutside = <
    Item extends Record<string, any>,
>({
    state,
    searchAttributes,
}: {
    state: State<Item>;
    searchAttributes: Array<keyof Item>;
}): {
    selectedItem: Item | undefined;
    hasSelectedItemChanged: boolean;
} => {
    const shouldEmptySelectedItem =
        state.inputValue === '' && !!state.selectedItem;

    const shouldAutomaticallySetSelectedItem =
        state.listToRender.length === 1 &&
        searchAttributes
            .map(
                searchAttribute =>
                    state.listToRender[0][searchAttribute] ===
                    state.selectedItem?.[searchAttribute],
            )
            .includes(false) &&
        state.highlightedIndex !== -1;

    if (shouldEmptySelectedItem) {
        return { selectedItem: undefined, hasSelectedItemChanged: true };
    }
    if (shouldAutomaticallySetSelectedItem) {
        return {
            selectedItem: state.listToRender[0],
            hasSelectedItemChanged: true,
        };
    }
    return { selectedItem: state.selectedItem, hasSelectedItemChanged: false };
};

export const moveFocusOutside = <Item extends Record<string, any>>({
    state,
    searchAttributes,
    maxRenderedDropdownElements,
    dropdownList,
    noMatchDropdownList,
    searchMatcher,
    displayAttribute,
}: {
    state: State<Item>;
    searchAttributes: Array<keyof Item>;
    maxRenderedDropdownElements: number;
    dropdownList: Item[];
    noMatchDropdownList: Item[] | undefined;
    searchMatcher: SearchMatcher<Item> | undefined;
    displayAttribute: keyof Item;
}): {
    inputValue: string;
    selectedItem: Item | undefined;
    listToRender: Item[];
} => {
    const { listToRender } = getListToRender({
        inputValue: state.inputValue,
        searchAttributes,
        maxRenderedDropdownElements,
        dropdownList,
        noMatchDropdownList,
        searchMatcher,
        showAllItemsInDropdown: true,
    });

    const { selectedItem } = getSelectedItemOnFocusOutside({
        state,
        searchAttributes,
    });

    const inputValue = selectedItem ? selectedItem[displayAttribute] : '';

    return { inputValue, selectedItem, listToRender };
};
