import React from 'react';
import { SuggestionItem } from './SuggestionItem';
import { render, screen, fireEvent } from '@testing-library/react';

function getSuggestion() {
    return { name: 'name' };
}

const renderSuggestionItem = (
    isHighlighted = true,
    refHighlightedSuggestion = () => {},
    onSelect = () => {},
) => {
    return render(
        <SuggestionItem<{ name: string }>
            onSelect={onSelect}
            suggestion={getSuggestion()}
            id="suggestion-option-0"
            isHighlighted={isHighlighted}
            refHighlightedSuggestion={refHighlightedSuggestion}
            render={({ name }) => <h1>{name}</h1>}
        />,
    );
};

describe('<SuggestionItem />', () => {
    it('item is rendered', () => {
        renderSuggestionItem();
        const option = screen.getByRole('option');
        expect(option.getAttribute('id')).toBe('suggestion-option-0');
        expect(option.innerHTML).toBe('<h1>name</h1>');
    });

    it('is aria-selected', () => {
        const refHighlightedSuggestionSpy = jest.fn();
        renderSuggestionItem(true, refHighlightedSuggestionSpy);

        const option = screen.getByRole('option');
        expect(option.getAttribute('aria-selected')).toBe('true');
        expect(refHighlightedSuggestionSpy).toHaveBeenCalledTimes(1);
    });

    it('not aria-selected', () => {
        const refHighlightedSuggestionSpy = jest.fn();
        renderSuggestionItem(false, refHighlightedSuggestionSpy);

        const option = screen.getByRole('option');
        expect(option.getAttribute('aria-selected')).toBe('false');
        expect(refHighlightedSuggestionSpy).not.toHaveBeenCalled();
    });

    it('onSelect called', () => {
        const onSelectSpy = jest.fn();
        renderSuggestionItem(true, () => {}, onSelectSpy);
        const option = screen.getByRole('option');
        fireEvent.mouseDown(option);
        expect(onSelectSpy).toHaveBeenCalledWith(getSuggestion());
    });
});
