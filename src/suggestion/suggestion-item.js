import React, {PropTypes} from 'react';

const SuggestionItem = ({item, isHighlighted, render, onSelect}) => {
  return (
    <li
      role='option'
      onClick={(e) => onSelect(item)}
      className='account-suggestion'
      tabIndex={isHighlighted ? 0 : -1}
      ref={(element) => {
        if (isHighlighted && element) {
          element.focus();
        }
      }}
    >
      {render(item)}
    </li>
  );
};

SuggestionItem.propTypes = {
  item: PropTypes.object.isRequired,
  isHighlighted: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default SuggestionItem;
