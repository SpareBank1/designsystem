import React from 'react';

import classNames from 'classnames';
import PilNedIcon from 'ffe-icons-react/pil-ned-ikon';
import sortData from './sort-data';

//const SortableTable = ({ summary, columns, data, sortBy, descending }) => {
class SortableTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sortBy: 0,
            descending: false
        };
    }


    sort(columnIndex) {
        this.setState({
            sortBy: columnIndex,
            descending: columnIndex === this.state.sortBy ? !this.state.descending : false
        });
    }

    render() {

        const tableData = sortData(this.props.columns, this.props.data, this.state.sortBy, this.state.descending);

        return <table className="ffe-responsive-table">
            <thead className="ffe-responsive-table__head">
            <tr className="ffe-responsive-table__row">
                { this.props.columns.map((column, index) =>
                    <th key={ index }
                        className="ffe-responsive-table__heading"
                        scope="col"
                        aria-sort={ (this.state.sortBy === index) ? (this.state.descending ? 'descending' : 'ascending') : 'none' }>
                             <span
                                 className={ classNames('ffe-h5 sort-table-header', { 'sort-table-header--active': this.state.sortBy === index })}
                                 onClick={ () => this.sort(index) }>
                             { column.content }
                                 <PilNedIcon
                                     className={ classNames('sort-table-header-pil icon', {'sort-table-header-pil--descending' : this.state.sortBy === index && this.state.descending }) }/>
                             </span>
                    </th>
                )}
            </tr>
            </thead>
            <tbody>
            { tableData.map((item, index) =>
                <tr key={ index } className="ffe-responsive-table__row">
                    { this.props.columns.map((column, index) =>
                        <td key={ index } data-th={ column.content } className="ffe-responsive-table__cell">
                            <span className="ffe-responsive-table__content">{ item[column.dataKey] }</span>
                        </td>
                    )}
                </tr>
            )}
            </tbody>
        </table>;
    }
}

SortableTable.propTypes = {
    columns: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default SortableTable;
