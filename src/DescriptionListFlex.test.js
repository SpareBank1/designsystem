/* eslint-disable no-unused-expressions */

import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import DescriptionListFlex from './DescriptionListFlex';

describe('<DescriptionListFlex>', () => {
  it('should render a <dl> with the expected classes', () => {
    const wrapper = shallow(<DescriptionListFlex><dt>a</dt><dd>1</dd><dt>b</dt><dd>2</dd></DescriptionListFlex>);

    assert.ok(wrapper.find('dl').hasClass('ffe-description-list'));
    assert.ok(wrapper.find('dl').hasClass('ffe-description-list--flex'));
  });

  it('should render pairs of terms and descriptions', () => {
    const wrapper = shallow(<DescriptionListFlex><dt>a</dt><dd>1</dd><dt>b</dt><dd>2</dd></DescriptionListFlex>);

    assert.equal(wrapper.find('dt').at(0).text(), 'a');
    assert.equal(wrapper.find('dd').at(0).text(), '1');

    assert.equal(wrapper.find('dt').at(1).text(), 'b');
    assert.equal(wrapper.find('dd').at(1).text(), '2');
  });
});
