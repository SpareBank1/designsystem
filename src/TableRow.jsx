import React from 'react';
import TableCell from './TableCell.jsx';

const TableRow = ({ cells, headers }) => {
    return <tr className="ffe-responsive-table__row">
        { headers.map((header, index) => {
            return <TableCell
                key={ index }
                columnHeader={ header.content }
                alignRight={ header.alignRight }
            >
                { cells[header.key] }
            </TableCell>;
            }
        )}
    </tr>;
};

TableRow.propTypes = {
    cells: React.PropTypes.object.isRequired,
    headers: React.PropTypes.array.isRequired
};

export default TableRow;
