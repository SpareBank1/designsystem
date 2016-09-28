import React from 'react';
import { render } from 'react-dom';
import BulletList from '../src/BulletList';
import CheckList from '../src/CheckList';
import NumberedList from '../src/NumberedList';
import StylizedNumberedList from '../src/StylizedNumberedList';
import DescriptionListFlex from '../src/DescriptionListFlex';
import DescriptionListMultiCol from '../src/DescriptionListMultiCol';

require('./example.less');

const listDOM = document.createElement('section');
document.body.appendChild(listDOM);

render(
	<div className="ffe-body-text">
		<h2 className="ffe-h4">BulletList</h2>
		<BulletList>
			<li>List item</li>
			<li>Another list item</li>
			<li>Yet another list item</li>
		</BulletList>

		<hr className="ffe-divider-line"/>

		<h2 className="ffe-h4">CheckList</h2>
		<CheckList>
			<li>List item</li>
			<li>Another list item</li>
			<li>Yet another list item</li>
		</CheckList>

		<hr className="ffe-divider-line"/>

		<h2 className="ffe-h4">NumberedList</h2>
		<NumberedList>
			<li>List item</li>
			<li>Another list item</li>
			<li>Yet another list item</li>
		</NumberedList>

		<hr className="ffe-divider-line"/>

		<h2 className="ffe-h4">StylizedNumberedList</h2>
		<StylizedNumberedList>
			<li>List item</li>
			<li>Another list item</li>
			<li>Yet another list item</li>
		</StylizedNumberedList>

		<hr className="ffe-divider-line"/>

		<h2 className="ffe-h4">DescriptionListFlex</h2>
		<DescriptionListFlex>
			<dt>Term</dt>
			<dd>Description</dd>

			<dt>Another term</dt>
			<dd>Another description</dd>

			<dt>Yet another term</dt>
			<dd>Yet another description</dd>
		</DescriptionListFlex>

		<hr className="ffe-divider-line"/>

		<h2 className="ffe-h4">DescriptionListMultiCol</h2>
		<DescriptionListMultiCol>
			<dt>Term</dt>
			<dd>Description</dd>
			<dt>Another term</dt>
			<dd>Another description</dd>
			<dt>Yet another term</dt>
			<dd>Yet another description</dd>
		</DescriptionListMultiCol>
	</div>
	, listDOM);