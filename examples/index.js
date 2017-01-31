import React from 'react';
import {render} from 'react-dom';
import AccountSelectorExample from './account-selector';

require('./example.less');

const heading = document.createElement('h1');
heading.textContent = 'Selectors';
heading.className = 'ffe-h1';
document.body.appendChild(heading);

const accountSelectorDOM = document.createElement('section');
document.body.appendChild(accountSelectorDOM);


render(
  <div>
    <input/>
    <AccountSelectorExample />
  </div>
  , accountSelectorDOM);
