import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Tab from './Tab';

chai.use(chaiEnzyme());

describe('Tab', () => {
   
    it('should render a tab button', () => {
        const wrapper = shallow(<Tab>En tab</Tab>);
    
        expect(wrapper).to.have.className('ffe-tab-button');
    });

    it('should render a condensed tab button', () => {
        const wrapper = shallow(<Tab condensed={true}>En tab</Tab>);
    
        expect(wrapper).to.have.className('ffe-tab-button--condensed');
    });

    it('should render a ghost tab button', () => {
        const wrapper = shallow(<Tab ghost={true}>En tab</Tab>);
    
        expect(wrapper).to.have.className('ffe-tab-button--ghost');
    });

    it('should render a selected tab button', () => {
        const wrapper = shallow(<Tab selected={true}>En tab</Tab>);
    
        expect(wrapper).to.have.className('ffe-tab-button--selected');
    });

    it('passes any prop on to a tab button', () => {
        const tab = shallow(<Tab data-analytics-track="logMe">En tab</Tab>);

        expect(tab).to.have.attr('data-analytics-track', 'logMe');
    });
});
