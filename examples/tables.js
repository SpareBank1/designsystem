import React from 'react';
import { render } from 'react-dom';
import ResponsiveTable from '../src/index';
import {
    SIMPLE_TABLE,
    SIMPLE_TABLE_WITH_FOOTER,
    SIMPLE_TABLE_EXPANDABLE,
    SIMPLE_TABLE_SORTABLE_EXPANDABLE
} from './tables.data';

require('./example.less');

const listDOM = document.createElement('section');
document.body.appendChild(listDOM);

const expandedContentMapper = row => row.address && row.email && row.phone && (
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
);

render(
    <div className="ffe-body-text">
        <div className="ffe-section-wrapper">
            <div className="ffe-content-container">

                <h2 className="ffe-h2">Responsive table</h2>
                <ResponsiveTable columns={SIMPLE_TABLE.columns} data={SIMPLE_TABLE.dataObject}/>

                <h2 className="ffe-h2">Responsive table with footer and caption</h2>
                <ResponsiveTable columns={SIMPLE_TABLE_WITH_FOOTER.columns} data={SIMPLE_TABLE_WITH_FOOTER.dataObject} caption="This is a caption"/>

                <h2 className="ffe-h2">Responsive table with expandable rows</h2>
                <ResponsiveTable
                    columns={SIMPLE_TABLE_EXPANDABLE.columns}
                    data={SIMPLE_TABLE_EXPANDABLE.dataObject}
                    expandedContentMapper={ expandedContentMapper }
                />

                <h2 className="ffe-h2">Sortable table</h2>
                <ResponsiveTable columns={SIMPLE_TABLE.columns} data={SIMPLE_TABLE.dataObject} sortable={true}/>

                <h2 className="ffe-h2">Sortable, expandable, captioned, footerized</h2>
                <ResponsiveTable
                    columns={SIMPLE_TABLE_SORTABLE_EXPANDABLE.columns}
                    data={SIMPLE_TABLE_SORTABLE_EXPANDABLE.dataObject}
                    expandedContentMapper={ expandedContentMapper }
                    sortable={true}
                    caption="This is the craziest table we can offer"
                />

            </div>
        </div>
    </div>
    , listDOM
);
