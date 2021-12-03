function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../../../../../pkg/react.js';
import { func, arrayOf, number, string, object, bool } from '../../../../../../pkg/prop-types.js';
import Spinner from '../../../../ffe-spinner-react/es/index.js';
import SuggestionItem from './SuggestionItem.js';
export default function SuggestionList(props) {
  var suggestions = props.suggestions,
      highlightedIndex = props.highlightedIndex,
      renderSuggestion = props.renderSuggestion,
      renderNoMatches = props.renderNoMatches,
      id = props.id,
      isLoading = props.isLoading;
  return isLoading ? /*#__PURE__*/React.createElement(Spinner, {
    center: true,
    large: true
  }) : /*#__PURE__*/React.createElement("ul", {
    className: "ffe-base-selector__suggestion-container-list",
    role: "listbox",
    id: id
  }, suggestions.length > 0 ? suggestions.map(function (item, index) {
    return /*#__PURE__*/React.createElement(SuggestionItem, _extends({}, props, {
      key: index,
      item: item,
      id: "suggestion-item-".concat(index),
      isHighlighted: index === highlightedIndex,
      render: renderSuggestion
    }));
  }) : /*#__PURE__*/React.createElement("li", null, renderNoMatches()));
}
SuggestionList.propTypes = {
  suggestions: arrayOf(object).isRequired,
  highlightedIndex: number.isRequired,
  renderSuggestion: func.isRequired,
  renderNoMatches: func,
  id: string.isRequired,
  isLoading: bool
};
SuggestionList.defaultProps = {
  renderNoMatches: function renderNoMatches() {},
  isLoading: false
};