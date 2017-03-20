import {shallow} from 'enzyme';
import {assert} from 'chai';
import sinon from 'sinon';
import React from 'react';
import BaseSelector from './base-selector';
import {KeyCodes} from '../util/types';

function suggestions() {
  return [
    {header: '1'},
    {header: '2'},
    {header: '3'}
  ];
}

function propsBaseSelector(_suggestions = suggestions()) {
  return {
    suggestions: _suggestions,
    suggestionFilter: () => () => true,
    onSelect: () => {},
    value: '',
    shouldHideSuggestionsOnSelect: true,
    shouldSelectHighlightedOnTab: true,
    shouldHideSuggestionOnBlur: true,
  };
}

function shallowBaseSelector(props) {
  return shallow(
    <BaseSelector
      {...{...propsBaseSelector(), ...props}}
    />);
}

function assertHomeEnd(keyCode, stubMethodName) {
  const component = shallowBaseSelector().instance();
  const setLastHighlighted = sinon.stub(component, stubMethodName);
  const preventDefaultSpy = sinon.spy();
  component.state.showSuggestions = true;

  component.onInputKeyDown({which: keyCode, preventDefault: preventDefaultSpy});
  assert.isTrue(setLastHighlighted.calledOnce);
  assert.isTrue(preventDefaultSpy.calledOnce);
}

function assertSuggestionSelected(event) {
  const component = shallowBaseSelector().instance();
  const onSuggestionSelectSpy = sinon.stub(component, 'onSuggestionSelect');
  component.state = {highlightedSuggestionIndex: 0, showSuggestions: true};

  component.onInputKeyDown(event);
  assert.isTrue(onSuggestionSelectSpy.calledWith(suggestions()[0]));
}


