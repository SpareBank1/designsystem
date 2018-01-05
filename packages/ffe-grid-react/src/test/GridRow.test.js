import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import { GridRow, GridCol } from '..';
import { VALID_BACKGROUND_COLORS } from '../GridRow';

const defaultProps = {
    children: <p>blah</p>,
};

const renderShallow = (props = {}) =>
    shallow(<GridRow {...defaultProps} {...props} />);

describe('GridRow', () => {
    it('renders with default class and element', () => {
        const el = renderShallow();

        expect(el.prop('className')).to.be('ffe-grid__row');
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

    it('sets the reverse modifier', () => {
        const el = renderShallow({ reverse: true });

        expect(el.hasClass('ffe-grid__row')).to.be(true);
        expect(el.hasClass('ffe-grid__row--reverse')).to.be(true);
    });

    it('adds correct class for all valid background colors', () => {
        const el = renderShallow();
        VALID_BACKGROUND_COLORS.forEach(background => {
            el.setProps({ background });
            expect(el.hasClass(`ffe-grid__row--bg-${background}`)).to.be(true);
        });
    });

    it('does not add any background-class for invalid background colors', () => {
        const el = renderShallow();
        ['illegal', 'color values', 'are ignored'].forEach(background => {
            el.setProps({ background });
            expect(el.hasClass(`ffe-grid__row--bg-${background}`)).to.be(false);
        });
    });

    it('renders coloured rows with extra wrappers', () => {
        VALID_BACKGROUND_COLORS.forEach(background => {
            const el = renderShallow({
                background,
                children: (
                    <GridCol lg={12}>
                        <p>blah</p>
                    </GridCol>
                ),
            });
            expect(el.childAt(0).hasClass('ffe-grid__row-wrapper')).to.be(true);
        });
    });

    it('sets the topPadding modifier', () => {
        const el = renderShallow({ topPadding: true });

        expect(el.hasClass('ffe-grid__row')).to.be(true);
        expect(el.hasClass('ffe-grid__row--top-padding')).to.be(true);
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

            expect(console.error.calledOnce).to.be(true);
            expect(console.error.getCall(0).args[0])
                .to.contain('Do not nest')
                .and.to.contain('<GridRow />');
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

        afterEach(() => {
            console.error.restore();
        });
    });
});
