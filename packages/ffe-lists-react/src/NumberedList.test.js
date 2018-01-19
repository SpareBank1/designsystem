/* eslint-env mocha */
import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import NumberedList from './NumberedList';

describe('<NumberedList>', () => {
  it('should render a <ol> with class ffe-numbered-list', () => {
    const wrapper = shallow(<NumberedList><li>First</li><li>Second</li></NumberedList>);

    assert.ok(wrapper.find('ol').hasClass('ffe-numbered-list'));
  });
  it('should render two list elements', () => {
    const wrapper = shallow(<NumberedList><li>First</li><li>Second</li></NumberedList>);

    assert.ok(wrapper.find('li').at(0).text(), 'First');
    assert.ok(wrapper.find('li').at(1).text(), 'Second');
  });
});
