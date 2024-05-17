import React from 'react';
import { Icon } from './Icon';
import { render, screen } from '@testing-library/react';

describe('Icon', () => {
    it('renders with role="img', () => {
        render(<Icon fileUrl="fileUrl" ariaLabel="ariaLabel" />);
        const icon = screen.getByRole('img');
        expect(icon.classList.contains('ffe-icons')).toBeTruthy();
    });

    it('renders correct classname based on size-prop', () => {
        render(<Icon fileUrl="fileUrl" ariaLabel="ariaLabel" size="sm" />);
        const icon = screen.getByRole('img');
        expect(icon.classList.contains('ffe-icons--sm')).toBeTruthy();
    });

    it('applies additional CSS classes when provided', () => {
        render(
            <Icon
                fileUrl="fileUrl"
                ariaLabel="ariaLabel"
                size="md"
                className="my-class"
            />,
        );
        const icon = screen.getByRole('img');
        expect(icon.classList.contains('ffe-icons')).toBeTruthy();
        expect(icon.classList.contains('ffe-icons--md')).toBeTruthy();
        expect(icon.classList.contains('my-class')).toBeTruthy();
    });
});
