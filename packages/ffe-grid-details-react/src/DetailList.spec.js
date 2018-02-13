import React from 'react';
import { shallow, mount } from 'enzyme';

import { DetailList, Detail, DetailContent } from '.';

describe('<DetailContent />', () => {
    const defaultProps = {
        childCount: 1,
        children: 'Content',
        index: 0,
    };
    const getWrapper = props =>
        shallow(<DetailContent {...defaultProps} {...props} />);

    it('renders without exploding', () => {
        const wrapper = getWrapper();

        expect(wrapper.exists()).toBe(true);
    });

    it('adds correct class based on cta prop', () => {
        const wrapper = getWrapper({ cta: false });
        expect(wrapper.hasClass('ffe-grid-details-react__content--action')).toBe(false);

        wrapper.setProps({ cta: true });

        expect(wrapper.hasClass('ffe-grid-details-react__content--action')).toBe(true);
    });

    it('adds any extra classes if provided', () => {
        const wrapper = getWrapper({ className: 'where-they-at-doe' });
        expect(wrapper.hasClass('where-they-at-doe')).toBe(true);
    });

    describe('correct column count when', () => {
        it('is exactly one DetailContent', () => {
            const wrapper = getWrapper({ childCount: 1 });
            expect(wrapper.prop('sm')).toBe(12);
            expect(wrapper.prop('md')).toBe(6);
            expect(wrapper.prop('lg')).toBe(7);
        });

        it('are two DetailContents, and this DetailContent is the first one', () => {
            const wrapper = getWrapper({ childCount: 2, index: 0 });
            expect(wrapper.prop('sm')).toBe(12);
            expect(wrapper.prop('md')).toBe(2);
            expect(wrapper.prop('lg')).toBe(2);
        });

        it('are two DetailContents, and this DetailContent is the last one', () => {
            const wrapper = getWrapper({ childCount: 2, index: 1 });
            expect(wrapper.prop('sm')).toBe(12);
            expect(wrapper.prop('md')).toBe(4);
            expect(wrapper.prop('lg')).toBe(4);
        });

        it('are three or more DetailsContents', () => {
            const wrapper = getWrapper({ childCount: 3, index: 1 });
            expect(wrapper.prop('sm')).toBe(12);
            expect(wrapper.prop('md')).toBe(2);
            expect(wrapper.prop('lg')).toBe(2);

            wrapper.setProps({ childCount: 4 });
            expect(wrapper.prop('sm')).toBe(12);
            expect(wrapper.prop('md')).toBe(2);
            expect(wrapper.prop('lg')).toBe(2);
        });
    });
});

describe('<Detail />', () => {
    const defaultProps = { children: [<div key="1" />, <div key="2" />] };
    const getWrapper = props => mount(<Detail {...defaultProps} {...props} />);

    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
    });

    it('provides its children with its index and the number of children provided', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('div[childCount]')
                .first()
                .prop('childCount'),
        ).toBe(2);
        expect(
            wrapper
                .find('div[childCount]')
                .last()
                .prop('childCount'),
        ).toBe(2);

        wrapper.setProps({ children: <div /> });

        expect(
            wrapper
                .find('div[childCount]').prop('childCount')).toBe(1);
    });
});

describe('<DetailList />', () => {
    const getWrapper = () =>
        mount(
            <DetailList>
                <Detail label="Egenandel">
                    <DetailContent>4&nbsp;000,-</DetailContent>
                </Detail>

                <Detail label="Egenandel">
                    <DetailContent>4&nbsp;000,-</DetailContent>
                    <DetailContent cta={true}>
                        <button onClick={f => f}>ENDRE</button>
                    </DetailContent>
                </Detail>

                <Detail label="Kjørelengde per år">
                    <DetailContent>30&nbsp;000 km</DetailContent>
                    <DetailContent className="ffe-small-text">
                        Kilometerstanden kan ikke overstige 80&nbsp;100 km før
                        17.02.2017
                    </DetailContent>
                </Detail>

                <Detail label="Kjørelengde per år">
                    <DetailContent>30&nbsp;000 km</DetailContent>
                    <DetailContent className="ffe-small-text">
                        Kilometerstanden kan ikke overstige 80&nbsp;100 km før
                        17.02.2017
                    </DetailContent>
                    <DetailContent cta={true}>
                        <button onClick={f => f}>ENDRE</button>
                    </DetailContent>
                </Detail>
            </DetailList>,
        );
    // Due to https://github.com/facebook/prop-types/issues/123
    console.error = jest.fn();

    const wrapper = getWrapper();
    it('renders without exploding', () => {
        expect(wrapper.exists()).toBe(true);
    });
});
