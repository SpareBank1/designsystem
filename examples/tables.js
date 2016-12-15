import React from 'react';
import { render } from 'react-dom';
import ResponsiveTable from '../src/ResponsiveTable/ResponsiveTable';
import SortableTable from '../src/SortableTable/SortableTable';
import TableRowExpandable from '../src/TableRowExpandable/TableRowExpandable';
import { SIMPLE_TABLE } from './tables.data';

require('./example.less');

const listDOM = document.createElement('section');
document.body.appendChild(listDOM);

render(
  <div className="ffe-body-text">
    <div className="ffe-section-wrapper">
      <div className="ffe-content-container">

        <h2 className="ffe-h2">Responsive table</h2>
        <ResponsiveTable headers={SIMPLE_TABLE.headers} data={SIMPLE_TABLE.dataObject}/>

        <h2 className="ffe-h2">Sortable table</h2>
        <SortableTable headers={SIMPLE_TABLE.headers} data={SIMPLE_TABLE.dataObject} />

        <h2 className="ffe-h2">Responsive table with expandable rows</h2>
        <ResponsiveTable headers={SIMPLE_TABLE.headers} data={SIMPLE_TABLE.dataObject} expandable={true}>

          {
            SIMPLE_TABLE.dataObject.map((row, index) => (
              <TableRowExpandable cells={ row } headers={SIMPLE_TABLE.headers} key={ index }>
                <p>{ row.bio }</p>
              </TableRowExpandable>
            ))
          }
        </ResponsiveTable>

      </div>
    </div>
  </div>
  , listDOM);
