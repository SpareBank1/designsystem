import React from 'react';
import { InlineGrid } from '.';

const defaultProps = {
    children: <p>blah</p>,
};

const renderShallow = (props = {}) =>
    shallow(<InlineGrid {...defaultProps} {...props} />);

describe('InlineGrid', () => {
    it('renders with default class and element', () => {
        const el = renderShallow();

        expect(el.hasClass('ffe-grid--inline')).toBe(true);
        expect(el.type()).toBe('div');
    });

    it('renders with custom class', () => {
        const el = renderShallow({ className: 'custom-class' });
        expect(el.hasClass('custom-class')).toBe(true);
    });

    it('renders provided children node', () => {
        const el = renderShallow();

        expect(el.containsMatchingElement(<p>blah</p>)).toBe(true);
    });

    it('preserves other attributes that are passed to it', () => {
        const handler = jest.fn();
        const el = renderShallow({ onClick: handler });

        el.simulate('click');

        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('can render a custom root element', () => {
        const el = renderShallow({ element: 'section' });

        expect(el.type()).toBe('section');
    });
});
