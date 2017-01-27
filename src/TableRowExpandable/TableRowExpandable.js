import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import TableRow from '../TableRow.jsx';
import Chevron from 'ffe-icons-react/chevron-ikon';

class TableRowExpandable extends Component {

    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
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

        return (
            <tbody tabIndex="0" onKeyDown={ this.handleKeyPress }>
                <TableRow
                    cells={{ ...cells, expandIcon: <Chevron className='expand-icon'/> }}
                    trClasses={ classNames(
                        'ffe-responsive-table__row-expandable',
                        { 'ffe-responsive-table__row-expandable--expanded' : this.state.expanded }
                    )}
                    headers={ headers }
                    onClick={ this.toggleExpand.bind(this) }
                    expanded={ this.state.expanded }
                />
                <tr
                    role="presentation"
                    aria-hidden={ this.state.expanded ? 'false' : 'true' }
                    className={ classNames(
                        'no-border',
                        'ffe-responsive-table__row-expanded-content',
                         { 'ffe-responsive-table__row-expanded-content--collapsed' : !this.state.expanded }
                     )}
                >
                    <td
                        className={ classNames(
                            { 'no-padding' : !this.state.expanded }
                        )}
                        colSpan={ headers.length }
                    >
                        <div>
                            { this.state.expanded && children }
                        </div>
                    </td>
                </tr>
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
