import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { assert } from 'chai';
import sinon from 'sinon';
import React from 'react';
import BaseSelector from './base-selector';
import SuggestionItem from '../suggestion/suggestion-item';
import Input from './input-field';
import { KeyCodes } from '../util/types';
import '../suggestion/test/setup-dom';

Enzyme.configure({adapter: new Adapter()});

function suggestions() {
  return [
    { header: '1' },
    { header: '2' },
    { header: '3' }
  ];
}

function propsBaseSelector(_suggestions = suggestions()) {
  return {
    suggestions: _suggestions,
    suggestionFilter: () => () => true,
    onSelect: () => {},
    renderSuggestion: () => <h1>hei</h1>,
    onSuggestionSelect: (suggestion) => {},
    value: '',
    shouldHideSuggestionsOnSelect: true,
    shouldSelectHighlightedOnTab: true,
    shouldHideSuggestionsOnBlur: true,
    shouldHideSuggestionsOnReset: true,
    id: 'account-selector'
  };
}

function shallowBaseSelector(props) {
  return shallow(
    <BaseSelector
      {...propsBaseSelector()} {...props }
    />);
}

function mountBaseSelector(props) {
  return mount(
    <BaseSelector
      {...propsBaseSelector()} {...props }
    />);
}

function assertHomeEnd(keyCode, stubMethodName) {
  const component = shallowBaseSelector().instance();
  const setLastHighlighted = sinon.stub(component, stubMethodName);
  const preventDefaultSpy = sinon.spy();
  component.state.showSuggestions = true;

  component.onInputKeyDown({ which: keyCode, preventDefault: preventDefaultSpy });
  assert.isTrue(setLastHighlighted.calledOnce);
  assert.isTrue(preventDefaultSpy.calledOnce);
}

describe('<BaseSelector> methods', () => {

  it('should show suggestions on input change', (done) => {
    const value = 'test';
    const onChangeSpy = sinon.spy();
    const onSuggestionListChangeSpy = sinon.spy();
    const component = shallowBaseSelector(
      { onChange: onChangeSpy, onSuggestionListChange: onSuggestionListChangeSpy }).instance();

    component.onInputChange(value);
    assert.isTrue(component.state.showSuggestions);
    assert.isTrue(onChangeSpy.calledWith(value));
    setTimeout(() => {
      assert.isTrue(onSuggestionListChangeSpy.calledOnce);
      done();
    });
  });

  it('should show suggestions on input focus', () => {
    const onFocusSpy = sinon.spy();
    const component = shallowBaseSelector({ onFocus: onFocusSpy }).instance();

    component.onFocus();
    assert.isTrue(component.state.showSuggestions);
    assert.isTrue(onFocusSpy.calledOnce);
  });

  it('should show suggestions on input click', () => {
    const onClickSpy = sinon.spy();
    const component = shallowBaseSelector({onClick: onClickSpy}).instance();

    component.onClick();
    assert.isTrue(component.state.showSuggestions);
    assert.isTrue(onClickSpy.calledOnce);
  });

  it('should show suggestions on input click + focus', () => {
    const onClickSpy = sinon.spy();
    const onFocusSpy = sinon.spy();
    const component = shallowBaseSelector({onClick: onClickSpy, onFocus: onFocusSpy}).instance();

    component.onFocus();
    component.onClick();
    assert.isTrue(component.state.showSuggestions);
    assert.isTrue(onClickSpy.calledOnce);
    assert.isTrue(onFocusSpy.calledOnce);
  });

  it('should hide suggestions on input blur', () => {
    const onBlurSpy = sinon.spy();
    const component = shallowBaseSelector({ onBlur: onBlurSpy }).instance();

    component.onBlur();
    assert.isFalse(component.state.showSuggestions);
    assert.isTrue(onBlurSpy.calledOnce);
  });

  it('should not hide suggestions when suggestion is empty', () => {
    const onSelectSpy = sinon.spy();
    const component = shallowBaseSelector({ onSelect: onSelectSpy, shouldHideSuggestionsOnSelect: false }).instance();

    component.props.onSuggestionSelect(null);
    assert.isFalse(onSelectSpy.called);
    assert.isFalse(component.state.showSuggestions);
  });

  it('should hide suggestions on input reset', () => {
    const onResetSpy = sinon.spy();
    const component = shallowBaseSelector({ onReset: onResetSpy }).instance();

    component.onInputReset();
    assert.isFalse(component.state.showSuggestions);
    assert.isTrue(onResetSpy.calledOnce);
  });

  it('should show suggestions on input reset', () => {
    const onResetSpy = sinon.spy();
    const component = shallowBaseSelector({ onReset: onResetSpy, shouldHideSuggestionsOnReset: false }).instance();

    component.onInputReset();
    assert.isTrue(component.state.showSuggestions);
    assert.isTrue(onResetSpy.calledOnce);
  });

  it('should increment highlightedSuggestionIndex on nextHighlightedIndex', () => {
    const component = shallowBaseSelector().instance();
    const scollPosSpy = sinon.spy();
    component.state.highlightedSuggestionIndex = 1;
    component.suggestionList = { setScrollPosNext: scollPosSpy };

    component.setNextHighlighted();
    assert.equal(component.state.highlightedSuggestionIndex, 2);
    assert.isTrue(scollPosSpy.calledOnce);
  });

  it('should wrap highlightedSuggestionIndex on nextHighlightedIndex', () => {
    const component = shallowBaseSelector().instance();
    const scollPosSpy = sinon.spy();
    component.state.highlightedSuggestionIndex = 2;
    component.suggestionList = { setScrollPosStart: scollPosSpy };

    component.setNextHighlighted();
    assert.equal(component.state.highlightedSuggestionIndex, 0);
    assert.isTrue(scollPosSpy.calledOnce);
  });

  it('should decrement highlightedSuggestionIndex on previousHighlightedIndex', () => {
    const component = shallowBaseSelector().instance();
    const scollPosSpy = sinon.spy();
    component.state.highlightedSuggestionIndex = 1;
    component.suggestionList = { setScrollPosPrevious: scollPosSpy };

    component.setPreviousHighlighted();
    assert.equal(component.state.highlightedSuggestionIndex, 0);
    assert.isTrue(scollPosSpy.calledOnce);
  });


  it('should wrap highlightedSuggestionIndex on previousHighlightedIndex', () => {
    const component = shallowBaseSelector().instance();
    const scollPosSpy = sinon.spy();
    component.state.highlightedSuggestionIndex = 0;
    component.suggestionList = { setScrollPosEnd: scollPosSpy };

    component.setPreviousHighlighted();
    assert.equal(component.state.highlightedSuggestionIndex, 2);
    assert.isTrue(scollPosSpy.calledOnce);
  });

  it('should setFirstHighlighted ', () => {
    const component = shallowBaseSelector().instance();
    const scollPosSpy = sinon.spy();
    component.suggestionList = { setScrollPosStart: scollPosSpy };

    component.setFirstHighlighted();
    assert.equal(component.state.highlightedSuggestionIndex, 0);
    assert.isTrue(scollPosSpy.calledOnce);
  });

  it('should setLastHighlighted ', () => {
    const component = shallowBaseSelector().instance();
    const scollPosSpy = sinon.spy();
    component.suggestionList = { setScrollPosEnd: scollPosSpy };

    component.setLastHighlighted();
    assert.equal(component.state.highlightedSuggestionIndex, 2);
    assert.isTrue(scollPosSpy.calledOnce);
  });
});

