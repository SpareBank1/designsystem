import { shallow, mount } from 'enzyme';
import { assert } from 'chai';
import sinon from 'sinon';
import React from 'react';
import  SuggestionList from '../suggestion-list';
import  SuggestionListContainer from '../suggestion-list-container';
import './setup-dom';
import Spinner from 'ffe-spinner-react';

function suggestions() {
  return [
    {header: '1'},
    {header: '2'}
  ];
}

function renderSuggestion(suggestion) {
  return <h1>{suggestion.header}</h1>;
}

function renderNoSuggestion() {
  return <h2>No Match found</h2>;
}

function propsSuggestionList(_suggestions = suggestions()) {
  return {
    suggestions: _suggestions,
    onSelect: () => {},
    highlightedIndex: 1,
    renderSuggestion,
    renderNoSuggestion,
    refHighlightedSuggestion: () => {},
    onKeyDown: () => {},
    id : 'id'
  };
}

function propsSuggestionListContainer() {
  return {
    ...propsSuggestionList(),
    highlightedIndex: 2,
    autoHeight : false,
  };
}

function shallowSuggestionList(props) {

  return shallow(
    <SuggestionList
      {...propsSuggestionList()} { ...props}
    />);
}

function mountSuggestionListContainer(props = propsSuggestionListContainer()) {
  return mount(
    <SuggestionListContainer
      {...props}
    />);
}

describe('<SuggestionList />', () => {

  it('highlighted <Suggestion> set to highlightedIndex', () => {
    const wrapper = shallowSuggestionList();
    const ul = wrapper.find('ul');

    assert.equal(ul.children().length, 2);
    assert.isFalse(ul.childAt(0).props().isHighlighted);
    assert.isTrue(ul.childAt(1).props().isHighlighted);
    assert.isTrue(wrapper.find(Spinner).length === 0);
  });

  it('should renderNoSuggestions when suggestions is empty', () => {
    const renderNoMatchesSpy = sinon.spy();
    const wrapper = shallowSuggestionList({...propsSuggestionList(), suggestions: [], renderNoMatches: renderNoMatchesSpy});
    const ul = wrapper.find('ul');
    assert.equal(ul.children().length, 1);
    assert.isTrue(renderNoMatchesSpy.calledOnce);
    assert.isTrue(wrapper.find(Spinner).length === 0);
  });

  it('should render spinner', () => {
    const wrapper = shallowSuggestionList({isLoading : true});
    assert.isTrue(wrapper.find(Spinner).length === 1);
  });
});

describe('<SuggestionListContainer />', () => {

  it('should set scrollPos to start', () => {
    const component = mountSuggestionListContainer().instance();
    const scrollSpy = sinon.spy(component.scrollbars, 'scrollTop');

    component.setScrollPosStart();
    assert.isTrue(scrollSpy.calledWith(0));

  });

  it('should set scrollPos to end', () => {
    const component = mountSuggestionListContainer().instance();
    sinon.stub(component.scrollbars, 'getScrollHeight' ).returns(300);
    const scrollSpy = sinon.spy(component.scrollbars, 'scrollTop');

    component.setScrollPosEnd();
    assert.isTrue(scrollSpy.calledWith(300));

  });

  it('should set scrollPos to next', () => {
    const component = mountSuggestionListContainer().instance();
    component.refHighlightedSuggestion({clientHeight : 50});
    const scrollSpy = sinon.spy(component.scrollbars, 'scrollTop');

    component.setScrollPosNext();
    assert.isTrue(scrollSpy.calledWith(100));
  });

  it('should set scrollPos to previous', () => {
    const component = mountSuggestionListContainer().instance();
    component.refHighlightedSuggestion({clientHeight : 50});
    const scrollSpy = sinon.spy(component.scrollbars, 'scrollTop');

    component.setScrollPosPrevious();
    assert.isTrue(scrollSpy.calledWith(50));
  });
});
