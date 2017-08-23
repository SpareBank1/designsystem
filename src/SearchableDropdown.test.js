/*eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';
import defaultMock from '../mock/mockDefaultExample';
import SearchableDropdown from './SearchableDropdown';
import ScrollContainer from './ScrollContainer';
import Input from './InputField';
const i = t => t;


const mountDropdownWithProps = props => shallow(<SearchableDropdown {...props}/>);

describe('<SearchableDropdown>', () => {
    const props = {
        dropdownList: defaultMock.companies,
        placeholder:"Velg",
        noMatch:"Søket ga ingen treff",
        dropdownAttributes:['companyName'],
        searchAttributes:['companyName'],
        onSelect:defaultMock.onSelect,
        onInputChange:defaultMock.onChange,
        onReset:defaultMock.onReset,
        displayResetWhenInputHasValue:true,
        label:"Foo",
        inputId: "inputid"
    };

    const setHighlightedIndexSpy = jest.spyOn(SearchableDropdown.prototype, 'setHighlightedIndex');
    const component = mountDropdownWithProps(props);


    test('renders', () =>
        expect(component.find('.ffe-searchable-dropdown')).toHaveLength(1));

    test('renders <Input>', () =>
        expect(component.find(Input)).toHaveLength(1));

    test('renders <label> ',() =>
      expect(component.find('.ffe-form-label')).toHaveLength(1));

    test('does not render <ScrollContainer> when dropdown is closed', () => {
        expect(component.state('showListContainer')).toBe(false);
        expect(component.find(ScrollContainer)).toHaveLength(0);
    });

    test('renders <ScrollContainer> on click', () => {
        component.find(Input).prop('onClick')();
        expect(component.find(ScrollContainer)).toHaveLength(1);
        expect(component.state('showListContainer')).toEqual(true);
    });
    test('renders <ScrollContainer> on arrowDown', () => {
        const arrowDownEvent = {key: 'ArrowDown', preventDefault: i};
        component.find(Input).prop('onKeyDown')(arrowDownEvent);
        expect(component.find(ScrollContainer)).toHaveLength(1);
        expect(component.state('showListContainer')).toEqual(true);
    });

    describe('keyDown', () => {
        test('arrowDown', () => {
            const arrowDownEvent = {key: 'ArrowDown', preventDefault: i};
            component.find(Input).prop('onKeyDown')(arrowDownEvent);
            expect(component.state('showListContainer')).toEqual(true);
            expect(setHighlightedIndexSpy).toHaveBeenCalledWith("DOWN", -1, [{"companyName": "Bedrift 1"}, {"companyName": "Bedrift 2"}]);
        });

        test('arrowUp', () => {
            const arrowUpEvent = {key: 'ArrowUp', preventDefault: i};
            component.find(Input).prop('onKeyDown')(arrowUpEvent);
            expect(component.state('showListContainer')).toEqual(true);
            expect(setHighlightedIndexSpy).toHaveBeenCalledWith("UP", -1, [{"companyName": "Bedrift 1"}, {"companyName": "Bedrift 2"}]);
        });
    });

});
