/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import BulletList from './BulletList';

describe('<BulletList>', () => {
  it('should render a <ul> with class ffe-bullet-list', () => {
    const wrapper = shallow(<BulletList><li>First</li><li>Second</li></BulletList>);

    assert.ok(wrapper.find('ul').hasClass('ffe-bullet-list'));
  });
  it('should render two list elements', () => {
    const wrapper = shallow(<BulletList><li>First</li><li>Second</li></BulletList>);

    assert.ok(wrapper.find('li').at(0).text(), 'First');
    assert.ok(wrapper.find('li').at(1).text(), 'Second');
  });
});
