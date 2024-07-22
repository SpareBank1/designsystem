import React from 'react';
import { GroupCard } from './GroupCard';
import { render, screen } from '@testing-library/react';
import { GroupCardElement } from './GroupCardElement';

describe('GroupCard', () => {
    it('should render correct class', () => {
        render(
            <GroupCard className="my-custom-class">
                <div>Test</div>
            </GroupCard>,
        );
        const card = screen.getByRole('group');
        expect(card.classList.contains('ffe-group-card')).toBeTruthy();
        expect(card.classList.contains('my-custom-class')).toBeTruthy();
    });

    it('should render GroupCardElement with correct class when provided as child', () => {
        render(
            <GroupCard>
                <GroupCardElement>Hello world</GroupCardElement>
            </GroupCard>,
        );
        const cardGroup = screen.getByRole('group');
        const cardGroupElement = cardGroup.querySelector(
            '.ffe-group-card__element',
        );
        expect(cardGroupElement?.textContent).toBe('Hello world');
    });
});
