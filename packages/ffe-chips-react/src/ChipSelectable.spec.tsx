import React from 'react';
import { ChipSelectable } from './ChipSelectable';
import { render, screen } from '@testing-library/react';

describe('<ChipBase />', () => {
    it('should add selected modifier', () => {
        const { rerender } = render(
            <ChipSelectable size="md" isSelected={false}>
                label
            </ChipSelectable>,
        );
        let chip = screen.getByRole('button', { name: 'label' });
        expect(chip.classList.contains('ffe-chip')).toBeTruthy();
        expect(chip.classList.contains('ffe-chip--selected')).toBeFalsy();

        rerender(
            <ChipSelectable size="md" isSelected={true}>
                label
            </ChipSelectable>,
        );
        chip = screen.getByRole('button', { name: 'label' });
        expect(chip.classList.contains('ffe-chip')).toBeTruthy();
        expect(chip.classList.contains('ffe-chip--selected')).toBeTruthy();
    });
});
