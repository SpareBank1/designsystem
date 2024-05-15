import React from 'react';
import { Button } from './Button';
import { render, screen } from '@testing-library/react';

const defaultProps = {
    value: '',
    locale: 'nb' as const,
    onClick: () => {},
};

describe('<Button />', () => {
    it('should have aria-label with text', () => {
        const { rerender } = render(<Button {...defaultProps} />);
        expect(
            screen.getByRole('button', { name: 'Velg dato' }),
        ).toBeInTheDocument();
        rerender(<Button {...defaultProps} value="24.12.2020" />);
        expect(
            screen.getByRole('button', {
                name: 'Endre dato, valgt dato er 24.12.2020',
            }),
        ).toBeInTheDocument();
    });
});
