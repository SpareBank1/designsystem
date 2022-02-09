import React from 'react';

import SuggestionItem from './SuggestionItem';

function item() {
    return { header: 'header' };
}

function renderSuggestionItem(
    isHighlighted = true,
    refHighlightedSuggestion = () => {},
    onSelect = () => {},
) {
    return mount(
        <SuggestionItem
            onSelect={onSelect}
            item={item()}
            id="suggestion-option-0"
            isHighlighted={isHighlighted}
            refHighlightedSuggestion={refHighlightedSuggestion}
            render={({ header }) => <h1>{header}</h1>}
        />,
    );
}

describe('<SuggestionItem />', () => {
    it('item is rendered', () => {
        const wrapper = renderSuggestionItem();
        const li = wrapper.find('li');

        expect(li.prop('id') === 'suggestion-option-0').toBe(true);
        expect(li.childAt(0).html()).toBe('<h1>header</h1>');
    });

    it('is aria-selected', () => {
        const refHighlightedSuggestionSpy = jest.fn();
        const wrapper = renderSuggestionItem(true, refHighlightedSuggestionSpy);

        expect(wrapper.children().prop('aria-selected')).toBe(true);
        expect(refHighlightedSuggestionSpy).toHaveBeenCalledTimes(1);
    });

    it('not aria-selected', () => {
        const refHighlightedSuggestionSpy = jest.fn();
        const wrapper = renderSuggestionItem(
            false,
            refHighlightedSuggestionSpy,
        );

        expect(wrapper.children().prop('aria-selected')).toBe(false);
        expect(refHighlightedSuggestionSpy).not.toHaveBeenCalled();
    });

    it('onSelect called', () => {
        const onSelectSpy = jest.fn();
        const wrapper = renderSuggestionItem(true, () => {}, onSelectSpy);
        wrapper.simulate('mousedown');
        expect(onSelectSpy).toHaveBeenCalledWith(item());
    });
});
