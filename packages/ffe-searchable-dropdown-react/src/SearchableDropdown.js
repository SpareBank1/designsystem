import React, {
    createRef,
    useLayoutEffect,
    useMemo,
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
import { Scrollbars } from 'react-custom-scrollbars';
import isEqual from 'lodash.isequal';
import { ChevronIkon, KryssIkon } from '@sb1/ffe-icons-react';
import { Paragraph } from '@sb1/ffe-core-react';

import ListItemContainer from './ListItemContainer';
import ListItemBody from './ListItemBody';
import {
    getButtonLabelClear,
    getButtonLabelClose,
    getButtonLabelOpen,
    getNotMatchText,
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

const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';
const ESCAPE = 'Escape';
const ENTER = 'Enter';

const SearchableDropdown = ({
    id,
    labelId,
    className,
    dropdownList,
    dropdownAttributes,
    searchAttributes,
    maxRenderedDropdownElements = Number.MAX_SAFE_INTEGER,
    initialValue,
    onChange = Function.prototype,
    inputProps = {},
    listElementBody: CustomListItemBody,
    noMatch = {},
    dark,
    locale,
    'aria-invalid': ariaInvalid,
}) => {
    const initialSelectedItem = useMemo(
        () => dropdownList.find(item => isEqual(initialValue, item)),
        [dropdownList, initialValue],
    );

    const [state, dispatch] = useReducer(
        createReducer({
            dropdownList,
            searchAttributes,
            maxRenderedDropdownElements,
            noMatchDropdownList: noMatch.dropdownList,
        }),
        {
            isExpanded: false,
            prevResultCount: 0,
            prevSelectedItem: initialSelectedItem,
            selectedItem: initialSelectedItem,
            highlightedIndex: -1,
            inputValue: initialSelectedItem
                ? initialSelectedItem[dropdownAttributes[0]]
                : '',
        },
        initialState => {
            return {
                ...initialState,
                ...getListToRender({
                    inputValue: initialState.inputValue,
                    searchAttributes,
                    maxRenderedDropdownElements,
                    dropdownList,
                }),
            };
        },
    );
    const isInitialMountRef = useRef(true);
    const [refs, setRefs] = useState([]);
    const inputRef = useRef();
    const toggleButtonRef = useRef();
    const containerRef = useRef();

    const ListItemBodyElement = CustomListItemBody || ListItemBody;
    const listBoxRef = useRef(uuid());
    const notMatchMessageId = useRef(uuid());
    const shouldFocusToggleButton = useRef(false);
    const shouldFocusInput = useRef(false);

    const handleInputClick = () => {
        dispatch({ type: stateChangeTypes.InputClick });
    };

    useSetAllyMessageItemSelection({
        searchAttributes,
        selectedItem: state.selectedItem,
        prevSelectedItem: state.prevSelectedItem,
        isInitialMount: isInitialMountRef.current,
        isExpanded: state.isExpanded,
        resultCount: state.listToRender.length,
        prevResultCount: state.prevResultCount,
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

    const handleContainerFocus = e => {
        if (!containerRef.current.contains(e.target)) {
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

    const handleKeyDown = event => {
        if (event.key === ENTER && state.highlightedIndex >= 0) {
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
            return;
        }
        if (event.key === ARROW_DOWN) {
            event.preventDefault();
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
            return;
        }
    };

    return (
        <div // eslint-disable-line jsx-a11y/no-static-element-interactions
            onKeyDown={handleKeyDown}
            className={classNames(className, 'ffe-searchable-dropdown', {
                'ffe-searchable-dropdown--dark': dark,
            })}
            ref={containerRef}
        >
            <div>
                <input
                    {...inputProps}
                    ref={inputRef}
                    id={id}
                    aria-labelledby={labelId}
                    className={classNames('ffe-input-field', {
                        'ffe-input-field--dark': dark,
                    })}
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
                    aria-describedby={
                        [
                            inputProps['aria-describedby'],
                            state.noMatch && notMatchMessageId.current,
                        ]
                            .filter(Boolean)
                            .join(' ') || null
                    }
                    value={state.inputValue}
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
                              ]?.current.getAttribute('id')
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
                    aria-label={getButtonLabelClear(locale)}
                    className={classNames(
                        'ffe-searchable-dropdown__button ffe-searchable-dropdown__button--cross',
                        {
                            'ffe-searchable-dropdown__button--hidden': !state.selectedItem,
                        },
                    )}
                    onClick={() => {
                        dispatch({ type: stateChangeTypes.ClearButtonPressed });
                        onChange(null);
                        shouldFocusToggleButton.current = true;
                    }}
                >
                    <KryssIkon />
                </button>
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
                        {
                            'ffe-searchable-dropdown__button--hidden': !!state.selectedItem,
                        },
                    )}
                    onClick={() =>
                        dispatch({ type: stateChangeTypes.ToggleButtonPressed })
                    }
                >
                    <ChevronIkon />
                </button>
            </div>
            <div
                className={classNames('ffe-searchable-dropdown__list', {
                    'ffe-searchable-dropdown__list--open': state.isExpanded,
                })}
            >
                <Scrollbars autoHeight={true} autoHeightMax={300}>
                    {state.noMatch && (
                        <>
                            {noMatch.text ? (
                                <div className="ffe-searchable-dropdown__no-match">
                                    <Paragraph id={notMatchMessageId.current}>
                                        {noMatch.text}
                                    </Paragraph>
                                </div>
                            ) : (
                                <Paragraph
                                    id={notMatchMessageId.current}
                                    className="ffe-screenreader-only"
                                >
                                    {getNotMatchText()}
                                </Paragraph>
                            )}
                        </>
                    )}
                    <div id={listBoxRef.current} role="listbox">
                        {state.isExpanded &&
                            state.listToRender.map((item, index) => {
                                return (
                                    <ListItemContainer
                                        key={item[dropdownAttributes[0]]}
                                        ref={refs[index]}
                                        isHighlighted={
                                            state.highlightedIndex === index
                                        }
                                        onMouseEnter={e => {
                                            dispatch({
                                                type:
                                                    stateChangeTypes.ItemOnMouseEnter,
                                                payload: {
                                                    highlightedIndex: index,
                                                },
                                            });
                                        }}
                                        onClick={() => {
                                            onChange(item);
                                            dispatch({
                                                type:
                                                    stateChangeTypes.ItemOnClick,
                                                payload: { selectedItem: item },
                                            });
                                            shouldFocusInput.current = true;
                                        }}
                                        item={item}
                                    >
                                        {props => {
                                            return (
                                                <ListItemBodyElement
                                                    {...props}
                                                    dropdownAttributes={
                                                        dropdownAttributes
                                                    }
                                                />
                                            );
                                        }}
                                    </ListItemContainer>
                                );
                            })}
                    </div>
                </Scrollbars>
            </div>
        </div>
    );
};

SearchableDropdown.propTypes = {
    /** Id of drop down */
    id: string.isRequired,

    /** Id of label */
    labelId: string.isRequired,

    /** Extra class */
    className: string,

    /** List of objects to be displayed in dropdown */
    dropdownList: arrayOf(object).isRequired,

    /** Array of attributes to be displayed in list */
    dropdownAttributes: arrayOf(string).isRequired,

    /** Array of attributes used when filtering search */
    searchAttributes: arrayOf(string).isRequired,

    /** Props used on input field */
    inputProps: shape({
        onFocus: func,
    }),

    /** One of the elements from dropdownList to be used as default value */
    initialValue: object,

    /** Limits number of rendered dropdown elements */
    maxRenderedDropdownElements: number,

    /** Called when a value is selected */
    onChange: func,

    /** Dark variant */
    dark: bool,

    /** Custom element to use for each item in dropDownList */
    listElementBody: func,

    /** Message and a dropdownList to use when no match */
    noMatch: shape({
        text: string.isRequired,
        dropdownList: arrayOf(object),
    }),

    /** Locale to use for translations */
    locale: oneOf(Object.values(locales)),

    /** aria-invalid attribute  */
    'aria-invalid': oneOfType([string, bool]),
};

export default SearchableDropdown;
