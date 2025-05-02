import React, {
    AriaAttributes,
    ForwardedRef,
    useCallback,
    useEffect,
    useId,
    useLayoutEffect,
    useReducer,
    useRef,
    useState,
} from 'react';
import classNames from 'classnames';
import { MultiselectOptionBody } from './MultiselectOptionBody.js';
import { createReducer } from './reducer.js';
import { getListToRender } from '../getListToRender.js';
import { scrollIntoView } from '../scrollIntoView.js';
import {
    getNewHighlightedIndexDown,
    getNewHighlightedIndexUp,
} from '../getNewHighlightedIndex.js';
import { Results } from '../Results.js';
import { Locale, SearchMatcher } from '../types.js';
import { mergeRefs } from '../mergeRefs.js';
import { fixedForwardRef } from '../fixedForwardRef.js';
import { Chip, ChipRemovable } from '@sb1/ffe-chips-react';
import { getActionType } from './getNewList.js';
import { setArrowAllyMessage, useSetAllyMessageItemSelection } from '../a11y.js';
import { addFlagOnEventHandler } from '../addFlagOnEventHandler.js';
import { useHandleContainerFocus } from '../useHandleContainerFocus.js';
import { useIsExpandedCallbacks } from '../useIsExpandedCallbacks.js';
import { useRefs } from '../useRefs.js';
import { ToggleButton } from '../ToggleButton.js';
import { ListBox } from '../ListBox.js';
import { getSelectedLabel } from '../translations.js';
import isDeepEqual from 'lodash.isequal';

const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';
const ESCAPE = 'Escape';
const ENTER = 'Enter';
const TAB = 'Tab';
const BACKSPACE = 'Backspace';

export interface SearchableDropdownMultiSelectProps<
    Item extends Record<string, any>,
> {
    /** Id of drop down */
    id: string;
    /** Id of element that labels input field */
    labelledById?: string;
    /** Extra class */
    className?: string;
    /** List of objects to be displayed in dropdown */
    dropdownList: Item[];
    /** The selected items to be displayed in the input field. If not specified, uses internal state to decide. */
    selectedItems?: Item[] | null;
    /** Array of attributes to be displayed in list. The first will be the title and the chip value */
    dropdownAttributes: (keyof Item)[];
    /** Array of attributes used when filtering search */
    searchAttributes: (keyof Item)[];
    /** Props used on input field */
    inputProps?: React.ComponentProps<'input'>;
    /** Limits number of rendered dropdown elements */
    maxRenderedDropdownElements?: number;
    /** Called when a value is selected */
    onChange: (item: Item, actionType: 'selected' | 'removed') => void;
    /** Custom element to use for each item in dropDownList */
    optionBody?: React.ComponentType<{
        item: Item;
        dropdownAttributes: (keyof Item)[];
        isHighlighted: boolean;
        locale: Locale;
        isSelected: boolean;
    }>;
    /** Element to be shown below dropDownList */
    postListElement?: React.ReactNode;
    /** Message and a dropdownList to use when no match */
    noMatch?: {
        text?: string;
        dropdownList?: Item[];
    };
    /** Locale to use for translations */
    locale?: Locale;
    /** aria-invalid attribute  */
    'aria-invalid'?: AriaAttributes['aria-invalid'];
    ariaInvalid?: AriaAttributes['aria-invalid'];
    /** Function used to format the input field value */
    formatter?: (value: string) => string; //Hvordan brukes denne? må testes
    /**
     * Function used to decide if an item matches the input field value
     * (inputValue: string, searchAttributes: string[]) => (item) => boolean
     */
    searchMatcher?: SearchMatcher<Item>;
    /**
     * For situations where the dropdownList prop will be updated at a later point in time.
     * That is, if the consumer first sends down an initial value before sending down data
     * that has loaded.
     */
    isLoading?: boolean;
    /** Function used when dropdown opens */
    onOpen?: () => void;
    /**  Function used when dropdown closes */
    onClose?: () => void;
    /**
     * Using this will give a text "X selected" instead of chips,
     * after a certain number of selected items.
     * If you always want "X selected" showing, pass in 0
     */
    showNumberSelectedAfter?: number;
    /** Custom compare between objects. Default is deep equals*/
    isEqual?: (itemA: Item, itemB: Item) => boolean;
}

function SearchableDropdownMultiSelectWithForwardRef<
    Item extends Record<string, any>,
