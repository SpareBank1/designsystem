/*eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';
import Input from './InputField';
const i = t => t;

const mountInputFieldWithProps = props => shallow(<Input {...props}/>);

describe('<Input>', () => {
    const props = {
        onBlur: i,
        onClick: i,
        onFocus: i,
        onKeyDown: i,
        placeholder:"Velg",
        onInputChange:i,
        displayResetWhenInputHasValue:true,
        inputId: 'anId',
        inputValue:'',
        onReset:i,
        searchTerm:'',
    };

    const component = mountInputFieldWithProps(props);

    test('renders', () =>
        expect(component.find('.ffe-searchable-dropdown__dropdown-input-field')).toHaveLength(1));

     test('input field has an Id', () =>
        expect(component.find('input').prop('id')).toBe('anId'));

    test('input field is empty', () => {
        expect(component.find('input').prop('value')).toBe('');
    });

    test('displays reset when input has value', () => {
        const componentWithInputValue = mountInputFieldWithProps({...props, inputValue:'aa'});
        expect(componentWithInputValue.find('input').prop('value')).toBe('aa');
        expect(componentWithInputValue.find('.ffe-searchable-dropdown__reset-button')).toHaveLength(1);
    });

    test('do not display reset when input is empty', () => {
        expect(component.find('input').prop('value')).toBe('');
        expect(component.find('.ffe-searchable-dropdown__reset-button')).toHaveLength(0);
    });
});

