import { shallow } from 'enzyme';
import React from 'react';
import Input from './InputField';
const i = t => t;

const mountInputFieldWithProps = props => shallow(<Input {...props} />);

describe('<Input>', () => {
    const props = {
        onBlur: i,
        onClick: i,
        onFocus: i,
        onKeyDown: i,
        placeholder: 'Velg',
        onInputChange: i,
        displayResetWhenInputHasValue: true,
        inputId: 'anId',
        inputValue: '',
        onReset: i,
        searchTerm: '',
    };

    const component = mountInputFieldWithProps(props);

    it('renders', () =>
        expect(component.find('.ffe-dropdown')).toHaveLength(1));

    it('input field has an Id', () =>
        expect(component.find('input').prop('id')).toBe('anId'));

    it('input field is empty', () => {
        expect(component.find('input').prop('value')).toBe('');
    });

    it('displays reset when input has value', () => {
        const componentWithInputValue = mountInputFieldWithProps({
            ...props,
            inputValue: 'aa',
        });
        expect(componentWithInputValue.find('input').prop('value')).toBe('aa');
        expect(
            componentWithInputValue.find(
                '.ffe-searchable-dropdown__reset-button',
            ),
        ).toHaveLength(1);
    });

    it('do not display reset when input is empty', () => {
        expect(component.find('input').prop('value')).toBe('');
        expect(
            component.find('.ffe-searchable-dropdown__reset-button'),
        ).toHaveLength(0);
    });

    it('input field should have autoComplete off', () => {
        expect(component.find('input').prop('autoComplete')).toBe('off');
    });
});
