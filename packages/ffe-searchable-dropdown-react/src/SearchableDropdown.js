import React, {
    createRef,
    useLayoutEffect,
    useReducer,
    useRef,
    useState,
    useEffect,
} from 'react';
import {
    arrayOf,
    bool,
    func,
    number,
    object,
    oneOf,
    oneOfType,
    shape,
    string,
} from 'prop-types';
import classNames from 'classnames';
import { ChevronIkon } from '@sb1/ffe-icons-react';

import HighCapacityResults from './HighCapacityResults';
import ListItemBody from './ListItemBody';
import {
    getButtonLabelClose,
    getButtonLabelOpen,
    locales,
} from './translations';
import { v4 as uuid } from 'uuid';
import { createReducer, stateChangeTypes } from './reducer';
import { getListToRender } from './getListToRender';
import { scrollIntoView } from './scrollIntoView';
import {
    getNewHighlightedIndexUp,
    getNewHighlightedIndexDown,
} from './getNewHighlightedIndex';
import { useSetAllyMessageItemSelection } from './a11y';
import Results from './Results';
import Spinner from '@sb1/ffe-spinner-react';

const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';
const ESCAPE = 'Escape';
const ENTER = 'Enter';

const SearchableDropdown = ({
    id,
    labelledById,
    className,
    dropdownList,
    dropdownAttributes,
    searchAttributes,
    maxRenderedDropdownElements = Number.MAX_SAFE_INTEGER,
    onChange = Function.prototype,
    inputProps = {},
    listElementBody: CustomListItemBody,
    noMatch = {},
    locale,
    ariaInvalid,
    formatter = value => value,
    searchMatcher,
    selectedItem,
    highCapacity = false,
    isLoading = false,
    onOpen,
    onClose,
}) => {
    const [state, dispatch] = useReducer(
        createReducer({
            dropdownList,
            searchAttributes,
            maxRenderedDropdownElements,
            noMatchDropdownList: noMatch.dropdownList,
            searchMatcher,
            onChange,
        }),
        {
            isExpanded: false,
            prevResultCount: 0,
            prevSelectedItem: selectedItem,
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
                    noMatchDropdownList: noMatch.dropdownList,
                    searchMatcher,
                    showAllItemsInDropdown: !!selectedItem,
                }),
            };
        },
    );
    const [refs, setRefs] = useState([]);
    const [hasFocus, setHasFocus] = useState(false);
    const isInitialMountRef = useRef(true);
    const inputRef = useRef();
    const toggleButtonRef = useRef();
    const containerRef = useRef();

    const ListItemBodyElement = CustomListItemBody || ListItemBody;
    const listBoxRef = useRef(uuid());
    const noMatchMessageId = useRef(uuid());
    const shouldFocusToggleButton = useRef(false);
    const shouldFocusInput = useRef(false);

    const handleInputClick = () => {
        dispatch({ type: stateChangeTypes.InputClick });
    };

    const handleInputBlur = e => {
        if (inputProps.onBlur) {
            inputProps.onBlur(e);
        }
    };

    useEffect(() => {
        dispatch({
            type: stateChangeTypes.ItemSelectedProgrammatically,
            payload: { selectedItem },
        });
    }, [selectedItem, dispatch]);

    useSetAllyMessageItemSelection({
        searchAttributes,
        selectedItem: state.selectedItem,
        prevSelectedItem: state.prevSelectedItem,
        isInitialMount: isInitialMountRef.current,
        isExpanded: state.isExpanded,
        resultCount: state.listToRender.length,
        prevResultCount: state.prevResultCount,
        isLoading,
        hasFocus,
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
            toggleButtonRef.current.focus();
            shouldFocusToggleButton.current = false;
        } else if (shouldFocusInput.current) {
            inputRef.current.focus();
            shouldFocusInput.current = false;
        }
    });

    useEffect(() => {
        isInitialMountRef.current = false;
    }, []);

    useEffect(() => {
        dispatch({
            type: stateChangeTypes.DropdownListPropUpdated,
        });
    }, [dropdownList, dispatch]);

    useEffect(() => {
        const cb = state.isExpanded ? onOpen : onClose;
        if (cb) {
            cb();
        }
    }, [state.isExpanded, onOpen, onClose]);

    /**
     * Because of changes in event handling between react v16 and v17, the check for the
     * event flag will only work in react v17. Therefore, we also check Element.contains()
     * to keep react v16 compatibility.
     */
    const handleContainerFocus = e => {
        const isFocusInside =
            containerRef.current.contains(e.target) ||
            e.__isEventFromFFESearchableDropdown;

        if (!isFocusInside) {
            dispatch({
                type: stateChangeTypes.FocusMovedOutSide,
            });
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleContainerFocus);
        document.addEventListener('focusin', handleContainerFocus);
        return () => {
            document.removeEventListener('mousedown', handleContainerFocus);
            document.removeEventListener('focusin', handleContainerFocus);
        };
    }, []);

    /**
     * Adds a flag on the event so that handleContainerFocus()
     * can determine whether or not this event originated from this
     * component
     */
    function addFlagOnEventHandler(event) {
        // eslint-disable-next-line no-param-reassign
        event.nativeEvent.__isEventFromFFESearchableDropdown = true;
    }

    const handleKeyDown = event => {
        if (event.key === ENTER && state.highlightedIndex >= 0) {
            event.preventDefault();
            dispatch({
                type: stateChangeTypes.InputKeyDownEnter,
                payload: {
                    selectedItem: state.listToRender[state.highlightedIndex],
                },
            });
            onChange(state.listToRender[state.highlightedIndex]);
            return;
        } else if (event.key === ESCAPE) {
            dispatch({ type: stateChangeTypes.InputKeyDownEscape });
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
                    type: stateChangeTypes.InputKeyDownArrowUp,
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
                    type: stateChangeTypes.InputKeyDownArrowDown,
                    payload: { highlightedIndex: newHighlightedIndex },
                });
                scrollIntoView(
                    refs[newHighlightedIndex].current,
                    listBoxRef.current,
                );
            }
            return;
        }
    };

    const ResultsElement = highCapacity ? HighCapacityResults : Results;

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
                    ref={inputRef}
                    id={id}
                    aria-labelledby={labelledById}
                    className="ffe-input-field"
                    onClick={handleInputClick}
                    onChange={e => {
                        if (inputProps.onChange) {
                            inputProps.onChange(e);
                        }
                        dispatch({
                            type: stateChangeTypes.InputChange,
                            payload: { inputValue: e.target.value },
                        });
                    }}
                    onFocus={() => setHasFocus(true)}
                    onBlur={handleInputBlur}
                    aria-describedby={
                        [
                            inputProps['aria-describedby'],
                            state.noMatch && noMatchMessageId.current,
                        ]
                            .filter(Boolean)
                            .join(' ') || null
                    }
                    value={formatter(state.inputValue)}
                    type="text"
                    role="combobox"
                    autoComplete="off"
                    aria-controls={listBoxRef.current}
                    aria-expanded={
                        state.isExpanded && !!state.listToRender.length
                    }
                    aria-autocomplete="list"
                    aria-haspopup="listbox"
                    aria-activedescendant={
                        state.highlightedIndex >= 0
                            ? refs[
                                  state.highlightedIndex
                              ]?.current?.getAttribute('id')
                            : null
                    }
                    aria-invalid={
                        typeof ariaInvalid === 'string'
                            ? ariaInvalid
                            : String(!!ariaInvalid)
                    }
                />
                <button
                    type="button"
                    ref={toggleButtonRef}
                    aria-label={
                        state.isExpanded
                            ? getButtonLabelClose(locale)
                            : getButtonLabelOpen(locale)
                    }
                    className={classNames(
                        'ffe-searchable-dropdown__button ffe-searchable-dropdown__button--arrow',
                        {
                            'ffe-searchable-dropdown__button--flip':
                                state.isExpanded,
                        },
                    )}
                    onClick={() => {
                        dispatch({
                            type: stateChangeTypes.ToggleButtonPressed,
                        });
                    }}
                >
                    {isLoading ? <Spinner /> : <ChevronIkon />}
                </button>
            </div>
            <div
                tabIndex="-1"
                className={classNames('ffe-searchable-dropdown__list', {
                    'ffe-searchable-dropdown__list--open': state.isExpanded,
                })}
            >
                <div id={listBoxRef.current} role="listbox">
                    {state.isExpanded && (
                        <ResultsElement
                            listBoxRef={listBoxRef}
                            listToRender={state.listToRender}
                            ListItemBodyElement={ListItemBodyElement}
                            highlightedIndex={state.highlightedIndex}
                            dropdownAttributes={dropdownAttributes}
                            locale={locale}
                            refs={refs}
                            onChange={item => {
                                shouldFocusToggleButton.current = true;
                                dispatch({
                                    type: stateChangeTypes.ItemOnClick,
                                    payload: { selectedItem: item },
                                });
                                onChange(item);
                            }}
                            isNoMatch={state.noMatch}
                            noMatch={noMatch}
                            noMatchMessageId={noMatchMessageId.current}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

SearchableDropdown.propTypes = {
    /** Id of drop down */
    id: string.isRequired,

    /** Id of element that labels input field */
    labelledById: string,

    /** Extra class */
    className: string,

    /** List of objects to be displayed in dropdown */
    dropdownList: arrayOf(object).isRequired,

    /** The selected item to be displayed in the input field. If not specified, uses internal state to decide. */
    selectedItem: object,

    /** Array of attributes to be displayed in list */
    dropdownAttributes: arrayOf(string).isRequired,

    /** Array of attributes used when filtering search */
    searchAttributes: arrayOf(string).isRequired,

    /** Props used on input field */
    inputProps: shape({
        onFocus: func,
    }),

    /** Limits number of rendered dropdown elements */
    maxRenderedDropdownElements: number,

    /** Called when a value is selected */
    onChange: func,

    /** Custom element to use for each item in dropDownList */
    listElementBody: func,

    /** Message and a dropdownList to use when no match */
    noMatch: shape({
        text: string,
        dropdownList: arrayOf(object),
    }),

    /** Locale to use for translations */
    locale: oneOf(Object.values(locales)),

    /** aria-invalid attribute  */
    ariaInvalid: oneOfType([string, bool]),

    /** Function used to format the input field value */
    formatter: func,

    /**
     * Function used to decide if an item matches the input field value
     * (inputValue: string, searchAttributes: string[]) => (item) => boolean
     */
    searchMatcher: func,

    /**
     * For situations where SearchableDropdown might be populated with hundreds of accounts
     * uses react-window for performance optimization, default false
     */
    highCapacity: bool,

    /**
     * For situations where the dropdownList prop will be updated at a later point in time.
     * That is, if the consumer first sends down an initial value before sending down data
     * that has loaded.
     */
    isLoading: bool,

    /** Function used when dropdown opens */
    onOpen: func,

    /**  Function used when dropdown closes */
    onClose: func,
};

export default SearchableDropdown;
