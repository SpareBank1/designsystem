function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from '../../../../pkg/react.js';
import { object, arrayOf, string, bool } from '../../../../pkg/prop-types.js';
import classnames from '../../../../pkg/classnames.js';
import { MicroText } from '../../ffe-core-react/es/index.js';

var ListItemBody = function ListItemBody(_ref) {
  var item = _ref.item,
      dropdownAttributes = _ref.dropdownAttributes,
      isHighlighted = _ref.isHighlighted;

  var _dropdownAttributes = _toArray(dropdownAttributes),
      titleAttribute = _dropdownAttributes[0],
      restAttributes = _dropdownAttributes.slice(1);

  var title = item[titleAttribute];
  var rest = restAttributes.map(function (attribute) {
    return /*#__PURE__*/React.createElement(MicroText, {
      key: attribute
    }, item[attribute]);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: classnames('ffe-searchable-dropdown__list-item-body', {
      'ffe-searchable-dropdown__list-item-body--highlighted': isHighlighted
    })
  }, title, !!rest.length && /*#__PURE__*/React.createElement("div", {
    className: "ffe-searchable-dropdown__list-item-body-details"
  }, rest));
};

ListItemBody.propTypes = {
  item: object.isRequired,
  dropdownAttributes: arrayOf(string).isRequired,
  isHighlighted: bool.isRequired
};
export default ListItemBody;