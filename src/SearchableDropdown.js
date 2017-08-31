import React, { Component } from 'react';
import { string, bool, array, func, arrayOf, object } from 'prop-types';
import classNames from 'classnames';
import Input from './InputField';
import ScrollContainer from './ScrollContainer';
import isRequiredIf from 'react-proptype-conditional-require';

class SearchableDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highlightedElementIndex: -1,
            searchTerm: '',
            showListContainer: false,
            scrollId: "SearchableDropDown",
        };

        this.filterList = this.filterList.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.setHighlightedIndex = this.setHighlightedIndex.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    onClick() {
        this.setState({showListContainer:true});
        if (this.props.isMobilbank) {
            this.props.scrollToTop(this.state.scrollId);
        }
    }

    onFocus() {
        this.setState({showListContainer:true});
        if (this.props.isMobilbank) {
            this.props.scrollToTop(this.state.scrollId);
        }
    }

    onBlur() {
        this.setState({showListContainer:false});
        if (this.props.onBlur) {
            this.props.onBlur();
        }
    }

    onReset() {
        this.setState ({
            searchTerm: '',
        });
        this.props.onReset();
    }

    onInputChange(event) {
        const searchTerm = event.target.value;
        this.setState({
            showListContainer:true,
            searchTerm: searchTerm,
            highlightedElementIndex: -1,
        });
        this.props.onInputChange(searchTerm);
    }

    filterList(searchTerm) {
        let updatedList;

        if (searchTerm) {
            const { searchAttributes } = this.props;
            const searchTermLowerCase = searchTerm.toLowerCase().trim();

            updatedList = this.props.dropdownList.filter(listItem => {
               return searchAttributes.find(attribute => listItem[attribute].toLowerCase().includes(searchTermLowerCase));
            });
        } else {
            updatedList = this.props.dropdownList;
        }
        return updatedList;
    }

    onSelect(value) {
        this.setState({
            showListContainer:false,
            searchTerm: '',
            highlightedElementIndex: -1,
        });
        this.props.onSelect(value);
    }

    onKeyDown(event) {
        const { highlightedElementIndex, searchTerm } = this.state;
        const filteredList = this.filterList(searchTerm);
        if (event.key === 'ArrowDown') {
            this.setState({showListContainer:true});
            this.setHighlightedIndex("DOWN", highlightedElementIndex, filteredList);
            event.preventDefault();
        }
        else if (event.key === 'ArrowUp') {
            this.setState({showListContainer:true});
            this.setHighlightedIndex("UP", highlightedElementIndex, filteredList);
        }
        else if (event.key === 'Enter') {
            if (highlightedElementIndex === -1) {
                if (filteredList.length === 1) {
                    this.onSelect(filteredList[0]);
                }
            }
            else {
                this.onSelect(filteredList[highlightedElementIndex]);
            }
        }
        else if (event.key === 'Escape') {
            this.onReset();
        }
    }

    setHighlightedIndex(direction, highlightedElementIndex, filteredList) {
        const filteredListLength = filteredList.length;
        if (this.scrollContainer) {
            if (direction === 'DOWN') {
                const nextHighlightedIndex = highlightedElementIndex === filteredListLength -1 ? 0 : highlightedElementIndex +1;
                this.setState({highlightedElementIndex: nextHighlightedIndex });

                if (highlightedElementIndex === -1) {return;}
                if (nextHighlightedIndex === 0) {
                    this.scrollContainer.setScrollPosStart();
                    return;
                }
                this.scrollContainer.setScrollPosNext();
            }

            if (direction === 'UP') {
                const nextHighlightedIndex = (highlightedElementIndex === 0 ||  highlightedElementIndex === -1) ?
                    filteredListLength -1 : highlightedElementIndex -1;
                this.setState({highlightedElementIndex: nextHighlightedIndex });

                if (nextHighlightedIndex === filteredListLength - 1) {
                    if (this.state.showListContainer === true) {
                        this.scrollContainer.setScrollPosEnd();
                    }
                    return;
                }
                this.scrollContainer.setScrollPosPrevious();
            }
        }
    }

    render() {
        const { dropdownAttributes, noMatch, placeholder, renderDropdownElement, label, errorMessage } = this.props;
        const { highlightedElementIndex, showListContainer, searchTerm } = this.state;
        const filteredList = this.filterList(searchTerm);

        return (
          <div className={ classNames(this.props.className) } id={this.state.scrollId}>
            {label?
              <label className="ffe-form-label ffe-form-label--block" htmlFor={ this.props.inputId }>
                  { label }
              </label>
              : null
            }
            <div className="ffe-searchable-dropdown">
                <Input
                    displayResetWhenInputHasValue = {this.props.displayResetWhenInputHasValue}
                    onBlur={this.onBlur}
                    onInputChange={this.onInputChange}
                    onClick={this.onClick}
                    onFocus={this.onFocus}
                    onKeyDown={this.onKeyDown}
                    placeholder={placeholder}
                    inputId={this.props.inputId}
                    inputValue={this.props.inputValue}
                    onReset={this.onReset}
                    searchTerm={this.state.searchTerm}
                    ariaInvalid={this.props.ariaInvalid}
                />
                {showListContainer &&
                    <ScrollContainer
                        ref={(scrollContainer) => {
                                this.scrollContainer = scrollContainer;
                        }}
                        dropdownAttributes={dropdownAttributes}
                        dropdownList={filteredList}
                        highlightedIndex={highlightedElementIndex}
                        noMatch={noMatch}
                        onSelect={this.onSelect}
                        renderDropdownElement={renderDropdownElement}
                    />
                }
              </div>
              {errorMessage &&
                <div className="ffe-field-error-message">
                    {errorMessage}
                </div>
              }
            </div>
        );
    }
}

SearchableDropdown.propTypes = {
    /** Display reset when input has value */
    displayResetWhenInputHasValue: bool,
    /** List of objects to be displayed in dropdown */
    dropdownList: arrayOf(object).isRequired,
    /** Array of up to 2 attributes to be displayed in list item else use custom option */
    dropdownAttributes: array,
    /** Initial selected value/value in input field  */
    initialInputValue: string,
    /** Label above dropdown */
    label: string,
    /** Id attribute on the input element */
    inputId: isRequiredIf(string, props => props.label),
    /** Value of input field */
    inputValue: string,
    /** value to be displayed in dropdown in case of search with no match */
    noMatch: string.isRequired,
    /** Function receives value of inputField and should update inputValue */
    onInputChange: func.isRequired,
    /** Function receives no input expects no return */
    onBlur: func,
    /** Function receives selected object, should update inputValue */
    onSelect: func.isRequired,
    /** Function gets no input, should update inputValue */
    onReset: func.isRequired,
    /** Placeholder for input field when empty */
    placeholder: string,
    /** If you want custom input element. Function is called with object from dropdownList */
    renderDropdownElement: func,
    /** Array of attributes used when filtering search */
    searchAttributes: array.isRequired,
    /**Aria invalid*/
    ariaInvalid: bool,
    /** css class for main div searchableDropdown */
    className: string,
    /** Error message */
    errorMessage: string,
    /** Adjust user view if mobilbank */
    isMobilbank: bool,
    /** Dictates behvaiour if mobilbank */
    scrollToTop: isRequiredIf(func, props => props.isMobilbank)
};

SearchableDropdown.defaultProps = {
    displayResetWhenInputHasValue: false,
    ariaInvalid: false,
};

export default SearchableDropdown;
