import Symbol from '@sb1/ffe-symbols-react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { polyfill } from 'react-lifecycles-compat';
import shallowEqual from 'shallow-equals';
import TableRow from './TableRow';

class TableRowExpandable extends Component {
    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.toggleExpand = this.toggleExpand.bind(this);
        this.state = {
            expanded: !!props.defaultExpanded,
            sort: props.sort,
        };
        this.rowRef = React.createRef();
    }

    componentDidMount() {
        if (this.props.scrollToOnMount && this.rowRef.current) {
            this.rowRef.current.scrollIntoView();
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (
            (!nextProps.children && prevState.expanded) ||
            !shallowEqual(nextProps.sort, prevState.sort)
        ) {
            return {
                expanded: false,
                sort: nextProps.sort,
            };
        }

        return null;
    }

    toggleExpand() {
        this.setState(prevState => ({ expanded: !prevState.expanded }));
    }

    handleKeyPress(event) {
        if (
            (event.key === 'Enter' || event.key === ' ') &&
            event.target.tagName === 'TR'
        ) {
            this.setState(prevState => ({ expanded: !prevState.expanded }));
            event.preventDefault();
        }
    }

    render() {
        const { cells, columns, children, rowRender, rowIndex } = this.props;
        const unexpandable = !children;

        return (
            <tbody ref={this.rowRef}>
                <TableRow
                    cells={{
                        ...cells,
                        expandIcon: unexpandable ? (
                            ' '
                        ) : (
                            <Symbol
                                className={classNames(
                                    'ffe-table__expand-icon',
                                    {
                                        'ffe-table__expand-icon--expanded': this
                                            .state.expanded,
                                    },
                                )}
                                ariaLabel=""
                                size="lg"
                            >
                                expand_more
                            </Symbol>
                        ),
                    }}
                    trClasses={classNames(
                        { 'ffe-table__row-expandable': !unexpandable },
                        {
                            'ffe-table__row-expandable--expanded': this.state
                                .expanded,
                        },
                    )}
                    columns={columns}
                    onClick={this.toggleExpand}
                    onKeyDown={this.handleKeyPress}
                    expandable={!unexpandable}
                    expanded={this.state.expanded}
                    rowRender={rowRender}
                    rowIndex={rowIndex}
                />
                <tr
                    role="presentation"
                    aria-hidden={String(!this.state.expanded)}
                    className={classNames(
                        'ffe-table__row',
                        'ffe-table__row-expandable-content',
                        {
                            'ffe-table__row-expandable-content--expanded': this
                                .state.expanded,
                        },
                        { 'ffe-table__row--collapsed': !this.state.expanded },
                    )}
                >
                    <td
                        colSpan={columns.length}
                        className="ffe-table__cell-expandable-content"
                    >
                        <div>{this.state.expanded && children}</div>
                    </td>
                </tr>
            </tbody>
        );
    }
}

TableRowExpandable.propTypes = {
    children: PropTypes.node,
    cells: PropTypes.object.isRequired,
    columns: PropTypes.array.isRequired,
    sort: PropTypes.object,
    rowRender: PropTypes.func,
    headerRender: PropTypes.func,
    footerRender: PropTypes.func,
    rowIndex: PropTypes.number,
    defaultExpanded: PropTypes.bool,
    scrollToOnMount: PropTypes.bool,
};

polyfill(TableRowExpandable);

export default TableRowExpandable;
