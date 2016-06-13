/* eslint-env mocha */

import { shallow } from 'enzyme';
import { assert } from 'chai';
import React from 'react';
import FFEDateInput from './ffe-dateinput';

describe('<FFEDateInput />', () => {
  const dateinput = <FFEDateInput />;

  it('should render a wrapper for the input field', () => {
    const wrapper = shallow(dateinput);
    assert.equal(wrapper.find('.ffe-dateinput').length, 1);
  });

  it('should render an input field', () => {
    const wrapper = shallow(dateinput);
    assert.equal(wrapper.find('input.ffe-dateinput__field').length, 1);
  });
});
