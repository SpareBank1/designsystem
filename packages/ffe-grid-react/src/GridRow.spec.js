import React from 'react';
import { mount, shallow } from 'enzyme';

import { GridRow, GridCol } from '.';
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

    it('sets the reverse modifier', () => {
        const el = renderShallow({ reverse: true });

        expect(el.hasClass('ffe-grid__row')).toBe(true);
        expect(el.hasClass('ffe-grid__row--reverse')).toBe(true);
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

    it('renders coloured rows with extra wrappers', () => {
        backgroundColors.forEach(background => {
            const el = renderShallow({
                background,
                children: (
                    <GridCol lg={12}>
                        <p>blah</p>
                    </GridCol>
                ),
            });
            expect(el.childAt(0).hasClass('ffe-grid__row-wrapper')).toBe(true);
        });
    });

    it('sets the topPadding modifier', () => {
        const el = renderShallow({ topPadding: true });

        expect(el.hasClass('ffe-grid__row')).toBe(true);
        expect(el.hasClass('ffe-grid__row--top-padding')).toBe(true);
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

        it('warns about nested <GridRow> tag', () => {
            mount(
                <GridRow>
                    <GridCol>
                        <div>
                            <div>
                                <div>
                                    <GridRow />
                                </div>
                            </div>
                        </div>
                    </GridCol>
                </GridRow>,
            );

            expect(console.error).toHaveBeenCalledTimes(1);
            expect(console.error.mock.calls[0][0]).toContain('<GridRow />');
        });

        it('does not blow up if a null-child is received', () => {
            // The below inline check on "false" will result in the outer <GridRow>
            // receiving children as an array-like of [<GridRow />, null] which it needs
            // to handle when checking for nesten grid rows.
            mount(
                <GridRow>
                    <GridRow />
                    {false && <GridRow />}
                </GridRow>,
            );
        });
    });
});
