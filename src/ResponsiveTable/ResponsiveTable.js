import React, { Component, PropTypes } from 'react';
import TableHeaders from '../TableParts/TableHeaders';
import TableFooter from '../TableParts/TableFooter';
import TableRow from '../TableParts/TableRow';
import TableRowExpandable from '../TableParts/TableRowExpandable';

class ResponsiveTable extends Component {
    renderTableCaption() {
        const { caption } = this.props;

        if (!caption) {
            return null;
        }

        return (
            <caption className="ffe-responsive-table__caption">
                {caption}
            </caption>
        );
    }

    renderTableHeaders() {
        const { columns } = this.props;

        if (!columns || !columns.length) {
            return null;
        }

        if (this.props.expandedContentMapper) {
            columns.push({ key: 'expandIcon', header: '' , alignRight: true });
        }

        return <TableHeaders columns={ columns } />;
    }

    renderTableFooter() {
        const { columns } = this.props;

        if (!columns.some(column => column.footer)) {
          return null;
        }

        return <TableFooter columns={ columns } />;
    }

    renderTableBody() {
        const {
            data,
            columns,
            expandedContentMapper
        } = this.props;

        if (!data || !data.length) {
            return null;
        }

        if (expandedContentMapper) {
            return data.map((row, index) => (
                <TableRowExpandable cells={ row } columns={ columns } key={ index }>
                    { expandedContentMapper(row) }
                </TableRowExpandable>
            ));
        }

        return (
            <tbody>
                {data.map((row, index) => (
                    <TableRow cells={ row } columns={ columns } key={ index } />
                ))}
            </tbody>
        );
    }

    render() {
        return (
            <table className="ffe-responsive-table">
                {this.renderTableCaption()}
                {this.renderTableHeaders()}
                {this.renderTableFooter()}
                {this.renderTableBody()}
            </table>
          );
    }
}

ResponsiveTable.propTypes = {
    caption: PropTypes.string,
    expandedContentMapper: PropTypes.func,
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
