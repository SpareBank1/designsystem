import React from 'react';
import { render } from 'react-dom';
import Tab from '../src/ffe-tabs-react';

require('./example.less');

const listDOM = document.createElement('section');
document.body.appendChild(listDOM);

render(
	<div className="ffe-body-text">
		<div>
			<Tab>En tab</Tab>
			<Tab>En annen tab</Tab>
			<Tab selected={true}>En valgt tab</Tab>
		</div>

		<div>
			<Tab ghost={true}>Ghost tab</Tab>
			<Tab ghost={true} selected={true}>Valgt ghost tab</Tab>
		</div>

		<div>
			<Tab condensed={true}>Condensed tab</Tab>
			<Tab condensed={true} selected={true}>Valgt condensed tab</Tab>
			<Tab condensed={true}>En til condensed tab</Tab>
		</div>
	</div>
	, listDOM);