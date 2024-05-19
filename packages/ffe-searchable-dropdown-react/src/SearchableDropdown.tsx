import React, {
    createRef,
    useLayoutEffect,
    useReducer,
    useRef,
    useState,
    useEffect,
    ForwardedRef,
} from 'react';
import classNames from 'classnames';
import { Icon } from '@sb1/ffe-icons-react';

import { ListItemBody } from './ListItemBody';
import { getButtonLabelClose, getButtonLabelOpen } from './translations';
import { v4 as uuid } from 'uuid';
import { createReducer } from './reducer';
import { getListToRender } from './getListToRender';
import { scrollIntoView } from './scrollIntoView';
import {
    getNewHighlightedIndexUp,
    getNewHighlightedIndexDown,
} from './getNewHighlightedIndex';
import { useSetAllyMessageItemSelection } from './a11y';
import { Results } from './Results';
import { Spinner } from '@sb1/ffe-spinner-react';
import { Locale, SearchMatcher } from './types';
import { mergeRefs } from './mergeRefs';
import { fixedForwardRef } from './fixedForwardRef';

const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';
const ESCAPE = 'Escape';
const ENTER = 'Enter';

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
    selectedItem?: Item | null;
    /** Array of attributes to be displayed in list */
    dropdownAttributes: (keyof Item)[];
    /** Array of attributes used when filtering search */
    searchAttributes: (keyof Item)[];
    /** Props used on input field */
    inputProps?: React.ComponentProps<'input'>;
    /** Limits number of rendered dropdown elements */
    maxRenderedDropdownElements?: number;
    /** Called when a value is selected */
    onChange?: (item: Item | null) => void;
    /** Custom element to use for each item in dropDownList */
    listElementBody?: React.ComponentType<{
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
    ariaInvalid?: React.ComponentProps<'input'>['aria-invalid'];
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
}

function SearchableDropdownWithForwardRef<Item extends Record<string, any>>(
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
        selectedItem,
        isLoading = false,
        onOpen,
        onClose,
    }: SearchableDropdownProps<Item>,
    ref: ForwardedRef<HTMLInputElement>,
) {
    const [state, dispatch] = useReducer(
        createReducer({
            dropdownList,
            searchAttributes,
            maxRenderedDropdownElements,
            noMatchDropdownList: noMatch?.dropdownList,
            searchMatcher,
            onChange,
        }),
        {
            isExpanded: false,
            selectedItem,
            highlightedIndex: -1,
            inputValue: selectedItem ? selectedItem[dropdownAttributes[0]] : '',
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
    const [refs, setRefs] = useState<React.RefObject<HTMLDivElement>[]>([]);
    const [hasFocus, setHasFocus] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const toggleButtonRef = useRef<HTMLButtonElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const ListItemBodyElement = CustomListItemBody || ListItemBody;
    const listBoxRef = useRef<HTMLDivElement>(null);
    const noMatchMessageId = useRef(uuid());
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
        searchAttributes,
        selectedItem: state.selectedItem,
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
            shouldFocusInput.current = false;
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
                // @ts-ignore
                containerRef.current?.contains(e.target) ||
                // @ts-ignore
                e.__eventFromFFESearchableDropdownId === id;

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
     * can determine whether or not this event originated from this
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
            dispatch({
                type: 'InputKeyDownEnter',
                payload: {
                    selectedItem: state.listToRender[state.highlightedIndex],
                },
            });
            onChange?.(state.listToRender[state.highlightedIndex]);
            return;
        } else if (event.key === ESCAPE) {
            dispatch({ type: 'InputKeyDownEscape' });
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
                scrollIntoView(
                    refs[newHighlightedIndex].current,
                    listBoxRef.current,
                );
            }
        }
    };

    return (
        <div // eslint-disable-line jsx-a11y/no-static-element-interactions
            onKeyDown={handleKeyDown}
            className={classNames(className, 'ffe-searchable-dropdown')}
            ref={containerRef}
            onMouseDown={addFlagOnEventHandler}
            onFocus={addFlagOnEventHandler}
        >
            <div>
                <input
                    {...inputProps}
                    ref={mergeRefs([inputRef, ref])}
                    id={id}
                    aria-labelledby={labelledById}
                    className="ffe-input-field"
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
                    onFocus={() => setHasFocus(true)}
                    onBlur={handleInputBlur}
                    aria-describedby={
                        [
                            inputProps?.['aria-describedby'],
                            state.noMatch && noMatchMessageId.current,
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
                            ? refs[
                                  state.highlightedIndex
                              ]?.current?.getAttribute('id') ?? undefined
                            : undefined
                    }
                    aria-invalid={ariaInvalid}
                />
                <button
                    type="button"
                    ref={toggleButtonRef}
                    aria-label={
                        state.isExpanded
                            ? getButtonLabelClose(locale)
                            : getButtonLabelOpen(locale)
                    }
                    className={classNames('ffe-searchable-dropdown__button', {
                        'ffe-searchable-dropdown__button--flip':
                            state.isExpanded,
                    })}
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
                            ListItemBodyElement={ListItemBodyElement}
                            highlightedIndex={state.highlightedIndex}
                            dropdownAttributes={dropdownAttributes}
                            locale={locale}
                            refs={refs}
                            onChange={item => {
                                shouldFocusToggleButton.current = true;
                                dispatch({
                                    type: 'ItemOnClick',
                                    payload: { selectedItem: item },
                                });
                                onChange?.(item);
                            }}
                            noMatch={state.noMatch ? noMatch : undefined}
                            noMatchMessageId={noMatchMessageId.current}
                        />
                    )}
                    {postListElement && (
                        <div className="ffe-searchable-dropdown__list--post-list-element">
                            {postListElement}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export const SearchableDropdown = fixedForwardRef(
    SearchableDropdownWithForwardRef,
);
