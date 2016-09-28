import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import CheckList from './CheckList';

describe('<CheckList>', () => {
  it('should render a <ul> with class ffe-check-list', () => {
    const wrapper = shallow(<CheckList><li>First</li><li>Second</li></CheckList>);

    assert.ok(wrapper.find('ul').hasClass('ffe-check-list'));
  });
  it('should render two list elements', () => {
    const wrapper = shallow(<CheckList><li>First</li><li>Second</li></CheckList>);

    assert.ok(wrapper.find('li').at(0).text(), 'First');
    assert.ok(wrapper.find('li').at(1).text(), 'Second');
  });
});
