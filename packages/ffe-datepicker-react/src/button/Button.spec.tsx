import React from 'react';
import { Button } from './Button';
import { render, screen } from '@testing-library/react';

describe('<Button />', () => {
    it('should have aria-label with text', () => {
        const ref = React.createRef<HTMLButtonElement>();

        const { rerender } = render(
            <Button language="nb" onClick={() => {}} value="" ref={ref} />,
        );
        let button = screen.getByRole('button');
        expect(button.getAttribute('aria-label')).toBe('Velg dato');

        rerender(
            <Button
                language="nb"
                onClick={() => {}}
                value="24.12.2020"
                ref={ref}
            />,
        );
        button = screen.getByRole('button');
        expect(button.getAttribute('aria-label')).toBe(
            'Endre dato, valgt dato er 24.12.2020',
        );
    });
});
