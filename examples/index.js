import React from 'react';
import {render} from 'react-dom';
import AccountSelectorExample from './account-selector';
import MultiAccountSelectorExample from './account-selector-multi';
import MultiAccountSelectorWithAllExample from './account-selector-multi_with_all';
import {accounts as accountArray} from './example-data';

require('./example.less');

const heading = document.createElement('h1');
heading.textContent = 'Selectors';
heading.className = 'ffe-h1';
document.body.appendChild(heading);

const accountSelectorDOM = document.createElement('section');
document.body.appendChild(accountSelectorDOM);


render(
  <form>
    <input/>
    <MultiAccountSelectorExample />
    <MultiAccountSelectorWithAllExample />
    <AccountSelectorExample selectedAccount={null} value={''} />
    <AccountSelectorExample selectedAccount={accountArray[0]} value={accountArray[0].name} />
    <input/>
  </form>
  , accountSelectorDOM);
