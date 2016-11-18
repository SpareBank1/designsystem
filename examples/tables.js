import React from 'react';
import { render } from 'react-dom';

require('./example.less');

const listDOM = document.createElement('section');
document.body.appendChild(listDOM);

render(
	<div className="ffe-body-text">
		{/* Table examples */}
	</div>
	, listDOM);