import {shallow} from 'enzyme';
import {assert} from 'chai';
import React from 'react';
import  SuggestionList from './suggestion-list';

function suggestions() {
  return [
    {header: '1'},
    {header: '2'}
  ]
}

function shallowSuggestionList() {
  return shallow(
    <SuggestionList
      suggestions={suggestions()}
      onSelect={()=> {
      }}
      highlightedIndex={1}
      renderSuggestion={(suggestion)=> {
        return <h1>{suggestion.header}</h1>;
      }}
      onKeyDown={()=> {
      }}
    />);
}

describe('<SuggestionList />', () => {

  it('highlighted <Suggestion> set to highlightedIndex', () => {
    const wrapper = shallowSuggestionList();
    const ul = wrapper.find('ul');

    assert.isFalse(ul.childAt(0).props().isHighlighted);
    assert.isTrue(ul.childAt(1).props().isHighlighted);
  });
});
