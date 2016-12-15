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

        if (this.props.expandable) {
            headers.push({ key: 'expandIcon', content: '' });
        }

        return <TableHeaders headers={ headers } />;
    }

    renderTableBody() {
        const {
            data,
            headers,
            headerData
        } = this.props;

        if (!data || !data.length) {
            return null;
        }

      if(this.props.children) {
        return this.props.children;
      }


        return (
            <tbody>
                {data.map((row, index) => (
                    <TableRow cells={ row } headers={ headerData || headers } key={ index } />
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
    expandable: PropTypes.bool,
    data: PropTypes.arrayOf(
        PropTypes.object
    ).isRequired,
    headers: PropTypes.arrayOf(
        PropTypes.shape({
            content: PropTypes.node.isRequired,
            key: PropTypes.string.isRequired,
        }).isRequired
    ),
};

export default ResponsiveTable;
