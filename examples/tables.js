import React from 'react';
import { render } from 'react-dom';
import ResponsiveTable from '../src/ResponsiveTable/ResponsiveTable';
import SortableTable from '../src/SortableTable/SortableTable';
import TableRowExpandable from '../src/TableRowExpandable/TableRowExpandable';
import { SIMPLE_TABLE, SIMPLE_TABLE_EXPANDABLE } from './tables.data';

require('./example.less');

const listDOM = document.createElement('section');
document.body.appendChild(listDOM);

render(
  <div className="ffe-body-text">
    <div className="ffe-section-wrapper">
      <div className="ffe-content-container">

        <h2 className="ffe-h2">Responsive table with expandable rows</h2>
        <ResponsiveTable headers={SIMPLE_TABLE_EXPANDABLE.headers} data={SIMPLE_TABLE_EXPANDABLE.dataObject} expandable={true}>

          {
            SIMPLE_TABLE_EXPANDABLE.dataObject.map((row, index) => (
              <TableRowExpandable cells={ row } headers={SIMPLE_TABLE_EXPANDABLE.headers} key={ index }>
                <div>
                  <dl>
                    <dt>Adresse</dt>
                    <dd>{ row.address }</dd>
                    <dt>E-post</dt>
                    <dd>{ row.email }</dd>
                    <dt>Telefon</dt>
                    <dd>{ row.phone }</dd>
                  </dl>
                </div>
              </TableRowExpandable>
            ))
          }
        </ResponsiveTable>

        <h2 className="ffe-h2">Responsive table</h2>
        <ResponsiveTable headers={SIMPLE_TABLE.headers} data={SIMPLE_TABLE.dataObject}/>

        <h2 className="ffe-h2">Sortable table</h2>
        <SortableTable headers={SIMPLE_TABLE.headers} data={SIMPLE_TABLE.dataObject} />


      </div>
    </div>
  </div>
  , listDOM);
