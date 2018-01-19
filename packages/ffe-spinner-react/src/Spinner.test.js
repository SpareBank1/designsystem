/*eslint-env mocha*/
/*eslint no-unused-expressions:0*/
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Spinner from './spinner';

describe('<Spinner />', () => {

    it('shall render a spinner div in a container', () => {
        const wrapper = shallow(<Spinner />);
        const container = wrapper.find('div.ffe-content-container');
        expect(container).to.have.lengthOf(1);
        expect(container.find('div.ffe-loading-spinner')).to.have.lengthOf(1);
    });

    it('shall be centered by default', () => {
        const wrapper = shallow(<Spinner />);
        expect(wrapper.find('.ffe-content-container--text-left')).to.have.lengthOf(0);
    });

    it('shall be able to disable centering', () => {
        const wrapper = shallow(<Spinner center={ false } />);
        expect(wrapper.find('.ffe-content-container--text-left')).to.have.lengthOf(1);
    });

    it('shall be a normal sized spinner by default', () => {
        const wrapper = shallow(<Spinner />);
        expect(wrapper.find('div.ffe-loading-spinner--large')).to.have.lengthOf(0);
    });

    it('shall be a large spinner when asked to', () => {
        const wrapper = shallow(<Spinner large={ true } />);
        expect(wrapper.find('div.ffe-loading-spinner--large')).to.have.lengthOf(1);
    });

    it('shall not include the text body without a text', () => {
        const wrapper = shallow(<Spinner />);
        expect(wrapper.find('.ffe-body-paragraph')).to.have.lengthOf(0);
    });

    it('shall render the text if supplied', () => {
        const wrapper = shallow(<Spinner text="Hippopotamus" />);
        const body = wrapper.find('.ffe-body-paragraph');
        expect(body).to.have.lengthOf(1);
        expect(body.text()).to.be.equal('Hippopotamus');
    });

    it('shall render the children if supplied', () => {
        const wrapper = shallow(
            <Spinner>
                <span className="fancy">Schmancy</span>
            </Spinner>
        );
        const children = wrapper.find('span.fancy');
        expect(children).to.have.lengthOf(1);
        expect(children.text()).to.be.equal('Schmancy');
    });
});
