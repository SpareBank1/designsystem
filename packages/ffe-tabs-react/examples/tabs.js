import React from 'react';
import { render } from 'react-dom';
import Tab from '../src/Tab';
import TabGroup from '../src/TabGroup';

require('./example.less');

const tabDOM = document.createElement('section');
document.body.appendChild(tabDOM);

render(
	<div className="ffe-body-text">
		<TabGroup>
			<Tab>En tab</Tab>
			<Tab>En annen tab</Tab>
			<Tab selected={true}>En valgt tab</Tab>
		</TabGroup>

		<TabGroup>
			<Tab ghost={true}>Ghost tab</Tab>
			<Tab ghost={true} selected={true}>Valgt ghost tab</Tab>
		</TabGroup>

		<TabGroup>
			<Tab condensed={true}>Condensed tab</Tab>
			<Tab condensed={true} selected={true}>Valgt condensed tab</Tab>
			<Tab condensed={true}>En til condensed tab</Tab>
		</TabGroup>

		<TabGroup>
			<Tab onClick={() => { alert('Hei'); }}>Klikk meg</Tab>
			<Tab onClick={() => { alert('Hadet'); }}>Klikk meg også</Tab>
			<Tab onClick={() => { alert('Grrr'); }}>Ikke klikk meg</Tab>
		</TabGroup>
	</div>
	, tabDOM);
	