describe('<BaseSelector> keyboard navigation', () => {
  it('should show suggestions on ALT + DOWN', () => {
    const component = shallowBaseSelector().instance();
    const showHideSuggestionsSpy = sinon.spy(component, 'showOrHideSuggestions');

    component.onInputKeyDown({ which: KeyCodes.DOWN, altKey: true });
    assert.isTrue(showHideSuggestionsSpy.calledWith(true));
  });

  it('should highlight next if suggestion are showing on DOWN', () => {
    const component = shallowBaseSelector().instance();
    const setNextHighlightedStub = sinon.stub(component, 'setNextHighlighted');
    component.state.showSuggestions = true;
    const preventDefaultSpy = sinon.spy();

    component.onInputKeyDown({ which: KeyCodes.DOWN, preventDefault: preventDefaultSpy });
    assert.isTrue(setNextHighlightedStub.calledOnce);
    assert.isTrue(preventDefaultSpy.calledOnce);
  });

  it('should hide suggestions on ALT + UP', () => {
    const component = shallowBaseSelector().instance();
    const showHideSuggestionsSpy = sinon.spy(component, 'showOrHideSuggestions');
    component.state.showSuggestions = true;

    component.onInputKeyDown({ which: KeyCodes.UP, altKey: true });
    assert.isTrue(showHideSuggestionsSpy.calledWith(false));
  });

  it('should highlight previous suggestions on UP', () => {
    const component = shallowBaseSelector().instance();
    const showHideSuggestionsStub = sinon.stub(component, 'setPreviousHighlighted');
    const preventDefaultSpy = sinon.spy();
    component.state.showSuggestions = true;

    component.onInputKeyDown({ which: KeyCodes.UP, preventDefault: preventDefaultSpy });
    assert.isTrue(showHideSuggestionsStub.calledOnce);
    assert.isTrue(preventDefaultSpy.calledOnce);
  });

  it('should reset input on ESC', () => {
    const component = shallowBaseSelector().instance();
    const onInputResetSpy = sinon.spy(component, 'onInputReset');

    component.onInputKeyDown({ which: KeyCodes.ESC });
    assert.isTrue(onInputResetSpy.calledOnce);
  });

  it('should move to first suggestion on HOME', () => {
    assertHomeEnd(KeyCodes.HOME, 'setFirstHighlighted');
  });

  it('should move to last suggestion on END', () => {
    assertHomeEnd(KeyCodes.END, 'setLastHighlighted');
  });

});

describe('<BaseSelector> focus', () => {
  it('should maintain focus on suggestionClick', () => {
    const onBlurSpy = sinon.spy();
    const onFocusSpy = sinon.spy();
    const component = mountBaseSelector({
      onBlur : onBlurSpy,
      onFocus : onFocusSpy,
    });
    const input = component.find(Input);
    input.simulate('focus');
    const suggestionListItem = component.find(SuggestionItem).first();
    suggestionListItem.simulate('click');

    assert.isTrue(onFocusSpy.calledOnce);
    assert.equal(onBlurSpy.callCount, 0);
  });

  it('should maintain focus on resetClick', () => {
    const onBlurSpy = sinon.spy();
    const onFocusSpy = sinon.spy();
    const component = mountBaseSelector({
      onBlur : onBlurSpy,
      onFocus : onFocusSpy,
    });
    const input = component.find(Input);
    input.simulate('focus');
    const resetButton = component.find(SuggestionItem).first('button');
    resetButton.simulate('click');

    assert.isTrue(onFocusSpy.calledOnce);
    assert.equal(onBlurSpy.callCount, 0);
  });

  it('should not show suggestions on focus', () => {
    const onFocus = sinon.spy();
    const component = mountBaseSelector({
      shouldShowSuggestionsOnFocus: false,
      onFocus: onFocus
    }).instance();
    const showHideSuggestionsSpy = sinon.spy(component, 'showOrHideSuggestions');
    component.onFocus();

    assert.isTrue(showHideSuggestionsSpy.calledWith(false, onFocus));
  });
});
