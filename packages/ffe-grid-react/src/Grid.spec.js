import React from 'react';
import { mount, shallow } from 'enzyme';
import { Grid, GridRow, GridCol } from '.';

const defaultProps = {
    children: <p>blah</p>,
};

const renderShallow = (props = {}) =>
    shallow(<Grid {...defaultProps} {...props} />);

describe('Grid', () => {
    it('renders with default class and element', () => {
        const el = renderShallow();

        expect(el.prop('className')).toBe('ffe-grid');
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

    it('sets the noTopPadding modifier', () => {
        const el = renderShallow({ noTopPadding: true });

        expect(el.hasClass('ffe-grid')).toBe(true);
        expect(el.hasClass('ffe-grid--no-top-padding')).toBe(true);
    });

    it('sets the condensed modifier', () => {
        const el = renderShallow({ condensed: true });

        expect(el.hasClass('ffe-grid')).toBe(true);
        expect(el.hasClass('ffe-grid--condensed')).toBe(true);
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
        console.error = jest.fn();

        it('warns about nested <Grid> tag', () => {
            mount(
                <Grid>
                    <GridRow>
                        <GridCol>
                            <div>
                                <div>
                                    <div>
                                        <Grid />
                                    </div>
                                </div>
                            </div>
                        </GridCol>
                    </GridRow>
                </Grid>,
            );

            expect(console.error).toHaveBeenCalled();
            expect(console.error.mock.calls[0][0]).toContain('<Grid />');
        });

        it('does not blow up if a null-child is received', () => {
            // The below inline check on "false" will result in the outer <Grid>
            // receiving children as an array-like of [<Grid />, null] which it needs
            // to handle when checking for nesten grids.
            mount(
                <Grid>
                    <Grid />
                    {false && <Grid />}
                </Grid>,
            );
        });
    });
});
