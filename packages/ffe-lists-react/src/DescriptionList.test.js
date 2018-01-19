/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import DescriptionList from './DescriptionList';

describe('<DescriptionList>', () => {
  it('should render a <dl> with the expected class', () => {
    const wrapper = shallow(<DescriptionList><dt>a</dt><dd>1</dd><dt>b</dt><dd>2</dd></DescriptionList>);

    assert.ok(wrapper.find('dl').hasClass('ffe-description-list'));
  });

  it('should render pairs of terms and descriptions', () => {
    const wrapper = shallow(<DescriptionList><dt>a</dt><dd>1</dd><dt>b</dt><dd>2</dd></DescriptionList>);

    assert.equal(wrapper.find('dt').at(0).text(), 'a');
    assert.equal(wrapper.find('dd').at(0).text(), '1');

    assert.equal(wrapper.find('dt').at(1).text(), 'b');
    assert.equal(wrapper.find('dd').at(1).text(), '2');
  });

  it('should render a <dl> with the medium attribute', () => {
    const wrapper = shallow(<DescriptionList medium={true}><dt>a</dt><dd>1</dd><dt>b</dt><dd>2</dd></DescriptionList>);

    assert.ok(wrapper.find('dl').hasClass('ffe-description-list'));
    assert.ok(wrapper.find('dl').hasClass('ffe-description-list--md'));
  });
});
