import React, {
    AriaAttributes,
    createRef,
    ForwardedRef,
    useEffect,
    useId,
    useLayoutEffect,
    useReducer,
    useRef,
    useState,
} from 'react';
import classNames from 'classnames';
import { Icon } from '@sb1/ffe-icons-react';

import { MultiselectOption } from './MultiselectOption';
import { getButtonLabelClose, getButtonLabelOpen } from '../translations';
import { createReducer } from './reducer';
import { getListToRender } from '../getListToRender';
import { scrollIntoView } from '../scrollIntoView';
import {
    getNewHighlightedIndexDown,
    getNewHighlightedIndexUp,
} from '../getNewHighlightedIndex';
import { Results } from './Results';
import { Spinner } from '@sb1/ffe-spinner-react';
import { Locale, SearchMatcher } from '../types';
import { mergeRefs } from '../mergeRefs';
import { fixedForwardRef } from '../fixedForwardRef';
import { ChipRemovable } from '@sb1/ffe-chips-react';
import { getActionType } from './getNewList';
import { useSetAllyMessageItemSelection } from './a11y';

const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';
const ESCAPE = 'Escape';
const ENTER = 'Enter';

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
    listElementBody?: React.ComponentType<{
        item: Item;
        dropdownAttributes: (keyof Item)[];
        isHighlighted: boolean;
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
        listElementBody: CustomListItemBody,
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
        }),
        {
            isExpanded: false,
            selectedItems: selectedItems ?? [],
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
    const [refs, setRefs] = useState<React.RefObject<HTMLDivElement>[]>([]);
    const [hasFocus, setHasFocus] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const toggleButtonRef = useRef<HTMLButtonElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const MultiselectResultList = CustomListItemBody || MultiselectOption;
    const listBoxRef = useRef<HTMLDivElement>(null);
    const noMatchMessageId = useId();
    const shouldFocusToggleButton = useRef(false);
    const shouldFocusInput = useRef(false);

    const handleInputClick = () => {
        dispatch({ type: 'InputClick' });
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
        dropdownAttributes,
        selectedItems: state.selectedItems,
    });

    useLayoutEffect(() => {
        setRefs(prevRefs =>
            Array(state.listToRender.length)
                .fill(null)
                .map((_, i) => prevRefs[i] || createRef()),
        );
    }, [state.listToRender.length]);

    useLayoutEffect(() => {
        if (shouldFocusToggleButton.current) {
            toggleButtonRef.current?.focus();
            shouldFocusToggleButton.current = false;
        } else if (shouldFocusInput.current) {
            inputRef.current?.focus();
            //shouldFocusInput.current = false;
        }
    });

    useEffect(() => {
        dispatch({
            type: 'DropdownListPropUpdated',
        });
    }, [dropdownList, dispatch]);

    useEffect(() => {
        const cb = state.isExpanded ? onOpen : onClose;
        if (cb) {
            cb();
        }
    }, [state.isExpanded, onOpen, onClose]);

    useEffect(() => {
        /**
         * Because of changes in event handling between react v16 and v17, the check for the
         * event flag will only work in react v17. Therefore, we also check Element.contains()
         * to keep react v16 compatibility.
         */
        const handleContainerFocus = (e: MouseEvent | FocusEvent) => {
            const isFocusInside =
                containerRef.current?.contains(e.target as Node) ||
                (e as any).__eventFromFFESearchableDropdownId === id;

            if (!isFocusInside) {
                dispatch({
                    type: 'FocusMovedOutSide',
                });
            }
        };

        document.addEventListener('mousedown', handleContainerFocus);
        document.addEventListener('focusin', handleContainerFocus);
        return () => {
            document.removeEventListener('mousedown', handleContainerFocus);
            document.removeEventListener('focusin', handleContainerFocus);
        };
    }, [id]);

    /**
     * Adds a flag on the event so that handleContainerFocus()
     * can determine whether this event originated from this
     * component
     */
    function addFlagOnEventHandler(event: React.SyntheticEvent) {
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        event.nativeEvent.__eventFromFFESearchableDropdownId = id;
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === ENTER && state.highlightedIndex >= 0) {
            event.preventDefault();
            const clickedItem = state.listToRender[state.highlightedIndex];
            const actionType = getActionType(state.selectedItems, clickedItem);
            dispatch({
                type: 'InputKeyDownEnter',
                payload: {
                    item: clickedItem,
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
                scrollIntoView(
                    refs[newHighlightedIndex].current,
                    listBoxRef.current,
                );
            }
        } else if (event.key === 'Tab') {
            dispatch({
                type: 'TabPressed',
                payload: { highlightedIndex: -1 },
            });
            return;
        }
    };

    return (
        <div // eslint-disable-line jsx-a11y/no-static-element-interactions
            onKeyDown={handleKeyDown}
            ref={containerRef}
            onMouseDown={addFlagOnEventHandler}
            onFocus={addFlagOnEventHandler}
        >
            <div
                className={classNames(
                    className,
                    'ffe-searchable-dropdown-multiselect',
                )}
            >
                <div className="ffe-searchable-dropdown-multiselect__input-container">
                    {state.selectedItems?.map((item, index) => {
                        return (
                            <ChipRemovable
                                as="button"
                                size="sm"
                                key={index}
                                aria-label={`${item[dropdownAttributes[0]]}, fjern valg`}
                                onClick={() => {
                                    dispatch({
                                        type: 'ItemOnClick',
                                        payload: {
                                            item: item,
                                            actionType: 'removed',
                                        },
                                    });
                                    onChange?.(item, 'removed');
                                }}
                            >
                                {item[dropdownAttributes[0]]}
                            </ChipRemovable>
                        );
                    })}
                    <input
                        {...inputProps}
                        ref={mergeRefs([inputRef, ref])}
                        id={id}
                        aria-labelledby={labelledById}
                        className="ffe-searchable-dropdown-multiselect__input-field"
                        onClick={handleInputClick}
                        onChange={e => {
                            inputProps?.onChange?.(e);
                            dispatch({
                                type: 'InputChange',
                                payload: { inputValue: e.target.value },
                            });
                        }}
                        onFocus={() => setHasFocus(true)}
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
                <button
                    type="button"
                    ref={toggleButtonRef}
                    aria-label={
                        state.isExpanded
                            ? getButtonLabelClose(locale)
                            : getButtonLabelOpen(locale)
                    }
                    className={classNames(
                        'ffe-searchable-dropdown-multiselect__button',
                        {
                            'ffe-searchable-dropdown-multiselect__button--flip':
                                state.isExpanded,
                        },
                    )}
                    onClick={() => {
                        dispatch({
                            type: 'ToggleButtonPressed',
                        });
                    }}
                >
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        <Icon
                            fileUrl="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtMzczLjUzOXEtNy4yMzEgMC0xMy40NjEtMi4zMDgtNi4yMzEtMi4zMDgtMTEuODQ2LTcuOTIzTDI3NC45MjQtNTYzLjUzOXEtOC4zMDgtOC4zMDctOC41LTIwLjg4NC0uMTkzLTEyLjU3NyA4LjUtMjEuMjY5IDguNjkyLTguNjkyIDIxLjA3Ni04LjY5MnQyMS4wNzYgOC42OTJMNDgwLTQ0Mi43NjhsMTYyLjkyNC0xNjIuOTI0cTguMzA3LTguMzA3IDIwLjg4NC04LjUgMTIuNTc2LS4xOTIgMjEuMjY4IDguNSA4LjY5MyA4LjY5MiA4LjY5MyAyMS4wNzcgMCAxMi4zODQtOC42OTMgMjEuMDc2TDUwNS4zMDctMzgzLjc3cS01LjYxNSA1LjYxNS0xMS44NDYgNy45MjMtNi4yMyAyLjMwOC0xMy40NjEgMi4zMDhaIi8+PC9zdmc+"
                            size="md"
                            className="ffe-searchable-dropdown__button-icon"
                        />
                    )}
                </button>
            </div>
            <div
                tabIndex={-1}
                className={classNames('ffe-searchable-dropdown__list', {
                    'ffe-searchable-dropdown__list--open': state.isExpanded,
                })}
            >
                <div ref={listBoxRef} id={`${id}-listbox`} role="listbox">
                    {state.isExpanded && (
                        <Results
                            listToRender={state.listToRender}
                            ListItemBodyElement={MultiselectResultList}
                            highlightedIndex={state.highlightedIndex}
                            dropdownAttributes={dropdownAttributes}
                            locale={locale}
                            refs={refs}
                            onChange={item => {
                                const actionType = getActionType(
                                    state.selectedItems,
                                    item,
                                );
                                dispatch({
                                    type: 'ItemOnClick',
                                    payload: {
                                        item: item,
                                        actionType: actionType,
                                    },
                                });
                                onChange?.(item, actionType);
                            }}
                            noMatch={state.noMatch ? noMatch : undefined}
                            noMatchMessageId={noMatchMessageId}
                            selectedItem={state.selectedItems}
                        />
                    )}
                    {postListElement && (
                        <div className="ffe-searchable-dropdown-multiselect__list--post-list-element">
                            {postListElement}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export const SearchableDropdownMultiSelect = fixedForwardRef(
    SearchableDropdownMultiSelectWithForwardRef,
);
