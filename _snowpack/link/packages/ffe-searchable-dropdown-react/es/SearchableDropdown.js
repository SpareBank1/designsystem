function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { createRef, useLayoutEffect, useReducer, useRef, useState, useEffect } from '../../../../pkg/react.js';
import { arrayOf, bool, func, number, object, oneOf, oneOfType, shape, string } from '../../../../pkg/prop-types.js';
import classNames from '../../../../pkg/classnames.js';
import { ChevronIkon } from '../../ffe-icons-react/es/index.js';
import HighCapacityResults from './HighCapacityResults.js';
import ListItemBody from './ListItemBody.js';
import { getButtonLabelClose, getButtonLabelOpen, locales } from './translations.js';
import { v4 as uuid } from '../../../../pkg/uuid.js';
import { createReducer, stateChangeTypes } from './reducer.js';
import { getListToRender } from './getListToRender.js';
import { scrollIntoView } from './scrollIntoView.js';
import { getNewHighlightedIndexUp, getNewHighlightedIndexDown } from './getNewHighlightedIndex.js';
import { useSetAllyMessageItemSelection } from './a11y.js';
import Results from './Results.js';
import Spinner from '../../ffe-spinner-react/es/index.js';
var ARROW_UP = 'ArrowUp';
var ARROW_DOWN = 'ArrowDown';
var ESCAPE = 'Escape';
var ENTER = 'Enter';

