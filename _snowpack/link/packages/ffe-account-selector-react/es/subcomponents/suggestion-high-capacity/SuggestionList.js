function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import Spinner from '../../../../ffe-spinner-react/es/index.js';
import { arrayOf, bool, func, number, object, shape, string, array } from '../../../../../../pkg/prop-types.js';
import React, { forwardRef } from '../../../../../../pkg/react.js';
import { FixedSizeList as List } from '../../../../../../pkg/react-window.js';
import SuggestionItem from './SuggestionItem.js';

var Row = function Row(props) {
  var style = props.style,
      index = props.index,
      _props$data = props.data,
      forwardProps = _props$data.forwardProps,
      suggestions = _props$data.suggestions,
      renderSuggestion = _props$data.renderSuggestion,
      highlightedIndex = _props$data.highlightedIndex;
  return /*#__PURE__*/React.createElement(SuggestionItem, _extends({}, forwardProps, {
    item: suggestions[index],
    id: "suggestion-item-".concat(index),
    isHighlighted: index === highlightedIndex,
    render: renderSuggestion,
    style: style
  }));
};

Row.propTypes = {
  style: object,
  index: number,
  data: shape({
    forwardProps: object,
    suggestions: array,
    renderSuggestion: func,
    highlightedIndex: number
  })
};
export default function SuggestionList(props) {
  var suggestions = props.suggestions,
      highlightedIndex = props.highlightedIndex,
      renderSuggestion = props.renderSuggestion,
      renderNoMatches = props.renderNoMatches,
      id = props.id,
      isLoading = props.isLoading,
      height = props.height,
      itemSize = props.itemSize;
  return isLoading ? /*#__PURE__*/React.createElement(Spinner, {
    center: true,
    large: true
  }) : suggestions.length > 0 ? /*#__PURE__*/React.createElement(List, {
    height: suggestions.length * itemSize < height ? suggestions.length * itemSize : height,
    innerElementType: /*#__PURE__*/forwardRef(function (forwardProps, ref) {
      return /*#__PURE__*/React.createElement("ul", _extends({
        ref: ref,
        id: id,
        className: 'ffe-base-selector__suggestion-container-list',
        role: "listbox"
      }, forwardProps));
    }),
    itemCount: suggestions.length,
    itemSize: itemSize,
    itemData: {
      forwardProps: props,
      renderSuggestion: renderSuggestion,
      highlightedIndex: highlightedIndex,
      suggestions: suggestions
    },
    ref: props.refList,
    style: {
      overflow: false
    }
  }, Row) : /*#__PURE__*/React.createElement("ul", {
    className: "ffe-base-selector__suggestion-container-list",
    role: "listbox",
    id: id
  }, /*#__PURE__*/React.createElement("li", null, renderNoMatches()));
}
SuggestionList.propTypes = {
  suggestions: arrayOf(object).isRequired,
  highlightedIndex: number.isRequired,
  renderSuggestion: func.isRequired,
  renderNoMatches: func,
  id: string.isRequired,
  isLoading: bool,
  refList: object,
  height: number,
  itemSize: number
};
SuggestionList.defaultProps = {
  renderNoMatches: function renderNoMatches() {},
  isLoading: false,
  height: 300,
  itemSize: 55
};