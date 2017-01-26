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
      renderNoSuggestion,
      onKeyDown
    } = this.props;
    return (
      <ul className='nfe-account-suggestions' role='listbox' onKeyPress={onKeyDown} tabIndex={0}>
        { suggestions.length > 0 ?
          suggestions.map((item, index) => {
            return <Suggestion
              key={index}
              item={item}
              isHighlighted={index === highlightedIndex}
              render={renderSuggestion}
              onSelect={onSelect}
            />
          }) :
          <li>{renderNoSuggestion()}</li>
        }
      </ul>
    );
  }
}

SuggestionList.propTypes = {
  suggestions: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  renderSuggestion: PropTypes.func.isRequired,
  renderNoSuggestion: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  highlightedIndex: PropTypes.number,
};
