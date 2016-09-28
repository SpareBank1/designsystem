import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import StylizedNumberedList from './StylizedNumberedList';

describe('<StylizedNumberedList>', () => {
  it('should render a <ol> with class ffe-stylized-numbered-list', () => {
    const wrapper = shallow(<StylizedNumberedList><li>First</li><li>Second</li></StylizedNumberedList>);

    assert.ok(wrapper.find('ol').hasClass('ffe-stylized-numbered-list'));
  });
  it('should render two list elements', () => {
    const wrapper = shallow(<StylizedNumberedList><li>First</li><li>Second</li></StylizedNumberedList>);

    assert.ok(wrapper.find('li').at(0).text(), 'First');
    assert.ok(wrapper.find('li').at(1).text(), 'Second');
  });
});
