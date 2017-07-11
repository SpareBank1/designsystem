import React from 'react';
import PropTypes from 'prop-types';
import TableCell from './TableCell';
import classNames from 'classnames';

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
                            columnHeader={ column.header }
                            alignRight={ column.alignRight }
                            tdClasses={ classNames(
                                {'ffe-responsive-table--hide-md' : column.hideOnTablet },
                                {'ffe-responsive-table--hide-sm' : column.hideOnMobile }
                            ) }
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
            header: PropTypes.node.isRequired,
            footer: PropTypes.any,
            alignRight: PropTypes.bool,
            hideOnTablet: PropTypes.bool,
            hideOnMobile: PropTypes.bool,
        })
    ),
};

export default TableFooter;
