import React, { Component, PropTypes } from 'react';
import Suggestion from './suggestion-item';

export default class SuggestionList extends Component {

  render() {
    const {
      suggestions,
      onSelect,
      highlightedIndex,
      renderSuggestion,
      renderNoMatches,
      refHighlightedSuggestion
    } = this.props;
    return (
      <ul
        className='container-suggestion-list'
        role='listbox'
      >
        { suggestions.length > 0 ?
          suggestions.map((item, index) => {
            const isHighlighted = index === highlightedIndex;
            return <Suggestion
              key={index}
              item={item}
              isHighlighted={isHighlighted}
              refHighlightedSuggestion={refHighlightedSuggestion}
              render={renderSuggestion}
              onSelect={onSelect}
            />
          }) :
          <li>{renderNoMatches()}</li>
        }
      </ul>
    );
  }
}

SuggestionList.propTypes = {
  suggestions: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  highlightedIndex: PropTypes.number.isRequired,
  refHighlightedSuggestion: PropTypes.func.isRequired,
  renderNoMatches: PropTypes.func,
};

SuggestionList.defaultProps = {
  renderNoMatches: ()=> {}
};
