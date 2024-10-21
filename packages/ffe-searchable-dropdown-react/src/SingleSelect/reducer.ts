import { getListToRender } from '../getListToRender';
import { StateChange, SearchMatcher } from '../types';

type Action<Item extends Record<string, any>> = {
    type: StateChange;
    payload?: {
        inputValue?: string;
        selectedItem?: Item;
        highlightedIndex?: number;
    };
};

type State<Item extends Record<string, any>> = {
    noMatch: boolean;
    isExpanded: boolean;
    highlightedIndex: number;
    selectedItem?: Item;
    inputValue: string;
    listToRender: Item[];
    noMatchDropdownList?: Item[] | undefined;
};

export const createReducer =
    <Item extends Record<string, any>>({
        searchAttributes,
        dropdownList,
        noMatchDropdownList,
        maxRenderedDropdownElements,
        searchMatcher,
        onChange,
    }: {
        dropdownList: Item[];
        searchAttributes: Array<keyof Item>;
        noMatchDropdownList: Item[] | undefined;
        maxRenderedDropdownElements: number;
        searchMatcher: SearchMatcher<Item> | undefined;
        onChange: ((item: Item | null) => void) | undefined;
    }) =>
    (state: State<Item>, action: Action<Item>): State<Item> => {
        switch (action.type) {
            case 'InputKeyDownEscape':
                return {
                    ...state,
                    noMatch: false,
                    isExpanded: false,
                    highlightedIndex: -1,
                    inputValue: state.selectedItem
                        ? state.selectedItem[searchAttributes[0]]
                        : '',
                };
            case 'InputClick': {
                const { noMatch, listToRender } = getListToRender({
                    inputValue: state.inputValue,
                    searchAttributes,
                    maxRenderedDropdownElements,
                    dropdownList,
                    noMatchDropdownList,
                    searchMatcher,
                    showAllItemsInDropdown: true,
                });

                return {
                    ...state,
                    isExpanded: true,
                    listToRender,
                    noMatch,
                };
            }
            case 'InputChange': {
                const { noMatch, listToRender } = getListToRender({
                    inputValue: action.payload?.inputValue ?? '',
                    searchAttributes,
                    maxRenderedDropdownElements,
                    dropdownList,
                    noMatchDropdownList,
                    searchMatcher,
                    showAllItemsInDropdown: false,
                });

                return {
                    ...state,
                    isExpanded: true,
                    inputValue: action.payload?.inputValue ?? '',
                    listToRender,
                    highlightedIndex:
                        action.payload?.inputValue?.trim() === '' ||
                        listToRender.length === 0
                            ? -1
                            : 0,
                    noMatch,
                };
            }
            case 'ToggleButtonPressed':
                return {
                    ...state,
                    isExpanded: !state.isExpanded,
                };
            case 'ItemSelectedProgrammatically':
            case 'ItemOnClick':
            case 'InputKeyDownEnter':
                return {
                    ...state,
                    isExpanded: false,
                    highlightedIndex: -1,
                    selectedItem: action.payload?.selectedItem,
                    inputValue:
                        action.payload?.selectedItem?.[searchAttributes[0]] ||
                        '',
                };

            case 'InputKeyDownArrowDown':
            case 'InputKeyDownArrowUp': {
                return {
                    ...state,
                    isExpanded: true,
                    highlightedIndex: action.payload?.highlightedIndex ?? -1,
                };
            }

            case 'FocusMovedOutSide': {
                const { listToRender } = getListToRender({
                    inputValue: state.inputValue,
                    searchAttributes,
                    maxRenderedDropdownElements,
                    dropdownList,
                    noMatchDropdownList,
                    searchMatcher,
                    showAllItemsInDropdown: true,
                });

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

                let selectedItem = state.selectedItem;

                if (shouldEmptySelectedItem) {
                    onChange?.(null);
                    selectedItem = undefined;
                } else if (shouldAutomaticallySetSelectedItem) {
                    onChange?.(state.listToRender[0]);
                    selectedItem = state.listToRender[0];
                }

                const inputValue = selectedItem
                    ? selectedItem[searchAttributes[0]]
                    : '';
                return {
                    ...state,
                    isExpanded: false,
                    highlightedIndex: -1,
                    inputValue,
                    selectedItem,
                    listToRender,
                };
            }
            case 'DropdownListPropUpdated': {
                return {
                    ...state,
                    ...getListToRender({
                        inputValue: state.inputValue,
                        searchAttributes,
                        maxRenderedDropdownElements,
                        dropdownList,
                        noMatchDropdownList,
                        searchMatcher,
                        showAllItemsInDropdown: !!state.selectedItem,
                    }),
                };
            }
            default:
                return state;
        }
    };
