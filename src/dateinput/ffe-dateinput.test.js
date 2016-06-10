/* eslint-env mocha */

import { shallow } from 'enzyme';
import { assert } from 'chai';
import { spy } from 'sinon';
import React from 'react';
import FFEDateInput from './ffe-dateinput';

describe('<FFEDateInput />', () => {
  const onChange = spy();
  const onFocus = spy();
  const onKeyDown = spy();

  const component = shallow(<FFEDateInput
    inputProps={{ className: 'given-class-name', placeholder: 'Given placeholder' }}
    onChange={onChange}
    onFocus={onFocus}
    onKeyDown={onKeyDown}
    value="2016-03-07"
  />);

  it('should render a wrapper for the input field', () => {
    assert.isTrue(component.is('.ffe-dateinput'));
  });

  describe('nested input field', () => {
    const input = component.find('input');

    it('should be a single input field', () => {
      assert.equal(component.length, 1);
    });

    it('should have BEM element class name', () => {
      assert.isTrue(input.hasClass('ffe-dateinput__field'));
    });

    it('should have given value', () => {
      assert.equal(input.prop('value'), '2016-03-07');
    });

    it('should have property from input props', () => {
      assert.equal(input.prop('placeholder'), 'Given placeholder');
    });

    it('should have class name from input props', () => {
      assert.isTrue(input.hasClass('given-class-name'));
    });

    it('should delegate change events', () => {
      input.simulate('change');
      assert.isTrue(onChange.calledOnce);
    });

    it('should delegate focus events', () => {
      input.simulate('focus');
      assert.isTrue(onFocus.calledOnce);
    });

    it('should delegate key down events', () => {
      input.simulate('keypress');
      assert.isTrue(onKeyDown.calledOnce);
    });
  });
});
