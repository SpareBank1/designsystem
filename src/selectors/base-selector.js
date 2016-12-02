import React, {PropTypes, Component} from 'react';
import classNames from 'classnames';
import ChevronIkon from 'ffe-icons-react/chevron-ikon';
import i18n from '../i18n/i18n';
import KryssIkon from 'ffe-icons-react/kryss-ikon';

import Dropdown from '../dropdown/dropdown';
import KeyCode from '../util/keyCode';

class BaseSelector extends Component {

  constructor(props) {
    super(props);
    this.state = this.getDefaultState();
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onInputTab = this.onInputTab.bind(this);
    this.onItemSelect = this.onItemSelect.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onMultiSelectDone = this.onMultiSelectDone.bind(this);
    this.placeholderText = this.placeholderText.bind(this);
    this.globalClickHandler = this.globalClickHandler.bind(this);
  }

  getDefaultState() {
    const multiSelect = this.props.multiSelect;
    const selectedItems = this.props.selectedItems || [];
    const showItemSuggestions = false;
    let inputValue = this.props.value;
    if (!multiSelect && selectedItems.length > 0) {
      inputValue = selectedItems[0].name;
    }
    const highlightedItem = -1;
    const filteredItems = this.filterItems(this.props.items, inputValue);
    return {
      selectedItems,
      multiSelect,
      showItemSuggestions,
      highlightedItem,
      filteredItems,
      inputValue
    };
  }

  getBlankState() {
    const {items, multiSelect} = this.props;
    return {
      showItemSuggestions: false,
      selectedItems: multiSelect ? this.state.selectedItems : [],
      highlightedItem: -1,
      inputValue: '',
      filteredItems: this.filterItems(items, ''),
    };
  }

  componentWillReceiveProps(props) {
    const {inputValue} = this.state;
    this.setState({
      filteredItems: this.filterItems(props.items, inputValue),
      selectedItems: props.selectedItems
    });
  }

  onReset(evt) {
    evt.preventDefault();
    this._inputField.focus();
    this.reset();
  }

  reset(setFocus = true ) {
    const {onChange, onItemSelected} = this.props;
    const nextState = {
      ...this.getBlankState(),
      showItemSuggestions: true,
    };

    if (!setFocus) {
      nextState.showItemSuggestions = false;
    }

    const hadSelectedItems = this.state.selectedItems.length > 0;
    this.setState(nextState, () => {
      onChange(this.state.inputValue);
      if (hadSelectedItems) {
        onItemSelected(null);
      }
    });
  }

  onItemSelectedFromDropdown(selectedItem) {
    for (let i = 0; i < this.state.filteredItems.length; i++) {
      if (this.state.filteredItems[i].id === selectedItem.id) {
        this.onItemSelect(i);
      }
    }
  }

  addGlobalEventListeners() {
    window.addEventListener('click', this.globalClickHandler, true);
  }

  removeGlobalEventListeners() {
    window.removeEventListener('click', this.globalClickHandler);
  }

  globalClickHandler(evt) {
    if ((this.state.showItemSuggestions && !this._root.contains(evt.target))) {
      this.setState({
        showItemSuggestions: false,
      });
      this.removeGlobalEventListeners();
      this.onBlur();
    }
  }

  placeholderText() {
    if (this.props.renderMultiselectStatus && this.state.selectedItems.length > 0) {
      return this.props.renderMultiselectStatus(this.state.selectedItems);
    }
    return this.props.placeholder;
  }

  filterItems(items, query) {
    return items.filter(this.props.filter(query));
  }

  closeDropdown() {
    this.setState({
      showItemSuggestions: false
    });
  }

  openDropdown() {
    this.setState({
      showItemSuggestions: true
    });
  }

