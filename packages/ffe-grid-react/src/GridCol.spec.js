import React from 'react';
import { mount, shallow } from 'enzyme';
import { Grid, GridRow, GridCol } from '.';

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

    it('sets all the things o/', () => {
        const el = renderShallow({
            sm: { cols: '6', offset: 2 },
            md: 8,
            lg: { cols: 2 },
            center: true,
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

    describe('when mounting', () => {
        beforeEach(() => {
            console.error = jest.fn();
        });
        afterEach(() => console.error.mockRestore());

        it('warns about using deprecated props on GridCol', () => {
            mount(
                <Grid>
                    <GridRow>
                        <GridCol vertical={true} />
                    </GridRow>
                </Grid>,
            );

            expect(console.error).toHaveBeenCalled();
            expect(
                console.error.mock.calls.map(call => call[0]),
            ).toContain(
                '`<GridCol vertical={true} />` is the default behavior. You can safely remove this prop.'
            );
        });

        it('warns about nested <GridCol> tag', () => {
            mount(
                <Grid>
                    <GridRow>
                        <GridCol>
                            <div>
                                <div>
                                    <div>
                                        <GridCol>
                                            <div>hadoken</div>
                                        </GridCol>
                                    </div>
                                </div>
                            </div>
                        </GridCol>
                    </GridRow>
                </Grid>,
            );

            expect(console.error).toHaveBeenCalledTimes(1);
            expect(console.error.mock.calls[0][0]).toContain('<GridCol />');
        });

        it('does not blow up if a null-child is received', () => {
            // The below inline check on "false" will result in the outer <GridCol>
            // receiving children as an array-like of [<GridCol />, null] which it needs
            // to handle when checking for nesten grid columns.
            mount(
                <GridCol>
                    <GridCol />
                    {false && <GridCol />}
                </GridCol>,
            );
        });

        describe('checks cols and offset validity', () => {
            console.error = jest.fn();
            const renderWithModifier = modifier =>
                mount(
                    <Grid>
                        <GridRow>
                            <GridCol {...modifier} />
                        </GridRow>
                    </Grid>,
                );

            it('does not warn about valid columns and offsets for "lg" screens', () => {
                renderWithModifier({ lg: { cols: 9, offset: 3 } });
                renderWithModifier({ lg: { cols: 1, offset: 11 } });
                renderWithModifier({ lg: { cols: 6, offset: 6 } });

                expect(console.error).not.toHaveBeenCalled();
            });

            it('does not warn about valid columns and offsets for "md" screens', () => {
                renderWithModifier({ md: { cols: 6, offset: 4 } });
                renderWithModifier({ md: { cols: 12, offset: 0 } });
                renderWithModifier({ md: { cols: 2, offset: 8 } });
                renderWithModifier({ md: 6 });

                expect(console.error).not.toHaveBeenCalled();
            });

            it('does not warn about valid columns and offsets for "sm" screens', () => {
                renderWithModifier({ sm: { cols: 6, offset: 6 } });
                renderWithModifier({ sm: { cols: 3, offset: 3 } });
                renderWithModifier({ sm: { cols: 12, offset: 0 } });
                renderWithModifier({ sm: 12 });

                expect(console.error).not.toHaveBeenCalled();
            });

            it('warns about not sticking to 6 columns on "md" screens for objects', () => {
                renderWithModifier({ md: { cols: 1, offset: 1 } });

                expect(console.error).toHaveBeenCalledTimes(1);
                expect(console.error.mock.calls[0][0]).toContain('The grid should have 6 columns for "md" screens');
            });

            it('warns about not sticking to 6 columns on "md" screens for numbers', () => {
                renderWithModifier({ md: 9 });

                expect(console.error).toHaveBeenCalledTimes(1);
                expect(console.error.mock.calls[0][0]).toContain('The grid should have 6 columns for "md" screens');
            });

            it('warns about not sticking to 4 columns on "sm" screens for objects', () => {
                renderWithModifier({ sm: { cols: 11, offset: 1 } });

                expect(console.error).toHaveBeenCalledTimes(1);
                expect(console.error.mock.calls[0][0]).toContain('The grid should have 4 columns for "sm" screens');
            });

            it('warns about not sticking to 4 columns on "sm" screens for numbers', () => {
                renderWithModifier({ sm: 5 });

                expect(console.error).toHaveBeenCalledTimes(1);
                expect(console.error.mock.calls[0][0]).toContain('The grid should have 4 columns for "sm" screens');
            });
        });
    });
});
