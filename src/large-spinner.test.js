import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import LargeSpinner from './large-spinner';

describe('<LargeSpinner />', () => {

    it('shall render a spinner with the large property set to true', () => {
        const wrapper = shallow(<LargeSpinner />);
        const spinner = wrapper.find('Spinner');
        expect(spinner).to.have.lengthOf(1);
        expect(spinner.prop('large')).to.be.true;
    });

    it('shall be centered by default', () => {
        const wrapper = shallow(<LargeSpinner/>);
        expect(wrapper.find('Spinner').prop('center')).to.be.true;
    });

    it('shall be able to disable centering', () => {
        const wrapper = shallow(<LargeSpinner center={ false }/>);
        expect(wrapper.find('Spinner').prop('center')).to.be.false;
    });

    it('shall render the text if specified', () => {
        const wrapper = shallow(<LargeSpinner text="bananahammock" />);
        expect(wrapper.find('Spinner').prop('text')).to.be.equal('bananahammock');
    });

    it('shall render the children if passed', () => {
        const wrapper = shallow(
            <LargeSpinner>
                <span className="fancyLabel">Look at me, I am so fancy</span>
            </LargeSpinner>
        );
        expect(wrapper.find('span.fancyLabel')).to.have.lengthOf(1);
    });
});
