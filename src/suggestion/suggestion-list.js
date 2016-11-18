import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class SuggestionList extends Component {

  getSelectedDOM() {
    return ReactDOM.findDOMNode(this._selectedElement);
  }

  isItemSelected(item) {
    if (this.props.selectedSuggestions.length > 0) {
      return this.props.selectedSuggestions.findIndex(obj => item.id === obj.id) > -1;
    }
  }

  itemClassNames(highlighted) {
    return classNames('nfe-account-suggestions__item', {'nfe-account-suggestions__item--highlighted': highlighted});
  }

  render() {

    const {
      suggestions,
      onSelect,
      highlightedItem,
      onKeyDown
      } = this.props;

    const refIfIshighlightedItemIndex = index => component => {
      if (highlightedItem === index) {
        this._selectedElement = component;
        if (this._selectedElement) {
          this._selectedElement.focus();
        }
      }
    };

    return (
      <ul className="nfe-account-suggestions" role="listbox">
        {suggestions.map((item, index) => (
          <li
            className={this.itemClassNames(highlightedItem === index)}
            key={ item.id }
            onKeyDown={(evt) => onKeyDown(evt)}
            ref={refIfIshighlightedItemIndex(index)}
            onMouseDown={() => onSelect(item)}
            tabIndex={highlightedItem === index ? 0 : -1}
          >
            <div role="option">
              { this.props.renderItemRow(item, this.isItemSelected(item)) }
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

SuggestionList.propTypes = {
  suggestions: PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired
  })).isRequired,
  selectedSuggestions: PropTypes.array,
  onSelect: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  highlightedItem: PropTypes.number,
  renderItemRow: PropTypes.func.isRequired
};

SuggestionList.defaultProps = {
  selectedSuggestions: () => []
};
