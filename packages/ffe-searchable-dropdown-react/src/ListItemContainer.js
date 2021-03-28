import React from 'react';
import { func, object, bool } from 'prop-types';

const ListItemContainer = ({ item, isHighlighted, children, ...itemProps }) => {
    return (
        <li
            {...itemProps}
            className="ffe-searchable-dropdown__list-item-container"
        >
            {children({
                item,
                isHighlighted,
            })}
        </li>
    );
};

ListItemContainer.propTypes = {
    item: object.isRequired,
    isHighlighted: bool.isRequired,
    children: func.isRequired,
};

export default ListItemContainer;
