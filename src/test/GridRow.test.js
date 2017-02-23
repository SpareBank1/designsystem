import React from 'react';
import { shallow } from 'enzyme';

import { GridRow, GridCol } from '..';

const defaultProps = {
    children: <p>blah</p>,
};

const renderShallow = (props = {}) => shallow(<GridRow {...defaultProps} {...props} />);

describe('GridRow', () => {
    it('renders with default class', () => {
        const el = renderShallow();

        expect(el.prop('className')).to.be('ffe-grid__row');
    });

    it('renders provided children node', () => {
        const el = renderShallow();

        expect(el.containsMatchingElement(<p>blah</p>)).to.be(true);
    });

    it('sets the reverse modifier', () => {
        const el = renderShallow({ reverse: true });

        expect(el.hasClass('ffe-grid__row')).to.be(true);
        expect(el.hasClass('ffe-grid__row--reverse')).to.be(true);
    });

    it('sets the bgBlue modifier', () => {
        const el = renderShallow({ bgBlue: true });

        expect(el.hasClass('ffe-grid__row')).to.be(true);
        expect(el.hasClass('ffe-grid__row--bg-blue')).to.be(true);
    });

    it('sets the bgSand modifier', () => {
        const el = renderShallow({ bgSand: true });

        expect(el.hasClass('ffe-grid__row')).to.be(true);
        expect(el.hasClass('ffe-grid__row--bg-sand')).to.be(true);
    });

    it('renders coloured rows with extra wrappers', () => {
        const el = renderShallow({
            bgSand: true,
            children: <GridCol lg={12}><p>blah</p></GridCol>,
        });

        expect(el.childAt(0).hasClass('ffe-grid__row-wrapper')).to.be(true);
    });

    it('sets the topPadding modifier', () => {
        const el = renderShallow({ topPadding: true });

        expect(el.hasClass('ffe-grid__row')).to.be(true);
        expect(el.hasClass('ffe-grid__row--top-padding')).to.be(true);
    });
});
