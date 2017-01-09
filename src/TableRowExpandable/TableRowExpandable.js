import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
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
        const { cells, headers, children } = this.props;
        const tabIndex = { tabIndex:'0' };

        cells.expandIcon = <Chevron className='expand-icon'/>;

        const clickableRow = (
            <TableRow
                cells={ cells }
                trClasses={ 'ffe-responsive-table__row-expandable' }
                headers={ headers }
                onClick={ this.toggleExpand.bind(this) }
                expanded={ this.state.expanded }
            />
        );

        const expandedRow = (
            <tr
                role="presentation"
                aria-expanded={ this.state.expanded ? 'true' : 'false' }
                className={ classNames(
                    'ffe-responsive-table__row-expanded-content',
                     { 'collapsed' : !this.state.expanded }
                 )}
            >
                <td colSpan={ headers.length }>
                    <div>
                        { this.state.expanded && children }
                    </div>
                </td>
            </tr>
        );

        return (
            <tbody { ...tabIndex } onKeyDown={ this.handleKeyPress.bind(this) }>
                { clickableRow }
                { expandedRow }
            </tbody>
        );
    }
}

TableRowExpandable.propTypes = {
    children: PropTypes.node.isRequired,
    cells: PropTypes.object.isRequired,
    headers: PropTypes.array.isRequired
};

export default TableRowExpandable;
