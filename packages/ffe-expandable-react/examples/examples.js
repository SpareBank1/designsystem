import React from 'react';
import { render } from 'react-dom';
import ExpandableDemo from './ExpandableDemo';

require('./examples.less');

const listDOM = document.createElement('section');
document.body.appendChild(listDOM);

render(<ExpandableDemo />, listDOM);
