import React from 'react';
import DescriptionList from './DescriptionList';
import DescriptionListTerm from './DescriptionListTerm';
import DescriptionListDescription from './DescriptionListDescription';
import { render } from '@testing-library/react';

const renderDescriptionList = props =>
    render(
        <DescriptionList {...props}>
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
    it('renders without exploding', () => {
        const { container } = renderDescriptionList();
        expect(container.querySelector('dl')).toBeTruthy();
    });
    it('has the correct class', () => {
        const { container } = renderDescriptionList({
            className: 'test-class',
        });
        const dl = container.querySelector('dl');

        expect(dl.classList.contains('ffe-description-list')).toBe(true);
        expect(dl.classList.contains('test-class')).toBe(true);
    });
    it('sets the correct class for modifier props', () => {
        const { container, rerender } = render(
            <DescriptionList>
                <DescriptionListTerm>Porsche</DescriptionListTerm>
                <DescriptionListDescription>
                    German car maker
                </DescriptionListDescription>
            </DescriptionList>,
        );

        expect(
            container
                .querySelector('dl')
                .classList.contains('ffe-description-list--md'),
        ).toBe(false);
        expect(
            container
                .querySelector('dl')
                .classList.contains('ffe-description-list--lg'),
        ).toBe(false);

        rerender(
            <DescriptionList medium={true} large={false}>
                <DescriptionListTerm>Porsche</DescriptionListTerm>
                <DescriptionListDescription>
                    German car maker
                </DescriptionListDescription>
            </DescriptionList>,
        );

        expect(
            container
                .querySelector('dl')
                .classList.contains('ffe-description-list--md'),
        ).toBe(true);
        expect(
            container
                .querySelector('dl')
                .classList.contains('ffe-description-list--lg'),
        ).toBe(false);

        rerender(
            <DescriptionList medium={false} large={true}>
                <DescriptionListTerm>Porsche</DescriptionListTerm>
                <DescriptionListDescription>
                    German car maker
                </DescriptionListDescription>
            </DescriptionList>,
        );

        expect(
            container
                .querySelector('dl')
                .classList.contains('ffe-description-list--md'),
        ).toBe(false);
        expect(
            container
                .querySelector('dl')
                .classList.contains('ffe-description-list--lg'),
        ).toBe(true);
    });
    it('passes props', () => {
        const { container } = renderDescriptionList({ id: 'that-id' });
        const dl = container.querySelector('dl');
        expect(dl.getAttribute('id')).toBe('that-id');
        expect(dl.innerHTML).toContain('Porsche');
    });
});
