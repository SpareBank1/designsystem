/* eslint react/prop-types:0*/
import React from 'react';
import { render } from 'react-dom';
import ResponsiveTable from '../src/index';
import {
    SIMPLE_TABLE,
    SIMPLE_TABLE_WITH_FOOTER,
    SIMPLE_TABLE_EXPANDABLE,
    SIMPLE_TABLE_SORTABLE_EXPANDABLE,
    SIMPLE_TABLE_HIDE_ON_TABLET,
    SIMPLE_TABLE_SORTABLE_PAGINATED
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

const LazyContent = function({ row }) {
    console.log('render row expansion for "%s"', row.name);
    console.dir(row);
    return (
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
};

const lazyExpandedContentMapper = row => row.address && row.email && row.phone && (<LazyContent row={row} />);

render(
    <div className="ffe-body-text">
        <div className="ffe-section-wrapper">
            <div className="ffe-content-container">

                <h2 className="ffe-h2">Responsive table</h2>
                <ResponsiveTable columns={SIMPLE_TABLE.columns} data={SIMPLE_TABLE.dataObject}/>

                <h2 className="ffe-h2">Responsive table with columns hidden on tablet</h2>
                <ResponsiveTable columns={SIMPLE_TABLE_HIDE_ON_TABLET.columns} data={SIMPLE_TABLE_HIDE_ON_TABLET.dataObject}/>

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

                <h2 className="ffe-h2">Sortable table with offset and limit (5th to 15th item) and screen-reader-only caption</h2>
                <ResponsiveTable
                    columns={SIMPLE_TABLE_SORTABLE_PAGINATED.columns}
                    data={SIMPLE_TABLE_SORTABLE_PAGINATED.dataObject}
                    sortable={true}
                    offset={4}
                    limit={10}
                    caption="FFE colors"
                    srOnlyCaption={true}
                />

                <h2 className="ffe-h2">Sortable, expandable, captioned, footerized, condensed, small headers</h2>
                <ResponsiveTable
                    columns={SIMPLE_TABLE_SORTABLE_EXPANDABLE.columns}
                    data={SIMPLE_TABLE_SORTABLE_EXPANDABLE.dataObject}
                    expandedContentMapper={ lazyExpandedContentMapper }
                    condensed={true}
                    smallHeader={true}
                    caption="This table even has caption!"
                    sortable={true}
                />

            </div>
        </div>
    </div>
    , listDOM
);
