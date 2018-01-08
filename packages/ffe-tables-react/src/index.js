import React from 'react';
import { node, bool, func, number, oneOf, oneOfType, arrayOf, shape, string } from 'prop-types';
import TableComponent from './Table';
import SortableTableComponent from './SortableTable';

function Table(props) {
    return props.sortable ?
        <SortableTableComponent {...props}/> :
        <TableComponent {...props}/>;
}

Table.propTypes = {
    caption: node,
    /** Make the caption only visible for screen readers */
    srOnlyCaption: bool,
    /** A mapping function that returns a renderable node that will be rendered for each expandable row */
    expandedContentMapper: func,
    sortable: bool,
    /** When paginated, lets you set the number of rows to offset from the beginning */
    offset: number,
    /** Limits the number of rows to show on one page. Decides whether or not to paginate your table */
    limit: number,
    /** Makes your table condensed - for pages that show a lot of data */
    condensed: bool,
    /** Set to true if you want the row headings to be narrower on smalls screens */
    smallHeader: bool,
    /** Removes left cell padding from the first column */
    alignLeft: bool,
    /** Show your table as a regular column based table on small devices */
    columnLayoutMobile: bool,
    /** Decide if your table rows should break into a vertical view on small or no devices */
    breakpoint: oneOf(['sm', 'none']),
    /**
     * An array of objects with keys equal to the columns array's key value, and value equal to whatever you
     * want in your cell. These are basically an array of rows
     **/
    data: arrayOf(
        shape({
            /** A unique ID for each row of data. Required for sorting */
            id: oneOfType([string, number]),
        })
    ),
    /** An array of objects with a key describing your column, and a header describing that column */
    columns: arrayOf(
        shape({
            /** The column header */
            header: node.isRequired,
            /** The column key used in the `data` array's objects */
            key: string.isRequired,
            /** Content shown in the table footer */
            footer: node,
            alignRight: bool,
            alignTop: bool,
            hideOnDesktop: bool,
            hideOnTablet: bool,
            hideOnSmallTablet: bool,
            hideOnMobile: bool,
            /** Custom comparator function for sorting this column */
            compare: func,
            /** Disable column from sorting. Not needed if heading is an empty string */
            notSortable: bool,
        }).isRequired
    ),
};

export default Table;
