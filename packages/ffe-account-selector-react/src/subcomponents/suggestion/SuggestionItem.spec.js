import React from 'react';
import { mount } from 'enzyme';

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
        const div = wrapper.find('div');

        expect(div.prop('id') === 'suggestion-option-0').toBe(true);
        expect(div.childAt(0).html()).toBe('<h1>header</h1>');
    });

    it('isHighlighted', () => {
        const refHighlightedSuggestionSpy = jest.fn();
        const wrapper = renderSuggestionItem(true, refHighlightedSuggestionSpy);

        expect(
            wrapper.children().hasClass('ffe-account-suggestion--highlighted'),
        ).toBe(true);
        expect(wrapper.children().hasClass('ffe-account-suggestion')).toBe(
            true,
        );
        expect(refHighlightedSuggestionSpy).toHaveBeenCalledTimes(1);
    });

    it('not Highlighted', () => {
        const refHighlightedSuggestionSpy = jest.fn();
        const wrapper = renderSuggestionItem(
            false,
            refHighlightedSuggestionSpy,
        );

        expect(
            wrapper.children().hasClass('ffe-account-suggestion--highlighted'),
        ).toBe(false);
        expect(wrapper.children().hasClass('ffe-account-suggestion')).toBe(
            true,
        );
        expect(refHighlightedSuggestionSpy).not.toHaveBeenCalled();
    });

    it('onSelect called', () => {
        const onSelectSpy = jest.fn();
        const wrapper = renderSuggestionItem(true, () => {}, onSelectSpy);
        wrapper.simulate('mousedown');
        expect(onSelectSpy).toHaveBeenCalledWith(item());
    });
});
