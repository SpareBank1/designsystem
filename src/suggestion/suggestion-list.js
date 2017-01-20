import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Suggestion from './suggestion-item';

export default class SuggestionList extends Component {

  getSelectedDOM() {
    return ReactDOM.findDOMNode(this._selectedElement);
  }

  /*
  isItemSelected(item) {
    if (this.props.selectedSuggestions.length > 0) {
      for (let i = 0; i < this.props.selectedSuggestions.length; i++) {
        if (this.props.selectedSuggestions[i].id === item.id) {
          return true;
        }
      }
      return false;
    }
  }
  */

  /*
  itemClassNames(highlighted) {
    return classNames('nfe-account-suggestions__item', {'nfe-account-suggestions__item--highlighted': highlighted});
  }
  */

  render() {

    const {
      suggestions,
      onSelect,
      highlightedIndex,
      renderSuggestion
      } = this.props;
/*
    const refIfIshighlightedItemIndex = index => component => {
      if (highlightedItem === index) {
        this._selectedElement = component;
        if (this._selectedElement) {
          this._selectedElement.focus();
        }
      }
    };
    */

    return (
      <ul className="nfe-account-suggestions" role="listbox" onKeyPress={this.props.onKeyDown} tabIndex="0">
        {suggestions.map((item, index) => (
          <Suggestion
            key={index}
            item={item}
            isHighlighted={index === highlightedIndex}
            render={renderSuggestion}
            onSelect={onSelect}
          />
        ))}
      </ul>
    );
  }
}

SuggestionList.propTypes = {
  suggestions: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onSelect: PropTypes.func.isRequired,
  highlightedIndex: PropTypes.number,
  renderSuggestion: PropTypes.func.isRequired
};

SuggestionList.defaultProps = {

};
