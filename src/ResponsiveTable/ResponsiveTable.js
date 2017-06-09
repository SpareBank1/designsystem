import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TableHeaders from '../TableParts/TableHeaders';
import TableFooter from '../TableParts/TableFooter';
import TableRow from '../TableParts/TableRow';
import TableRowExpandable from '../TableParts/TableRowExpandable';

class ResponsiveTable extends Component {
    renderTableCaption() {
        const {
            caption,
            srOnlyCaption } = this.props;

        if (!caption) {
            return null;
        }

        if (srOnlyCaption) {
            return (
                <caption className="ffe-screenreader-only" aria-live="polite">
                    {caption}
                </caption>
            );
        }

        return (
            <caption className="ffe-responsive-table__caption">
                {caption}
            </caption>
        );
    }

    renderTableHeaders() {
        const { columns } = this.props;

        if (!columns.length) {
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

    getData() {
        const { data, offset, limit } = this.props;
        if (!offset && !limit) {
            return data;
        }

        return data.slice(offset, limit ? offset + limit : data.length);
    }

    renderTableBody() {
        const {
            columns,
            expandedContentMapper,
            sort
        } = this.props;

        const data = this.getData();

        if (!data.length) {
            return null;
        }

        if (expandedContentMapper) {
            return data.map((row, index) => (
                <TableRowExpandable cells={ row } columns={ columns } key={ index } sort={ sort }>
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
        const { condensed, smallHeader } = this.props;
        return (
            <table
                className={classNames(
                    'ffe-responsive-table',
                    { 'ffe-responsive-table--condensed': condensed },
                    { 'ffe-responsive-table--small-header': smallHeader }
                )}
            >
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
    srOnlyCaption: PropTypes.bool,
    expandedContentMapper: PropTypes.func,
    condensed: PropTypes.bool,
    smallHeader: PropTypes.bool,
    sort: PropTypes.object,
    offset: PropTypes.number,
    limit: PropTypes.number,
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

ResponsiveTable.defaultProps = {
    columns: [],
    data: [],
    offset: 0,
    limit: 0
};

export default ResponsiveTable;
