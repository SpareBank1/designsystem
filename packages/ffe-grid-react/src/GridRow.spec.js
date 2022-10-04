import React from 'react';

import { GridRow } from '.';
import backgroundColors from './background-colors';

const defaultProps = {
    children: <p>blah</p>,
};

const renderShallow = (props = {}) =>
    shallow(<GridRow {...defaultProps} {...props} />);

describe('GridRow', () => {
    it('renders with default class and element', () => {
        const el = renderShallow();

        expect(el.prop('className')).toBe('ffe-grid__row');
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

    it('adds correct class for all valid background colors', () => {
        const el = renderShallow();
        backgroundColors.forEach(background => {
            el.setProps({ background });
            expect(el.hasClass(`ffe-grid__row--bg-${background}`)).toBe(true);
        });
    });

    it('does not add any background-class for invalid background colors', () => {
        const el = renderShallow();
        console.error = jest.fn();
        ['illegal', 'color values', 'are ignored'].forEach(background => {
            el.setProps({ background });
            expect(el.hasClass(`ffe-grid__row--bg-${background}`)).toBe(false);
        });
    });

    it('throws for removed background colours', () => {
        expect(() => renderShallow({ background: 'blue-cobalt' })).toThrow(
            'Support for the blue-cobalt background on <GridRow> has been removed, please see the CHANGELOG',
        );
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
