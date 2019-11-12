import React from 'react';
import { func, object, bool, arrayOf, string } from 'prop-types';

const ListItemContainer = ({
    getItemProps,
    item,
    isHighlighted,
    dropdownAttributes,
    children,
}) => {
    const [titleAttribute] = dropdownAttributes;
    const itemProps = getItemProps({
        item: item[titleAttribute],
        key: item[titleAttribute],
    });
    return (
        <div
            {...itemProps}
            className="ffe-searchable-dropdown__list-item-container"
        >
            {children({
                item,
                isHighlighted,
            })}
        </div>
    );
};

ListItemContainer.propTypes = {
    getItemProps: func.isRequired,
    item: object.isRequired,
    isHighlighted: bool.isRequired,
    dropdownAttributes: arrayOf(string).isRequired,
    children: func.isRequired,
};

export default ListItemContainer;
