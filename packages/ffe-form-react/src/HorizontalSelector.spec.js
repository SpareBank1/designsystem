import React from 'react';
import { mount } from 'enzyme';
import HorizontalSelector from './HorizontalSelector';

const options = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 1,
        label: '1',
    },
    {
        value: 2,
        label: '2',
    },
    {
        value: 3,
        label: '3',
    },
    {
        value: 4,
        label: '4',
    },
];
const getWrapper = () => {
    return mount(
        <HorizontalSelector
            options={options}
            selected={options[0]}
            label={'Antall barn'}
            description={'Velg hvor mange barn du har'}
            onChange={() => {}}
            field={'antallbarn'}
        />,
    );
};

describe('<HorizontalSelector>', () => {
    const optionClassName = 'horizontal-selector-option';
    const elementByCSS = `.${optionClassName}`;
    const selectedClassName = `${optionClassName} horizontal-selector-selected horizontal-selector-option--text-center`;
    it('renders the appropriate number options', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('.horizontal-selector').find('label').length).toBe(
            options.length,
        );
    });
    it('sets the correct selected option when clicked', () => {
        const wrapper = getWrapper();
        let initialSelectedElement = wrapper.find(elementByCSS).at(0);
        expect(initialSelectedElement.hasClass(selectedClassName)).toBe(true);

        const element = wrapper.find(elementByCSS).at(3);
        element.find('input').simulate('click');

        const updatedElement = wrapper.find(elementByCSS).at(3);
        expect(updatedElement.hasClass(selectedClassName)).toBe(true);
        initialSelectedElement = wrapper.find(elementByCSS).at(0);
        expect(initialSelectedElement.hasClass(selectedClassName)).toBe(false);
    });
    it('emits onChange properly', () => {
        const onChange = jest.fn();
        const wrapper = mount(
            <HorizontalSelector
                options={options}
                selected={options[0]}
                label={'Antall barn'}
                description={'Velg hvor mange barn du har'}
                onChange={onChange}
                field={'antallbarn'}
            />,
        );

        const element = wrapper.find(elementByCSS).at(3);
        element.find('input').simulate('click');

        expect(onChange).toHaveBeenCalledWith('antallbarn', 3);
    });
});
