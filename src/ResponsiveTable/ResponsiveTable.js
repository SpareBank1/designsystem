import React, { Component, PropTypes } from 'react';
import TableHeaders from '../TableHeaders.jsx';
import TableRow from '../TableRow.jsx';

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
      headers,
    } = this.props;

    if (!headers || !headers.length) {
      return null;
    }

    return <TableHeaders headers={ headers } />;
  }

  renderTableBody() {
    const {
      data
    } = this.props;

    if (!data || !data.length) {
      return null;
    }

    return (
      <tbody>
        {data.map((row, index) => (
          <TableRow cells={ row } key={ index } />
        ))}
      </tbody>
    );
  }

  render() {
    return (
      <table className="ffe-responsive-table">
        {this.renderTableCaption()}
        {this.renderTableHeaders()}
        {this.renderTableBody()}
      </table>
    );
  }
}

ResponsiveTable.propTypes = {
  caption: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.node
    )
  ),
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node.isRequired,
      key: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default ResponsiveTable;
