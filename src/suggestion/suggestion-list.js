import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class SuggestionList extends Component {

  getSelectedDOM() {
    return ReactDOM.findDOMNode(this._selectedElement);
  }

  render() {
    const itemClassNames = (highlighted) => {
      return classNames('nfe-account-suggestions__item', {'nfe-account-suggestions__item--highlighted': highlighted});
    };

    const {
      suggestions,
      onSelect,
      highlightedItem,
      selectedSuggestions,
      onKeyDown
      } = this.props;

    const renderRow = (item) => {
      let isSelected = false;
      if (selectedSuggestions.length > 0) {
        isSelected = selectedSuggestions.findIndex(obj => item.id === obj.id) > -1;
      }
      const opts = {
        item,
        selected: isSelected
      };
      return this.props.renderItemRow(opts);
    };

    const refIfIshighlightedItemIndex = index => component => {
      if (highlightedItem === index) {
        this._selectedElement = component;
        if (this._selectedElement) {
          this._selectedElement.focus();
        }
      }
    };

    const onSelectHandler = (item) => {
      onSelect(item.id);
    };

    const onKeyDownHandle = (evt) => {
      onKeyDown(evt);
    };

    return (
      <ul className="nfe-account-suggestions" role="listbox">
        {suggestions.map((item, index) => (
          <li
            className={itemClassNames(highlightedItem === index)}
            key={ item.id }
            onKeyDown={onKeyDownHandle}
            ref={refIfIshighlightedItemIndex(index)}
            onMouseDown={() => onSelectHandler(item)}
            tabIndex={highlightedItem === index ? 0 : -1}
          >
            <div role="option">
              {renderRow(item)}
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

SuggestionList.propTypes = {
  suggestions: PropTypes.array,
  selectedSuggestions: PropTypes.array,
  onSelect: PropTypes.func,
  onKeyDown: PropTypes.func,
  highlightedItem: PropTypes.number,
  renderItemRow: PropTypes.func.isRequired
};

SuggestionList.defaultValues = {
  suggestions: [],
  onSelect: () => {},
  selectedSuggestions: []
};
