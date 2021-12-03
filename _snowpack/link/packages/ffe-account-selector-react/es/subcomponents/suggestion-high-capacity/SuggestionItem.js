import { bool, func, object, string } from '../../../../../../pkg/prop-types.js';
import React from '../../../../../../pkg/react.js';

function SuggestionItem(props) {
  var item = props.item,
      id = props.id,
      isHighlighted = props.isHighlighted,
      render = props.render,
      onSelect = props.onSelect,
      refHighlightedSuggestion = props.refHighlightedSuggestion,
      style = props.style;
  return /*#__PURE__*/React.createElement("li", {
    ref: function ref(itemRef) {
      if (itemRef && isHighlighted) {
        refHighlightedSuggestion(itemRef);
      }
    },
    role: "option",
    "aria-selected": isHighlighted,
    id: id,
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
      onSelect(item);
    },
    tabIndex: -1,
    style: style
  }, render(item));
}

SuggestionItem.propTypes = {
  item: object.isRequired,
  id: string.isRequired,
  isHighlighted: bool.isRequired,
  render: func.isRequired,
  onSelect: func.isRequired,
  refHighlightedSuggestion: func.isRequired,
  style: object
};
export default SuggestionItem;