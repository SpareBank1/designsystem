import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import PilNedIcon from 'ffe-icons-react/pil-ned-ikon';
import sortData from './sort-data';
import ResponsiveTable from '../ResponsiveTable/ResponsiveTable';


class SortableTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortBy: undefined,
            descending: false,
            tableData: props.data
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({
                tableData: sortData(this.props.columns, this.props.data, this.state.sortBy, this.state.descending)
            });
        }
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
          return <span tabIndex='0' className='ffe-sortable-table__header' />;
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

        return (
            <ResponsiveTable columns={ sortableColumns } columnData={ this.props.columns } data={ this.state.tableData } />
        );
    }
}

SortableTable.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SortableTable;
