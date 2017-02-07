import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import TableRow from '../TableRow';
import Chevron from 'ffe-icons-react/chevron-ikon';

class TableRowExpandable extends Component {

    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.toggleExpand = this.toggleExpand.bind(this);
        this.state = {
            expanded: false
        };
    }

    toggleExpand() {
        this.setState({ expanded: !this.state.expanded});
    }

    handleKeyPress(event) {
        if ((event.key === 'Enter' || event.key === ' ') && event.target.tagName === 'TR') {
            this.setState({ expanded: !this.state.expanded});
            event.preventDefault();
        }
    }

    render() {
        const { cells, headers, children } = this.props;

        return (
            <tbody>
                <TableRow
                    cells={{
                        ...cells,
                        expandIcon: <Chevron
                                        className={ classNames(
                                            'ffe-responsive-table__expand-icon',
                                            { 'ffe-responsive-table__expand-icon--expanded' : this.state.expanded }
                                        )}
                                    />
                    }}
                    trClasses={ classNames(
                        'ffe-responsive-table__row-expandable',
                        { 'ffe-responsive-table__row-expandable--expanded' : this.state.expanded }
                    )}
                    headers={ headers }
                    onClick={ this.toggleExpand }
                    onKeyDown={ this.handleKeyPress }
                    expanded={ this.state.expanded }
                />
                <tr
                    role="presentation"
                    aria-hidden={String(!this.state.expanded)}
                    className={ classNames(
                        'ffe-responsive-table__row',
                        'ffe-responsive-table__row-expandable-content',
                         { 'ffe-responsive-table__row-expandable-content--expanded' : this.state.expanded },
                         { 'ffe-responsive-table__row--collapsed' : !this.state.expanded }
                     )}
                >
                    <td
                        colSpan={ headers.length }
                        className="ffe-responsive-table__cell-expandable-content"
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
