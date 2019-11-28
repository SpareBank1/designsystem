import React, { useMemo, useRef } from 'react';
import {
    string,
    arrayOf,
    shape,
    number,
    func,
    bool,
    object,
    oneOf,
    oneOfType,
} from 'prop-types';
import classNames from 'classnames';
import Downshift from 'downshift';
import { Scrollbars } from 'react-custom-scrollbars';
import isEqual from 'lodash.isequal';

import { KryssIkon, ChevronIkon } from '@sb1/ffe-icons-react';
import { Paragraph } from '@sb1/ffe-core-react';

import filterDropdownList from './filterDropdownList';
import ListItemContainer from './ListItemContainer';
import ListItemBody from './ListItemBody';
import {
    locales,
    getButtonLabelClear,
    getButtonLabelClose,
    getButtonLabelOpen,
} from './translations';
import findSelectedItem from './findSelectedItem';

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
    const inputEl = useRef(null);

    const initialSelectedItem = useMemo(
        () => dropdownList.find(item => isEqual(initialValue, item)),
        [dropdownList, initialValue],
    );

    const ListItemBodyElement = CustomListItemBody || ListItemBody;

    return (
        <Downshift
            inputId={id}
            labelId={labelId}
            initialSelectedItem={
                initialSelectedItem
                    ? initialSelectedItem[dropdownAttributes[0]]
                    : null
            }
            onChange={value =>
                onChange(
                    findSelectedItem(value, dropdownList, dropdownAttributes),
                )
            }
        >
            {({
                getInputProps,
                getItemProps,
                getMenuProps,
                isOpen,
                inputValue,
                highlightedIndex,
                selectedItem,
                openMenu,
                closeMenu,
                clearSelection,
            }) => {
                const dropdownListFiltered = filterDropdownList(
                    dropdownList,
                    searchAttributes,
                    inputValue,
                ).slice(0, maxRenderedDropdownElements);

                const listToRender = dropdownListFiltered.length
                    ? dropdownListFiltered
                    : noMatch.dropdownList || [];

                return (
                    <div
                        className={classNames(
                            className,
                            'ffe-searchable-dropdown',
                            {
                                'ffe-searchable-dropdown--dark': dark,
                            },
                        )}
                    >
                        <input
                            ref={inputEl}
                            {...getInputProps({
                                className: 'ffe-input-field',
                                ...inputProps,
                            })}
                            aria-invalid={
                                typeof ariaInvalid === 'string'
                                    ? ariaInvalid
                                    : String(ariaInvalid)
                            }
                        />
                        {selectedItem ? (
                            <button
                                type="button"
                                aria-label={getButtonLabelClear(locale)}
                                className="ffe-searchable-dropdown__button ffe-searchable-dropdown__button--cross"
                                onClick={clearSelection}
                            >
                                <KryssIkon />
                            </button>
                        ) : (
                            <button
                                type="button"
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
                                onClick={isOpen ? closeMenu : openMenu}
                            >
                                <ChevronIkon />
                            </button>
                        )}
                        <div
                            className={classNames(
                                'ffe-searchable-dropdown__list',
                                {
                                    'ffe-searchable-dropdown__list--open': isOpen,
                                },
                            )}
                        >
                            <Scrollbars
                                {...getMenuProps()}
                                autoHeight={true}
                                autoHeightMax={300}
                            >
                                {!dropdownListFiltered.length &&
                                    noMatch.text &&
                                    isOpen && (
                                        <div className="ffe-searchable-dropdown__no-match">
                                            <Paragraph>
                                                {noMatch.text}
                                            </Paragraph>
                                        </div>
                                    )}
                                {isOpen &&
                                    listToRender.map((item, index) => {
                                        return (
                                            <ListItemContainer
                                                key={
                                                    item[dropdownAttributes[0]]
                                                }
                                                dropdownAttributes={
                                                    dropdownAttributes
                                                }
                                                getItemProps={getItemProps}
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
                            </Scrollbars>
                        </div>
                    </div>
                );
            }}
        </Downshift>
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
