import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import Tab from './ffe-tabs-react';

describe('<Tab>', () => {
   
    it('should render a tab button', () => {
        const wrapper = shallow(<Tab>En tab</Tab>);
    
        assert.ok(wrapper.find('button').hasClass('ffe-tab-button'));
    });

    it('should render a condensed tab button', () => {
        const wrapper = shallow(<Tab condensed={true}>En tab</Tab>);
    
        assert.ok(wrapper.find('button').hasClass('ffe-tab-button--condensed'));
    });
});
