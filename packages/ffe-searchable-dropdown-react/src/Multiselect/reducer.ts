import { getListToRender } from '../getListToRender';
import { StateChange, SearchMatcher } from '../types';

type Action<Item extends Record<string, any>> = {
    type: StateChange;
    payload?: {
        inputValue?: string[];
        selectedItems?: Item[] | null | undefined;
        highlightedIndex?: number;
    };
};

type State<Item extends Record<string, any>> = {
    noMatch: boolean;
    isExpanded: boolean;
    highlightedIndex: number;
    selectedItems: Item[] | null | undefined;
    inputValue: string[];
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
        onChange: ((item: Item[] | null) => void) | undefined;
    }) =>
    (state: State<Item>, action: Action<Item>): State<Item> => {
        console.log(action.type);
        switch (action.type) {
            case 'InputKeyDownEscape':
                return {
                    ...state,
                    noMatch: false,
                    isExpanded: false,
                    highlightedIndex: -1,
                    inputValue: state.selectedItems?.length
                        ? state.selectedItems.map(
                              item => item[searchAttributes[0]],
                          )
                        : [],
                };
            case 'InputClick': {
                const { noMatch, listToRender } = getListToRender({
                    inputValue: state.inputValue.join(' '),
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
                    inputValue: action.payload?.inputValue?.join(' ') ?? '',
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
                    inputValue: action.payload?.inputValue ?? [],
                    listToRender,
                    highlightedIndex:
                        action.payload?.inputValue?.join(' ').trim() === '' ||
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
                    isExpanded: true,
                    highlightedIndex: -1,
                    selectedItems: action.payload?.selectedItems ?? [],
                    inputValue: action.payload?.selectedItems?.length
                        ? [action.payload.selectedItems[0][searchAttributes[0]]]
                        : [],
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
                    inputValue: state.inputValue.join(' '),
                    searchAttributes,
                    maxRenderedDropdownElements,
                    dropdownList,
                    noMatchDropdownList,
                    searchMatcher,
                    showAllItemsInDropdown: true,
                });

                const shouldEmptySelectedItem =
                    state.inputValue.length === 0 &&
                    !!state.selectedItems?.length;

                const shouldAutomaticallySetSelectedItem =
                    state.listToRender.length === 1 &&
                    searchAttributes
                        .map(
                            searchAttribute =>
                                state.listToRender[0][searchAttribute] ===
                                state.selectedItems?.[0]?.[searchAttribute],
                        )
                        .includes(false) &&
                    state.highlightedIndex !== -1;

                let selectedItems = state.selectedItems;

                if (shouldEmptySelectedItem) {
                    onChange?.(null);
                    selectedItems = null;
                } else if (shouldAutomaticallySetSelectedItem) {
                    onChange?.([state.listToRender[0]]);
                    selectedItems = [state.listToRender[0]];
                }

                const inputValue = selectedItems?.length
                    ? selectedItems.map(item => item[searchAttributes[0]])
                    : [];
                return {
                    ...state,
                    isExpanded: false,
                    highlightedIndex: -1,
                    inputValue,
                    selectedItems,
                    listToRender,
                };
            }
            case 'DropdownListPropUpdated': {
                return {
                    ...state,
                    ...getListToRender({
                        inputValue: state.inputValue.join(' '),
                        searchAttributes,
                        maxRenderedDropdownElements,
                        dropdownList,
                        noMatchDropdownList,
                        searchMatcher,
                        showAllItemsInDropdown: !!state.selectedItems?.length,
                    }),
                };
            }
            default:
                return state;
        }
    };
