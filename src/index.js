import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveTableComponent from './ResponsiveTable/ResponsiveTable';
import SortableTableComponent from './SortableTable/SortableTable';

function ResponsiveTable(props) {
    return props.sortable ?
        <SortableTableComponent {...props}/> :
        <ResponsiveTableComponent {...props}/>;
}

ResponsiveTable.propTypes = {
    caption: PropTypes.string,
    srOnlyCaption: PropTypes.bool,
    expandedContentMapper: PropTypes.func,
    sortable: PropTypes.bool,
    offset: PropTypes.number,
    limit: PropTypes.number,
    condensed: PropTypes.bool,
    smallHeader: PropTypes.bool,
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

export default ResponsiveTable;
