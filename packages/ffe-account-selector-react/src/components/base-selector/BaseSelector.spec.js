import React from 'react';

import BaseSelector from './BaseSelector';
import {
    SuggestionItem,
    SuggestionListContainer,
} from '../../subcomponents/suggestion';
import { SuggestionListContainer as SuggestionListContainerHighCapacity } from '../../subcomponents/suggestion-high-capacity';

import Input from '../../subcomponents/input-field';
import { KeyCodes } from '../../util/types';

function suggestions() {
    return [{ header: '1' }, { header: '2' }, { header: '3' }];
}

function propsBaseSelector(_suggestions = suggestions()) {
    return {
        suggestions: _suggestions,
        suggestionFilter: () => () => true,
        renderSuggestion: () => <h1>hei</h1>,
        onSuggestionSelect: suggestion => {},
        value: '',
        locale: 'nb',
        shouldSelectHighlightedOnTab: true,
        shouldHideSuggestionsOnReset: true,
        id: 'account-selector',
    };
}

function mountBaseSelector(props) {
    return mount(<BaseSelector {...propsBaseSelector()} {...props} />);
}

function assertHomeEnd(keyCode, stubMethodName) {
    const component = mountBaseSelector().instance();
    const setLastHighlighted = jest.spyOn(component, stubMethodName);
    const preventDefaultSpy = jest.fn();
    component.state.showSuggestions = true;

    component.onInputKeyDown({
        which: keyCode,
        preventDefault: preventDefaultSpy,
    });
    expect(setLastHighlighted).toHaveBeenCalledTimes(1);
    expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
}

