import React from 'react';
import { GridCol } from '.';
import backgroundColors from './background-colors';

const defaultProps = {
    children: <p>blah</p>,
};

const renderShallow = (props = {}) =>
    shallow(<GridCol {...defaultProps} {...props} />);

describe('GridCol', () => {
    it('renders with custom class', () => {
        const el = renderShallow({ className: 'custom-class' });
        expect(el.hasClass('custom-class')).toBe(true);
    });

    it('renders provided children node', () => {
        const el = renderShallow();

        expect(el.containsMatchingElement(<p>blah</p>)).toBe(true);
    });

    it('supports setting cols as a number', () => {
        const el = renderShallow({ lg: 10 });

        expect(el.hasClass('ffe-grid__col--lg-10')).toBe(true);
    });

    it('supports setting cols as a string', () => {
        const el = renderShallow({ sm: '1' });

        expect(el.hasClass('ffe-grid__col--sm-1')).toBe(true);
    });

    it('supports setting cols as an object', () => {
        const el = renderShallow({ md: { cols: 4 } });

        expect(el.hasClass('ffe-grid__col--md-4')).toBe(true);
    });

    it('supports setting cols and offset', () => {
        const el = renderShallow({ sm: { cols: 4, offset: '2' } });

        expect(el.hasClass('ffe-grid__col--sm-4')).toBe(true);
        expect(el.hasClass('ffe-grid__col--sm-offset-2')).toBe(true);
    });

    it('does not set an offset class if no offset is provided', () => {
        const el = renderShallow({ lg: { cols: 7 } });

        expect(el.prop('className')).not.toContain('offset');
    });

    it('sets the center modifier if the value is boolean true', () => {
        const el = renderShallow({ center: true });

        expect(el.hasClass('ffe-grid__col--center')).toBe(true);
    });

    it('sets the center modifier if the value is boolean true', () => {
        const el = renderShallow({ centerText: true });

        expect(el.hasClass('ffe-grid__col--center-text')).toBe(true);
    });

    it('sets the center modifier as a string', () => {
        const el = renderShallow({ center: 'true' });

        expect(el.hasClass('ffe-grid__col--center')).toBe(true);
    });

    it('sets the center modifier if the value is truthy', () => {
        const el = renderShallow({ center: 'wombats' });

        expect(el.hasClass('ffe-grid__col--center')).toBe(true);
    });

    it('does not set the center modifier if the value is boolean false', () => {
        const el = renderShallow({ center: false });

        expect(el.hasClass('ffe-grid__col--center')).not.toBe(true);
    });

    it('sets the top modifier', () => {
        const el = renderShallow({ top: true });

        expect(el.hasClass('ffe-grid__col--top')).toBe(true);
    });

    it('sets background color class if valid', () => {
        backgroundColors.forEach(background => {
            const el = renderShallow({ background });
            expect(el.hasClass(`ffe-grid__col--bg-${background}`)).toBe(true);
        });
    });

    it('does not set background color class if not valid', () => {
        const illegalBackgroundColors = ['ice-cream', 'log("hack")', '123456'];
        illegalBackgroundColors.forEach(background => {
            const el = renderShallow({ background });
            expect(el.hasClass(`ffe-grid__col--bg-${background}`)).toBe(false);
        });
    });

    it('throws for removed background colours', () => {
        expect(() => renderShallow({ background: 'blue-cobalt' })).toThrow(
            'Support for the blue-cobalt background on <GridCol> has been removed, please see the CHANGELOG',
        );
    });

    it('sets all the things o/', () => {
        const el = renderShallow({
            sm: { cols: '6', offset: 2 },
            md: 8,
            lg: { cols: 2 },
            center: true,
            centerText: true,
            bottom: true,
            between: true,
            horizontal: true,
            reverse: true,
        });

        expect(el.hasClass('ffe-grid__col--sm-6')).toBe(true);
        expect(el.hasClass('ffe-grid__col--sm-offset-2')).toBe(true);
        expect(el.hasClass('ffe-grid__col--md-8')).toBe(true);
        expect(el.hasClass('ffe-grid__col--lg-2')).toBe(true);
        expect(el.hasClass('ffe-grid__col--center')).toBe(true);
        expect(el.hasClass('ffe-grid__col--center-text')).toBe(true);
        expect(el.hasClass('ffe-grid__col--bottom')).toBe(true);
        expect(el.hasClass('ffe-grid__col--between')).toBe(true);
        expect(el.hasClass('ffe-grid__col--horizontal')).toBe(true);
        expect(el.hasClass('ffe-grid__col--reverse')).toBe(true);
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

    it('does not pass on known properties to its root element', () => {
        const el = renderShallow({ center: true, reverse: true });

        expect(el.props().center).toBe(undefined);
        expect(el.props().reverse).toBe(undefined);
    });

    it('can render with offset 0 and columns 0', () => {
        const el = renderShallow({ md: { cols: 0, offset: 0 } });

        expect(el.hasClass('ffe-grid__col--md-offset-0')).toBe(true);
        expect(el.hasClass('ffe-grid__col--md-0')).toBe(true);
    });

    it('can render with offset 1 and columns 1', () => {
        const el = renderShallow({ md: { cols: 1, offset: 1 } });

        expect(el.hasClass('ffe-grid__col--md-offset-1')).toBe(true);
        expect(el.hasClass('ffe-grid__col--md-1')).toBe(true);
    });

    it('defaults to sm={12} if no dimensions are provided', () => {
        const el = renderShallow();

        expect(el.hasClass('ffe-grid__col--sm-12')).toBe(true);
    });

    it('defaults to not setting the "--no-bottom-padding" modifier', () => {
        const el = renderShallow();

        expect(el.hasClass('ffe-grid__col--no-bottom-padding')).toBe(false);
    });

    it('sets the "--no-bottom-padding" modifier if "bottomPadding" prop is false', () => {
        const el = renderShallow({ bottomPadding: false });

        expect(el.hasClass('ffe-grid__col--no-bottom-padding')).toBe(true);
    });
});
