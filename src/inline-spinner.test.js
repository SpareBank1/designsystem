/*eslint-env mocha*/
/*eslint no-unused-expressions:0*/
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import InlineSpinner from './inline-spinner';

describe('<InlineSpinner />', () => {

    it('shall render a spinner span', () => {
        const wrapper = shallow(<InlineSpinner />);
        expect(wrapper.find('span.ffe-loading-spinner')).to.have.lengthOf(1);
        expect(wrapper.find('span.ffe-loading-spinner--large')).to.have.lengthOf(0);
    });

    it('shall render a large spinner span', () => {
        const wrapper = shallow(<InlineSpinner large={ true } />);
        expect(wrapper.find('span.ffe-loading-spinner')).to.have.lengthOf(1);
        expect(wrapper.find('span.ffe-loading-spinner--large')).to.have.lengthOf(1);
    });
});
