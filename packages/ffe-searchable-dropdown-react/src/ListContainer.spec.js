import { shallow } from 'enzyme';
import React from 'react';
import { yrker } from '../exampleData';
import ListContainer from './ListContainer';
import ListItem from './ListItem';
const noop = t => t;

const noMatchText = 'Søket ga ingen treff';

const defaultProps = {
    dropdownList: yrker,
    highlightedIndex: -1,
    placeholder: 'Velg yrke',
    noMatch: noMatchText,
    dropdownAttributes: ['beskrivelse'],
    searchAttributes: ['beskrivelse'],
    onSelect: noop,
    refHighlightedListItem: noop,
};

const mountDropdownWithProps = props => shallow(<ListContainer {...props} />);

describe('<ListContainer>', () => {
    it('renders all elements in dropdownList', () => {
        const component = mountDropdownWithProps(defaultProps);
        expect(component.find(ListItem)).toHaveLength(200);
        expect(component.find('li.ffe-searchable-dropdown__item')).toHaveLength(
            0,
        );
    });

    it('renders noMatch when dropdown list is empty', () => {
        const props = {
            ...defaultProps,
            dropdownList: [],
        };
        const component = mountDropdownWithProps(props);
        expect(
            component.find('li.ffe-searchable-dropdown__item').text(),
        ).toEqual(noMatchText);
    });

    it('limits the number of dropdown elements which are rendered', () => {
        const props = {
            ...defaultProps,
            maxRenderedDropdownElements: 10,
        };
        const component = mountDropdownWithProps(props);
        expect(component.find(ListItem)).toHaveLength(10);
        expect(
            component.find('li.ffe-searchable-dropdown__item').text(),
        ).toEqual('...');
    });

    it('renders only one element when maxRenderedDropdownElements is set to 1', () => {
        const props = {
            ...defaultProps,
            maxRenderedDropdownElements: 1,
        };
        const component = mountDropdownWithProps(props);
        expect(component.find(ListItem)).toHaveLength(1);
        expect(
            component.find('li.ffe-searchable-dropdown__item').text(),
        ).toEqual('...');
    });

    it('renders all elements when maxRenderedDropdownElements is set to 0', () => {
        const props = {
            ...defaultProps,
            maxRenderedDropdownElements: 0,
        };
        const component = mountDropdownWithProps(props);
        expect(component.find(ListItem)).toHaveLength(200);
        expect(component.find('li.ffe-searchable-dropdown__item')).toHaveLength(
            0,
        );
    });

    it('renders all elements when maxRenderedDropdownElements is negative', () => {
        const props = {
            ...defaultProps,
            maxRenderedDropdownElements: -1,
        };
        const component = mountDropdownWithProps(props);
        expect(component.find(ListItem)).toHaveLength(200);
        expect(component.find('li.ffe-searchable-dropdown__item')).toHaveLength(
            0,
        );
    });

    it('renders all elements when maxRenderedDropdownElements is larger than dropdownList length', () => {
        const props = {
            ...defaultProps,
            dropdownList: yrker.slice(0, 5),
            maxRenderedDropdownElements: 10,
        };
        const component = mountDropdownWithProps(props);
        expect(component.find(ListItem)).toHaveLength(5);
        expect(component.find('li.ffe-searchable-dropdown__item')).toHaveLength(
            0,
        );
    });

    it('renders all elements when maxRenderedDropdownElements equals dropdownList length', () => {
        const props = {
            ...defaultProps,
            dropdownList: yrker.slice(0, 10),
            maxRenderedDropdownElements: 10,
        };
        const component = mountDropdownWithProps(props);
        expect(component.find(ListItem)).toHaveLength(10);
        expect(component.find('li.ffe-searchable-dropdown__item')).toHaveLength(
            0,
        );
    });

    it('only renders noMatch when dropdown list is empty and maxRenderedDropdownElements is set', () => {
        const props = {
            ...defaultProps,
            maxRenderedDropdownElements: 10,
            dropdownList: [],
        };
        const component = mountDropdownWithProps(props);
        expect(component.find(ListItem)).toHaveLength(0);
        expect(
            component.find('li.ffe-searchable-dropdown__item').text(),
        ).toEqual(noMatchText);
    });

    it('highlights correct element', () => {
        const highlightedIndex = 4;
        const maxRenderedDropdownElements = 50;
        const props = {
            ...defaultProps,
            maxRenderedDropdownElements: maxRenderedDropdownElements,
            highlightedIndex: highlightedIndex,
        };

        const component = mountDropdownWithProps(props);
        for (let i = 0; i < maxRenderedDropdownElements; i++) {
            expect(
                component
                    .find(ListItem)
                    .at(i)
                    .props().isHighlighted,
            ).toBe(i === highlightedIndex);
        }
    });
});
