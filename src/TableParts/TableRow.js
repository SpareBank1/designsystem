import React from 'react';
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
    expandable: React.PropTypes.bool,
    expanded: React.PropTypes.bool,
};

export default TableRow;
