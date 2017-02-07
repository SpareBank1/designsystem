import React from 'react';
import classNames from 'classnames';
import TableCell from './TableCell';

const TableRow = ({ cells, headers, onClick, onKeyDown, trClasses, expanded }) => {
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
        { headers.map((header, index) => {
            return (
                <TableCell
                    key={ index }
                    tdClasses={ (header.key === 'expandIcon') ? 'ffe-responsive-table__cell--collapsed' : '' }
                    columnHeader={ header.content }
                    alignRight={ header.alignRight }
                >
                    { cells[header.key] }
                </TableCell>
            );
        })}
    </tr>
    );
};

TableRow.propTypes = {
    cells: React.PropTypes.object.isRequired,
    headers: React.PropTypes.array.isRequired,
    trClasses: React.PropTypes.string,
    onClick: React.PropTypes.func,
    onKeyDown: React.PropTypes.func,
    expanded: React.PropTypes.bool,
};

export default TableRow;
