import React from 'react';
import { render } from 'react-dom';
import Spinner from '../src/spinner.jsx';
import InlineSpinner from '../src/inline-spinner.jsx';

require('./example.less');

const heading = document.createElement('h1');
heading.textContent = 'Spinner';
heading.className = 'ffe-h1';
document.body.appendChild(heading);

const accountSelectorDOM = document.createElement('section');
document.body.appendChild(accountSelectorDOM);

render(
  <div>
    <p>Default spinner: <Spinner /></p>
    <p>Spinner with text: <Spinner text="some text" /></p>
    <p>Non-center spinner: <Spinner center={false} /></p>
    <p>Inline spinner: <InlineSpinner /></p>
    <p>Inline, large spinner: <InlineSpinner large /></p>
  </div>
  , accountSelectorDOM);
