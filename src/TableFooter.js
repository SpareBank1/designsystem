import React, { PropTypes } from 'react';
import TableCell from './TableCell';

const TableFooter = ({ columns }) => {
    return (
        <tfoot className="ffe-responsive-table__footer">
            <tr className="ffe-responsive-table__row">
                { columns.map((column, index) => {
                    if (column === null) {
                        return <td key={ index } />;
                    }
                    return (
                        <TableCell
                            key={ index }
                            columnHeader={ column.content }
                            alignRight={ column.alignRight }
                        >
                            { column.footer }
                        </TableCell>
                    );
                })}
            </tr>
    </tfoot>
    );
};

TableFooter.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
			key: PropTypes.string.isRequired,
			header: PropTypes.node.isRequired,
            footer: PropTypes.any,
            alignRight: PropTypes.bool,
        })
    ),
};

export default TableFooter;
