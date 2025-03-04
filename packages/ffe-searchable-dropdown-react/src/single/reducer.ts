import { getListToRender } from '../getListToRender';
import { StateChange, SearchMatcher, State } from '../types';
import { moveFocusOutside } from '../moveFocusOutside';

type Action<Item extends Record<string, any>> = {
    type: StateChange;
    payload?: {
        inputValue?: string;
        selectedItem?: Item;
        highlightedIndex?: number;
    };
};

export const createReducer =
    <Item extends Record<string, any>>({
        searchAttributes,
        dropdownList,
        displayAttribute,
        noMatchDropdownList,
        maxRenderedDropdownElements,
        searchMatcher,
        onChange,
    }: {
        dropdownList: Item[];
        searchAttributes: Array<keyof Item>;
        displayAttribute: keyof Item;
        noMatchDropdownList: Item[] | undefined;
        maxRenderedDropdownElements: number;
        searchMatcher: SearchMatcher<Item> | undefined;
        onChange: ((item: Item | null) => void) | undefined;
    }) =>
    (state: State<Item>, action: Action<Item>): State<Item> => {
        switch (action.type) {
            case 'InputKeyDownEscape': {
                return {
                    ...state,
                    noMatch: false,
                    isExpanded: false,
                    highlightedIndex: -1,
                    inputValue: state.selectedItem
                        ? state.selectedItem[displayAttribute]
                        : '',
                };
            }
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
            case 'ToggleButtonPressed': {
                if (state.isExpanded) {
                    const { listToRender, inputValue, selectedItem } =
                        moveFocusOutside({
                            state,
                            searchAttributes,
                            maxRenderedDropdownElements,
                            dropdownList,
                            noMatchDropdownList,
                            searchMatcher,
                            displayAttribute,
                            onChange,
                        });
                    return {
                        ...state,
                        isExpanded: false,
                        highlightedIndex: -1,
                        inputValue,
                        selectedItem,
                        listToRender,
                    };
                }

                return {
                    ...state,
                    isExpanded: !state.isExpanded,
                };
            }
            case 'ItemSelectedProgrammatically':
            case 'ItemOnClick':
            case 'InputKeyDownEnter': {
                return {
                    ...state,
                    isExpanded: false,
                    highlightedIndex: -1,
                    selectedItem: action.payload?.selectedItem,
                    inputValue:
                        action.payload?.selectedItem?.[displayAttribute] || '',
                };
            }

            case 'InputKeyDownArrowDown':
            case 'InputKeyDownArrowUp': {
                return {
                    ...state,
                    isExpanded: true,
                    highlightedIndex: action.payload?.highlightedIndex ?? -1,
                };
            }

            case 'FocusMovedOutSide': {
                const { listToRender, inputValue, selectedItem } =
                    moveFocusOutside({
                        state,
                        searchAttributes,
                        maxRenderedDropdownElements,
                        dropdownList,
                        noMatchDropdownList,
                        searchMatcher,
                        displayAttribute,
                        onChange,
                    });

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
