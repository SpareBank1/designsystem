import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TableCell from './TableCell';

const TableRow = ({ cells, columns, onClick, onKeyDown, trClasses, expandable, expanded }) => {
    const expandableProps = expandable ? { tabIndex:'0', onClick, onKeyDown } : {};
    return (
        <tr
            className={classNames(
                'ffe-responsive-table__row',
                trClasses
            )}
            role="button"
            aria-expanded={ expanded }
            { ...expandableProps }
        >
            { columns.map((column, index) => {
                return (
                    <TableCell
                        key={ index }
                        tdClasses={classNames(
                            {'ffe-responsive-table__cell--collapsed' : column.key === 'expandIcon' },
                            {'ffe-responsive-table--hide-md' : column.hideOnTablet }
                        )}
                        columnHeader={ column.header }
                        alignRight={ column.alignRight }
                    >
                        { cells[column.key] }
                    </TableCell>
                );
            })}
        </tr>
    );
};

TableRow.propTypes = {
    cells: PropTypes.object.isRequired,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string,
            header: PropTypes.any,
            alignRight: PropTypes.bool,
            hideOnTablet: PropTypes.bool,
        })
    ).isRequired,
    trClasses: PropTypes.string,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    expandable: PropTypes.bool,
    expanded: PropTypes.bool,
};

export default TableRow;
