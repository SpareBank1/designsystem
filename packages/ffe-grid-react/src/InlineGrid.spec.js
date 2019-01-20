import React from 'react';
import { mount, shallow } from 'enzyme';
import { Grid, GridRow, GridCol, InlineGrid } from '.';

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

    describe('when mounting', () => {
        beforeEach(() => {
            global.console.error = jest.fn();
        });

        afterEach(() => global.console.error.mockRestore());

        it('warns about a <Grid> inside an <InlineGrid>', () => {
            mount(
                <InlineGrid>
                    <GridRow>
                        <GridCol>
                            <Grid />
                        </GridCol>
                    </GridRow>
                </InlineGrid>,
            );

            expect(console.error).toHaveBeenCalled();
            expect(console.error.mock.calls[0][0]).toContain('InlineGrid');
        });

        it('allows an <InlineGrid> inside another <InlineGrid>', () => {
            mount(
                <InlineGrid>
                    <GridRow>
                        <GridCol>
                            <InlineGrid />
                        </GridCol>
                    </GridRow>
                </InlineGrid>,
            );

            expect(console.error).not.toHaveBeenCalled();
        });
    });
});
