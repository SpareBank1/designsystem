import React from 'react';
import { array, string, number, func } from 'prop-types';
import ListItem from './ListItem';

const ListContainer = ({ dropdownAttributes, dropdownList, highlightedIndex, noMatch, onSelect, renderDropdownElement, refHighlightedListItem }) => {
    return (
        <ul className='ffe-searchable-dropdown__scroll-container-list' role='listbox'>
            { dropdownList.length > 0 ? dropdownList.map((item, index) =>
                {
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
                }) : <li className='ffe-searchable-dropdown__item'>{noMatch}</li>
            }
        </ul>
    );
};

ListContainer.propTypes = {
    dropdownAttributes: array,
    dropdownList: array.isRequired,
    highlightedIndex: number.isRequired,
    noMatch: string.isRequired,
    onSelect: func.isRequired,
    renderDropdownElement: func,
    refHighlightedListItem: func.isRequired,
};

export default ListContainer;
