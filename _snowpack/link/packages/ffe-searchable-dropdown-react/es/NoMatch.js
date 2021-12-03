import React from '../../../../pkg/react.js';
import { arrayOf, object, shape, string } from '../../../../pkg/prop-types.js';
import { Paragraph } from '../../ffe-core-react/es/index.js';
import { getNotMatchText } from './translations.js';

var NoMatch = function NoMatch(_ref) {
  var noMatch = _ref.noMatch,
      noMatchMessageId = _ref.noMatchMessageId,
      listToRender = _ref.listToRender;
  return /*#__PURE__*/React.createElement("div", null, noMatch.text ? /*#__PURE__*/React.createElement("div", {
    className: "ffe-searchable-dropdown__no-match"
  }, /*#__PURE__*/React.createElement(Paragraph, {
    id: noMatchMessageId
  }, noMatch.text)) : listToRender.length === 0 && /*#__PURE__*/React.createElement(Paragraph, {
    id: noMatchMessageId,
    className: "ffe-screenreader-only"
  }, getNotMatchText()));
};

NoMatch.propTypes = {
  noMatch: shape({
    text: string,
    dropdownList: arrayOf(object)
  }),
  noMatchMessageId: string,
  listToRender: arrayOf(object).isRequired
};
export default NoMatch;