import React, { Component, PropTypes } from 'react';

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

    return (
      <thead className="ffe-responsive-table__head">
        <tr className="ffe-responsive-table__row">
          {headers.map((header, index) => (
            <th
              className="ffe-responsive-table__heading"
              key={`table-header-${index}-${header.key}`}
            >
              {header.content}
            </th>
          ))}
        </tr>
      </thead>
    );
  }

  renderTableBody() {
    const {
      data,
      headers = [],
    } = this.props;

    if (!data || !data.length) {
      return null;
    }

    return (
      <tbody>
        {data.map((row, rowIndex) => (
          <tr className="ffe-responsive-table__row" key={`table-row-${rowIndex}`}>
            {row.map((cell, cellIndex) => (
              <td
                className="ffe-responsive-table__cell"
                data-th={headers[cellIndex] ? headers[cellIndex].content : ''}
                key={`table-cell-${rowIndex}-${cellIndex}`}
              >
                <div className="ffe-responsive-table__content">
                  {cell}
                </div>
              </td>
            ))}
          </tr>
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
