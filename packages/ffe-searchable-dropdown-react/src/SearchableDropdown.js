import React, { useMemo } from 'react';
import {
    arrayOf,
    bool,
    func,
    number,
    object,
    oneOf,
    oneOfType,
    shape,
    string,
} from 'prop-types';
import classNames from 'classnames';
import { useCombobox } from 'downshift';
import isEqual from 'lodash.isequal';

import { ChevronIkon, KryssIkon } from '@sb1/ffe-icons-react';
import { Paragraph } from '@sb1/ffe-core-react';
import Scrollbars from 'react-custom-scrollbars';

import filterDropdownList from './filterDropdownList';
import ListItemContainer from './ListItemContainer';
import ListItemBody from './ListItemBody';
import {
    getButtonLabelClear,
    getButtonLabelClose,
    getButtonLabelOpen,
    locales,
} from './translations';

const SearchableDropdown = ({
    id,
    labelId,
    className,
    dropdownList,
    dropdownAttributes,
    searchAttributes,
    maxRenderedDropdownElements = Number.MAX_SAFE_INTEGER,
    initialValue,
    onChange = Function.prototype,
    inputProps = {},
    listElementBody: CustomListItemBody,
    noMatch = {},
    dark,
    locale,
    'aria-invalid': ariaInvalid,
}) => {
    const initialSelectedItem = useMemo(
        () => dropdownList.find(item => isEqual(initialValue, item)),
        [dropdownList, initialValue],
    );
    const ListItemBodyElement = CustomListItemBody || ListItemBody;

    const {
        isOpen,
        getToggleButtonProps,
        getMenuProps,
        getInputProps,
        getComboboxProps,
        highlightedIndex,
        getItemProps,
        inputValue,
        selectedItem,
        reset,
        openMenu,
    } = useCombobox({
        items: dropdownList,
        itemToString: item => item[searchAttributes[0]],
        labelId,
        initialSelectedItem,
        onSelectedItemChange: ({ selectedItem: _selectedItem }) =>
            onChange(_selectedItem),
    });

    const trimmedInput = inputValue.trim();

    const shouldFilter =
        trimmedInput.length > 0 && trimmedInput !== selectedItem;
    const dropdownListFiltered = shouldFilter
        ? filterDropdownList(
              dropdownList,
              searchAttributes,
              trimmedInput,
          ).slice(0, maxRenderedDropdownElements)
        : dropdownList.slice(0, maxRenderedDropdownElements);

    const listToRender = dropdownListFiltered.length
        ? dropdownListFiltered
        : noMatch.dropdownList || [];

    const {
        onFocus = Function.prototype,
        className: inputClassName,
        ...restInputProps
    } = inputProps;

    return (
        <>
            <div
                className={classNames(className, 'ffe-searchable-dropdown', {
                    'ffe-searchable-dropdown--dark': dark,
                })}
                {...getComboboxProps()}
            >
                <input
                    {...getInputProps({
                        id,
                        className: classNames(
                            'ffe-input-field',
                            inputClassName,
                            {
                                'ffe-input-field--dark': dark,
                            },
                        ),
                        ...restInputProps,
                    })}
                    aria-invalid={
                        typeof ariaInvalid === 'string'
                            ? ariaInvalid
                            : String(!!ariaInvalid)
                    }
                    onFocus={e => {
                        e.preventDefault();
                        onFocus(e);
                        if (!selectedItem) {
                            openMenu();
                        }
                    }}
                />
                {selectedItem ? (
                    <button
                        type="button"
                        aria-label={getButtonLabelClear(locale)}
                        className="ffe-searchable-dropdown__button ffe-searchable-dropdown__button--cross"
                        onClick={reset}
                    >
                        <KryssIkon aria-hidden="true" />
                    </button>
                ) : (
                    <button
                        {...getToggleButtonProps()}
                        aria-label={
                            isOpen
                                ? getButtonLabelClose(locale)
                                : getButtonLabelOpen(locale)
                        }
                        className={classNames(
                            'ffe-searchable-dropdown__button ffe-searchable-dropdown__button--arrow',
                            {
                                'ffe-searchable-dropdown__button--flip': isOpen,
                            },
                        )}
                    >
                        <ChevronIkon aria-hidden="true" />
                    </button>
                )}
            </div>
            <div
                className={classNames('ffe-searchable-dropdown__list', {
                    'ffe-searchable-dropdown__list--open': isOpen,
                })}
            >
                <Scrollbars autoHeight={true} autoHeightMax={300}>
                    <ul {...getMenuProps({})}>
                        {isOpen &&
                            listToRender.map((item, index) => {
                                return (
                                    <ListItemContainer
                                        {...getItemProps({ item, index })}
                                        key={item[dropdownAttributes[0]]}
                                        isHighlighted={
                                            index === highlightedIndex
                                        }
                                        item={item}
                                    >
                                        {props => {
                                            return (
                                                <ListItemBodyElement
                                                    {...props}
                                                    dropdownAttributes={
                                                        dropdownAttributes
                                                    }
                                                />
                                            );
                                        }}
                                    </ListItemContainer>
                                );
                            })}
                    </ul>
                </Scrollbars>
            </div>
            {!dropdownListFiltered.length && noMatch.text && isOpen && (
                <div
                    className={classNames('ffe-searchable-dropdown__list', {
                        'ffe-searchable-dropdown__list--open': isOpen,
                    })}
                >
                    <div className="ffe-searchable-dropdown__no-match">
                        <Paragraph>{noMatch.text}</Paragraph>
                    </div>
                </div>
            )}
        </>
    );
};

SearchableDropdown.propTypes = {
    /** Id of drop down */
    id: string.isRequired,

    /** Id of label */
    labelId: string.isRequired,

    /** Extra class */
    className: string,

    /** List of objects to be displayed in dropdown */
    dropdownList: arrayOf(object).isRequired,

    /** Array of attributes to be displayed in list */
    dropdownAttributes: arrayOf(string).isRequired,

    /** Array of attributes used when filtering search */
    searchAttributes: arrayOf(string).isRequired,

    /** Props used on input field */
    inputProps: shape({
        onFocus: func,
    }),

    /** One of the elements from dropdownList to be used as default value */
    initialValue: object,

    /** Limits number of rendered dropdown elements */
    maxRenderedDropdownElements: number,

    /** Called when a value is selected */
    onChange: func,

    /** Dark variant */
    dark: bool,

    /** Custom element to use for each item in dropDownList */
    listElementBody: func,

    /** Message and a dropdownList to use when no match */
    noMatch: shape({
        text: string.isRequired,
        dropdownList: arrayOf(object),
    }),

    /** Locale to use for translations */
    locale: oneOf(Object.values(locales)),

    /** aria-invalid attribute  */
    'aria-invalid': oneOfType([string, bool]),
};

export default SearchableDropdown;
