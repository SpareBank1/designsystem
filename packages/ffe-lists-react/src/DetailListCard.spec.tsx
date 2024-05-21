import React from 'react';
import { DetailListCard, DetailListCardProps } from './DetailListCard';
import {
    DetailListCardItem,
    DetailListCardItemProps,
} from './DetailListCardItem';
import { render, screen } from '@testing-library/react';

const renderDetailListCard = (props?: Partial<DetailListCardProps>) =>
    render(
        <DetailListCard {...props}>
            <DetailListCardItem label="Test Label" value="Test Value" />
        </DetailListCard>,
    );

const renderDetailListCardItem = (props?: Partial<DetailListCardItemProps>) =>
    render(
        <DetailListCardItem
            label="Kontonummer"
            value="1234 45 12345"
            {...props}
        />,
    );

describe('<DetailListCard />', () => {
    it('add classNames correctly', () => {
        const { container } = renderDetailListCard({ className: 'test-class' });
        expect(container.querySelector('dl')).toBeTruthy();
        const dl = container.querySelector('dl');

        expect(dl?.classList.contains('ffe-detail-list-card')).toBe(true);
        expect(dl?.classList.contains('test-class')).toBe(true);
    });
});

describe('<DetailListCard />', () => {
    it('adds additional classNames correctly', () => {
        const { container } = renderDetailListCardItem({
            className: 'test-class',
        });
        expect(
            container
                .querySelector('.ffe-detail-list-card__item')
                ?.classList.contains('test-class'),
        ).toBeTruthy();
    });

    it('adds additional props correctly', () => {
        const { container } = renderDetailListCardItem({
            id: 'test-id',
        });
        expect(
            container
                .querySelector('.ffe-detail-list-card__item')
                ?.getAttribute('id'),
        ).toEqual('test-id');
    });
    it('renders correct label content', () => {
        const { container } = renderDetailListCardItem({
            label: <span>Test Label</span>,
            value: 'value',
        });
        const dt = container.querySelector('dt');
        expect(
            dt?.classList.contains('ffe-detail-list-card__item-label'),
        ).toBeTruthy();
        expect(dt?.innerHTML).toEqual('<span>Test Label</span>');
    });

    it('renders correct value content', () => {
        renderDetailListCardItem({
            label: 'label',
            value: <span>Test Value</span>,
        });
        const dd = screen.getByRole('definition');
        expect(
            dd.classList.contains('ffe-detail-list-card__item-value'),
        ).toBeTruthy();
        expect(dd.innerHTML).toEqual('<span>Test Value</span>');
    });
});
