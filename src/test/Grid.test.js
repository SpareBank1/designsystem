import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { Grid } from '..';

const defaultProps = {
    children: <p>blah</p>,
};

const renderShallow = (props = {}) => shallow(<Grid {...defaultProps} {...props} />);

describe('Grid', () => {
    it('renders with default class and element', () => {
        const el = renderShallow();

        expect(el.prop('className')).to.be('ffe-grid');
        expect(el.type()).to.be('div');
    });

    it('renders with custom class', () => {
        const el = renderShallow({ className: 'custom-class' });
        expect(el.hasClass('custom-class')).to.be(true);
    });

    it('renders provided children node', () => {
        const el = renderShallow();

        expect(el.containsMatchingElement(<p>blah</p>)).to.be(true);
    });

    it('sets the noTopPadding modifier', () => {
        const el = renderShallow({ noTopPadding: true });

        expect(el.hasClass('ffe-grid')).to.be(true);
        expect(el.hasClass('ffe-grid--no-top-padding')).to.be(true);
    });

    it('preserves other attributes that are passed to it', () => {
        const handler = sinon.spy();
        const el = renderShallow({ onClick: handler });

        el.simulate('click');

        expect(handler.calledOnce).to.be(true);
    });

    it('can render a custom root element', () => {
        const el = renderShallow({ element: 'section' });

        expect(el.type()).to.be('section');
    });
});
