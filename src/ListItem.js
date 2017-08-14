import React from 'react';
import { array, number, bool, object, func } from 'prop-types';
import classNames from 'classnames';

const ListItem = ({ dropdownAttributes, id, isHighlighted, item, onSelect, renderElement, refHighlightedListItem }) => {
    return (
        <li
            ref={(itemRef) => {
                if (itemRef && isHighlighted) {
                    refHighlightedListItem(itemRef);
                }
            }}
            role='option'
            id={id}
            onMouseDown={(e) => {
                e.preventDefault();
                onSelect(item);
            }}
            className={classNames('ffe-searchable-dropdown__item', { 'ffe-searchable-dropdown__item--highlighted': isHighlighted })}
            tabIndex={-1}
        >
            {renderElement ? renderElement(item) :
                <div>
                    <a className="ffe-searchable-dropdown__item--header">{item[dropdownAttributes[0]]}</a>
                    {dropdownAttributes.length > 1 &&
                    <div className="ffe-searchable-dropdown__item--details">
                        {item[dropdownAttributes[1]]}
                    </div>}
                </div>
            }
        </li>
    );
};

ListItem.propTypes = {
    dropdownAttributes: array,
    id: number.isRequired,
    isHighlighted: bool,
    item: object.isRequired,
    onSelect: func.isRequired,
    renderElement: func,
    refHighlightedListItem: func.isRequired,
};

export default ListItem;
