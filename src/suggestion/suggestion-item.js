import React, {PropTypes, Component} from 'react';

class SuggestionItem extends Component{
  render() {
    const {item, isHighlighted, render, onSelect, refHighlightedSuggestion} = this.props;
    return (
      <li
        ref={(item) => {
          if(item && isHighlighted) {
            refHighlightedSuggestion(item);
          }
        }}
        role='option'
        onMouseDown={(event) => {event.stopPropagation();onSelect(event, item)}}
        onMouseUp={(event)=>{event.stopPropagation()}}
        onClick={()=> console.log("hei")}
        className={isHighlighted ? 'account-suggestion__highlighted account-suggestion' : 'account-suggestion'}
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
};

export default SuggestionItem;
