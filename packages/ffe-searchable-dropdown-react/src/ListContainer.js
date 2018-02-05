import React from 'react';
import { array, string, number, func } from 'prop-types';
import ListItem from './ListItem';

const ListContainer = ({
    dropdownAttributes,
    dropdownList,
    highlightedIndex,
    noMatch,
    onSelect,
    renderDropdownElement,
    refHighlightedListItem,
    maxRenderedDropdownElements,
}) => {
    const itemsToRender =
        maxRenderedDropdownElements > 0
            ? dropdownList.slice(0, maxRenderedDropdownElements)
            : dropdownList;
    return (
        <ul
            className="ffe-searchable-dropdown__scroll-container-list"
            role="listbox"
            aria-activedescendant={
                dropdownList.length > 0 &&
                highlightedIndex > -1 &&
                highlightedIndex
            }
        >
            {itemsToRender.map((item, index) => {
                return (
                    <ListItem
                        id={index}
                        key={index}
                        isHighlighted={index === highlightedIndex}
                        item={item}
                        onSelect={onSelect}
                        dropdownAttributes={dropdownAttributes}
                        renderElement={renderDropdownElement}
                        refHighlightedListItem={refHighlightedListItem}
                    />
                );
            })}
            {maxRenderedDropdownElements > 0 &&
                dropdownList.length > maxRenderedDropdownElements && (
                    <li className="ffe-searchable-dropdown__item">...</li>
                )}
            {dropdownList.length === 0 && (
                <li className="ffe-searchable-dropdown__item">{noMatch}</li>
            )}
        </ul>
    );
};

ListContainer.propTypes = {
    dropdownAttributes: array,
    dropdownList: array.isRequired,
    maxRenderedDropdownElements: number,
    highlightedIndex: number.isRequired,
    noMatch: string.isRequired,
    onSelect: func.isRequired,
    renderDropdownElement: func,
    refHighlightedListItem: func.isRequired,
};

export default ListContainer;
