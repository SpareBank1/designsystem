import React from 'react';
import { render } from 'react-dom';
import { ResponsiveTable } from '../src';
import { SIMPLE_TABLE } from './tables.data';

require('./example.less');

const listDOM = document.createElement('section');
document.body.appendChild(listDOM);



render(
	<div className="ffe-body-text">
		<div className="ffe-section-wrapper">
			<div className="ffe-content-container">
				<h1 className="ffe-h1">Responsive table</h1>
				<ResponsiveTable headers={SIMPLE_TABLE.headers} data={SIMPLE_TABLE.data} />
			</div>
		</div>
	</div>
	, listDOM);