describe('<BaseSelector> methods', () => {
    it('should show suggestions on input change', done => {
        const value = 'test';
        const onChangeSpy = jest.fn();
        const onSuggestionListChangeSpy = jest.fn();
        const component = mountBaseSelector({
            onChange: onChangeSpy,
            onSuggestionListChange: onSuggestionListChangeSpy,
        }).instance();

        component.onInputChange(value);
        expect(component.state.showSuggestions).toBe(true);
        expect(onChangeSpy).toHaveBeenCalledWith(value);
        setTimeout(() => {
            expect(onSuggestionListChangeSpy).toHaveBeenCalledTimes(1);
            done();
        });
    });

    it('should show suggestions on input focus', () => {
        const onFocusSpy = jest.fn();
        const component = mountBaseSelector({
            onFocus: onFocusSpy,
        }).instance();

        component.onFocus();
        expect(component.state.showSuggestions).toBe(true);
        expect(onFocusSpy).toHaveBeenCalledTimes(1);
    });

    it('should show suggestions on input click', () => {
        const onClickSpy = jest.fn();
        const component = mountBaseSelector({
            onClick: onClickSpy,
        }).instance();

        component.onClick();
        expect(component.state.showSuggestions).toBe(true);
        expect(onClickSpy).toHaveBeenCalledTimes(1);
    });

    it('should show suggestions on input click + focus', () => {
        const onClickSpy = jest.fn();
        const onFocusSpy = jest.fn();
        const component = mountBaseSelector({
            onClick: onClickSpy,
            onFocus: onFocusSpy,
        }).instance();

        component.onFocus();
        component.onClick();
        expect(component.state.showSuggestions).toBe(true);
        expect(onClickSpy).toHaveBeenCalledTimes(1);
        expect(onFocusSpy).toHaveBeenCalledTimes(1);
    });

    it('should hide suggestions on input blur', () => {
        const onBlurSpy = jest.fn();
        const component = mountBaseSelector({ onBlur: onBlurSpy }).instance();

        component.onBlur();
        expect(component.state.showSuggestions).toBe(false);
        expect(onBlurSpy).toHaveBeenCalledTimes(1);
    });

    it('should not hide suggestions when suggestion is empty', () => {
        const component = mountBaseSelector().instance();

        component.props.onSuggestionSelect(null);
        expect(component.state.showSuggestions).toBe(false);
    });

    it('should hide suggestions on input reset', () => {
        const onResetSpy = jest.fn();
        const component = mountBaseSelector({
            onReset: onResetSpy,
        }).instance();

        component.onInputReset();
        expect(component.state.showSuggestions).toBe(false);
        expect(onResetSpy).toHaveBeenCalledTimes(1);
    });

    it('should show suggestions on input reset', () => {
        const onResetSpy = jest.fn();
        const component = mountBaseSelector({
            onReset: onResetSpy,
            shouldHideSuggestionsOnReset: false,
        }).instance();

        component.onInputReset();
        expect(component.state.showSuggestions).toBe(true);
        expect(onResetSpy).toHaveBeenCalledTimes(1);
    });

    it('should increment highlightedSuggestionIndex on nextHighlightedIndex', () => {
        const component = mountBaseSelector().instance();
        const scollPosSpy = jest.fn();
        component.state.highlightedSuggestionIndex = 1;
        component.suggestionList = { setScrollPosNext: scollPosSpy };

        component.setNextHighlighted();
        expect(component.state.highlightedSuggestionIndex).toBe(2);
        expect(scollPosSpy).toHaveBeenCalledTimes(1);
    });

    it('should wrap highlightedSuggestionIndex on nextHighlightedIndex', () => {
        const component = mountBaseSelector().instance();
        const scollPosSpy = jest.fn();
        component.state.highlightedSuggestionIndex = 2;
        component.suggestionList = { setScrollPosStart: scollPosSpy };

        component.setNextHighlighted();
        expect(component.state.highlightedSuggestionIndex).toBe(0);
        expect(scollPosSpy).toHaveBeenCalledTimes(1);
    });

    it('should decrement highlightedSuggestionIndex on previousHighlightedIndex', () => {
        const component = mountBaseSelector().instance();
        const scollPosSpy = jest.fn();
        component.state.highlightedSuggestionIndex = 1;
        component.suggestionList = { setScrollPosPrevious: scollPosSpy };

        component.setPreviousHighlighted();
        expect(component.state.highlightedSuggestionIndex).toBe(0);
        expect(scollPosSpy).toHaveBeenCalledTimes(1);
    });

    it('should wrap highlightedSuggestionIndex on previousHighlightedIndex', () => {
        const component = mountBaseSelector().instance();
        const scollPosSpy = jest.fn();
        component.state.highlightedSuggestionIndex = 0;
        component.suggestionList = { setScrollPosEnd: scollPosSpy };

        component.setPreviousHighlighted();
        expect(component.state.highlightedSuggestionIndex).toBe(2);
        expect(scollPosSpy).toHaveBeenCalledTimes(1);
    });

    it('should setFirstHighlighted ', () => {
        const component = mountBaseSelector().instance();
        const scollPosSpy = jest.fn();
        component.suggestionList = { setScrollPosStart: scollPosSpy };

        component.setFirstHighlighted();
        expect(component.state.highlightedSuggestionIndex).toBe(0);
        expect(scollPosSpy).toHaveBeenCalledTimes(1);
    });

    it('should setLastHighlighted ', () => {
        const component = mountBaseSelector().instance();
        const scollPosSpy = jest.fn();
        component.suggestionList = { setScrollPosEnd: scollPosSpy };

        component.setLastHighlighted();
        expect(component.state.highlightedSuggestionIndex).toBe(2);
        expect(scollPosSpy).toHaveBeenCalledTimes(1);
    });

    it('should call onInputReset on reset button mousedown', () => {
        const component = mountBaseSelector({ value: 'notempty' });
        const onResetSpy = jest.spyOn(component.instance(), 'onInputReset');
        component.instance().forceUpdate();
        component
            .find('.ffe-base-selector__reset-button')
            .simulate('mousedown');

        expect(onResetSpy).toHaveBeenCalled();
    });

    it('should call onFocus on expandOrCollapse button mousedown when suggestions not showing', () => {
        const component = mountBaseSelector();
        const onResetSpy = jest.spyOn(component.instance(), 'onFocus');
        component.instance().forceUpdate();
        component
            .find('.ffe-base-selector__expand-button')
            .simulate('mousedown');

        expect(onResetSpy).toHaveBeenCalled();
    });

    it('should call onBlur on expandOrCollapse button mousedown when suggestions are showing', () => {
        const component = mountBaseSelector();
        component.setState({
            showSuggestions: true,
        });
        const onResetSpy = jest.spyOn(component.instance(), 'onBlur');
        component.instance().forceUpdate();
        component
            .find('.ffe-base-selector__expand-button')
            .simulate('mousedown');

        expect(onResetSpy).toHaveBeenCalled();
    });

    it('should call onInputChange on input change', () => {
        const component = mountBaseSelector();
        const onInputChange = jest.spyOn(component.instance(), 'onInputChange');
        const value = 'value';
        const event = { target: { value } };
        component.instance().forceUpdate();
        component
            .find('.ffe-base-selector__input-field')
            .simulate('change', event);

        expect(onInputChange).toHaveBeenCalledWith(value);
    });

    it('should call onBlur on input blur', () => {
        const component = mountBaseSelector();
        const onBlur = jest.spyOn(component.instance(), 'onBlur');
        component.instance().forceUpdate();
        component.find('.ffe-base-selector__input-field').simulate('blur');

        expect(onBlur).toHaveBeenCalled();
    });
});

