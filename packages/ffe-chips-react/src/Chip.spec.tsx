import { render, screen } from '@testing-library/react';
import React from 'react';
import { Chip } from './Chip';

describe('<ChipBase />', () => {
    it('should add size modifier', () => {
        render(<Chip size="md">label</Chip>);
        const chip = screen.getByRole('button', { name: 'label' });
        expect(chip.classList.contains('ffe-chip')).toBeTruthy();
        expect(chip.classList.contains('ffe-chip--md')).toBeTruthy();
    });

    it('should add icon modifier', () => {
        const { rerender } = render(<Chip size="md">label</Chip>);
        const chip = screen.getByRole('button', { name: 'label' });
        expect(chip.classList.contains('ffe-chip')).toBeTruthy();
        expect(chip.classList.contains('ffe-chip--icon-right')).toBeFalsy();
        expect(chip.classList.contains('ffe-chip--icon-left')).toBeFalsy();

        rerender(
            <Chip size="md" leftIcon={<span />}>
                label
            </Chip>,
        );

        expect(chip.classList.contains('ffe-chip')).toBeTruthy();
        expect(chip.classList.contains('ffe-chip--icon-right')).toBeFalsy();
        expect(chip.classList.contains('ffe-chip--icon-left')).toBeTruthy();

        rerender(
            <Chip size="md" rightIcon={<span />}>
                label
            </Chip>,
        );

        expect(chip.classList.contains('ffe-chip')).toBeTruthy();
        expect(chip.classList.contains('ffe-chip--icon-right')).toBeTruthy();
        expect(chip.classList.contains('ffe-chip--icon-left')).toBeFalsy();
    });

    it('should set ref correctly', () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(
            <Chip size="md" ref={ref}>
                label
            </Chip>,
        );
        const chip = screen.getByRole('button');
        expect(chip).toBe(ref.current);
    });
});
