import React from 'react';
import { shallow } from 'enzyme';

import { GridCol } from '..';

const defaultProps = {
    children: <p>blah</p>,
};

const renderShallow = (props = {}) => shallow(<GridCol {...defaultProps} {...props} />);

describe('GridCol', () => {
    it('renders with default class', () => {
        const el = renderShallow();

        expect(el.prop('className')).to.be('ffe-grid__col');
    });

    it('renders provided children node', () => {
        const el = renderShallow();

        expect(el.containsMatchingElement(<p>blah</p>)).to.be(true);
    });

    it('supports setting cols as a number', () => {
        const el = renderShallow({ lg: 10 });

        expect(el.hasClass('ffe-grid__col')).to.be(true);
        expect(el.hasClass('ffe-grid__col--lg-10')).to.be(true);
    });

    it('supports setting cols as a string', () => {
        const el = renderShallow({ sm: '1' });

        expect(el.hasClass('ffe-grid__col')).to.be(true);
        expect(el.hasClass('ffe-grid__col--sm-1')).to.be(true);
    });

    it('supports setting cols as an object', () => {
        const el = renderShallow({ md: { cols: 4 } });

        expect(el.hasClass('ffe-grid__col')).to.be(true);
        expect(el.hasClass('ffe-grid__col--md-4')).to.be(true);
    });

    it('supports setting cols and offset', () => {
        const el = renderShallow({ sm: { cols: 4, offset: '2' } });

        expect(el.hasClass('ffe-grid__col')).to.be(true);
        expect(el.hasClass('ffe-grid__col--sm-4')).to.be(true);
        expect(el.hasClass('ffe-grid__col--sm-offset-2')).to.be(true);
    });

    it('does not set an offset class if no offset is provided', () => {
        const el = renderShallow({ lg: { cols: 7 } });

        expect(el.hasClass('ffe-grid__col')).to.be(true);
        expect(el.prop('className')).to.not.contain('offset');
    });

    it('sets the center modifier if the value is boolean true', () => {
        const el = renderShallow({ center: true });

        expect(el.hasClass('ffe-grid__col')).to.be(true);
        expect(el.hasClass('ffe-grid__col--center')).to.be(true);
    });

    it('sets the center modifier as a string', () => {
        const el = renderShallow({ center: 'true' });

        expect(el.hasClass('ffe-grid__col')).to.be(true);
        expect(el.hasClass('ffe-grid__col--center')).to.be(true);
    });

    it('sets the center modifier if the value is truthy', () => {
        const el = renderShallow({ center: 'wombats' });

        expect(el.hasClass('ffe-grid__col')).to.be(true);
        expect(el.hasClass('ffe-grid__col--center')).to.be(true);
    });

    it('does not set the center modifier if the value is boolean false', () => {
        const el = renderShallow({ center: false });

        expect(el.hasClass('ffe-grid__col')).to.be(true);
        expect(el.hasClass('ffe-grid__col--center')).not.to.be(true);
    });

    it('sets the top modifier', () => {
        const el = renderShallow({ top: true });

        expect(el.hasClass('ffe-grid__col')).to.be(true);
        expect(el.hasClass('ffe-grid__col--top')).to.be(true);
    });

    it('sets all the things o/', () => {
        const el = renderShallow({
            sm: { cols: '6', offset: 2 },
            md: 8,
            lg: { cols: 2 },
            center: true,
            bottom: true,
            between: true,
        });

        expect(el.hasClass('ffe-grid__col')).to.be(true);
        expect(el.hasClass('ffe-grid__col--sm-6')).to.be(true);
        expect(el.hasClass('ffe-grid__col--sm-offset-2')).to.be(true);
        expect(el.hasClass('ffe-grid__col--md-8')).to.be(true);
        expect(el.hasClass('ffe-grid__col--lg-2')).to.be(true);
        expect(el.hasClass('ffe-grid__col--center')).to.be(true);
        expect(el.hasClass('ffe-grid__col--bottom')).to.be(true);
        expect(el.hasClass('ffe-grid__col--between')).to.be(true);
    });
});
