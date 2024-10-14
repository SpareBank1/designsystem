import { getListToRender } from '../getListToRender';
import { StateChange, SearchMatcher } from '../types';
import { getNewList } from './getNewList';

type Action<Item extends Record<string, any>> = {
    type: StateChange;
    payload?: {
        inputValue?: string;
        item?: Item;
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
    }: {
        dropdownList: Item[];
        searchAttributes: Array<keyof Item>;
        noMatchDropdownList: Item[] | undefined;
        maxRenderedDropdownElements: number;
        searchMatcher: SearchMatcher<Item> | undefined;
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
            case 'ItemOnClick':
            case 'InputKeyDownEnter':
            case 'TabPressed':
                if (action.payload?.item) {
                    return {
                        ...state,
                        isExpanded: true,
                        highlightedIndex:
                            action.payload?.highlightedIndex ?? -1,
                        selectedItems: getNewList(
                            state.selectedItems,
                            action.payload.item,
                            action.payload?.actionType ?? 'selected',
                        ),
                        inputValue: '',
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