  onKeyDown(evt, originateFromDropdown = false) {
    const altKey = evt.altKey;
    switch (evt.which) {
      case KeyCode.DOWN:
        if (altKey) {
          this.openDropdown();
        } else {
          this.highlightNextItem();
        }
        evt.preventDefault();
        break;
      case KeyCode.UP:
        if (altKey) {
          this.closeDropdown();
        } else {
          this.highlightPrevItem();
        }
        evt.preventDefault();
        break;
      case KeyCode.HOME:
        this.highlightFirstItem();
        break;
      case KeyCode.END:
        this.highlightLastItem();
        break;
      case KeyCode.ESC:
        if (originateFromDropdown) {
          this.onDropdownEscape();
        } else {
          this.reset();
        }
        break;
      case KeyCode.ENTER:
        if (originateFromDropdown) {
          evt.preventDefault();
          this.onItemSelect(this.state.highlightedItem);
        }
        break;
      case KeyCode.TAB:
        this.onInputTab(evt);
        break;
      default:
        return;
    }
  }

  onDropdownEscape() {
    this._inputField.focus();
    const inputValue = this.state.inputValue;
    const selectedItems = [this.state.filteredItems[this.state.highlightedItem]];
    this.reset();
    this.setState({
      inputValue,
      selectedItems,
      showItemSuggestions: false
    }, () => {
      if (!this.state.multiSelect) {
        this.props.onItemSelected(selectedItems[0]);
      }
    });
  }

  highlightNextItem() {
    const {filteredItems} = this.state;
    let nextItemIndex = this.state.highlightedItem + 1;
    if (nextItemIndex === filteredItems.length) {
      nextItemIndex = 0;
    }
    this.highlightItem(nextItemIndex);
  }

  highlightPrevItem() {
    const {filteredItems} = this.state;
    let prevItemIndex = this.state.highlightedItem - 1;
    if (prevItemIndex < 0) {
      prevItemIndex = filteredItems.length - 1;
    }
    this.highlightItem(prevItemIndex);
  }

  highlightFirstItem() {
    const {filteredItems} = this.state;
    if (filteredItems.length > 0) {
      this.highlightItem(0);
    }
  }

  highlightLastItem() {
    const {filteredItems} = this.state;
    if (filteredItems.length > 0) {
      this.highlightItem(filteredItems.length - 1);
    }
  }

  highlightItem(itemIndex) {
    const item = this.state.filteredItems[itemIndex];
    if (item && this.state.showItemSuggestions) {
      const nextState = {
        highlightedItem: itemIndex
      };
      if (!this.state.multiSelect) {
        nextState.inputValue = item.name;
      }
      this.setState(nextState, () => {
        this.props.onChange(this.state.inputValue);
      });
    }
  }

  onInputFocus() {
    const {onFocus} = this.props;
    const {inputValue} = this.state;
    const nextState = {
      showItemSuggestions: true,
      filteredItems: this.filterItems(this.props.items, inputValue)
    };
    this.setState(nextState, onFocus);
    this.addGlobalEventListeners();
  }

  onInputTab(evt) {
    if (!this.state.multiSelect || evt.shiftKey) {
      this.setState({
        showItemSuggestions: false,
        highlightedItem: -1,
        selectedItems: this.state.highlightedItem > -1 ? [this.state.filteredItems[this.state.highlightedItem]] : this.state.selectedItems,
      }, () => {
        if (this.state.selectedItems.length > 0) {
          this.props.onItemSelected(this.state.selectedItems[0]);
        }
        this.onBlur();
      });
    }
  }

  onBlur() {
    this.props.onBlur(this.state.selectedItems, this.state.inputValue);
  }

  handleItemSelectSingle(item) {
    this._inputField.focus();
    this.setState({
      inputValue: item.name,
      selectedItems: [item],
      showItemSuggestions: false,
      filteredItems: [item],
      highlightedItem: -1
    });
    this.props.onItemSelected(item);
  }

  handleItemSelectMulti(item) {
    const {selectedItems} = this.state;
    let indexInSelectedItems = -1;
    for (let i = 0; i< selectedItems.length; i++) {
      if (selectedItems[i].id === item.id) {
        indexInSelectedItems = i;
        break;
      }
    }
    if (indexInSelectedItems === -1) {
      selectedItems.push(item);
    } else {
      selectedItems.splice(indexInSelectedItems, 1);
    }
    this.setState({
      selectedItems,
      showItemSuggestions: true
    });
    this.props.onItemSelected(selectedItems);
  }

  onItemSelect(index) {
    const item = this.state.filteredItems[index];
    if (this.state.multiSelect) {
      this.handleItemSelectMulti(item);
    } else {
      this.handleItemSelectSingle(item);
    }
  }

