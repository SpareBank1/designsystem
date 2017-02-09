import React, { Component, PropTypes } from 'react';
import TableHeaders from '../TableHeaders';
import TableFooter from '../TableFooter';
import TableRow from '../TableRow';

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
            headers.push({ key: 'expandIcon', content: '' , alignRight: true });
        }

        return <TableHeaders headers={ headers } />;
    }

    renderTableFooter() {
        const {
            headers,
            headerData,
        } = this.props;

        if (!headers || !headers.length) {
          return null;
        }

        if (headers.findIndex((header) => 'footerContent' in header) === -1 ) {
          return null;
        }

        return <TableFooter headers={ headerData || headers } />;
    }

    renderTableBody() {
        const {
            data,
            headers,
            headerData
        } = this.props;

        if (this.props.children) {
            return this.props.children;
        }

        if (!data || !data.length) {
            return null;
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
                {this.renderTableFooter()}
                {this.renderTableBody()}
            </table>
          );
    }
}

ResponsiveTable.propTypes = {
    caption: PropTypes.string,
    expandable: PropTypes.bool,
    children: PropTypes.node,
    headerData: PropTypes.arrayOf(
        PropTypes.object
    ),
    data: PropTypes.arrayOf(
            PropTypes.object
        ),
    headers: PropTypes.arrayOf(
        PropTypes.shape({
            content: PropTypes.node.isRequired,
            key: PropTypes.string.isRequired,
        }).isRequired
    ),
};

export default ResponsiveTable;
