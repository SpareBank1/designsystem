import React from 'react';
import PropTypes from 'prop-types';
import TableComponent from './Table';
import SortableTableComponent from './SortableTable';

function Table(props) {
    return props.sortable ?
        <SortableTableComponent {...props}/> :
        <TableComponent {...props}/>;
}

Table.propTypes = {
    caption: PropTypes.node,
    srOnlyCaption: PropTypes.bool,
    expandedContentMapper: PropTypes.func,
    sortable: PropTypes.bool,
    offset: PropTypes.number,
    limit: PropTypes.number,
    condensed: PropTypes.bool,
    smallHeader: PropTypes.bool,
    alignLeft: PropTypes.bool,
    columnLayoutMobile: PropTypes.bool,
    breakpoint: PropTypes.oneOf(['sm', 'none']),
    data: PropTypes.arrayOf(
        PropTypes.object
    ),
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.node.isRequired,
            key: PropTypes.string.isRequired,
        }).isRequired
    ),
};

export default Table;
