import React, {
    createRef,
    useLayoutEffect,
    useReducer,
    useRef,
    useState,
    useEffect,
    ForwardedRef,
    AriaAttributes,
    useId,
} from 'react';
import classNames from 'classnames';
import { Icon } from '@sb1/ffe-icons-react';

import { MultiselectOption } from './MultiselectOption';
import { getButtonLabelClose, getButtonLabelOpen } from '../translations';
import { createReducer } from './reducer';
import { getListToRender } from '../getListToRender';
import { scrollIntoView } from '../scrollIntoView';
import {
    getNewHighlightedIndexUp,
    getNewHighlightedIndexDown,
} from '../getNewHighlightedIndex';
//import { useSetAllyMessageItemSelection } from './a11y';
import { Results } from './Results';
import { Spinner } from '@sb1/ffe-spinner-react';
import { Locale, SearchMatcher } from '../types';
import { mergeRefs } from '../mergeRefs';
import { fixedForwardRef } from '../fixedForwardRef';

const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';
const ESCAPE = 'Escape';
const ENTER = 'Enter';

export interface MultiselectSearchableDropdownProps<
    Item extends Record<string, any>,
> {
    id: string;
    labelledById?: string;
    className?: string;
    dropdownList: Item[];
    selectedItems?: Item[] | null;
    dropdownAttributes: (keyof Item)[];
    searchAttributes: (keyof Item)[];
    inputProps?: React.ComponentProps<'input'>;
    maxRenderedDropdownElements?: number;
    onChange?: (item: Item[] | null) => void;
    listElementBody?: React.ComponentType<{
        item: Item;
        isHighlighted: boolean;
        dropdownAttributes: (keyof Item)[];
        locale: Locale;
        isSelected: boolean;
        onClick: React.MouseEventHandler<HTMLDivElement>;
        onChange: (item: Item) => void;
    }>;
    postListElement?: React.ReactNode;
    noMatch?: {
        text?: string;
        dropdownList?: Item[];
    };
    locale?: Locale;
    'aria-invalid'?: AriaAttributes['aria-invalid'];
    ariaInvalid?: AriaAttributes['aria-invalid'];
    formatter?: (value: string) => string;
    searchMatcher?: SearchMatcher<Item>;
    isLoading?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

function MultiselectSearchableDropdownWithForwardRef<
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
    }: MultiselectSearchableDropdownProps<Item>,
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
            selectedItems: selectedItems ?? [],
            highlightedIndex: -1,
            inputValue: selectedItems?.length
                ? [selectedItems[0][dropdownAttributes[0]]]
                : [],
        },
        initialState => {
            return {
                ...initialState,
                ...getListToRender({
                    inputValue: initialState.inputValue.join(' '),
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

    const onInputChange = (item: Item): void => {
        console.log('onchange happening');
        shouldFocusToggleButton.current = true;

        const isAlreadySelected = (state.selectedItems ?? []).some(
            selectedItem =>
                selectedItem[searchAttributes[0]] === item[searchAttributes[0]],
        );
        const newSelectedItems = isAlreadySelected
            ? state.selectedItems?.filter(selectedItem => {
                  return (
                      selectedItem[searchAttributes[0]] !==
                      item[searchAttributes[0]]
                  );
              })
            : [...(state.selectedItems || []), item];
        dispatch({
            type: 'ItemOnClick',
            payload: {
                selectedItems: newSelectedItems,
            },
        });

        onChange?.(newSelectedItems ?? null);
    };

    useEffect(() => {
        if (selectedItems) {
            dispatch({
                type: 'ItemSelectedProgrammatically',
                payload: { selectedItems },
            });
        }
    }, [selectedItems, dispatch]);

    // useSetAllyMessageItemSelection({
    //     hasFocus,
    //     isExpanded: state.isExpanded,
    //     isLoading,
    //     locale,
    //     resultCount: state.listToRender.length,
    //     searchAttributes,
    //     selectedItems: state.selectedItems,
    // });

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
                    selectedItems: [state.listToRender[state.highlightedIndex]],
                },
            });
            onChange?.([state.listToRender[state.highlightedIndex]]);
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
        <div
            onKeyDown={handleKeyDown}
            className={classNames(className, 'ffe-searchable-dropdown')}
            ref={containerRef}
            onMouseDown={addFlagOnEventHandler}
            onFocus={addFlagOnEventHandler}
        >
            <div className="ffe-searchable-dropdown--pill-container">
                {state.selectedItems?.map((item, index) => {
                    return (
                        <span
                            className="ffe-searchable-dropdown--pill"
                            key={index}
                        >
                            {item[searchAttributes[0]]}
                        </span>
                    );
                })}
            </div>
            <div className="ffe-searchable-dropdown--input-container">
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
                            payload: { inputValue: [e.target.value] },
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
                    value={formatter(state.inputValue.join(' '))}
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
                            MultiselectResultList={MultiselectResultList}
                            highlightedIndex={state.highlightedIndex}
                            dropdownAttributes={dropdownAttributes}
                            locale={locale}
                            refs={refs}
                            onChange={item => {
                                onInputChange(item);
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
                </div>
            </div>
        </div>
    );
}

export const MultiselectSearchableDropdown = fixedForwardRef(
    MultiselectSearchableDropdownWithForwardRef,
);
