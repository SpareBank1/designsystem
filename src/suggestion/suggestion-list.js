import React from 'react';
import PropTypes from 'prop-types';
import Suggestion from './suggestion-item';

export default function SuggestionList(props) {
  const {
    suggestions,
    highlightedIndex,
    renderSuggestion,
    renderNoMatches,
    id,
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
  suggestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  highlightedIndex: PropTypes.number.isRequired,
  renderSuggestion: PropTypes.func.isRequired,
  renderNoMatches: PropTypes.func,
  id: PropTypes.string.isRequired
};

SuggestionList.defaultProps = {
  renderNoMatches: () => {}
};
