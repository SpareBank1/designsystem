import React from 'react';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
    it('should render a badge', () => {
        render(<Badge>11</Badge>);
        const badge = screen.getByText('11');
        expect(badge.classList.contains('ffe-badge')).toBeTruthy();
    });

    it('should render a badge with className', () => {
        render(<Badge className="custom-class">11</Badge>);
        const badge = screen.getByText('11');
        expect(badge.classList.contains('custom-class')).toBeTruthy();
    });
});
