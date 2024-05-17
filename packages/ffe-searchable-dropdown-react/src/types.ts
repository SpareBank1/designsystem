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
    | 'ItemOnClick';

export type SearchMatcher<Item extends Record<string, any>> = (
    inputValue: string,
    searchAttributes: Array<keyof Item>,
) => (item: Item) => boolean;
