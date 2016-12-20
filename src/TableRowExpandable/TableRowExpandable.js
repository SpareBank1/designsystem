import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import TableCell from '../TableCell.jsx';
import TableRow from '../TableRow.jsx';
import Chevron from 'ffe-icons-react/chevron-ikon';

class TableRowExpandable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  toggleExpand() {
    this.setState({ expanded: !this.state.expanded});
  }

  handleKeyPress(event) {
    if ( event.key === 'Enter' && event.target.tagName === 'TBODY') {
      this.setState({ expanded: !this.state.expanded});
      event.preventDefault();
    }
  }

  render() {
    var { cells, headers, children } = this.props;
    let tabIndex = { tabIndex:'0' };

    cells.expandIcon = <Chevron className='expand-icon'/>;

    let clickableRow = (
      <TableRow
        cells={cells}
        trClasses={'ffe-responsive-table__row-expandable'}
        headers={headers}
        onClick={this.toggleExpand.bind(this)}
        expanded={ this.state.expanded } />
    );
    let expandedRow = (
      <tr role="presentation" className="ffe-responsive-table__row-expanded-content">
        <td
          colSpan={headers.length}
        >
          <div>
            { children }
          </div>
        </td>
      </tr>
    );

    let expandedContent = this.state.expanded ? expandedRow : 
      <tr role="presentation" className="ffe-responsive-table__row-expanded-content collapsed">
        <td colSpan={headers.length}>
          <div>
          </div>
        </td>
      </tr>;

    return <tbody {...tabIndex} onKeyDown={this.handleKeyPress.bind(this)}>
      {clickableRow}
      {expandedContent}
      </tbody>;
  }
}

TableRowExpandable.propTypes = {
  cells: React.PropTypes.object.isRequired,
  headers: React.PropTypes.array.isRequired
};

export default TableRowExpandable;