describe('<BaseSelector> methods', () => {

  it('should show suggestions on input change', () => {
    const value = 'test';
    const onChangeSpy = sinon.spy();
    const onSuggestionListChangeSpy = sinon.spy();
    const component = shallowBaseSelector(
      {onChange: onChangeSpy, onSuggestionListChange : onSuggestionListChangeSpy}).instance();

    component.onInputChange(value);
    assert.isTrue(component.state.showSuggestions);
    assert.isTrue(onChangeSpy.calledWith(value));
    setTimeout(() => {
      assert.isTrue(onSuggestionListChangeSpy.calledOnce);
    });
  });

  it('should show suggestions on input focus', () => {
    const onFocusSpy = sinon.spy();
    const component = shallowBaseSelector({onFocus: onFocusSpy}).instance();

    component.onFocus();
    assert.isTrue(component.state.showSuggestions);
    assert.isTrue(onFocusSpy.calledOnce);
  });

  it('should not show suggestions on input focus if clickAction was performed', () => {
    const onFocusSpy = sinon.spy();
    const component = shallowBaseSelector({onFocus: onFocusSpy}).instance();
    component.shouldPreventBlurForNextMouseClick = true;

    component.onFocus();
    assert.isFalse(component.state.showSuggestions);
    assert.isFalse(onFocusSpy.called);
    assert.isFalse(component.shouldPreventBlurForNextMouseClick);
  });

  it('should hide suggestions on input blur', () => {
    const onBlurSpy = sinon.spy();
    const component = shallowBaseSelector({onBlur: onBlurSpy}).instance();

    component.onBlur();
    assert.isFalse(component.state.showSuggestions);
    assert.isTrue(onBlurSpy.calledOnce);
  });

  it('should not hide suggestions on input blur if clickAction was performed', () => {
    const onBlurSpy = sinon.spy();
    const inputFocusSpy = sinon.spy();
    const component = shallowBaseSelector({onBlur: onBlurSpy}).instance();
    component.shouldPreventBlurForNextMouseClick = true;
    component.input = {focus: inputFocusSpy};

    component.onBlur();
    assert.isFalse(component.state.showSuggestions);
    assert.isFalse(onBlurSpy.called);
    assert.isTrue(inputFocusSpy.calledOnce);
  });

  it('should hide suggestions on suggestionSelect', () => {
    const onSelectSpy = sinon.spy();
    const suggestion = {suggestion: 'suggestion'};
    const component = shallowBaseSelector({onSelect: onSelectSpy}).instance();
    component.state.showSuggestions = true;

    component.onSuggestionSelect(suggestion);
    assert.isTrue(onSelectSpy.calledOnce);
    assert.isFalse(component.state.showSuggestions);
  });

  it('should not hide suggestions when props.shouldHideSuggestionsOnSelect = false', () => {
    const onSelectSpy = sinon.spy();
    const suggestion = {suggestion: 'suggestion'};
    const component = shallowBaseSelector({onSelect: onSelectSpy, shouldHideSuggestionsOnSelect: false}).instance();

    component.onSuggestionSelect(suggestion);
    assert.isTrue(onSelectSpy.calledOnce);
    assert.isFalse(component.state.showSuggestions);

  });

  it('should not hide suggestions when suggestion is empty', () => {
    const onSelectSpy = sinon.spy();
    const component = shallowBaseSelector({onSelect: onSelectSpy, shouldHideSuggestionsOnSelect: false}).instance();

    component.onSuggestionSelect(null);
    assert.isFalse(onSelectSpy.called);
    assert.isFalse(component.state.showSuggestions);
  });

  it('should set didPerformClickAction on suggestionClick', () => {
    const component = shallowBaseSelector().instance();

    component.onSuggestionClick();
    assert.isTrue(component.shouldPreventBlurForNextMouseClick);
  });

  it('should set didPerformClickAction on onInputResetClick', () => {
    const component = shallowBaseSelector().instance();

    component.onInputResetClick();
    assert.isTrue(component.shouldPreventBlurForNextMouseClick);
  });

  it('should hide suggestions on input reset', () => {
    const onResetSpy = sinon.spy();
    const component = shallowBaseSelector({onReset: onResetSpy}).instance();

    component.onInputReset();
    assert.isFalse(component.state.showSuggestions);
    assert.isTrue(onResetSpy.calledOnce);
  });

  it('should increment highlightedSuggestionIndex on nextHighlightedIndex', () => {
    const component = shallowBaseSelector().instance();
    const scollPosSpy = sinon.spy();
    component.state.highlightedSuggestionIndex = 1;
    component.suggestionList = {setScrollPosNext: scollPosSpy};

    component.setNextHighlighted();
    assert.equal(component.state.highlightedSuggestionIndex, 2);
    assert.isTrue(scollPosSpy.calledOnce);
  });

  it('should wrap highlightedSuggestionIndex on nextHighlightedIndex', () => {
    const component = shallowBaseSelector().instance();
    const scollPosSpy = sinon.spy();
    component.state.highlightedSuggestionIndex = 2;
    component.suggestionList = {setScrollPosStart: scollPosSpy};

    component.setNextHighlighted();
    assert.equal(component.state.highlightedSuggestionIndex, 0);
    assert.isTrue(scollPosSpy.calledOnce);
  });

  it('should decrement highlightedSuggestionIndex on previousHighlightedIndex', () => {
    const component = shallowBaseSelector().instance();
    const scollPosSpy = sinon.spy();
    component.state.highlightedSuggestionIndex = 1;
    component.suggestionList = {setScrollPosPrevious: scollPosSpy};

    component.setPreviousHighlighted();
    assert.equal(component.state.highlightedSuggestionIndex, 0);
    assert.isTrue(scollPosSpy.calledOnce);
  });


  it('should wrap highlightedSuggestionIndex on previousHighlightedIndex', () => {
    const component = shallowBaseSelector().instance();
    const scollPosSpy = sinon.spy();
    component.state.highlightedSuggestionIndex = 0;
    component.suggestionList = {setScrollPosEnd: scollPosSpy};

    component.setPreviousHighlighted();
    assert.equal(component.state.highlightedSuggestionIndex, 2);
    assert.isTrue(scollPosSpy.calledOnce);
  });

  it('should setFirstHighlighted ', () => {
    const component = shallowBaseSelector().instance();
    const scollPosSpy = sinon.spy();
    component.suggestionList = {setScrollPosStart: scollPosSpy};

    component.setFirstHighlighted();
    assert.equal(component.state.highlightedSuggestionIndex, 0);
    assert.isTrue(scollPosSpy.calledOnce);
  });

  it('should setLastHighlighted ', () => {
    const component = shallowBaseSelector().instance();
    const scollPosSpy = sinon.spy();
    component.suggestionList = {setScrollPosEnd: scollPosSpy};

    component.setLastHighlighted();
    assert.equal(component.state.highlightedSuggestionIndex, 2);
    assert.isTrue(scollPosSpy.calledOnce);
  });
});

