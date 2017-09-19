import React from 'react';
import { func, arrayOf, number, string, object } from 'prop-types';
import Suggestion from './suggestion-item';

export default function SuggestionList(props) {
  const {
    suggestions,
    highlightedIndex,
    renderSuggestion,
    renderNoMatches,
    id
  } = props;
  return (
    <ul
      className='ffe-base-selector__suggestion-container-list'
      role='listbox'
      id={id}
    >
      { suggestions.length > 0 ?
        suggestions.map((item, index) => {
          return (
            <Suggestion
              {...props}
              key={index}
              item={item}
              id={`suggestion-item-${index}`}
              isHighlighted={index === highlightedIndex}
              render={renderSuggestion}
            />);
        }) :
        <li>{renderNoMatches()}</li>
      }
    </ul>
  );
}

SuggestionList.propTypes = {
  suggestions: arrayOf(object).isRequired,
  highlightedIndex: number.isRequired,
  renderSuggestion: func.isRequired,
  renderNoMatches: func,
  id: string.isRequired
};

SuggestionList.defaultProps = {
  renderNoMatches: () => {}
};
