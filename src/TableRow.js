import React from 'react';
import classNames from 'classnames';
import TableCell from './TableCell';

const TableRow = ({ cells, columns, onClick, onKeyDown, trClasses, expanded }) => {
    return (
        <tr
            className={classNames(
                'ffe-responsive-table__row ',
                trClasses
            )}
            tabIndex="0"
            role="button"
            onClick={ onClick }
            onKeyDown={ onKeyDown }
            aria-expanded={ expanded }
        >
            { columns.map((column, index) => {
                return (
                    <TableCell
                        key={ index }
                        tdClasses={ (column.key === 'expandIcon') ? 'ffe-responsive-table__cell--collapsed' : '' }
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
    cells: React.PropTypes.object.isRequired,
    columns: React.PropTypes.array.isRequired,
    trClasses: React.PropTypes.string,
    onClick: React.PropTypes.func,
    onKeyDown: React.PropTypes.func,
    expanded: React.PropTypes.bool,
};

export default TableRow;
