import React from 'react';
import { render } from 'react-dom';
import PersonSelectorExample from './person-selector';
import AccountSelectorExample from './account-selector';
import AccountSelectorMultiExample from './account-selector-multi';

require('./example.less');

const heading = document.createElement('h1');
heading.textContent = 'Selectors';
heading.className = 'ffe-h1';
document.body.appendChild(heading);

const accountSelectorDOM = document.createElement('section');
document.body.appendChild(accountSelectorDOM);

render(
  <div>
    <AccountSelectorExample />
    <PersonSelectorExample />
    <AccountSelectorMultiExample />
  </div>
  , accountSelectorDOM);
