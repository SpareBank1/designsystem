import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Suggestion from './suggestion-item';

export default class SuggestionList extends Component {

  render() {
    const {
      suggestions,
      onSelect,
      focusedIndex,
      renderSuggestion,
      renderNoMatches,
      onKeyDown
    } = this.props;
    return (
      <ul className='container-suggestion-list' role='listbox'>
        { suggestions.length > 0 ?
          suggestions.map((item, index) => (
            <Suggestion
              key={index}
              item={item}
              setFocus={index === focusedIndex}
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
  focusedIndex: PropTypes.number.isRequired,
  renderNoMatches: PropTypes.func,
};

SuggestionList.defaultProps = {
  renderNoMatches: ()=> {}
};
