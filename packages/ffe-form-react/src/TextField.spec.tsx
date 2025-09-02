import React from 'react';
import { TextField, TextFieldProps } from './TextField';
import { render, screen } from '@testing-library/react';

const TEST_ID = 'textfield-test-id';
const renderTextField = (props?: Partial<TextFieldProps>) =>
    render(<TextField {...props} />);

describe('<TextField />', () => {
    it('renders an input element', () => {
        renderTextField();
        const textfield = screen.getByRole('textbox');
        expect(textfield.classList.contains('ffe-text-field')).toBeTruthy();
    });

    it('renders affixes', () => {
        renderTextField({ prefix: 'Prefix', suffix: 'Suffix' });
        const textfield = screen.getByRole('textbox');
        const wrapper = textfield.parentElement;
        expect(wrapper && wrapper.querySelector('.ffe-text-field__prefix')).toBeTruthy();
        expect(wrapper && wrapper.querySelector('.ffe-text-field__suffix')).toBeTruthy();
    });

    it('passes props', () => {
        renderTextField({
            autoComplete: 'off',
            className: 'app-textfield',
        });
        const textfield = screen.getByRole('textbox');
        const wrapper = textfield.parentElement;
        expect(textfield.getAttribute('autoComplete')).toBe('off');
        expect(wrapper && wrapper.classList.contains('app-textfield')).toBeTruthy();
        expect(textfield.classList.contains('ffe-text-field')).toBeTruthy();
    });

    it('sets the correct class for inline-modifer', () => {
        const { rerender } = render(<TextField data-testid={TEST_ID} />);
        const textfield = screen.getByTestId(TEST_ID);
        const wrapper = textfield.parentElement;
        expect(wrapper && wrapper.classList.contains('ffe-text-field__wrapper--inline')).toBeFalsy();
        rerender(<TextField inline={true} />);
        expect(wrapper && wrapper.classList.contains('ffe-text-field__wrapper--inline')).toBeTruthy();
    });

    it('sets the correct class for textRightAlign', () => {
        const { rerender } = render(<TextField />);
        const textfield = screen.getByRole('textbox');
        expect(
            textfield.classList.contains('ffe-text-field--text-right-align'),
        ).toBeFalsy();
        rerender(<TextField textRightAlign={true} />);
        expect(
            textfield.classList.contains('ffe-text-field--text-right-align'),
        ).toBeTruthy();
    });
});