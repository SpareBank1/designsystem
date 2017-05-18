import React, { Component } from 'react';
import { object, bool, func, string} from 'prop-types';
import classNames from 'classnames';

class SuggestionItem extends Component {
  render() {
    const { item, id, isHighlighted, render, onSelect, refHighlightedSuggestion } = this.props;
    return (
      <li
        ref={(itemRef) => {
          if (itemRef && isHighlighted) {
            refHighlightedSuggestion(itemRef);
          }
        }}
        role='option'
        id={id}
        onMouseDown={(e) => {
          e.preventDefault();
          onSelect(item);
        }}
        className={classNames('ffe-account-suggestion', { 'ffe-account-suggestion--highlighted': isHighlighted })}
        tabIndex={-1}
      >
        {render(item)}
      </li>);
  }
}

SuggestionItem.propTypes = {
  item: object.isRequired,
  id: string.isRequired,
  isHighlighted: bool.isRequired,
  render: func.isRequired,
  onSelect: func.isRequired,
  refHighlightedSuggestion: func.isRequired,
};

export default SuggestionItem;
