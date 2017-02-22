import { shallow } from 'enzyme';
import { assert } from 'chai';
import React from 'react';
import AccountDetails from './account-details';

describe('<AccountDetails />', () => {

  const account = {
    id: 1,
    name: 'Lønnskonto',
    accountNumber: '42010205683',
    balance: 1234567,
  };

  it('should render balance', () => {
    const wrapper = shallow(<AccountDetails account={account} locale='nb' />);
    assert.equal(wrapper.find('.account-details--right').length, 1);
  });

  it('should not render balance', () => {
    const wrapper = shallow(<AccountDetails account={{...account, balance : null}} locale='nb' />);
    assert.equal(wrapper.find('.account-details--right').length, 0);
  });
});
