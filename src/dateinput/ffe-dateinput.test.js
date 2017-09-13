/* eslint-env mocha */

import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import React from 'react';
import FFEDateInput from './ffe-dateinput';

const defaultProps = {
  inputProps:{ className: 'given-class-name', placeholder: 'Given placeholder' },
  onChange: f => f,
  onFocus: f => f,
  onKeyDown: f => f,
  value: '2016-03-07',
  'aria-invalid': 'false',
};

const getWrapper = props => shallow(<FFEDateInput {...defaultProps} {...props} />);

describe('<FFEDateInput />', () => {
  it('should render a wrapper for the input field', () => {
    const wrapper = getWrapper();
    expect(wrapper.hasClass('ffe-dateinput')).to.equal(true);
  });

  describe('nested input field', () => {
    it('should be a single input field', () => {
      const input = getWrapper().find('input');
      expect(input.length).to.equal(1);
    });

    it('should have BEM element class name', () => {
      const input = getWrapper().find('input');
      expect(input.hasClass('ffe-dateinput__field')).to.equal(true);
    });

    it('should have given value', () => {
      const input = getWrapper().find('input');
      expect(input.prop('value')).to.equal('2016-03-07');
    });

    it('should have property from input props', () => {
      const input = getWrapper().find('input');
      expect(input.prop('placeholder')).to.equal('Given placeholder');
    });

    it('should have given aria-invalid', () => {
      const input = getWrapper().find('input');
      expect(input.prop('aria-invalid')).to.equal('false');
    });

    it('should fall back to use ariaInvalid prop if aria-invalid is not set', () => {
      const input = getWrapper({ 'aria-invalid': undefined, ariaInvalid: true }).find('input');
      expect(input.prop('aria-invalid')).to.equal('true');
    });

    it('should have class name from input props', () => {
      const input = getWrapper().find('input');
      expect(input.hasClass('given-class-name')).to.equal(true);
    });

    it('should delegate change events', () => {
      const spy = sinon.spy();
      const input = getWrapper({ onChange: spy }).find('input');
      input.simulate('change');
      expect(spy.calledOnce).to.equal(true);
    });

    it('should delegate focus events', () => {
      const spy = sinon.spy();
      const input = getWrapper({ onFocus: spy }).find('input');
      input.simulate('focus');
      expect(spy.calledOnce).to.equal(true);
    });

    it('should delegate key down events', () => {
      const spy = sinon.spy();
      const input = getWrapper({ onKeyDown: spy }).find('input');
      input.simulate('keypress');
      expect(spy.calledOnce).to.equal(true);
    });
  });
});
