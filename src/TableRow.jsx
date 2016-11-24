import React from 'react';
import TableCell from './TableCell.jsx';

const TableRow = ({ cells }) => {
    return <tr className="ffe-responsive-table__row">
        { cells.map((cell, index) => {
                if (cell === null) {
                    return <td key={ index }></td>;
                } else if (React.isValidElement(cell)) {
                    return cell;
                } else {
                    return <TableCell key={ index }
                                     dataHeader={ cell.dataHeader }
                                     aligndfgdfgt={ cell.alignLeft }>
                        { cell.content || cell }
                    </TableCell>;
                }
            }
        )}
    </tr>;
};

TableRow.propTypes = {
    cells: React.PropTypes.array.isRequired
};

export default TableRow;
