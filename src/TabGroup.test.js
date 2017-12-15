import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Tab from './Tab';
import TabGroup from './TabGroup';

chai.use(chaiEnzyme());

describe('TabGroup', () => {
   
    it('renders a tab group', () => {
        const wrapper = shallow(<TabGroup><Tab>En tab</Tab><Tab>En annen tab</Tab></TabGroup>);

        expect(wrapper).to.have.className('ffe-tab-button-group');
    });

    it('contains a tab button', () => {
        const wrapper = shallow(<TabGroup><Tab>En tab</Tab><Tab>En annen tab</Tab></TabGroup>);

        expect(wrapper).to.have.descendants(Tab);
    });
});
