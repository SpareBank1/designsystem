import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import equal from 'deep-equal';
import PilNedIcon from 'ffe-icons-react/pil-ned-ikon';
import sortData from './sort-data';
import Table from '../Table';


class SortableTable extends Component {

    constructor(props) {
        super(props);
        const {sortBy, descending, columns, data} = props;
        this.state = {
            sortBy,
            descending,
            tableData: sortBy ? sortData(columns, data, sortBy, descending) : data
        };
    }

    sortStateHasChanged(nextState) {
        return nextState.sortBy !== this.state.sortBy || nextState.descending !== this.state.descending;
    }

    componentWillReceiveProps(nextProps) {
        if (!equal(nextProps, this.props)) {
            this.setState({
                tableData: this.state.sortBy ? sortData(nextProps.columns, nextProps.data, this.state.sortBy, this.state.descending) : nextProps.data
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !equal(nextProps, this.props) || this.sortStateHasChanged(nextState);
    }

    tableHeaderClicked(columnKey) {
        const descending = columnKey === this.state.sortBy ? !this.state.descending : false;
        this.setState({
            sortBy: columnKey,
            descending: descending,
            tableData: sortData(this.props.columns, this.props.data, columnKey, descending)
        });
    }

    handleKeyPress(columnKey, event) {
        if ( event.key === 'Enter' || event.key === ' ' ) {
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
            return <span className='ffe-sortable-table__header' />;
        }
        if (column.notSortable) {
            return column.header;
        }

        return (
            <span
                tabIndex="0"
                onKeyDown={ (event) => this.handleKeyPress(column.key, event) }
                className={classNames(
                    'ffe-sortable-table__header',
                    { 'ffe-sortable-table__header--active': this.state.sortBy === column.key }
                )}
                role="button"
                onClick={ this.tableHeaderClicked.bind(this, column.key) }
            >
                { column.header }
                <PilNedIcon
                    className={ classNames(
                    'icon',
                    'ffe-sortable-table__sort-arrow',
                    { 'ffe-sortable-table__sort-arrow--descending' : (this.state.sortBy === column.key && this.state.descending) }
                )}
                />
          </span>
        );
    }

    render() {
        const sortableColumns = this.props.columns.map((column) => {
            return {
                ...column,
                ariaSort: this.getAriaSort(column),
                header: this.decorateSortableTableHeader(column)
            };
        });

        let { caption } = this.props;
        const { expandedContentMapper, condensed, columnLayoutMobile, smallHeader, alignLeft, breakpoint, limit, offset, srOnlyCaption } = this.props;
        const { sortBy, descending } = this.state;

        if (srOnlyCaption && sortBy) {
            caption = caption.concat(' ', sortBy, ' ', descending ? 'descending' : 'ascending');
        }

        return (
            <Table
                caption={ caption }
                srOnlyCaption={ srOnlyCaption }
                expandedContentMapper={ expandedContentMapper }
                columnLayoutMobile={ columnLayoutMobile }
                columns={ sortableColumns }
                data={ this.state.tableData }
                condensed={ condensed }
                smallHeader={ smallHeader }
                alignLeft={ alignLeft }
                breakpoint={ breakpoint }
                limit={ limit }
                offset={ offset }
                sort={ { sortBy, descending } }
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
};

SortableTable.defaultProps = {
    descending: false
};

export default SortableTable;
