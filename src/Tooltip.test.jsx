import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Tooltip from './Tooltip';
import sinon from 'sinon';

chai.use(chaiEnzyme());

describe('<Tooltip>', () => {

    it('should render a span', () => {
        const component = shallow(<Tooltip>Tooltip Text</Tooltip>);
        expect(component).to.have.tagName('span');
    });

    it('should render a "?" button', () => {
        const onClick = sinon.spy();
        const component = shallow(
            <Tooltip
                aria-label="button-label"
                onClick={ onClick }
            >
                Tooltip Text
            </Tooltip>
        );
        expect(component.find('button').exists()).to.equal(true);
        expect(component.find('button')).to.have.text('?');
        expect(component.find('button')).to.have.className('ffe-tooltip__icon');
        expect(component.find('button')).to.have.prop('aria-label', 'button-label');
        expect(component.find('button')).to.have.prop('type', 'button');
        component.find('button').simulate('click');
        expect(onClick.calledOnce).to.equal(true);
    });

    it('should render Collapse', () => {
        const component = shallow(<Tooltip>Tooltip Text</Tooltip>);
        expect(component.find('Collapse').exists()).to.equal(true);
        expect(component.find('Collapse')).to.contain('Tooltip Text');
    });

    it('should toggle collapse if button is clicked', () => {
        const component = shallow(<Tooltip>Tooltip Text</Tooltip>);
        expect(component.find('Collapse')).to.have.prop('isOpened', false);
        component.find('button').simulate('click');
        expect(component.find('Collapse')).to.have.prop('isOpened', true);
    });
});
