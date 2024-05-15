import React from 'react';
import { InputTextLike, InputTextLikeProps } from './InputTextLike';
import { render, screen } from '@testing-library/react';

const renderInputTextLike = (props: InputTextLikeProps) =>
    render(<InputTextLike {...props} />);

describe('<InputTextLike />', () => {
    it('renders an input element', () => {
        renderInputTextLike({
            ariaLabel: 'aria-label',
        });
        const input = screen.getByRole('textbox');
        expect(input.classList.contains('ffe-input-field')).toBeTruthy();
        expect(
            input.classList.contains('ffe-input-field--text-like'),
        ).toBeTruthy();
    });

    it('passes props', () => {
        renderInputTextLike({
            ariaLabel: 'aria-label',
            className: 'app-input',
        });
        const input = screen.getByRole('textbox');
        expect(input.classList.contains('app-input')).toBeTruthy();
        expect(input.classList.contains('ffe-input-field')).toBeTruthy();
        expect(
            input.classList.contains('ffe-input-field--text-like'),
        ).toBeTruthy();
        expect(input.getAttribute('aria-label')).toBe('aria-label');
    });
});
