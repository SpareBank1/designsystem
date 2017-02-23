import React, {PropTypes, Component} from 'react';
import classNames from 'classnames';

class SuggestionItem extends Component {
  render() {
    const {item, isHighlighted, render, onSelect, refHighlightedSuggestion} = this.props;
    return (
      <li
        ref={(itemRef) => {
          if (itemRef && isHighlighted) {
            refHighlightedSuggestion(itemRef);
          }
        }}
        role='option'
        onMouseDown={() => {onSelect(item);}}
        className={classNames('account-suggestion', {'account-suggestion__highlighted' : isHighlighted})}
        tabIndex={-1}
      >
        {render(item)}
      </li>);
  }
}

SuggestionItem.propTypes = {
  item: PropTypes.object.isRequired,
  isHighlighted: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  refHighlightedSuggestion: PropTypes.func.isRequired,
};

export default SuggestionItem;
