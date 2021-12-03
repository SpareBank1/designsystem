function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../../../pkg/react.js';
import { Scrollbars } from '../../../../pkg/react-custom-scrollbars.js';
import { arrayOf, any, bool, func, number, object, oneOf, shape, string } from '../../../../pkg/prop-types.js';
import { locales } from './translations.js';
import ListItemContainer from './ListItemContainer.js';
import NoMatch from './NoMatch.js';

var Results = function Results(_ref) {
  var isNoMatch = _ref.isNoMatch,
      noMatch = _ref.noMatch,
      listToRender = _ref.listToRender,
      noMatchMessageId = _ref.noMatchMessageId,
      ListItemBodyElement = _ref.ListItemBodyElement,
      refs = _ref.refs,
      highlightedIndex = _ref.highlightedIndex,
      dropdownAttributes = _ref.dropdownAttributes,
      locale = _ref.locale,
      onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(Scrollbars, {
    autoHeight: true,
    autoHeightMax: 300
  }, isNoMatch && /*#__PURE__*/React.createElement(NoMatch, {
    noMatch: noMatch,
    noMatchMessageId: noMatchMessageId,
    listToRender: listToRender
  }), listToRender.map(function (item, index) {
    return /*#__PURE__*/React.createElement(ListItemContainer, {
      key: Object.values(item).join('-'),
      ref: refs[index],
      isHighlighted: highlightedIndex === index,
      onClick: function onClick() {
        onChange(item);
      },
      item: item
    }, function (props) {
      return /*#__PURE__*/React.createElement(ListItemBodyElement, _extends({}, props, {
        dropdownAttributes: dropdownAttributes,
        locale: locale
      }));
    });
  }));
};

Results.propTypes = {
  listToRender: arrayOf(object).isRequired,
  noMatch: shape({
    text: string,
    dropdownList: arrayOf(object)
  }),
  noMatchMessageId: string,
  ListItemBodyElement: func,
  highlightedIndex: number,
  dropdownAttributes: arrayOf(string).isRequired,
  locale: oneOf(Object.values(locales)).isRequired,
  refs: arrayOf(any).isRequired,
  onChange: func.isRequired,
  isNoMatch: bool.isRequired
};
export default Results;