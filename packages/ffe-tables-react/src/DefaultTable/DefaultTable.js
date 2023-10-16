import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TableHeaders from '../TableParts/TableHeaders';
import TableFooter from '../TableParts/TableFooter';
import TableRow from '../TableParts/TableRow';
import TableRowExpandable from '../TableParts/TableRowExpandable';

class DefaultTable extends Component {
    renderTableCaption() {
        const { caption, srOnlyCaption } = this.props;

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

        return <caption className="ffe-table__caption">{caption}</caption>;
    }

    renderTableHeaders() {
        const { columns, headerRender } = this.props;

        if (!columns.length) {
            return null;
        }

        const renderColumns = [...columns];

        if (this.props.expandedContentMapper) {
            renderColumns.push({
                key: 'expandIcon',
                header: (
                    <span className="ffe-screenreader-only">
                        Valg for raden
                    </span>
                ),
                alignRight: true,
            });
        }

        return (
            <TableHeaders
                columns={renderColumns}
                headerRender={headerRender}
                dataWindow={this.getData()}
            />
        );
    }

    renderTableFooter() {
        const { columns, footerRender } = this.props;

        if (!columns.some(column => column.footer)) {
            return null;
        }
        return (
            <TableFooter
                columns={columns}
                footerRender={footerRender}
                dataWindow={this.getData()}
            />
        );
    }

    getData() {
        const { data, offset, limit } = this.props;
        if (!offset && !limit) {
            return data;
        }

        return data.slice(offset, limit ? offset + limit : data.length);
    }

    renderTableBody() {
        const { columns, expandedContentMapper, sort, rowRender } = this.props;

        const data = this.getData();

        if (!data.length) {
            return null;
        }

        const renderColumns = [...columns];

        if (expandedContentMapper) {
            renderColumns.push({
                key: 'expandIcon',
                header: '',
                alignRight: true,
            });
            return data.map((row, index) => {
                const key = row.id || row.id === 0 ? row.id.toString() : index;
                const expandedContent = expandedContentMapper(row);
                const rowProps = {
                    cells: row,
                    columns: renderColumns,
                    sort,
                    rowRender,
                    rowIndex: index,
                    defaultExpanded: row.defaultExpanded,
                    scrollToOnMount: row.scrollToOnMount,
                };
                return expandedContent ? (
                    <TableRowExpandable key={key} {...rowProps}>
                        {expandedContent}
                    </TableRowExpandable>
                ) : (
                    <tbody key={key}>
                        <TableRow {...rowProps} />
                    </tbody>
                );
            });
        }

        return (
            <tbody>
                {data.map((row, index) => {
                    const key =
                        row.id || row.id === 0 ? row.id.toString() : index;
                    return (
                        <TableRow
                            cells={row}
                            columns={columns}
                            key={key}
                            rowRender={rowRender}
                            rowIndex={index}
                        />
                    );
                })}
            </tbody>
        );
    }

    render() {
        const {
            alignLeft,
            condensed,
            smallHeader,
            columnLayoutMobile,
            breakpoint,
            className,
        } = this.props;
        return (
            <table
                className={classNames(
                    'ffe-table',
                    { 'ffe-table--condensed': condensed },
                    { 'ffe-table--small-header': smallHeader },
                    { 'ffe-table--columns-sm': columnLayoutMobile },
                    { 'ffe-table--text-left': alignLeft },
                    { [`ffe-table--breakpoint-${breakpoint}`]: !!breakpoint },
                    className,
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

DefaultTable.propTypes = {
    alignLeft: PropTypes.bool,
    columnLayoutMobile: PropTypes.bool,
    caption: PropTypes.node,
    srOnlyCaption: PropTypes.bool,
    expandedContentMapper: PropTypes.func,
    condensed: PropTypes.bool,
    smallHeader: PropTypes.bool,
    sort: PropTypes.object,
    offset: PropTypes.number,
    limit: PropTypes.number,
    breakpoint: PropTypes.oneOf(['sm', 'none']),
    data: PropTypes.arrayOf(PropTypes.object),
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.node.isRequired,
            key: PropTypes.string.isRequired,
        }).isRequired,
    ),
    rowRender: PropTypes.func,
    headerRender: PropTypes.func,
    footerRender: PropTypes.func,
    className: PropTypes.string,
};

DefaultTable.defaultProps = {
    columns: [],
    data: [],
    offset: 0,
    limit: 0,
};

export default DefaultTable;
