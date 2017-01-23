import {mount} from 'enzyme';
import {assert} from 'chai';
import React from 'react';
import  SuggestionItem from './suggestion-item';
import jsdom from 'jsdom'

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

function assertHasFocus(wrapper, focus = true) {
  const testWrapperFocus = wrapper.node === document.activeElement;
  focus ? assert.isTrue(testWrapperFocus) : assert.isFalse(testWrapperFocus);
}

function mountSuggestionItem(isHighlighted = true) {
  return mount(<SuggestionItem
    onSelect={()=>{}}
    item={{header: 'header'}}
    isHighlighted={isHighlighted}
    render={({header}) => <h1>{header}</h1>}
  />);
}

describe('<SuggestionItem />', () => {

  it('item is rendered', () => {
    const wrapper = mountSuggestionItem();
    const li = wrapper.find('li');

    assert.equal(li.childAt(0).html(), '<h1>header</h1>');
  });

  it('isHighlighted', () => {
    const wrapper = mountSuggestionItem();
    const li = wrapper.find('li');

    assert.isTrue(wrapper.hasClass('--highlighted'));
    assert.equal(li.props().tabIndex, 0);
    assertHasFocus(li);
  });


  it('not Highlighted', () => {
    const wrapper = mountSuggestionItem(false);
    const li = wrapper.find('li');

    assert.isFalse(wrapper.hasClass('--highlighted'));
    assert.equal(li.props().tabIndex, -1);
    assertHasFocus(li, false);
  });
});