>(
    {
        id,
        labelledById,
        className,
        dropdownList,
        dropdownAttributes,
        searchAttributes,
        maxRenderedDropdownElements = Number.MAX_SAFE_INTEGER,
        onChange,
        inputProps,
        optionBody: CustomOptionBody,
        postListElement,
        noMatch,
        locale = 'nb',
        ariaInvalid,
        formatter = value => value,
        searchMatcher,
        selectedItems,
        isLoading = false,
        onOpen,
        onClose,
        showNumberSelectedAfter,
        isEqual = isDeepEqual,
        ...rest
    }: SearchableDropdownMultiSelectProps<Item>,
    ref: ForwardedRef<HTMLInputElement>,
) {
    const [state, dispatch] = useReducer(
        createReducer({
            dropdownList,
            searchAttributes,
            maxRenderedDropdownElements,
            noMatchDropdownList: noMatch?.dropdownList,
            searchMatcher,
            isEqual,
        }),
        {
            isExpanded: false,
            selectedItems: [],
            highlightedIndex: -1,
            inputValue: '',
        },
        initialState => {
            return {
                ...initialState,
                ...getListToRender({
                    inputValue: initialState.inputValue,
                    searchAttributes,
                    maxRenderedDropdownElements,
                    dropdownList,
                    noMatchDropdownList: noMatch?.dropdownList,
                    searchMatcher,
                    showAllItemsInDropdown: !!selectedItems?.length,
                }),
            };
        },
    );
    const refs = useRefs({ listToRender: state.listToRender });
    const [hasFocus, setHasFocus] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const OptionBody = CustomOptionBody || MultiselectOptionBody;
    const listBoxRef = useRef<HTMLDivElement>(null);
    const noMatchMessageId = useId();
    const shouldFocusInput = useRef(false);
    const [showChips, setShowChips] = useState(true);

    const handleInputClick = () => {
        dispatch({ type: 'InputClick' });
        shouldFocusInput.current = true;
    };

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (inputProps?.onBlur) {
            inputProps.onBlur(e);
        }
    };

    useSetAllyMessageItemSelection({
        hasFocus,
        isExpanded: state.isExpanded,
        isLoading,
        locale,
        resultCount: state.listToRender.length,
        selectedValue:
            state.selectedItems[state.selectedItems.length - 1]?.[
                searchAttributes[0]
            ],
    });

    useLayoutEffect(() => {
        if (shouldFocusInput.current) {
            inputRef.current?.focus();
            shouldFocusInput.current = false;
        }
    });

    useEffect(() => {
        dispatch({
            type: 'DropdownListPropUpdated',
        });
    }, [dropdownList, dispatch]);

    useIsExpandedCallbacks({ isExpanded: state.isExpanded, onClose, onOpen });

    const handleFocusMovedOutside = useCallback(
        () =>
            dispatch({
                type: 'FocusMovedOutSide',
            }),
        [],
    );

    useEffect(() => {
        if (showNumberSelectedAfter === undefined) {
            return;
        }
        if (state.selectedItems.length > showNumberSelectedAfter) {
            setShowChips(false);
        } else {
            setShowChips(true);
        }
    }, [state.selectedItems, showNumberSelectedAfter]);

    useEffect(() => {
        if (selectedItems !== undefined && selectedItems !== null) {
            dispatch({
                type: 'ItemSelectedProgrammatically',
                payload: { items: selectedItems },
            });
        }
    }, [selectedItems, dispatch]);

    useHandleContainerFocus({
        id,
        containerRef,
        handleFocusMovedOutside,
    });

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === ENTER && state.highlightedIndex >= 0) {
            event.preventDefault();
            const clickedItem = state.listToRender[state.highlightedIndex];
            const actionType = getActionType(
                state.selectedItems,
                clickedItem,
                isEqual,
            );
            dispatch({
                type: 'InputKeyDownEnter',
                payload: {
                    items: [clickedItem],
                    actionType,
                    highlightedIndex: state.highlightedIndex,
                },
            });
            onChange?.(clickedItem, actionType);
            return;
        } else if (event.key === ESCAPE) {
            dispatch({ type: 'InputKeyDownEscape' });
            return;
        } else if (event.key === ARROW_UP) {
            event.preventDefault();
            if (state.listToRender.length) {
                const newHighlightedIndex = getNewHighlightedIndexUp(
                    state.highlightedIndex,
                    state.listToRender.length,
                );
                dispatch({
                    type: 'InputKeyDownArrowUp',
                    payload: { highlightedIndex: newHighlightedIndex },
                });
                if (newHighlightedIndex >= 0) {
                    setArrowAllyMessage(
                        state?.listToRender[newHighlightedIndex],
                        dropdownAttributes,
                    );
                }
                scrollIntoView(
                    refs[newHighlightedIndex].current,
                    listBoxRef.current,
                );
            }
            return;
        } else if (event.key === ARROW_DOWN) {
            event.preventDefault();
            if (state.listToRender.length) {
                const newHighlightedIndex = getNewHighlightedIndexDown(
                    state.highlightedIndex,
                    state.listToRender.length,
                );
                dispatch({
                    type: 'InputKeyDownArrowDown',
                    payload: { highlightedIndex: newHighlightedIndex },
                });
                if (newHighlightedIndex >= 0) {
                    setArrowAllyMessage(
                        state?.listToRender[newHighlightedIndex],
                        dropdownAttributes,
                    );
                }
                scrollIntoView(
                    refs[newHighlightedIndex].current,
                    listBoxRef.current,
                );
            }
        } else if (event.key === BACKSPACE) {
            if (
                state.inputValue === '' &&
                state.selectedItems.length > 0 &&
                showChips
            ) {
                const lastItem =
                    state.selectedItems[state.selectedItems.length - 1];
                dispatch({
                    type: 'RemoveItem',
                    payload: {
                        items: [lastItem],
                        actionType: 'removed',
                    },
                });
                onChange?.(lastItem, 'removed');
            }
        } else if (event.key === TAB) {
            dispatch({
                type: 'FocusMovedOutSide',
            });
            return;
        }
    };

    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
            onKeyDown={handleKeyDown}
            ref={containerRef}
            onMouseDown={addFlagOnEventHandler(id)}
            onFocus={addFlagOnEventHandler(id)}
            className={classNames(
                className,
                'ffe-searchable-dropdown',
                'ffe-searchable-dropdown--multi',
            )}
        >
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <div
                className="ffe-searchable-dropdown__input"
                onClick={() => {
                    inputRef.current?.click();
                }}
            >
                {showChips ? (
                    state.selectedItems?.map((item, index) => {
                        return (
                            <ChipRemovable
                                as="button"
                                type="button"
                                size="sm"
                                key={index}
                                aria-label={`${item[dropdownAttributes[0]]}, fjern valg`}
                                onClick={e => {
                                    e.stopPropagation();
                                    dispatch({
                                        type: 'RemoveItem',
                                        payload: {
                                            items: [item],
                                        },
                                    });
                                    onChange?.(item, 'removed');
                                    shouldFocusInput.current = true;
                                }}
                            >
                                {item[dropdownAttributes[0]]}
                            </ChipRemovable>
                        );
                    })
                ) : (
                    <Chip
                        size="sm"
                        aria-label={getSelectedLabel(
                            locale,
                            state.selectedItems.length,
                        )}
                        as="span"
                        role="presentation"
                        className="ffe-chip--multiple-selected"
                    >
                        {getSelectedLabel(locale, state.selectedItems.length)}
                    </Chip>
                )}
                <input
                    {...inputProps}
                    placeholder={
                        state.selectedItems.length > 0
                            ? ''
                            : inputProps?.placeholder
                    }
                    ref={mergeRefs([inputRef, ref])}
                    id={id}
                    aria-labelledby={labelledById}
                    onClick={handleInputClick}
                    onChange={e => {
                        inputProps?.onChange?.(e);
                        dispatch({
                            type: 'InputChange',
                            payload: { inputValue: e.target.value },
                        });
                    }}
                    onFocus={() => {
                        setHasFocus(true);
                        dispatch({ type: 'InputClick' });
                    }}
                    onBlur={handleInputBlur}
                    aria-describedby={
                        [
                            inputProps?.['aria-describedby'],
                            state.noMatch && noMatchMessageId,
                        ]
                            .filter(Boolean)
                            .join(' ') || undefined
                    }
                    value={formatter(state.inputValue)}
                    type="text"
                    role="combobox"
                    autoComplete="off"
                    aria-controls={
                        listBoxRef.current?.getAttribute('id') ?? undefined
                    }
                    aria-expanded={
                        state.isExpanded && !!state.listToRender.length
                    }
                    aria-autocomplete="list"
                    aria-haspopup="listbox"
                    aria-activedescendant={
                        state.highlightedIndex >= 0
                            ? (refs[
                                  state.highlightedIndex
                              ]?.current?.getAttribute('id') ?? undefined)
                            : undefined
                    }
                    aria-invalid={rest['aria-invalid'] ?? ariaInvalid}
                />
            </div>
            <ToggleButton
                isExpanded={state.isExpanded}
                onClick={() =>
                    dispatch({
                        type: 'ToggleButtonPressed',
                    })
                }
                isLoading={isLoading}
            />
            <ListBox ref={listBoxRef} isExpanded={state.isExpanded}>
                {state.isExpanded && (
                    <Results
                        isEqual={isEqual}
                        listToRender={state.listToRender}
                        OptionBody={OptionBody}
                        highlightedIndex={state.highlightedIndex}
                        dropdownAttributes={dropdownAttributes}
                        locale={locale}
                        refs={refs}
                        onChange={item => {
                            const actionType = getActionType(
                                state.selectedItems,
                                item,
                                isEqual,
                            );
                            dispatch({
                                type: 'ItemOnClick',
                                payload: {
                                    items: [item],
                                    actionType: actionType,
                                },
                            });
                            shouldFocusInput.current = true;
                            onChange?.(item, actionType);
                        }}
                        noMatch={state.noMatch ? noMatch : undefined}
                        noMatchMessageId={noMatchMessageId}
                        selectedItems={state.selectedItems}
                    />
                )}
                {postListElement && (
                    <div className="ffe-searchable-dropdown__list--post-list-element">
                        {postListElement}
                    </div>
                )}
            </ListBox>
        </div>
    );
}

export const SearchableDropdownMultiSelect = fixedForwardRef(
    SearchableDropdownMultiSelectWithForwardRef,
);
