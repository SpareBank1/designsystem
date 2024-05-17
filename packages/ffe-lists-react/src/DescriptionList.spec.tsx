import React from 'react';
import { DescriptionList, DescriptionListProps } from './DescriptionList';
import { DescriptionListTerm } from './DescriptionListTerm';
import { DescriptionListDescription } from './DescriptionListDescription';
import { render, screen } from '@testing-library/react';

const TEST_ID = 'TEST_ID';

const renderDescriptionList = (props?: DescriptionListProps) =>
    render(
        <DescriptionList {...props} data-testid={TEST_ID}>
            <DescriptionListTerm>Porsche</DescriptionListTerm>
            <DescriptionListDescription>
                German car maker
            </DescriptionListDescription>
            <DescriptionListTerm>Toyota</DescriptionListTerm>
            <DescriptionListDescription>
                Japanese toy maker
            </DescriptionListDescription>
        </DescriptionList>,
    );

describe('<DescriptionList>', () => {
    it('has the correct class', () => {
        renderDescriptionList({
            className: 'test-class',
        });
        const dl = screen.getByTestId(TEST_ID);

        expect(dl.classList.contains('ffe-description-list')).toBe(true);
        expect(dl.classList.contains('test-class')).toBe(true);
    });
    it('sets the correct class for modifier props', () => {
        const { rerender } = render(
            <DescriptionList data-testid={TEST_ID}>
                <DescriptionListTerm>Porsche</DescriptionListTerm>
                <DescriptionListDescription>
                    German car maker
                </DescriptionListDescription>
            </DescriptionList>,
        );

        expect(
            screen
                .getByTestId(TEST_ID)
                .classList.contains('ffe-description-list--md'),
        ).toBe(false);
        expect(
            screen
                .getByTestId(TEST_ID)
                .classList.contains('ffe-description-list--lg'),
        ).toBe(false);

        rerender(
            <DescriptionList size="md" data-testid={TEST_ID}>
                <DescriptionListTerm>Porsche</DescriptionListTerm>
                <DescriptionListDescription>
                    German car maker
                </DescriptionListDescription>
            </DescriptionList>,
        );

        expect(
            screen
                .getByTestId(TEST_ID)
                .classList.contains('ffe-description-list--md'),
        ).toBe(true);
        expect(
            screen
                .getByTestId(TEST_ID)
                .classList.contains('ffe-description-list--lg'),
        ).toBe(false);

        rerender(
            <DescriptionList size="lg" data-testid={TEST_ID}>
                <DescriptionListTerm>Porsche</DescriptionListTerm>
                <DescriptionListDescription>
                    German car maker
                </DescriptionListDescription>
            </DescriptionList>,
        );

        expect(
            screen
                .getByTestId(TEST_ID)
                .classList.contains('ffe-description-list--md'),
        ).toBe(false);
        expect(
            screen
                .getByTestId(TEST_ID)
                .classList.contains('ffe-description-list--lg'),
        ).toBe(true);
    });
    it('passes props', () => {
        renderDescriptionList({ id: 'that-id' });
        const dl = screen.getByTestId(TEST_ID);
        expect(dl.getAttribute('id')).toBe('that-id');
        expect(dl.innerHTML).toContain('Porsche');
    });
});
