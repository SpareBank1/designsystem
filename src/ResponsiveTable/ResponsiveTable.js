import React, { Component, PropTypes } from 'react';
import TableHeaders from '../TableHeaders';
import TableFooter from '../TableFooter';
import TableRow from '../TableRow';

class ResponsiveTable extends Component {
    renderTableCaption() {
        const {
            caption,
        } = this.props;

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
        const {
            columns,
        } = this.props;

        if (!columns || !columns.length) {
            return null;
        }

        if (this.props.expandable) {
            columns.push({ key: 'expandIcon', header: '' , alignRight: true });
        }

        return <TableHeaders columns={ columns } />;
    }

    renderTableFooter() {
        const {
            columns,
            columnData,
        } = this.props;

        if (!columns || !columns.length) {
          return null;
        }

        if (!columns.some(column => column.footer)) {
          return null;
        }

        return <TableFooter columns={ columnData || columns } />;
    }

    renderTableBody() {
        const {
            data,
            columns,
            columnData
        } = this.props;

        if (this.props.children) {
            return this.props.children;
        }

        if (!data || !data.length) {
            return null;
        }

        return (
            <tbody>
                {data.map((row, index) => (
                    <TableRow cells={ row } columns={ columnData || columns } key={ index } />
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
    expandable: PropTypes.bool,
    children: PropTypes.node,
    columnData: PropTypes.arrayOf(
        PropTypes.object
    ),
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
