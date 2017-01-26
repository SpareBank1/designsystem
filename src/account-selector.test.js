/* We stick to require() rather than imports in this file because imports are hoisted, and thus ran before any other code.
 * This is a problem because we need to set up document, window and navigator on global before we can import/require React.
 * More info on
 * https://github.com/airbnb/enzyme/issues/58
 * http://stackoverflow.com/questions/26867535/calling-setstate-in-jsdom-based-tests-causing-cannot-render-markup-in-a-worker
 */
const jsdom = require('jsdom');
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;
global.navigator = global.window.navigator;

const AccountSelector = require('./account-selector').default;
const {accountFormatter} = require('./util/format');
const amountFormatter = require('nfe-amount-formatter').default;

const React = require('react');
const assert = require('chai').assert;
const mount = require('enzyme').mount;

const accounts = [
  {id: 1, name: 'Matvarerkonto', accountNumber: '42011841044', balance: 24566546.21},
  {id: 2, name: 'Sparekonto', accountNumber: '42011841045', balance: 124566546.21}
];
const noMatches = 'Ingen treff';

describe('<AccountSelector>', () => {
  it('should show match when match is found', () => {
    const el =
      <AccountSelector
        accounts={ accounts }
        onChange={ () => {} }
        noMatches={ noMatches }
        value="Spare"
        id="custom-id1"
        onAccountSelected={ () => {} }
      />;
    const wrapper = mount(el);
    wrapper.find('input').simulate('focus');

    assert.equal(wrapper.find('.nfe-account-suggestions__name').length, 1);
    assert.equal(wrapper.find('.nfe-account-suggestions__name').text(), accounts[1].name);
    assert.include(wrapper.find('.nfe-account-suggestions__details').text(), accountFormatter(accounts[1].accountNumber));
    assert.include(wrapper.find('.nfe-account-suggestions__details').text(), amountFormatter(accounts[1].balance));
  });

  it('should show all accounts when nothing is searched for', () => {
    const el =
      <AccountSelector
        accounts={ accounts }
        onChange={ () => {} }
        noMatches={ noMatches }
        id="custom-id2"
        onAccountSelected={ () => {} }
      />;
    const wrapper = mount(el);
    wrapper.find('input').simulate('focus');

    assert.equal(wrapper.find('.nfe-account-suggestions__name').length, accounts.length);
  });

  it('should show no matches when no matches are found', () => {
    const el =
      <AccountSelector
        accounts={ accounts }
        onChange={ () => {} }
        noMatches={ noMatches }
        value="Trololol"
        id="custom-id3"
        onAccountSelected={ () => {} }
      />;
    const wrapper = mount(el);
    wrapper.find('input').simulate('focus');

    assert.equal(wrapper.find('.nfe-account-suggestions__empty').length, 1);
    assert.equal(wrapper.find('.nfe-account-suggestions__empty').text(), noMatches);
  });

  it('should reset when reset is called', () => {
    const el =
      <AccountSelector
        accounts={ accounts }
        onChange={ () => {} }
        noMatches={ noMatches }
        value="Sparekonto"
        id="custom-id1"
        onAccountSelected={ () => {} }
      />;
    const wrapper = mount(el);
    wrapper.find('button').simulate('click');

    assert.isUndefined(wrapper.find('input').value);
    assert.equal(wrapper.find('.nfe-account-suggestions__details').length, 0);

  });
});
