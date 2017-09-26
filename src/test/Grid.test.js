import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import { Grid, GridRow, GridCol } from '..';

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

    it('sets the condensed modifier', () => {
        const el = renderShallow({ condensed: true });

        expect(el.hasClass('ffe-grid')).to.be(true);
        expect(el.hasClass('ffe-grid--condensed')).to.be(true);
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

    describe('when mounting', () => {
        beforeEach(() => {
            sinon.stub(console, 'error');
        });

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
                </Grid>
            );

            expect(console.error.called).to.be(true);
            expect(console.error.getCall(0).args[0])
                .to.contain('Do not nest')
                .and.to.contain('<Grid />');
        });

        it('does not blow up if a null-child is received', () => {
            // The below inline check on "false" will result in the outer <Grid>
            // receiving children as an array-like of [<Grid />, null] which it needs
            // to handle when checking for nesten grids.
            mount(
                <Grid>
                    <Grid />
                    { false && <Grid /> }
                </Grid>
            );
        });

        afterEach(() => {
            console.error.restore();
        });
    });
});
