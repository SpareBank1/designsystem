import React from 'react';

import { Spinner } from '@sb1/ffe-spinner-react';

import SuggestionList from './SuggestionList';
import SuggestionListContainer from './SuggestionListContainer';

function suggestions() {
    return [{ header: '1' }, { header: '2' }];
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
        id: 'id',
    };
}

function propsSuggestionListContainer() {
    return {
        ...propsSuggestionList(),
        highlightedIndex: 2,
        autoHeight: false,
    };
}

function mountSuggestionList(props) {
    return mount(<SuggestionList {...propsSuggestionList()} {...props} />);
}

function shallowSuggestionList(props) {
    return shallow(<SuggestionList {...propsSuggestionList()} {...props} />);
}

function mountSuggestionListContainer(props = propsSuggestionListContainer()) {
    const ref = React.createRef();
    return mount(<SuggestionListContainer ref={ref} {...props} />);
}

describe('<SuggestionList />', () => {
    it('highlighted <Suggestion> set to highlightedIndex', () => {
        const wrapper = mountSuggestionList();
        const suggestionList = wrapper.find('[role="listbox"]');
        const firstRow = suggestionList.childAt(0);
        const secondRow = suggestionList.childAt(1);

        expect(suggestionList.children().length).toBe(2);
        expect(firstRow.children().length).toBe(1);
        expect(secondRow.children().length).toBe(1);
        expect(firstRow.childAt(0).props().isHighlighted).toBe(false);
        expect(secondRow.childAt(0).props().isHighlighted).toBe(true);
        expect(wrapper.find(Spinner).length === 0).toBe(true);
    });

    it('should renderNoSuggestions when suggestions is empty', () => {
        const renderNoMatchesSpy = jest.fn();
        const wrapper = shallowSuggestionList({
            ...propsSuggestionList(),
            suggestions: [],
            renderNoMatches: renderNoMatchesSpy,
        });
        const ul = wrapper.find('ul');
        expect(ul.children().length).toBe(1);
        expect(renderNoMatchesSpy).toHaveBeenCalled();
        expect(wrapper.find(Spinner).length === 0).toBe(true);
    });

    it('should render spinner', () => {
        const wrapper = shallowSuggestionList({ isLoading: true });
        expect(wrapper.find(Spinner).length === 1).toBe(true);
    });
});

describe('<SuggestionListContainer />', () => {
    it('should set scrollPos to start', () => {
        const component = mountSuggestionListContainer().instance();
        const scrollSpy = jest.spyOn(component.scrollbars, 'scrollTop');

        component.setScrollPosStart();
        expect(scrollSpy).toHaveBeenCalledWith(0);
    });

    it('should set scrollPos to end', () => {
        const component = mountSuggestionListContainer().instance();
        component.scrollbars.getScrollHeight = jest.fn().mockReturnValue(300);
        const scrollSpy = jest.spyOn(component.scrollbars, 'scrollTop');

        component.setScrollPosEnd();
        expect(scrollSpy).toHaveBeenCalledWith(300);
    });

    it('should set scrollPos to next', () => {
        const component = mountSuggestionListContainer().instance();
        component.refHighlightedSuggestion({ clientHeight: 50 });
        const scrollSpy = jest.spyOn(component.scrollbars, 'scrollTop');

        component.setScrollPosNext();
        expect(scrollSpy).toHaveBeenCalledWith(100);
    });

    it('should set scrollPos to previous', () => {
        const component = mountSuggestionListContainer().instance();
        component.refHighlightedSuggestion({ clientHeight: 50 });
        const scrollSpy = jest.spyOn(component.scrollbars, 'scrollTop');

        component.setScrollPosPrevious();
        expect(scrollSpy).toHaveBeenCalledWith(50);
    });
});
