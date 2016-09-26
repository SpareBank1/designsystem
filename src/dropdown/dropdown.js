import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ScrollArea from 'react-scrollbar/dist/no-css';
import SuggestionList from '../suggestion/suggestion-list';
import AccountSuggestionsEmpty from '../suggestion/account-suggestions-empty';
import { If, Else, Then } from 'nfe-if';
import DropdownStatusbar from './dropdownStatusbar';

class DropDown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {
    this.scrollHighlightedItemIntoView();
  }

  scrollHighlightedItemIntoView() {
    if (this._suggestionList !== null && this.props.highlightedItem > -1) {
      const selectedItem = this._suggestionList.getSelectedDOM();
      const itemRect = selectedItem.getBoundingClientRect();

      const frame = ReactDOM.findDOMNode(this._scrollarea);
      const frameRect = frame.getBoundingClientRect();

      if (this.state.naitiveScrollContainer) {
        const naitiveScrollContainer = this.state.naitiveScrollContainer;
        naitiveScrollContainer.scrollTop = 0;
      }
      if (itemRect.bottom > frameRect.bottom) {
        this.scrollTo(selectedItem.offsetTop + selectedItem.offsetHeight - frame.offsetHeight);
      } else if (itemRect.top < frameRect.top) {
        this.scrollTo(selectedItem.offsetTop);
      }
    }
  }

  scrollTo(offsetYAxis) {
    this._scrollarea.scrollArea.scrollYTo(offsetYAxis);
  }

  onScroll(evt) {
    // Need reference to the naitive scroll container (div) to reset the naitive scroll position
    this.setState({
      naitiveScrollContainer: evt.target
    });
  }

  render() {
    const verticalScrollBarStyle = () => ({
      background: '#676767',
      borderRadius: '4px',
      width: '5px',
    });

    const verticalContainerStyle = () => ({
      width: '6px',
      background: 'transparent',
      opacity: '1',
    });

    const scrollAreaStyle = () => ({maxHeight: '240px'});

    const assignTo = name => component => { this[name] = component; };

    return (
      <div className="nfe-account-selector__dropdown" onScroll={(evt) => this.onScroll(evt)}>
        <ScrollArea
          speed={ 0.8 }
          className="nfe-account-selector__scroll"
          contentClassName="content"
          horizontal={ false }
          style={scrollAreaStyle()}
          ref={ assignTo('_scrollarea') }
          verticalScrollbarStyle={verticalScrollBarStyle()}
          verticalContainerStyle={verticalContainerStyle()}
        >
          <If condition={ this.props.items.length }>
            <Then>
              <SuggestionList
                suggestions={ this.props.items }
                selectedSuggestions={this.props.selectedItems}
                highlightedItem={this.props.highlightedItem}
                ref={ assignTo('_suggestionList') }
                onSelect={this.props.onSelect}
                onKeyDown={ (evt) => this.props.onKeyDown(evt) }
                renderItemRow={this.props.renderItemRow}
              />
            </Then>
            <Else>
              <AccountSuggestionsEmpty value={ this.props.noMatches }/>
            </Else>
          </If>
        </ScrollArea>
        <If condition={this.props.multiSelect}>
          <DropdownStatusbar
            renderSelectionStatus={this.props.renderSelectionStatus}
            onDone={this.props.onMultiSelectDone}
            locale={this.props.locale}
          />
        </If>
      </div>
    );
  }
}

DropDown.propTypes = {
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

DropDown.defaultProps = {
  multiSelect: false,
  selectedItems: []
};

export default DropDown;

