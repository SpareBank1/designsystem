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
    if(nextProps !== this.props) {
      this.setState({
        tableData: sortData(this.props.headers, this.props.data, this.state.sortBy, this.state.descending)
      });
    }
  }

  tableHeaderClicked(headerKey) {
    const descending = headerKey === this.state.sortBy ? !this.state.descending : false;
    this.setState({
      sortBy: headerKey,
      descending: descending,
      tableData: sortData(this.props.headers, this.props.data, headerKey, descending)
    });
  }

  getAriaSort(header) {
    if (this.state.sortBy !== header.key) {
      return 'none';
    }
    return this.state.descending ? 'descending' : 'ascending';
  }

  decorateSortableTableHeader(header) {
    return (
      <span
        className={classNames(
        'ffe-sortable-table__header',
        { 'ffe-sortable-table__header--active': this.state.sortBy === header.key }
      )}
        onClick={ this.tableHeaderClicked.bind(this, header.key) }
      >
      { header.content }
        <PilNedIcon
          className={ classNames(
          'icon',
          'ffe-sortable-table__sort-arrow',
          { 'ffe-sortable-table__sort-arrow--descending' : (this.state.sortBy === header.key && this.state.descending) }
        )}
        />
    </span>
    )
  }

  render() {
    const sortableHeaders = this.props.headers.map((header) => {
      return {
        ...header,
        ariaSort: this.getAriaSort(header),
        content: this.decorateSortableTableHeader(header)
      }
    });

    return (
      <ResponsiveTable headers={ sortableHeaders } headerData={ this.props.headers } data={ this.state.tableData } />
    );
  }
}

SortableTable.propTypes = {
  headers: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default SortableTable;