describe('<BaseSelector> keyboard navigation', () => {
    it('should show suggestions on ALT + DOWN', () => {
        const component = mountBaseSelector().instance();
        const showHideSuggestionsSpy = jest.spyOn(
            component,
            'showOrHideSuggestions',
        );

        component.onInputKeyDown({ which: KeyCodes.DOWN, altKey: true });
        expect(showHideSuggestionsSpy).toHaveBeenCalledWith(true);
    });

    it('should highlight next if suggestion are showing on DOWN', () => {
        const component = mountBaseSelector().instance();
        const setNextHighlightedStub = jest.spyOn(
            component,
            'setNextHighlighted',
        );
        component.state.showSuggestions = true;
        const preventDefaultSpy = jest.fn();

        component.onInputKeyDown({
            which: KeyCodes.DOWN,
            preventDefault: preventDefaultSpy,
        });
        expect(setNextHighlightedStub).toHaveBeenCalledTimes(1);
        expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
    });

    it('should hide suggestions on ALT + UP', () => {
        const component = mountBaseSelector().instance();
        const showHideSuggestionsSpy = jest.spyOn(
            component,
            'showOrHideSuggestions',
        );
        component.state.showSuggestions = true;

        component.onInputKeyDown({ which: KeyCodes.UP, altKey: true });
        expect(showHideSuggestionsSpy).toHaveBeenCalledWith(false);
    });

    it('should highlight previous suggestions on UP', () => {
        const component = mountBaseSelector().instance();
        const showHideSuggestionsStub = jest.spyOn(
            component,
            'setPreviousHighlighted',
        );
        const preventDefaultSpy = jest.fn();
        component.state.showSuggestions = true;

        component.onInputKeyDown({
            which: KeyCodes.UP,
            preventDefault: preventDefaultSpy,
        });
        expect(showHideSuggestionsStub).toHaveBeenCalledTimes(1);
        expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
    });

    it('should reset input on ESC', () => {
        const component = mountBaseSelector().instance();
        const onInputResetSpy = jest.spyOn(component, 'onInputReset');

        component.onInputKeyDown({ which: KeyCodes.ESC });
        expect(onInputResetSpy).toHaveBeenCalledTimes(1);
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
        const onBlurSpy = jest.fn();
        const onFocusSpy = jest.fn();
        const component = mountBaseSelector({
            onBlur: onBlurSpy,
            onFocus: onFocusSpy,
        });
        const input = component.find(Input);
        input.simulate('focus');
        const suggestionListItem = component.find(SuggestionItem).first();
        suggestionListItem.simulate('click');

        expect(onFocusSpy).toHaveBeenCalledTimes(1);
        expect(onBlurSpy).not.toHaveBeenCalled();
    });

    it('should maintain focus on resetClick', () => {
        const onBlurSpy = jest.fn();
        const onFocusSpy = jest.fn();
        const component = mountBaseSelector({
            onBlur: onBlurSpy,
            onFocus: onFocusSpy,
        });
        const input = component.find(Input);
        input.simulate('focus');
        const resetButton = component.find(SuggestionItem).first('button');
        resetButton.simulate('click');

        expect(onFocusSpy).toHaveBeenCalledTimes(1);
        expect(onBlurSpy).not.toHaveBeenCalled();
    });

    it('should not show suggestions on focus', () => {
        const onFocus = jest.fn();
        const component = mountBaseSelector({
            shouldShowSuggestionsOnFocus: false,
            onFocus: onFocus,
        }).instance();
        const showHideSuggestionsSpy = jest.spyOn(
            component,
            'showOrHideSuggestions',
        );
        component.onFocus();

        expect(showHideSuggestionsSpy).toHaveBeenCalledWith(false, onFocus);
    });
});

describe('<BaseSelector> highCapacity', () => {
    it('should display default component when highCapacity=false', () => {
        const component = mountBaseSelector({
            shouldShowSuggestionsOnFocus: true,
            suggestions: suggestions(),
            highCapacity: false,
        });
        const input = component.find(Input);
        input.simulate('focus');

        const suggestionListContainer = component.find(SuggestionListContainer);
        expect(suggestionListContainer.length === 1).toBe(true);
    });

    it('should display high capacity component when highCapacity=true', () => {
        const component = mountBaseSelector({
            shouldShowSuggestionsOnFocus: true,
            suggestions: suggestions(),
            highCapacity: true,
        });
        const input = component.find(Input);
        input.simulate('focus');

        const suggestionListContainer = component.find(
            SuggestionListContainerHighCapacity,
        );
        expect(suggestionListContainer.length === 1).toBe(true);
    });
});
