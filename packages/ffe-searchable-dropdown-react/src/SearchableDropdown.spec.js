/*eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';
import { companies } from '../exampleData';
import SearchableDropdown from './SearchableDropdown';
import ScrollContainer from './ScrollContainer';
import Input from './InputField';
const i = t => t;

const mountDropdownWithProps = props =>
    shallow(<SearchableDropdown {...props} />);

describe('<SearchableDropdown>', () => {
    const props = {
        dropdownList: companies,
        placeholder: 'Velg',
        noMatch: 'Søket ga ingen treff',
        dropdownAttributes: ['companyName'],
        searchAttributes: ['companyName'],
        onSelect: i,
        onInputChange: i,
        onReset: i,
        inputValue: '',
        displayResetWhenInputHasValue: true,
        label: 'Foo',
        inputId: 'inputid',
        errorMessage: '404',
    };

    const setHighlightedIndexSpy = jest.spyOn(
        SearchableDropdown.prototype,
        'setHighlightedIndex',
    );
    const component = mountDropdownWithProps(props);

    it('errorMessage <div> ', () =>
        expect(component.find('.ffe-field-error-message')).toHaveLength(1));

    it('renders', () =>
        expect(component.find('.ffe-searchable-dropdown')).toHaveLength(1));

    it('renders <Input>', () => expect(component.find(Input)).toHaveLength(1));

    it('renders <label> ', () =>
        expect(component.find('.ffe-form-label')).toHaveLength(1));

    it('does not render <ScrollContainer> when dropdown is closed', () => {
        expect(component.state('showListContainer')).toBe(false);
        expect(component.find(ScrollContainer)).toHaveLength(0);
    });

    it('renders <ScrollContainer> on click', () => {
        component.find(Input).prop('onClick')();
        component.update();
        expect(component.find(ScrollContainer)).toHaveLength(1);
        expect(component.state('showListContainer')).toEqual(true);
    });

    it('renders <ScrollContainer> on arrowDown', () => {
        const arrowDownEvent = { key: 'ArrowDown', preventDefault: i };
        component.find(Input).prop('onKeyDown')(arrowDownEvent);
        expect(component.find(ScrollContainer)).toHaveLength(1);
        expect(component.state('showListContainer')).toEqual(true);
    });

    describe('keyDown', () => {
        it('arrowDown', () => {
            const arrowDownEvent = { key: 'ArrowDown', preventDefault: i };
            component.find(Input).prop('onKeyDown')(arrowDownEvent);
            expect(component.state('showListContainer')).toEqual(true);
            expect(setHighlightedIndexSpy).toHaveBeenCalledWith('DOWN', -1, [
                { companyName: 'Bedrift 1' },
                { companyName: 'Bedrift 2' },
            ]);
        });

        it('arrowUp', () => {
            const arrowUpEvent = { key: 'ArrowUp', preventDefault: i };
            component.find(Input).prop('onKeyDown')(arrowUpEvent);
            expect(component.state('showListContainer')).toEqual(true);
            expect(setHighlightedIndexSpy).toHaveBeenCalledWith('UP', -1, [
                { companyName: 'Bedrift 1' },
                { companyName: 'Bedrift 2' },
            ]);
        });
    });
});