var SearchableDropdown = function SearchableDropdown(_ref) {
  var _refs$state$highlight, _refs$state$highlight2;

  var id = _ref.id,
      labelId = _ref.labelId,
      className = _ref.className,
      dropdownList = _ref.dropdownList,
      dropdownAttributes = _ref.dropdownAttributes,
      searchAttributes = _ref.searchAttributes,
      _ref$maxRenderedDropd = _ref.maxRenderedDropdownElements,
      maxRenderedDropdownElements = _ref$maxRenderedDropd === void 0 ? Number.MAX_SAFE_INTEGER : _ref$maxRenderedDropd,
      _ref$onChange = _ref.onChange,
      _onChange = _ref$onChange === void 0 ? Function.prototype : _ref$onChange,
      _ref$inputProps = _ref.inputProps,
      inputProps = _ref$inputProps === void 0 ? {} : _ref$inputProps,
      CustomListItemBody = _ref.listElementBody,
      _ref$noMatch = _ref.noMatch,
      noMatch = _ref$noMatch === void 0 ? {} : _ref$noMatch,
      locale = _ref.locale,
      ariaInvalid = _ref.ariaInvalid,
      _ref$formatter = _ref.formatter,
      formatter = _ref$formatter === void 0 ? function (value) {
    return value;
  } : _ref$formatter,
      searchMatcher = _ref.searchMatcher,
      selectedItem = _ref.selectedItem,
      _ref$highCapacity = _ref.highCapacity,
      highCapacity = _ref$highCapacity === void 0 ? false : _ref$highCapacity,
      _ref$isLoading = _ref.isLoading,
      isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose;

  var _useReducer = useReducer(createReducer({
    dropdownList: dropdownList,
    searchAttributes: searchAttributes,
    maxRenderedDropdownElements: maxRenderedDropdownElements,
    noMatchDropdownList: noMatch.dropdownList,
    searchMatcher: searchMatcher,
    onChange: _onChange
  }), {
    isExpanded: false,
    prevResultCount: 0,
    prevSelectedItem: selectedItem,
    selectedItem: selectedItem,
    highlightedIndex: -1,
    inputValue: selectedItem ? selectedItem[dropdownAttributes[0]] : ''
  }, function (initialState) {
    return _objectSpread(_objectSpread({}, initialState), getListToRender({
      inputValue: initialState.inputValue,
      searchAttributes: searchAttributes,
      maxRenderedDropdownElements: maxRenderedDropdownElements,
      dropdownList: dropdownList,
      searchMatcher: searchMatcher,
      showAllItemsInDropdown: !!selectedItem
    }));
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      refs = _useState2[0],
      setRefs = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hasFocus = _useState4[0],
      setHasFocus = _useState4[1];

  var isInitialMountRef = useRef(true);
  var inputRef = useRef();
  var toggleButtonRef = useRef();
  var containerRef = useRef();
  var ListItemBodyElement = CustomListItemBody || ListItemBody;
  var listBoxRef = useRef(uuid());
  var noMatchMessageId = useRef(uuid());
  var shouldFocusToggleButton = useRef(false);
  var shouldFocusInput = useRef(false);

  var handleInputClick = function handleInputClick() {
    dispatch({
      type: stateChangeTypes.InputClick
    });
  };

  var handleInputBlur = function handleInputBlur(e) {
    if (inputProps.onBlur) {
      inputProps.onBlur(e);
    }
  };

  useEffect(function () {
    dispatch({
      type: stateChangeTypes.ItemSelectedProgrammatically,
      payload: {
        selectedItem: selectedItem
      }
    });
  }, [selectedItem, dispatch]);
  useSetAllyMessageItemSelection({
    searchAttributes: searchAttributes,
    selectedItem: state.selectedItem,
    prevSelectedItem: state.prevSelectedItem,
    isInitialMount: isInitialMountRef.current,
    isExpanded: state.isExpanded,
    resultCount: state.listToRender.length,
    prevResultCount: state.prevResultCount,
    isLoading: isLoading,
    hasFocus: hasFocus
  });
  useLayoutEffect(function () {
    setRefs(function (prevRefs) {
      return Array(state.listToRender.length).fill(null).map(function (_, i) {
        return prevRefs[i] || /*#__PURE__*/createRef();
      });
    });
  }, [state.listToRender.length]);
  useLayoutEffect(function () {
    if (shouldFocusToggleButton.current) {
      toggleButtonRef.current.focus();
      shouldFocusToggleButton.current = false;
    } else if (shouldFocusInput.current) {
      inputRef.current.focus();
      shouldFocusInput.current = false;
    }
  });
  useEffect(function () {
    isInitialMountRef.current = false;
  }, []);
  useEffect(function () {
    dispatch({
      type: stateChangeTypes.DropdownListPropUpdated
    });
  }, [dropdownList, dispatch]);
  useEffect(function () {
    if (state.isExpanded && typeof onOpen === 'function') {
      onOpen();
    }

    if (!state.isExpanded && typeof onClose === 'function') {
      onClose();
    }
  }, [state.isExpanded]);
  /**
   * Because of changes in event handling between react v16 and v17, the check for the
   * event flag will only work in react v17. Therefore, we also check Element.contains()
   * to keep react v16 compatibility.
   */

  var handleContainerFocus = function handleContainerFocus(e) {
    var isFocusInside = containerRef.current.contains(e.target) || e.__isEventFromFFESearchableDropdown;

    if (!isFocusInside) {
      dispatch({
        type: stateChangeTypes.FocusMovedOutSide
      });
    }
  };

  useEffect(function () {
    document.addEventListener('mousedown', handleContainerFocus);
    document.addEventListener('focusin', handleContainerFocus);
    return function () {
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

  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === ENTER && state.highlightedIndex >= 0) {
      event.preventDefault();
      dispatch({
        type: stateChangeTypes.InputKeyDownEnter,
        payload: {
          selectedItem: state.listToRender[state.highlightedIndex]
        }
      });

      _onChange(state.listToRender[state.highlightedIndex]);

      return;
    } else if (event.key === ESCAPE) {
      dispatch({
        type: stateChangeTypes.InputKeyDownEscape
      });
      return;
    }

    if (event.key === ARROW_UP) {
      event.preventDefault();

      if (state.listToRender.length) {
        var newHighlightedIndex = getNewHighlightedIndexUp(state.highlightedIndex, state.listToRender.length);
        dispatch({
          type: stateChangeTypes.InputKeyDownArrowUp,
          payload: {
            highlightedIndex: newHighlightedIndex
          }
        });
        scrollIntoView(refs[newHighlightedIndex].current, listBoxRef.current);
      }

      return;
    }

    if (event.key === ARROW_DOWN) {
      event.preventDefault();

      if (state.listToRender.length) {
        var _newHighlightedIndex = getNewHighlightedIndexDown(state.highlightedIndex, state.listToRender.length);

        dispatch({
          type: stateChangeTypes.InputKeyDownArrowDown,
          payload: {
            highlightedIndex: _newHighlightedIndex
          }
        });
        scrollIntoView(refs[_newHighlightedIndex].current, listBoxRef.current);
      }

      return;
    }
  };

  var ResultsElement = highCapacity ? HighCapacityResults : Results;
  return /*#__PURE__*/React.createElement("div", {
    // eslint-disable-line jsx-a11y/no-static-element-interactions
    onKeyDown: handleKeyDown,
    className: classNames(className, 'ffe-searchable-dropdown'),
    ref: containerRef,
    onMouseDown: addFlagOnEventHandler,
    onFocus: addFlagOnEventHandler
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", _extends({}, inputProps, {
    ref: inputRef,
    id: id,
    "aria-labelledby": labelId,
    className: "ffe-input-field",
    onClick: handleInputClick,
    onChange: function onChange(e) {
      if (inputProps.onChange) {
        inputProps.onChange(e);
      }

      dispatch({
        type: stateChangeTypes.InputChange,
        payload: {
          inputValue: e.target.value
        }
      });
    },
    onFocus: function onFocus() {
      return setHasFocus(true);
    },
    onBlur: handleInputBlur,
    "aria-describedby": [inputProps['aria-describedby'], state.noMatch && noMatchMessageId.current].filter(Boolean).join(' ') || null,
    value: formatter(state.inputValue),
    type: "text",
    role: "combobox",
    autoComplete: "off",
    "aria-controls": listBoxRef.current,
    "aria-expanded": state.isExpanded && !!state.listToRender.length,
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-activedescendant": state.highlightedIndex >= 0 ? (_refs$state$highlight = refs[state.highlightedIndex]) === null || _refs$state$highlight === void 0 ? void 0 : (_refs$state$highlight2 = _refs$state$highlight.current) === null || _refs$state$highlight2 === void 0 ? void 0 : _refs$state$highlight2.getAttribute('id') : null,
    "aria-invalid": typeof ariaInvalid === 'string' ? ariaInvalid : String(!!ariaInvalid)
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    ref: toggleButtonRef,
    "aria-label": state.isExpanded ? getButtonLabelClose(locale) : getButtonLabelOpen(locale),
    className: classNames('ffe-searchable-dropdown__button ffe-searchable-dropdown__button--arrow', {
      'ffe-searchable-dropdown__button--flip': state.isExpanded
    }),
    onClick: function onClick() {
      dispatch({
        type: stateChangeTypes.ToggleButtonPressed
      });
    }
  }, isLoading ? /*#__PURE__*/React.createElement(Spinner, null) : /*#__PURE__*/React.createElement(ChevronIkon, null))), /*#__PURE__*/React.createElement("div", {
    tabIndex: "-1",
    className: classNames('ffe-searchable-dropdown__list', {
      'ffe-searchable-dropdown__list--open': state.isExpanded
    })
  }, /*#__PURE__*/React.createElement("div", {
    id: listBoxRef.current,
    role: "listbox"
  }, state.isExpanded && /*#__PURE__*/React.createElement(ResultsElement, {
    listBoxRef: listBoxRef,
    listToRender: state.listToRender,
    ListItemBodyElement: ListItemBodyElement,
    highlightedIndex: state.highlightedIndex,
    dropdownAttributes: dropdownAttributes,
    locale: locale,
    refs: refs,
    onChange: function onChange(item) {
      shouldFocusToggleButton.current = true;
      dispatch({
        type: stateChangeTypes.ItemOnClick,
        payload: {
          selectedItem: item
        }
      });

      _onChange(item);
    },
    isNoMatch: state.noMatch,
    noMatch: noMatch,
    noMatchMessageId: noMatchMessageId.current
  }))));
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

  /** The selected item to be displayed in the input field. If not specified, uses internal state to decide. */
  selectedItem: object,

  /** Array of attributes to be displayed in list */
  dropdownAttributes: arrayOf(string).isRequired,

  /** Array of attributes used when filtering search */
  searchAttributes: arrayOf(string).isRequired,

  /** Props used on input field */
  inputProps: shape({
    onFocus: func
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
    dropdownList: arrayOf(object)
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
  onClose: func
};
export default SearchableDropdown;