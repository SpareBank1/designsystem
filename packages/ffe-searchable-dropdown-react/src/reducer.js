import { getListToRender } from './getListToRender';

export const stateChangeTypes = {
    InputFocus: 'InputFocus',
    InputBlur: 'InputBlur',
    InputClick: 'InputClick',
    InputChange: 'InputChange',
    InputKeyDownEscape: 'InputKeyDownEscape',
    InputKeyDownEnter: 'InputKeyDownEnter',
    InputKeyDownArrowDown: 'InputKeyDownArrowDown',
    InputKeyDownArrowUp: 'InputKeyDownArrowUp',
    ToggleButtonPressed: 'ToggleButtonPressed',
    ItemOnClick: 'ItemOnMouseDown',
    FocusMovedOutSide: 'FocusMovedOutSide',
    ItemSelectedProgrammatically: 'ItemSelectedProgrammatically',
    DropdownListPropUpdated: 'DropdownListPropUpdated',
};

export const createReducer = ({
    searchAttributes,
    dropdownList,
    noMatchDropdownList,
    maxRenderedDropdownElements,
    searchMatcher,
    onChange,
}) => (state, action) => {
    switch (action.type) {
        case stateChangeTypes.InputKeyDownEscape:
            return {
                ...state,
                noMatch: false,
                isExpanded: false,
                highlightedIndex: -1,
                inputValue: state.selectedItem
                    ? state.selectedItem[searchAttributes[0]]
                    : '',
            };
        case stateChangeTypes.InputClick: {
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
        case stateChangeTypes.InputChange: {
            const { noMatch, listToRender } = getListToRender({
                inputValue: action.payload.inputValue,
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
                inputValue: action.payload.inputValue,
                listToRender,
                highlightedIndex:
                    action.payload.inputValue.trim() === '' ||
                    listToRender.length === 0
                        ? -1
                        : 0,
                noMatch,
            };
        }
        case stateChangeTypes.ToggleButtonPressed:
            return {
                ...state,
                isExpanded: !state.isExpanded,
            };
        case stateChangeTypes.ItemSelectedProgrammatically:
        case stateChangeTypes.ItemOnClick:
        case stateChangeTypes.InputKeyDownEnter:
            return {
                ...state,
                isExpanded: false,
                highlightedIndex: -1,
                selectedItem: action.payload.selectedItem,
                inputValue:
                    action.payload.selectedItem?.[searchAttributes[0]] || '',
            };

        case stateChangeTypes.InputKeyDownArrowDown:
        case stateChangeTypes.InputKeyDownArrowUp: {
            return {
                ...state,
                isExpanded: true,
                highlightedIndex: action.payload.highlightedIndex,
            };
        }

        case stateChangeTypes.FocusMovedOutSide: {
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

            const shouldAutomaticallySetSelectedItem = !!(
                state.listToRender.length === 1 &&
                searchAttributes
                    .map(
                        searchAttribute =>
                            state.listToRender[0][searchAttribute] ===
                            state.selectedItem?.[searchAttribute],
                    )
                    .includes(false) &&
                state.highlightedIndex !== -1
            );

            let selectedItem = state.selectedItem;

            if (shouldEmptySelectedItem) {
                onChange(null);
                selectedItem = null;
            } else if (shouldAutomaticallySetSelectedItem) {
                onChange(state.listToRender[0]);
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
        case stateChangeTypes.DropdownListPropUpdated: {
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