  onInputChange(evt) {
    const searchQuery = evt.target.value;
    const {items, onChange, multiSelect, onItemSelected} = this.props;
    const filteredItems = this.filterItems(items, searchQuery);
    const hasSelectedItems = this.state.selectedItems.length > 0;
    const nextState = {
      inputValue: searchQuery,
      filteredItems,
      showItemSuggestions: true
    };
    if (!multiSelect) {
      nextState.selectedItems = [];
    }
    this.setState(nextState, () => {
      onChange(searchQuery);
      if (hasSelectedItems && !multiSelect) {
        onItemSelected(null);
      }
    });
  }

  onMultiSelectDone() {
    this._inputField.focus();
    window.setTimeout(() => {
      this.setState({
        showItemSuggestions: false,
        inputValue: '',
        filteredItems: this.filterItems(this.props.items, ''),
        highlightedItem: -1,
      }, () => this.props.onMultiSelectDone(this.state.selectedItems));
    },0);
  }

  render() {
    const assignTo = name => component => { this[name] = component; };

    const inputClassName = () => {
      return classNames('ffe-input-field nfe-account-selector__search',
        {'nfe-account-selector__search--open': this.state.showItemSuggestions}
      );
    };

    const dropdownIconClassName = () => {
      return classNames('nfe-account-selector__dropdown-icon',
        {'nfe-account-selector__dropdown-icon--reverse': this.state.showItemSuggestions}
      );
    };

    return (
      <div
        className="nfe-account-selector"
        role="combobox"
        aria-expanded={ this.state.showItemSuggestions }
        ref={assignTo('_root')}
      >
        <input
          onFocus={ () => this.onInputFocus() }
          className={ inputClassName() }
          onKeyDown={ this.onKeyDown }
          ref={ assignTo('_inputField') }
          autoComplete="off"
          onChange={ this.onInputChange }
          value={ this.state.inputValue }
          id={ this.props.inputId }
          placeholder={ this.placeholderText() }
          aria-invalid={ this.props.ariaInvalid }
          aria-autocomplete="list"
        />
        { this.state.inputValue && this.state.inputValue.length > 0 &&
          <button
            aria-label={ i18n[this.props.locale].RESET_SEARCH }
            className="nfe-account-selector__reset-button"
            onMouseDown={ (evt) => this.onReset(evt) }
            tabIndex="-1"
          >
            <KryssIkon className="nfe-account-selector__reset-icon"/>
          </button>
        }
        <div onClick={() => this._inputField.focus()} className={dropdownIconClassName()} >
          <ChevronIkon focusable={ false }/>
        </div>
        {this.props.renderDetails(this.state.selectedItems)}
        {this.state.showItemSuggestions && (this.state.filteredItems.length || this.props.noMatches) ?
          <Dropdown
            items={this.state.filteredItems}
            selectedItems={this.state.selectedItems}
            highlightedItem={this.state.highlightedItem}
            locale={this.props.locale}
            noMatches={this.props.noMatches}
            onSelect={ (item) => this.onItemSelectedFromDropdown(item) }
            onKeyDown={(evt) => this.onKeyDown(evt, true)}
            renderItemRow={this.props.renderItemRow}
            multiSelect={this.state.multiSelect}
            onMultiSelectDone={this.onMultiSelectDone}
            renderSelectionStatus={() => this.props.renderMultiselectStatus(this.state.selectedItems)}
          /> : null
        }
      </div>
    );
  }
}

BaseSelector.propTypes = {
  items: PropTypes.array.isRequired,
  renderItemRow: PropTypes.func.isRequired,
  onItemSelected: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  renderMultiselectStatus: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  inputId: PropTypes.string,
  locale: PropTypes.oneOf(["nb", "nn", "en"]),
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
  ariaInvalid: PropTypes.bool,
  noMatches: PropTypes.string,
  multiSelect: PropTypes.bool,
  selectedItems: PropTypes.array,
  onMultiSelectDone: PropTypes.func,
  renderDetails: PropTypes.func
};

BaseSelector.defaultProps = {
  multiSelect: false,
  getRowId: (row) => row.id,
  renderMultiselectStatus: () => {},
  renderDetails: () => {},
  onBlur: () => {}
};

export default BaseSelector;
