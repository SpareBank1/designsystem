import {shallow} from 'enzyme';
import {assert} from 'chai';
import React from 'react';
import {AccountBalanceHoc} from './account-balance-hoc';

function shallowHoc(balance) {
  return shallow(
    <AccountBalanceHoc balance={balance}>
      <span>Hei</span>
    </AccountBalanceHoc>
  );
}

describe('<AccountBalanceHoc />', () => {

  it('should render children if balance is defined', () => {
    const wrapper = shallowHoc(0);
    assert.equal(wrapper.children().length, 1);
  });

  it('should not render children if balance is undefined', () => {
    const wrapper = shallowHoc(undefined);
    assert.equal(wrapper.children().length, 0);
  });
});
