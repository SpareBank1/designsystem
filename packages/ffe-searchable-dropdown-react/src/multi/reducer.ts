import { getListToRender } from '../getListToRender';
import { StateChange, SearchMatcher } from '../types';
import { getNewList } from './getNewList';

type Action<Item extends Record<string, any>> = {
    type: StateChange;
    payload?: {
        inputValue?: string;
        items?: Item[];
        actionType?: 'selected' | 'removed';
        highlightedIndex?: number;
    };
};

type State<Item extends Record<string, any>> = {
    noMatch: boolean;
    isExpanded: boolean;
    highlightedIndex: number;
    selectedItems: Item[];
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
        isEqual,
    }: {
        dropdownList: Item[];
        searchAttributes: Array<keyof Item>;
        noMatchDropdownList: Item[] | undefined;
        maxRenderedDropdownElements: number;
        searchMatcher: SearchMatcher<Item> | undefined;
        isEqual: (itemA: Item, itemB: Item) => boolean;
    }) =>
    (state: State<Item>, action: Action<Item>): State<Item> => {
        switch (action.type) {
            case 'InputKeyDownEscape':
                return {
                    ...state,
                    noMatch: false,
                    isExpanded: false,
                    highlightedIndex: -1,
                    inputValue: '',
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
            case 'RemoveItem': {
                if (action.payload?.items) {
                    return {
                        ...state,
                        highlightedIndex: -1,
                        selectedItems: getNewList(
                            state.selectedItems,
                            action.payload.items,
                            'removed',
                            isEqual,
                        ),
                        inputValue: '',
                    };
                }
                return state;
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
                if (action.payload?.items) {
                    return {
                        ...state,
                        selectedItems: getNewList(
                            state.selectedItems,
                            action.payload.items,
                            'selected',
                            isEqual,
                        ),
                    };
                }
                return state;
            case 'ItemOnClick':
            case 'InputKeyDownEnter':
                if (action.payload?.items) {
                    const { noMatch, listToRender } = getListToRender({
                        inputValue: '',
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
                        highlightedIndex:
                            state.inputValue.trim() === ''
                                ? (action.payload?.highlightedIndex ?? -1)
                                : -1,
                        selectedItems: getNewList(
                            state.selectedItems,
                            action.payload.items,
                            action.payload?.actionType ?? 'selected',
                            isEqual,
                        ),
                        listToRender: listToRender,
                        inputValue: '',
                        noMatch,
                    };
                }
                return state;
            case 'InputKeyDownArrowDown':
            case 'InputKeyDownArrowUp': {
                const focusedElement = document.activeElement;
                if (focusedElement?.getAttribute('role') === 'combobox') {
                    return {
                        ...state,
                        isExpanded: true,
                        highlightedIndex:
                            action.payload?.highlightedIndex ?? -1,
                    };
                }
                return state;
            }
            case 'FocusMovedOutSide': {
                return {
                    ...state,
                    isExpanded: false,
                    highlightedIndex: -1,
                    inputValue: '',
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
                        showAllItemsInDropdown:
                            state.inputValue?.trim().length === 0,
                    }),
                };
            }
            default:
                return state;
        }
    };
