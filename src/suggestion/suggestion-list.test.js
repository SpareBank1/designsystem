import {shallow} from 'enzyme';
import {assert} from 'chai';
import sinon from 'sinon';
import React from 'react';
import  SuggestionList from './suggestion-list';
import  SuggestionListContainer from './suggestion-list-container';
import keyCodes from '../util/keyCode';

function suggestions() {
  return [
    {header: '1'},
    {header: '2'}
  ]
}

function renderSuggestion(suggestion) {
  return <h1>{suggestion.header}</h1>;
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


function propsSuggestionListContainer(_suggestions = suggestions()) {
  return {
    suggestions: _suggestions,
    onSelect: ()=> {
    },
    renderSuggestion,
  }
}

function shallowSuggestionListContainer(props = propsSuggestionListContainer()) {
  return shallow(
    <SuggestionListContainer
      {...props}
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

describe('<SuggestionListContainer />', () => {

  it('should render <SuggestionsList> when suggestions', () => {
    const wrapper = shallowSuggestionListContainer();
    assert.equal(wrapper.find('SuggestionList').length, 1);
  });

  it('should not render <SuggestionsList> if no suggestions', () => {
    const wrapper = shallowSuggestionListContainer({...propsSuggestionListContainer(), suggestions: []});
    assert.equal(wrapper.find('SuggestionList').length, 0);
  });

  it('should increment highlightedIndex on keyboard.DOWN', ()=> {
    const wrapper = shallowSuggestionListContainer();
    const spyPreventDefault = sinon.spy();
    wrapper.simulate('keydown', {which: keyCodes.DOWN, preventDefault: spyPreventDefault});

    assert.equal(wrapper.state('highlightedIndex'), 0);
    assert.isTrue(spyPreventDefault.calledOnce);
  });

  it('should decrement highlightedIndex on keyboard.UP', ()=> {
    const wrapper = shallowSuggestionListContainer();
    wrapper.setState({highlightedIndex: 1});
    const spyPreventDefault = sinon.spy();
    wrapper.simulate('keydown', {which: keyCodes.UP, preventDefault: spyPreventDefault});

    assert.equal(wrapper.state('highlightedIndex'), 0);
    assert.isTrue(spyPreventDefault.calledOnce);
  });

  it('should reset highlightedIndex on keyboard.HOME', ()=> {
    const wrapper = shallowSuggestionListContainer();
    wrapper.setState({highlightedIndex: 1});
    wrapper.simulate('keydown', {which: keyCodes.HOME});

    assert.equal(wrapper.state('highlightedIndex'), 0);
  });

  it('should set highlightedIndex to suggestions end on keyboard.END', ()=> {
    const wrapper = shallowSuggestionListContainer();
    wrapper.simulate('keydown', {which: keyCodes.END});

    assert.equal(wrapper.state('highlightedIndex'), 1);
  });

  it('should call onClose prop on keyboard.ESC', ()=> {
    const spyOnClose = sinon.spy();
    const wrapper = shallowSuggestionListContainer({...propsSuggestionListContainer(), onClose: spyOnClose});
    wrapper.simulate('keydown', {which: keyCodes.ESC});

    assert.isTrue(spyOnClose.calledOnce);
  });

  it('should call onSelect with highlightedItem on keyboard.ENTER', () => {
    const spyOnSelect = sinon.spy();
    const wrapper = shallowSuggestionListContainer({...propsSuggestionListContainer(), onSelect: spyOnSelect});
    wrapper.setState({highlightedIndex: 1});
    wrapper.simulate('keydown', {which: keyCodes.ENTER});
    const item = suggestions()[1];

    assert.isTrue(spyOnSelect.calledWith(item));
  });

  it('should call onBlur with highlightedItem on keyboard.TAB', () => {
    const spyOnBlur = sinon.spy();
    const wrapper = shallowSuggestionListContainer({...propsSuggestionListContainer(), onBlur: spyOnBlur});
    wrapper.setState({highlightedIndex: 1});
    wrapper.simulate('keydown', {which: keyCodes.TAB});
    const item = suggestions()[1];

    assert.isTrue(spyOnBlur.calledWith(item));
  });
});
