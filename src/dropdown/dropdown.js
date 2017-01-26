import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ScrollArea from 'react-scrollbar/dist/no-css';
import SuggestionList from '../suggestion/suggestion-list';
// import AccountSuggestionsEmpty from '../suggestion/account-suggestions-empty';
import { If } from 'nfe-if';
import DropdownStatusBar from './dropdownStatusBar';
import i18n from '../i18n/i18n';

class Dropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {
    if (this._suggestionList !== null && this.props.highlightedItem > -1) {
      this.resetNativeScrollPosition();
      this.scrollHighlightedItemIntoView();
    }
  }

  verticalScrollBarStyle() {
    return {
      background: '#676767',
      borderRadius: '4px',
      width: '5px'
    };
  }

  verticalContainerStyle() {
    return {
      width: '6px',
      background: 'transparent',
      opacity: '1'
    };
  }

  scrollAreaStyle() {
    return {maxHeight: '240px'};
  }

  resetNativeScrollPosition() {
    if (this.state.nativeScrollContainer) {
      const nativeScrollContainer = this.state.nativeScrollContainer;
      nativeScrollContainer.scrollTop = 0;
      this.ignoreScrollEvents = true;
    }
  }

  scrollHighlightedItemIntoView() {
    const selectedItem = this._suggestionList.getSelectedDOM();
    const itemRect = selectedItem.getBoundingClientRect();

    const scrollContainer = ReactDOM.findDOMNode(this._scrollarea);
    const scrollContainerRect = scrollContainer.getBoundingClientRect();

    if (itemRect.bottom > scrollContainerRect.bottom) {
      this.scrollTo(selectedItem.offsetTop + selectedItem.offsetHeight - scrollContainer.offsetHeight);
    } else if (itemRect.top < scrollContainerRect.top) {
      this.scrollTo(selectedItem.offsetTop);
    }
  }

  scrollTo(offsetYAxis) {
    this._scrollarea.scrollArea.scrollYTo(offsetYAxis);
  }

  onScroll(evt) {
    if (!this.ignoreScrollEvents) {
      // Need reference to the native scroll container (div) to reset the native scroll position
      this.setState({
        nativeScrollContainer: evt.target
      });
    }
    this.ignoreScrollEvents = false;
  }

  render() {
    const {
      items: suggestions,
      selectedItems: selectedSuggestions,
      highlightedItem,
      onSelect,
      onKeyDown,
      renderItemRow
      } = this.props;
    return (
      <div className="nfe-account-selector__dropdown" onScroll={(evt) => this.onScroll(evt)}>
        <ScrollArea
          speed={ 0.8 }
          className="nfe-account-selector__scroll"
          contentClassName="content"
          horizontal={ false }
          style={ this.scrollAreaStyle() }
          ref={ (el) => {this._scrollarea = el;} }
          verticalScrollbarStyle={ this.verticalScrollBarStyle() }
          verticalContainerStyle={ this.verticalContainerStyle() }
        >
          {this.props.items.length ? (
            <SuggestionList {...{
              suggestions,
              selectedSuggestions,
              highlightedItem,
              onSelect,
              onKeyDown,
              renderItemRow }}
              ref={ (el) => {this._suggestionList = el;}
            }/>)
            : <AccountSuggestionsEmpty value={ this.props.noMatches }/>
          }
        </ScrollArea>
        <If condition={this.props.multiSelect}>
          <DropdownStatusBar
            renderSelectionStatus={this.props.renderSelectionStatus}
            onDone={this.props.onMultiSelectDone}
            labelDoneButton={i18n[this.props.locale].DROPDOWN_MULTISELECT_DONE}
          />
        </If>
      </div>
    );
  }
}

Dropdown.propTypes = {
  items: PropTypes.array.isRequired,
  selectedItems: PropTypes.array,
  highlightedItem: PropTypes.number,
  multiSelect: PropTypes.bool,
  locale: PropTypes.oneOf(["nb", "nn", "en"]),
  noMatches: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onSelectEmptySuggestion: PropTypes.func,
  renderItemRow: PropTypes.func.isRequired,
  onMultiSelectDone: PropTypes.func.isRequired,
  renderSelectionStatus: PropTypes.func
};

Dropdown.defaultProps = {
  multiSelect: false,
  selectedItems: []
};

export default Dropdown;

