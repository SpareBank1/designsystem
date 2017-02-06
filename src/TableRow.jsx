import React from 'react';
import classNames from 'classnames';
import TableCell from './TableCell.jsx';

const TableRow = ({ cells, headers, onClick, trClasses, expanded }) => {
    return (
        <tr
            className={classNames(
                'ffe-responsive-table__row ',
                trClasses
            )}
            onClick={ onClick }
            aria-expanded={ expanded }
        >
        { headers.map((header, index) => {
            return <TableCell
                key={ index }
                tdClasses={ (header.key === 'expandIcon') ? 'ffe-responsive-table__cell--collapsed' : '' }
                columnHeader={ header.content }
                alignRight={ header.alignRight }
            >
                { cells[header.key] }
            </TableCell>;
            }
        )}
    </tr>
    );
};

TableRow.propTypes = {
    cells: React.PropTypes.object.isRequired,
    headers: React.PropTypes.array.isRequired,
    trClasses: React.PropTypes.string,
    onClick: React.PropTypes.func,
    expanded: React.PropTypes.bool,
};

export default TableRow;
