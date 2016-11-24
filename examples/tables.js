import React from 'react';
import { render } from 'react-dom';
import ResponsiveTable from '../src/ResponsiveTable/ResponsiveTable';
import SortableTable from '../src/SortableTable/SortableTable';
import { SIMPLE_TABLE } from './tables.data';

require('./example.less');

const listDOM = document.createElement('section');
document.body.appendChild(listDOM);



render(
	<div className="ffe-body-text">
		<div className="ffe-section-wrapper">
			<div className="ffe-content-container">
				<h2 className="ffe-h2">Responsive table</h2>
				<ResponsiveTable headers={SIMPLE_TABLE.headers} data={SIMPLE_TABLE.data} />
				<h2 className="ffe-h2">Sortable table</h2>
				<SortableTable columns={SIMPLE_TABLE.tableColumns}
                       data={SIMPLE_TABLE.dataObject}
        />
			</div>
		</div>
	</div>
	, listDOM);
