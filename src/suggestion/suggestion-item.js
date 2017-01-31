import React, {PropTypes} from 'react';

const SuggestionItem = ({item, setFocus, render, onSelect}) => {
  return (
    <li
      role='option'
      onClick={(e) => onSelect(item)}
      className='account-suggestion'
      tabIndex={setFocus ? 0 : -1}
      ref={(element) => {
        if (setFocus && element) {
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
  setFocus: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default SuggestionItem;
