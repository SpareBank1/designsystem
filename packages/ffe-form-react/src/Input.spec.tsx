import React from 'react';
import { Input, InputProps } from './Input';
import { render, screen } from '@testing-library/react';

const renderInput = (props?: Partial<InputProps>) =>
    render(<Input {...props} />);

describe('<Input />', () => {
    it('renders an input element', () => {
        renderInput();
        const input = screen.getByRole('textbox');
        expect(input.classList.contains('ffe-input-field')).toBeTruthy();
    });

    it('passes props', () => {
        renderInput({
            autoComplete: 'off',
            className: 'app-input',
        });
        const input = screen.getByRole('textbox');
        expect(input.getAttribute('autoComplete')).toBe('off');
        expect(input.classList.contains('app-input')).toBeTruthy();
        expect(input.classList.contains('ffe-input-field')).toBeTruthy();
    });

    it('sets the correct class for inline-modifer', () => {
        const { rerender } = render(<Input />);
        const input = screen.getByRole('textbox');
        expect(input.classList.contains('ffe-input-field--inline')).toBeFalsy();
        rerender(<Input inline={true} />);
        expect(
            input.classList.contains('ffe-input-field--inline'),
        ).toBeTruthy();
    });

    it('sets the correct class for textRightAlign', () => {
        const { rerender } = render(<Input />);
        const input = screen.getByRole('textbox');
        expect(
            input.classList.contains('ffe-input-field--text-right-align'),
        ).toBeFalsy();
        rerender(<Input textRightAlign={true} />);
        expect(
            input.classList.contains('ffe-input-field--text-right-align'),
        ).toBeTruthy();
    });
});
