import { getListToRender } from './getListToRender';

export const stateChangeTypes = {
    InputBlur: 'InputBlur',
    InputFocus: 'InputFocus',
    InputClick: 'InputClick',
    InputChange: 'InputChange',
    InputKeyDownEscape: 'InputKeyDownEscape',
    InputKeyDownEnter: 'InputKeyDownEnter',
    InputKeyDownArrowDown: 'InputKeyDownArrowDown',
    InputKeyDownArrowUp: 'InputKeyDownArrowUp',
    ClearButtonPressed: 'ClearButtonPressed',
    ToggleButtonPressed: 'ToggleButtonPressed',
    ItemOnClick: 'ItemOnMouseDown',
    ItemOnMouseEnter: 'ItemOnMouseEnter',
    FocusMovedOutSide: 'FocusMovedOutSide',
};

export const createReducer = ({
    searchAttributes,
    dropdownList,
    noMatchDropdownList,
    maxRenderedDropdownElements,
}) => (state, action) => {
    switch (action.type) {
        case stateChangeTypes.InputBlur:
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
            });

            return {
                ...state,
                isExpanded: true,
                listToRender,
                prevResultCount: state.listToRender.length,
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
            });

            return {
                ...state,
                isExpanded: true,
                inputValue: action.payload.inputValue,
                prevResultCount: state.listToRender.length,
                listToRender,
                noMatch,
            };
        }
        case stateChangeTypes.ClearButtonPressed: {
            const { noMatch, listToRender } = getListToRender({
                inputValue: '',
                searchAttributes,
                maxRenderedDropdownElements,
                dropdownList,
                prevResultCount: state.listToRender.length,
                noMatchDropdownList,
            });
            return {
                ...state,
                inputValue: '',
                prevSelectedItem: state.selectedItem,
                selectedItem: null,
                listToRender,
                noMatch,
            };
        }
        case stateChangeTypes.ToggleButtonPressed:
            return {
                ...state,
                isExpanded: !state.isExpanded,
            };
        case stateChangeTypes.ItemOnClick:
        case stateChangeTypes.InputKeyDownEnter:
            return {
                ...state,
                isExpanded: false,
                highlightedIndex: -1,
                prevSelectedItem: state.selectedItem,
                selectedItem: action.payload.selectedItem,
                inputValue: action.payload.selectedItem[searchAttributes[0]],
            };

        case stateChangeTypes.InputKeyDownArrowDown:
        case stateChangeTypes.InputKeyDownArrowUp: {
            return {
                ...state,
                highlightedIndex: action.payload.highlightedIndex,
            };
        }

        case stateChangeTypes.ItemOnMouseEnter: {
            return {
                ...state,
                highlightedIndex: action.payload.highlightedIndex,
            };
        }
        case stateChangeTypes.FocusMovedOutSide: {
            return {
                ...state,
                isExpanded: false,
                highlightedIndex: -1,
            };
        }
        default:
            return state;
    }
};
