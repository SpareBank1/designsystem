import React from 'react';
import { shallow } from 'enzyme';
import DetailListCard from './DetailListCard';
import DetailListCardItem from './DetailListCardItem';

const getWrapper = props =>
    shallow(
        <DetailListCard {...props}>
            <DetailListCardItem label="Test Label" value="Test Value" />
        </DetailListCard>,
    );

const getDetailListCardItemWrapper = props =>
    shallow(
        <DetailListCardItem
            label="Kontonummer"
            value="1234 45 12345"
            {...props}
        />,
    );

describe('<DetailListCard />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.is('dl')).toBe(true);
    });
    it('add classNames correctly', () => {
        const wrapper = getWrapper({ className: 'test-class' });
        expect(wrapper.hasClass('ffe-detail-list-card')).toBe(true);
        expect(wrapper.hasClass('test-class')).toBe(true);
    });
});

describe('<DetailListCard />', () => {
    it('renders without exploding', () => {
        const wrapper = getDetailListCardItemWrapper();
        expect(wrapper.is('div')).toBe(true);
        expect(wrapper.hasClass('ffe-detail-list-card__item')).toBe(true);
    });
    it('adds additional classNames correctly', () => {
        const wrapper = getDetailListCardItemWrapper({
            className: 'test-class',
        });
        expect(wrapper.hasClass('test-class')).toBe(true);
    });

    it('adds additional props correctly', () => {
        const wrapper = getDetailListCardItemWrapper({ id: 'test-id' });
        expect(wrapper.prop('id')).toBe('test-id');
    });
    it('renders correct label content', () => {
        const wrapper = getDetailListCardItemWrapper();
        expect(
            wrapper.find('dt').hasClass('ffe-detail-list-card__item-label'),
        ).toBe(true);
        const wrapper2 = getDetailListCardItemWrapper({
            label: <span>Test Label</span>,
        });
        expect(wrapper2.find('dt').contains(<span>Test Label</span>)).toBe(
            true,
        );
    });

    it('renders correct value content', () => {
        const wrapper = getDetailListCardItemWrapper();
        expect(
            wrapper.find('dd').hasClass('ffe-detail-list-card__item-value'),
        ).toBe(true);
        const wrapper2 = getDetailListCardItemWrapper({
            value: <span>Test Value</span>,
        });
        expect(wrapper2.find('dd').contains(<span>Test Value</span>)).toBe(
            true,
        );
    });
});
