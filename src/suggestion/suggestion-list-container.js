import React, { PropTypes } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import SuggestionList from './suggestion-list';
import { KeyCodes } from '../util/types';

class SuggestionListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  nextFocusedIndex() {
    const {focusedIndex, suggestions} = this.props;
    return focusedIndex === suggestions.length - 1 ? 0 : focusedIndex + 1;
  }

  previousFocusedIndex() {
    const {focusedIndex, suggestions} = this.props;
    return focusedIndex === 0 ? suggestions.length - 1 : focusedIndex - 1;
  }

  onKeyDown(evt) {
    const {suggestions, onClose, onSelect, shouldSelectFocusedSuggestionOnTab, onChangeFocused, focusedIndex, onBlur} = this.props;
    switch (evt.which) {
      case KeyCodes.DOWN:
        evt.preventDefault();
        onChangeFocused(this.nextFocusedIndex());
        break;
      case KeyCodes.UP:
        evt.preventDefault();
        onChangeFocused(this.previousFocusedIndex());
        break;
      case KeyCodes.HOME:
        onChangeFocused(0);
        break;
      case KeyCodes.END:
        onChangeFocused(suggestions.length - 1);
        break;
      case KeyCodes.ESC:
        onClose();
        break;
      case KeyCodes.ENTER:
        onSelect(suggestions[focusedIndex]);
        break;
      case KeyCodes.TAB:
        if (evt.shiftKey) {
          evt.preventDefault();
          onSelect(suggestions[focusedIndex]);
          break;
        }
        if (shouldSelectFocusedSuggestionOnTab) {
          onSelect(suggestions[focusedIndex]);
          break;
        }
        onBlur();
    }
  }

  render() {
    const {heightMax} = this.props;
    return (
      <div className='container-suggestion'
           onKeyDown={this.onKeyDown}
      >
        <Scrollbars
          autoHeight={true}
          autoHeightMax={200}
        >
          <SuggestionList {...this.props}/>
        </Scrollbars>
      </div>
    );
  }
}

SuggestionListContainer.propTypes = {
  suggestions: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  onChangeFocused: PropTypes.func.isRequired,
  highlightedIndex: PropTypes.number.isRequired,
  onBlur: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  heightMax: PropTypes.number,
  shouldSelectFocusedSuggestionOnTab: PropTypes.bool,
};

SuggestionListContainer.defaultProps = {
  onClose: () => {},
  heightMax: 300
};

export default SuggestionListContainer;

