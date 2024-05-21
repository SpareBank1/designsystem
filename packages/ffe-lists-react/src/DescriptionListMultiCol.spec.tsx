import React from 'react';
import {
    DescriptionListMultiCol,
    DescriptionListMultiColProps,
} from './DescriptionListMultiCol';
import { DescriptionListTerm } from './DescriptionListTerm';
import { DescriptionListDescription } from './DescriptionListDescription';
import { render, screen } from '@testing-library/react';

const TEST_ID = 'TEST_ID';

const renderDescriptionListMultiCol = (props?: DescriptionListMultiColProps) =>
    render(
        <DescriptionListMultiCol {...props} data-testid={TEST_ID}>
            <DescriptionListTerm>Porsche</DescriptionListTerm>
            <DescriptionListDescription>
                German car maker
            </DescriptionListDescription>
            <DescriptionListTerm>Toyota</DescriptionListTerm>
            <DescriptionListDescription>
                Japanese toy maker
            </DescriptionListDescription>
        </DescriptionListMultiCol>,
    );

describe('<DescriptionListMultiCol>', () => {
    it('renders without exploding', () => {
        renderDescriptionListMultiCol();
        expect(screen.getByTestId(TEST_ID)).toBeTruthy();
    });
    it('has the correct class', () => {
        renderDescriptionListMultiCol({
            className: 'test-class',
        });
        const dl = screen.getByTestId(TEST_ID);

        expect(dl.classList.contains('ffe-description-list-multicol')).toBe(
            true,
        );
        expect(dl.classList.contains('test-class')).toBe(true);
    });
    it('passes props', () => {
        renderDescriptionListMultiCol({ id: 'that-id' });
        const dl = screen.getByTestId(TEST_ID);
        expect(dl.getAttribute('id')).toBe('that-id');
        expect(dl.innerHTML).toContain('Porsche');
    });
    it('wraps pairs in `div`', () => {
        renderDescriptionListMultiCol({ id: 'that-id' });
        const dl = screen.getByTestId(TEST_ID);
        const tagNames = Array.from(
            dl.querySelectorAll('.ffe-description-list-multicol__avoid-break'),
        ).map(elem => elem.tagName);
        expect(tagNames).toEqual(['DIV', 'DIV']);
    });
    it('supports several columns', () => {
        renderDescriptionListMultiCol({ id: 'that-id' });
        const dl = screen.getByTestId(TEST_ID);
        expect(
            dl.querySelectorAll('.ffe-description-list-multicol__avoid-break')
                .length,
        ).toBe(2);
    });
});
