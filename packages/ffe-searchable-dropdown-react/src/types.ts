export type Locale = 'nb' | 'nn' | 'en';

export type StateChange =
    | 'InputFocus'
    | 'InputBlur'
    | 'InputClick'
    | 'InputChange'
    | 'InputKeyDownEscape'
    | 'InputKeyDownEnter'
    | 'InputKeyDownArrowDown'
    | 'InputKeyDownArrowUp'
    | 'ToggleButtonPressed'
    | 'ItemOnMouseDown'
    | 'FocusMovedOutSide'
    | 'ItemSelectedProgrammatically'
    | 'DropdownListPropUpdated'
    | 'ItemOnClick'
    | 'TabPressed'
    | 'RemoveItem';

export type SearchMatcher<Item extends Record<string, any>> = (
    inputValue: string,
    searchAttributes: Array<keyof Item>,
) => (item: Item) => boolean;

export type ActionType = 'selected' | 'removed';

export type State<Item extends Record<string, any>> = {
    noMatch: boolean;
    isExpanded: boolean;
    highlightedIndex: number;
    selectedItem?: Item;
    inputValue: string;
    listToRender: Item[];
    noMatchDropdownList?: Item[] | undefined;
};
