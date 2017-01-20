import React, { PropTypes } from 'react';

const suggestionItem = ({item, isHighlighted, render, onSelect}) => {
    return (
        <li
            role="option"
            onClick={(e) => onSelect(item)}
            className={isHighlighted && '--highlighted'}
        >
            {render(item)}
        </li>
    );
};

suggestionItem.propTypes = {
    item: PropTypes.object.isRequired,
    isHighlighted: PropTypes.bool.isRequired,
    render: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default suggestionItem;