describe('<BaseSelector> keyboard navigation', () => {
  it('should show suggestions on ALT + DOWN', () => {
    const component = shallowBaseSelector().instance();
    const showHideSuggestionsSpy = sinon.spy(component, 'showHideSuggestions');

    component.onInputKeyDown({which: KeyCodes.DOWN, altKey: true});
    assert.isTrue(showHideSuggestionsSpy.calledWith(true));
  });

  it('should highlight next if suggestion are showing on DOWN', () => {
    const component = shallowBaseSelector().instance();
    const setNextHighlightedStub = sinon.stub(component, 'setNextHighlighted');
    component.state.showSuggestions = true;
    const preventDefaultSpy = sinon.spy();

    component.onInputKeyDown({which: KeyCodes.DOWN, preventDefault : preventDefaultSpy});
    assert.isTrue(setNextHighlightedStub.calledOnce);
    assert.isTrue(preventDefaultSpy.calledOnce);
  });

  it('should hide suggestions on ALT + UP', () => {
    const component = shallowBaseSelector().instance();
    const showHideSuggestionsSpy = sinon.spy(component, 'showHideSuggestions');
    component.state.showSuggestions = true;

    component.onInputKeyDown({which: KeyCodes.UP, altKey: true});
    assert.isTrue(showHideSuggestionsSpy.calledWith(false));
  });

  it('should highlight previous suggestions on UP', () => {
    const component = shallowBaseSelector().instance();
    const showHideSuggestionsStub = sinon.stub(component, 'setPreviousHighlighted');
    const preventDefaultSpy = sinon.spy();
    component.state.showSuggestions = true;

    component.onInputKeyDown({which: KeyCodes.UP, preventDefault : preventDefaultSpy});
    assert.isTrue(showHideSuggestionsStub.calledOnce);
    assert.isTrue(preventDefaultSpy.calledOnce);
  });

  it('should reset input on ESC', () => {
    const component = shallowBaseSelector().instance();
    const onInputResetSpy = sinon.spy(component, 'onInputReset');

    component.onInputKeyDown({which: KeyCodes.ESC});
    assert.isTrue(onInputResetSpy.calledOnce);
  });

  it('should move to first suggestion on HOME', () => {
    assertHomeEnd(KeyCodes.HOME, 'setFirstHighlighted');
  });

  it('should move to last suggestion on END', () => {
    assertHomeEnd(KeyCodes.END, 'setLastHighlighted');
  });

  it('should select highlighted suggestion on ENTER', () => {
    const preventDefaultSpy = sinon.spy();
    assertSuggestionSelected({which: KeyCodes.ENTER, preventDefault : preventDefaultSpy});
    assert.isTrue(preventDefaultSpy.calledOnce);
  });

  it('should select highlighted suggestion from filtered list', () => {
    const accounts = [
      {name: 'lønnskonto'},
      {name: 'sparekonto'},
      {name: 'investeringskonto'},
    ];
    const component = shallowBaseSelector({suggestions: accounts}).instance();
    const filterAccountsStub = sinon.stub(component, 'filterSuggestions');
    filterAccountsStub.returns([accounts[2]]);
    const onSuggestionSelectSpy = sinon.stub(component, 'onSuggestionSelect');
    component.state = {highlightedSuggestionIndex: 0};

    component.onInputKeyDown({which: KeyCodes.ENTER});
    assert.isTrue(onSuggestionSelectSpy.calledWith(accounts[2]));
  });

  it('should select highlighted index on TAB', () => {
    assertSuggestionSelected({which: KeyCodes.TAB});
  });

  it('should not select highlighted index on TAB when shouldSelectHighlightedOnTab', () => {
    const component = shallowBaseSelector({shouldSelectHighlightedOnTab: false}).instance();
    const onSuggestionSelectSpy = sinon.stub(component, 'onSuggestionSelect');

    component.onInputKeyDown({which: KeyCodes.TAB});
    assert.isFalse(onSuggestionSelectSpy.called);
  });
});
