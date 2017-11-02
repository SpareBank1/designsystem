import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import sinon from 'sinon';
import React from 'react';
import AccountSelector from './account-selector';
import SuggestionItem from '../suggestion/suggestion-item';
import Input from './input-field';
import '../suggestion/test/setup-dom';

Enzyme.configure({adapter: new Adapter()});

const accounts = [
  {
    id: '1',
    name: 'konto 1',
    accountNumber: '111222333',
    organisationId: '987654321',
    accountGroupIds: [ '1' ],
    currencyCode: 'NOK'
  },
  {
    id: '2',
    name: 'kontoo 2',
    accountNumber: '222333444',
    organisationId: '123456789',
    accountGroupIds: [ '1', '2' ],
    currencyCode: 'EUR'
  },
  {
    id: '3',
    name: 'kontoo 3',
    accountNumber: '333444555',
    organisationId: '123456789',
    accountGroupIds: [],
    currencyCode: 'NOK'
  }
];

function propsAccountSelector() {
  return {
    accounts: [...accounts],
    className: "klasse",
    value: '',
    id: "konto-id",
    locale: "nb",
    noMatches: "Iiik!",
    onAccountSelected: () => {},
    onChange : () => {},
    selectedAccount: accounts[1],
    showBalance: false,
  };
}

function mountAccountSelector(props) {
  return mount(
    <AccountSelector
      {...propsAccountSelector()} {...props}
    />);
}


describe('<AccountSelector> methods', () => {

  it('should filter suggestions when input set to "oo"', () => {
    const component = mountAccountSelector();
    component.instance().onInputChange('');

    expect(component.instance().baseSelector.props.suggestions.length).to.equal(3);

    component.setProps({value: 'oo'});
    expect(component.instance().baseSelector.props.suggestions.length).to.equal(2);
  });

  it('calls onSuggestionSelect with accounts[0] when the first item is selected', () => {
    const onSuggestionSelectSpy = sinon.spy();
    const component = mountAccountSelector({onSuggestionSelect: onSuggestionSelectSpy});
    const input = component.find(Input);
    input.simulate('focus');
    const suggestionListItem = component.find(SuggestionItem).first();
    suggestionListItem.simulate('mousedown');

    expect(onSuggestionSelectSpy.calledWith(accounts[0]));

  });
});
