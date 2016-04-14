import React from 'react';
import { render } from 'react-dom';

require('./example.less');

import FFEDatepicker from '../src/ffe-datepicker-react.js';

const heading = document.createElement('h1');
heading.textContent = 'FFE-Datepicker';
heading.classList.add('ffe-h1');
document.body.appendChild(heading);

const main = document.createElement('main');
document.body.appendChild(main);

render(<FFEDatepicker />, main);
