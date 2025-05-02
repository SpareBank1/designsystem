import React, {
    useLayoutEffect,
    useReducer,
    useRef,
    useState,
    useEffect,
    ForwardedRef,
    AriaAttributes,
    useId,
    useCallback,
} from 'react';
import classNames from 'classnames';
import { OptionBody } from './OptionBody.js';
import { createReducer } from './reducer.js';
import { getListToRender } from '../getListToRender.js';
import { scrollIntoView } from '../scrollIntoView.js';
import {
    getNewHighlightedIndexUp,
    getNewHighlightedIndexDown,
} from '../getNewHighlightedIndex.js';
import { setArrowAllyMessage, useSetAllyMessageItemSelection } from '../a11y.js';
import { Results } from '../Results.js';
import { Locale, SearchMatcher } from '../types.js';
import { mergeRefs } from '../mergeRefs.js';
import { fixedForwardRef } from '../fixedForwardRef.js';
import { addFlagOnEventHandler } from '../addFlagOnEventHandler.js';
import { useHandleContainerFocus } from '../useHandleContainerFocus.js';
import { useIsExpandedCallbacks } from '../useIsExpandedCallbacks.js';
import { useRefs } from '../useRefs.js';
import { ToggleButton } from '../ToggleButton.js';
import { ListBox } from '../ListBox.js';
import isDeepEqual from 'lodash.isequal';

const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';
const ESCAPE = 'Escape';
const ENTER = 'Enter';
const TAB = 'Tab';

export interface SearchableDropdownProps<Item extends Record<string, any>> {
    /** Id of drop down */
    id: string;
    /** Id of element that labels input field */
    labelledById?: string;
    /** Extra class */
    className?: string;
    /** List of objects to be displayed in dropdown */
    dropdownList: Item[];
    /** The selected item to be displayed in the input field. If not specified, uses internal state to decide. */
    selectedItem?: Item;
    /** Array of attributes to be displayed in list */
    dropdownAttributes: (keyof Item)[];
    /** Array of attributes used when filtering search */
    searchAttributes: (keyof Item)[];
    /** Attribute used in the input when an item is selected. Defaults to first in searchAttributes **/
    displayAttribute?: keyof Item;
    /** Props used on input field */
    inputProps?: React.ComponentProps<'input'>;
    /** Limits number of rendered dropdown elements */
    maxRenderedDropdownElements?: number;
    /** Called when a value is selected */
    onChange?: (item: Item | null) => void;
    /** Custom element to use for each item in dropDownList */
    optionBody?: React.ComponentType<{
        item: Item;
        isHighlighted: boolean;
        dropdownAttributes: (keyof Item)[];
        locale: Locale;
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
    formatter?: (value: string) => string;
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
    /** Custom compare between objects. Default is deep equals*/
    isEqual?: (itemA: Item, itemB: Item) => boolean;
}

function SearchableDropdownWithForwardRef<Item extends Record<string, any>>(
    {
        id,
        labelledById,
        className,
        dropdownList,
        dropdownAttributes,
        searchAttributes,
        displayAttribute = searchAttributes[0],
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
        selectedItem,
        isLoading = false,
        onOpen,
        onClose,
        isEqual = isDeepEqual,
        ...rest
    }: SearchableDropdownProps<Item>,
    ref: ForwardedRef<HTMLInputElement>,
) {
    const [state, dispatch] = useReducer(
        createReducer({
            dropdownList,
            displayAttribute: displayAttribute,
            searchAttributes,
            maxRenderedDropdownElements,
            noMatchDropdownList: noMatch?.dropdownList,
            searchMatcher,
            onChange,
        }),
        {
            isExpanded: false,
            selectedItems: [],
            highlightedIndex: -1,
            formattedInputValue: '',
            inputValue: selectedItem ? selectedItem[displayAttribute] : '',
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
                    showAllItemsInDropdown: !!selectedItem,
                }),
            };
        },
    );
    const refs = useRefs({ listToRender: state.listToRender });
    const [hasFocus, setHasFocus] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const ListItemBodyElement = CustomOptionBody || OptionBody;
    const listBoxRef = useRef<HTMLDivElement>(null);
    const noMatchMessageId = useId();
    const shouldFocusInput = useRef(false);

    const handleInputClick = () => {
        dispatch({ type: 'InputClick' });
    };

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (inputProps?.onBlur) {
            inputProps.onBlur(e);
        }
    };

    useEffect(() => {
        dispatch({
            type: 'ItemSelectedProgrammatically',
            payload: { selectedItem },
        });
    }, [selectedItem, dispatch]);

    useSetAllyMessageItemSelection({
        hasFocus,
        isExpanded: state.isExpanded,
        isLoading,
        locale,
        resultCount: state.listToRender.length,
        selectedValue: state.selectedItem?.[displayAttribute],
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

    useHandleContainerFocus({
        id,
        containerRef,
        handleFocusMovedOutside,
    });

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === ENTER && state.highlightedIndex >= 0) {
            event.preventDefault();
            dispatch({
                type: 'InputKeyDownEnter',
                payload: {
                    selectedItem: state.listToRender[state.highlightedIndex],
                },
            });
            onChange?.(state.listToRender[state.highlightedIndex]);
            return;
        } else if (event.key === ESCAPE) {
            dispatch({
                type: 'InputKeyDownEscape',
            });
            return;
        }

        if (event.key === ARROW_UP) {
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
        }
        if (event.key === ARROW_DOWN) {
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
        }

        if (event.key === TAB) {
            dispatch({ type: 'FocusMovedOutSide' });
        }
    };

    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
            onKeyDown={handleKeyDown}
            className={classNames(className, 'ffe-searchable-dropdown')}
            ref={containerRef}
            onMouseDown={addFlagOnEventHandler(id)}
            onFocus={addFlagOnEventHandler(id)}
        >
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <div
                className="ffe-searchable-dropdown__input"
                onClick={() => {
                    inputRef.current?.focus();
                }}
            >
                <input
                    {...inputProps}
                    ref={mergeRefs([inputRef, ref])}
                    id={id}
                    aria-labelledby={labelledById}
                    onClick={handleInputClick}
                    onChange={e => {
                        if (inputProps?.onChange) {
                            inputProps.onChange(e);
                        }
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
                onClick={() => {
                    dispatch({
                        type: 'ToggleButtonPressed',
                    });
                }}
                isLoading={isLoading}
            />
            <ListBox ref={listBoxRef} isExpanded={state.isExpanded}>
                {state.isExpanded && (
                    <Results
                        isEqual={isEqual}
                        listToRender={state.listToRender}
                        OptionBody={ListItemBodyElement}
                        highlightedIndex={state.highlightedIndex}
                        dropdownAttributes={dropdownAttributes}
                        locale={locale}
                        refs={refs}
                        onChange={item => {
                            dispatch({
                                type: 'ItemOnClick',
                                payload: { selectedItem: item },
                            });
                            onChange?.(item);
                        }}
                        noMatch={state.noMatch ? noMatch : undefined}
                        noMatchMessageId={noMatchMessageId}
                        selectedItems={
                            state.selectedItem ? [state.selectedItem] : []
                        }
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

export const SearchableDropdown = fixedForwardRef(
    SearchableDropdownWithForwardRef,
);
