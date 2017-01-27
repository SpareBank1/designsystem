import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Suggestion from './suggestion-item';

export default class SuggestionList extends Component {

  render() {
    const {
      suggestions,
      onSelect,
      highlightedIndex,
      renderSuggestion,
      renderNoMatches,
      onKeyDown
    } = this.props;
    return (
      <ul className='suggestion-list' role='listbox' onKeyPress={onKeyDown}>
        { suggestions.length > 0 ?
          suggestions.map((item, index) => (
            <Suggestion
              key={index}
              item={item}
              isHighlighted={index === highlightedIndex}
              render={renderSuggestion}
              onSelect={onSelect}
            />
          )) :
          <li>{renderNoMatches()}</li>
        }
      </ul>
    );
  }
}

SuggestionList.propTypes = {
  suggestions: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  renderNoMatches: PropTypes.func,
  highlightedIndex: PropTypes.number,
};

SuggestionList.defaultProps = {
  renderNoMatches: ()=> {}
};
