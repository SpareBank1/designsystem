function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { getListToRender } from './getListToRender.js';
export var stateChangeTypes = {
  InputFocus: 'InputFocus',
  InputBlur: 'InputBlur',
  InputClick: 'InputClick',
  InputChange: 'InputChange',
  InputKeyDownEscape: 'InputKeyDownEscape',
  InputKeyDownEnter: 'InputKeyDownEnter',
  InputKeyDownArrowDown: 'InputKeyDownArrowDown',
  InputKeyDownArrowUp: 'InputKeyDownArrowUp',
  ToggleButtonPressed: 'ToggleButtonPressed',
  ItemOnClick: 'ItemOnMouseDown',
  FocusMovedOutSide: 'FocusMovedOutSide',
  ItemSelectedProgrammatically: 'ItemSelectedProgrammatically',
  DropdownListPropUpdated: 'DropdownListPropUpdated'
};
export var createReducer = function createReducer(_ref) {
  var searchAttributes = _ref.searchAttributes,
      dropdownList = _ref.dropdownList,
      noMatchDropdownList = _ref.noMatchDropdownList,
      maxRenderedDropdownElements = _ref.maxRenderedDropdownElements,
      searchMatcher = _ref.searchMatcher,
      onChange = _ref.onChange;
  return function (state, action) {
    var _action$payload$selec;

    switch (action.type) {
      case stateChangeTypes.InputKeyDownEscape:
        return _objectSpread(_objectSpread({}, state), {}, {
          noMatch: false,
          isExpanded: false,
          highlightedIndex: -1,
          inputValue: state.selectedItem ? state.selectedItem[searchAttributes[0]] : ''
        });

      case stateChangeTypes.InputClick:
        {
          var _getListToRender = getListToRender({
            inputValue: state.inputValue,
            searchAttributes: searchAttributes,
            maxRenderedDropdownElements: maxRenderedDropdownElements,
            dropdownList: dropdownList,
            noMatchDropdownList: noMatchDropdownList,
            searchMatcher: searchMatcher,
            showAllItemsInDropdown: true
          }),
              noMatch = _getListToRender.noMatch,
              listToRender = _getListToRender.listToRender;

          return _objectSpread(_objectSpread({}, state), {}, {
            isExpanded: true,
            listToRender: listToRender,
            prevResultCount: state.listToRender.length,
            noMatch: noMatch
          });
        }

      case stateChangeTypes.InputChange:
        {
          var _getListToRender2 = getListToRender({
            inputValue: action.payload.inputValue,
            searchAttributes: searchAttributes,
            maxRenderedDropdownElements: maxRenderedDropdownElements,
            dropdownList: dropdownList,
            noMatchDropdownList: noMatchDropdownList,
            searchMatcher: searchMatcher,
            showAllItemsInDropdown: false
          }),
              _noMatch = _getListToRender2.noMatch,
              _listToRender = _getListToRender2.listToRender;

          return _objectSpread(_objectSpread({}, state), {}, {
            isExpanded: true,
            inputValue: action.payload.inputValue,
            prevResultCount: state.listToRender.length,
            listToRender: _listToRender,
            highlightedIndex: action.payload.inputValue.trim() === '' || state.listToRender.length === 0 ? -1 : 0,
            noMatch: _noMatch
          });
        }

      case stateChangeTypes.ToggleButtonPressed:
        return _objectSpread(_objectSpread({}, state), {}, {
          isExpanded: !state.isExpanded
        });

      case stateChangeTypes.ItemSelectedProgrammatically:
      case stateChangeTypes.ItemOnClick:
      case stateChangeTypes.InputKeyDownEnter:
        return _objectSpread(_objectSpread({}, state), {}, {
          isExpanded: false,
          highlightedIndex: -1,
          prevSelectedItem: state.selectedItem,
          selectedItem: action.payload.selectedItem,
          inputValue: ((_action$payload$selec = action.payload.selectedItem) === null || _action$payload$selec === void 0 ? void 0 : _action$payload$selec[searchAttributes[0]]) || ''
        });

      case stateChangeTypes.InputKeyDownArrowDown:
      case stateChangeTypes.InputKeyDownArrowUp:
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            isExpanded: true,
            highlightedIndex: action.payload.highlightedIndex
          });
        }

      case stateChangeTypes.FocusMovedOutSide:
        {
          var _getListToRender3 = getListToRender({
            inputValue: state.inputValue,
            searchAttributes: searchAttributes,
            maxRenderedDropdownElements: maxRenderedDropdownElements,
            dropdownList: dropdownList,
            noMatchDropdownList: noMatchDropdownList,
            searchMatcher: searchMatcher,
            showAllItemsInDropdown: true
          }),
              _listToRender2 = _getListToRender3.listToRender;

          var shouldEmptySelectedItem = state.inputValue === '' && !!state.selectedItem;
          var shouldAutomaticallySetSelectedItem = !!(state.listToRender.length === 1 && searchAttributes.map(function (searchAttribute) {
            var _state$selectedItem;

            return state.listToRender[0][searchAttribute] === ((_state$selectedItem = state.selectedItem) === null || _state$selectedItem === void 0 ? void 0 : _state$selectedItem[searchAttribute]);
          }).includes(false) && state.highlightedIndex !== -1);
          var selectedItem = state.selectedItem;

          if (shouldEmptySelectedItem) {
            onChange(null);
            selectedItem = null;
          } else if (shouldAutomaticallySetSelectedItem) {
            onChange(state.listToRender[0]);
            selectedItem = state.listToRender[0];
          }

          var inputValue = selectedItem ? selectedItem[searchAttributes[0]] : '';
          return _objectSpread(_objectSpread({}, state), {}, {
            isExpanded: false,
            highlightedIndex: -1,
            inputValue: inputValue,
            selectedItem: selectedItem,
            listToRender: _listToRender2
          });
        }

      case stateChangeTypes.DropdownListPropUpdated:
        {
          return _objectSpread(_objectSpread({}, state), getListToRender({
            inputValue: state.inputValue,
            searchAttributes: searchAttributes,
            maxRenderedDropdownElements: maxRenderedDropdownElements,
            dropdownList: dropdownList,
            searchMatcher: searchMatcher,
            showAllItemsInDropdown: !!state.selectedItem
          }));
        }

      default:
        return state;
    }
  };
};