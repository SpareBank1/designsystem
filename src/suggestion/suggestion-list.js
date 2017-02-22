import React, {PropTypes} from 'react';
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
      className='container-suggestion-list'
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
              id={`suggestion-option-${index}`}
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
  suggestions: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  highlightedIndex: PropTypes.number.isRequired,
  renderSuggestion: PropTypes.func.isRequired,
  renderNoMatches: PropTypes.func,
  id: PropTypes.string.isRequired
};

SuggestionList.defaultProps = {
  renderNoMatches: () => {}
};
