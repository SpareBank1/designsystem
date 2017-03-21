import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import equal from 'deep-equal';
import TableRow from './TableRow';
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
        this.setState({ expanded: !this.state.expanded });
    }

    handleKeyPress(event) {
        if ((event.key === 'Enter' || event.key === ' ')) {
            if (event.target.tagName === 'TR') {
                this.setState({ expanded: !this.state.expanded });
            }
            event.preventDefault();
        }
    }

    componentWillReceiveProps(newProps) {
        if (!newProps.children && this.state.expanded || !equal(newProps.columns, this.props.columns)) {
            this.setState({ expanded: false });
        }
    }

    render() {
        const { cells, columns, children } = this.props;
        const unexpandable = !children;

        return (
            <tbody>
                <TableRow
                    cells={{
                        ...cells,
                        expandIcon: (unexpandable ? ' ' :
                                        <Chevron
                                            className={ classNames(
                                                'ffe-responsive-table__expand-icon',
                                                { 'ffe-responsive-table__expand-icon--expanded' : this.state.expanded }
                                            )}
                                        />
                                    )
                    }}
                    trClasses={ classNames(
                        { 'ffe-responsive-table__row-expandable' : !unexpandable },
                        { 'ffe-responsive-table__row-expandable--expanded' : this.state.expanded }
                    )}
                    columns={ columns }
                    onClick={ this.toggleExpand }
                    onKeyDown={ this.handleKeyPress }
                    expandable={ !unexpandable }
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
                        colSpan={ columns.length }
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
    children: PropTypes.node,
    cells: PropTypes.object.isRequired,
    columns: PropTypes.array.isRequired
};

export default TableRowExpandable;
