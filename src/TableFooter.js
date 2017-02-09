import React, { PropTypes } from 'react';
import TableCell from './TableCell';

const TableFooter = ({ headers }) => {
    return (
        <tfoot className="ffe-responsive-table__footer">
            <tr className="ffe-responsive-table__row">
                { headers.map((header, index) => {
                    if (header === null) {
                        return <td key={ index } />;
                    }
                    return (
                        <TableCell
                            key={ index }
                            columnHeader={ header.content }
                            alignRight={ header.alignRight }
                        >
                            { header.footerContent }
                        </TableCell>
                    );
                })}
            </tr>
    </tfoot>
    );
};

TableFooter.propTypes = {
    headers: PropTypes.arrayOf(
        PropTypes.shape({
            content: PropTypes.node.isRequired,
            key: PropTypes.string.isRequired,
            footerContent: PropTypes.any,
            alignRight: PropTypes.bool,
        })
    ),
};

export default TableFooter;
