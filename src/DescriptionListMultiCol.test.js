/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import DescriptionListMultiCol from './DescriptionListMultiCol';

describe('<DescriptionListMultiCol>', () => {
  it('should render a <dl> with the expected classes', () => {
    const wrapper = shallow(<DescriptionListMultiCol><dt>a</dt><dd>1</dd><dt>b</dt><dd>2</dd></DescriptionListMultiCol>);

    assert.ok(wrapper.find('dl').hasClass('ffe-description-list-multicol'));
  });

  it('should render pairs of terms and descriptions', () => {
    const wrapper = shallow(<DescriptionListMultiCol><dt>a</dt><dd>1</dd><dt>b</dt><dd>2</dd></DescriptionListMultiCol>);

    assert.equal(wrapper.find('dt').at(0).text(), 'a');
    assert.equal(wrapper.find('dd').at(0).text(), '1');

    assert.equal(wrapper.find('dt').at(1).text(), 'b');
    assert.equal(wrapper.find('dd').at(1).text(), '2');
  });

  it('should render a fragment container div with expected class', () => {
    const wrapper = shallow(<DescriptionListMultiCol><dt>a</dt><dd>1</dd><dt>b</dt><dd>2</dd></DescriptionListMultiCol>);

    assert.ok(wrapper.find('div').at(0).hasClass('ffe-description-list-multicol__avoid-break'));
  });
});
