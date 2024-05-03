import React from 'react';
import DescriptionListMultiCol from './DescriptionListMultiCol';
import DescriptionListTerm from './DescriptionListTerm';
import DescriptionListDescription from './DescriptionListDescription';
import { render } from '@testing-library/react';

const renderDescriptionListMultiCol = props =>
    render(
        <DescriptionListMultiCol {...props}>
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
        const { container } = renderDescriptionListMultiCol();
        expect(container.querySelector('dl')).toBeTruthy();
    });
    it('has the correct class', () => {
        const { container } = renderDescriptionListMultiCol({
            className: 'test-class',
        });
        const dl = container.querySelector('dl');

        expect(dl.classList.contains('ffe-description-list-multicol')).toBe(
            true,
        );
        expect(dl.classList.contains('test-class')).toBe(true);
    });
    it('passes props', () => {
        const { container } = renderDescriptionListMultiCol({ id: 'that-id' });
        const dl = container.querySelector('dl');
        expect(dl.getAttribute('id')).toBe('that-id');
        expect(dl.innerHTML).toContain('Porsche');
    });
    it('wraps pairs in `div`', () => {
        const { container } = renderDescriptionListMultiCol({ id: 'that-id' });
        const dl = container.querySelector('dl');
        const tagNames = Array.from(
            dl.querySelectorAll('.ffe-description-list-multicol__avoid-break'),
        ).map(elem => elem.tagName);
        expect(tagNames).toEqual(['DIV', 'DIV']);
    });
    it('supports several columns', () => {
        const { container } = renderDescriptionListMultiCol({ id: 'that-id' });
        const dl = container.querySelector('dl');
        expect(
            dl.querySelectorAll('.ffe-description-list-multicol__avoid-break')
                .length,
        ).toBe(2);
    });
});
