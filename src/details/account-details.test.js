import { shallow } from 'enzyme';
import { assert, expect } from 'chai';
import React from 'react';
import AccountDetails from './account-details';

describe('<AccountDetails />', () => {

  const account = {
    id: 1,
    name: 'Lønnskonto',
    accountNumber: '42010205683',
    balance: 1234567,
  };

  it('should render root element', () => {
    const wrapper = shallow(<AccountDetails account={account} locale="nb" />);
    assert.equal(wrapper.find('.nfe-account-selector__selected-account-details').length, 1);
  });

  it('should render the accountnumber if passed', () => {
    const wrapper = shallow(<AccountDetails account={account} locale="nb" />);
    assert.equal(wrapper.find('.nfe-account-selector__selected-account-details--left').length, 1);
    assert.equal(wrapper.find('.nfe-account-selector__selected-account-details--left').text(), '4201 02 05683');
  });

  it('should render NOK as default currencyCode', () => {
    const wrapper = shallow(<AccountDetails account={account} locale="nb" />);
    expect(wrapper.find('.nfe-account-selector__selected-account-details--right').text()).to.contain('NOK');
  });

  it('should render currencyCode if supplied', () => {
    const accountSek = {...account, currencyCode: 'SEK'};
    const wrapper = shallow(<AccountDetails account={accountSek} locale="nb" />);
    expect(wrapper.find('.nfe-account-selector__selected-account-details--right').text()).to.contain('SEK');
  });

});
