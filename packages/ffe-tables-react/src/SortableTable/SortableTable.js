import { PilNedIkon } from '@sb1/ffe-icons-react';
import classNames from 'classnames';
import equal from 'deep-equal';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Table from '../Table';
import sortData from './sort-data';
import memoize from 'memoize-one';

class SortableTable extends Component {
    constructor(props) {
        super(props);
        const { sortBy, descending } = props;
        this.state = {
            sortBy,
            descending,
        };
    }

    sort = (columns, data, sortBy, descending) => {
        const { onSort } = this.props;
        const tableData = sortData(columns, data, sortBy, descending);
        onSort({
            sortBy,
            descending,
            tableData,
        });
        return tableData;
    };

    sortTableData = memoize((columns, data, sortBy, descending) =>
        sortBy ? this.sort(columns, data, sortBy, descending) : data,
    );

    sortStateHasChanged(nextState) {
        return (
            nextState.sortBy !== this.state.sortBy ||
            nextState.descending !== this.state.descending
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            !equal(nextProps, this.props) || this.sortStateHasChanged(nextState)
        );
    }

    tableHeaderClicked(columnKey) {
        this.setState(prevState => {
            const descending =
                columnKey === prevState.sortBy ? !prevState.descending : false;

            return {
                sortBy: columnKey,
                descending,
            };
        });
    }

    handleKeyPress(columnKey, event) {
        if (event.key === 'Enter' || event.key === ' ') {
            this.tableHeaderClicked(columnKey);
            event.preventDefault();
        }
    }

    getAriaSort(column) {
        if (this.state.sortBy !== column.key) {
            return 'none';
        }
        return this.state.descending ? 'descending' : 'ascending';
    }

    decorateSortableTableHeader(column) {
        if (column.header === '') {
            return <span className="ffe-sortable-table__header" />;
        }
        if (column.notSortable) {
            return column.header;
        }

        return (
            <span
                tabIndex="0"
                onKeyDown={event => this.handleKeyPress(column.key, event)}
                className={classNames('ffe-sortable-table__header', {
                    'ffe-sortable-table__header--active':
                        this.state.sortBy === column.key,
                })}
                role="button"
                onClick={this.tableHeaderClicked.bind(this, column.key)}
            >
                {column.header}
                <PilNedIkon
                    className={classNames(
                        'icon',
                        'ffe-sortable-table__sort-arrow',
                        {
                            'ffe-sortable-table__sort-arrow--descending':
                                this.state.sortBy === column.key &&
                                this.state.descending,
                        },
                    )}
                />
            </span>
        );
    }

    render() {
        const sortableColumns = this.props.columns.map(column => {
            return {
                ...column,
                ariaSort: this.getAriaSort(column),
                header: this.decorateSortableTableHeader(column),
            };
        });

        let { caption } = this.props;
        const {
            expandedContentMapper,
            condensed,
            columnLayoutMobile,
            smallHeader,
            alignLeft,
            breakpoint,
            limit,
            offset,
            srOnlyCaption,
            className,
            rowRender,
            headerRender,
            footerRender,
            columns,
            data,
        } = this.props;
        const { sortBy, descending } = this.state;

        if (srOnlyCaption && sortBy) {
            caption = caption.concat(
                ' ',
                sortBy,
                ' ',
                descending ? 'descending' : 'ascending',
            );
        }

        const tableData = this.sortTableData(columns, data, sortBy, descending);

        return (
            <Table
                caption={caption}
                srOnlyCaption={srOnlyCaption}
                expandedContentMapper={expandedContentMapper}
                columnLayoutMobile={columnLayoutMobile}
                columns={sortableColumns}
                data={tableData}
                condensed={condensed}
                smallHeader={smallHeader}
                alignLeft={alignLeft}
                breakpoint={breakpoint}
                limit={limit}
                offset={offset}
                sort={{ sortBy, descending }}
                className={className}
                rowRender={rowRender}
                headerRender={headerRender}
                footerRender={footerRender}
            />
        );
    }
}

SortableTable.propTypes = {
    caption: PropTypes.node,
    srOnlyCaption: PropTypes.bool,
    expandedContentMapper: PropTypes.func,
    offset: PropTypes.number,
    limit: PropTypes.number,
    columnLayoutMobile: PropTypes.bool,
    condensed: PropTypes.bool,
    smallHeader: PropTypes.bool,
    alignLeft: PropTypes.bool,
    breakpoint: PropTypes.oneOf(['sm', 'none']),
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    sortBy: PropTypes.string,
    descending: PropTypes.bool,
    onSort: PropTypes.func,
    rowRender: PropTypes.func,
    headerRender: PropTypes.func,
    footerRender: PropTypes.func,
    className: PropTypes.string,
};

SortableTable.defaultProps = {
    descending: false,
    onSort: () => {},
};

export default SortableTable;
