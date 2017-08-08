import React from 'react';
import PropTypes from 'prop-types';
import TableCell from './TableCell';
import classNames from 'classnames';

const TableFooter = ({ columns }) => {
    return (
        <tfoot className="ffe-table__footer">
            <tr className="ffe-table__row">
                { columns.map((column, index) => {
                    if (column === null) {
                        return <td key={ index } />;
                    }
                    return (
                        <TableCell
                            key={ index }
                            columnHeader={ column.header }
                            alignRight={ column.alignRight }
                            alignTop={ column.alignTop }
                            tdClasses={ classNames(
                                { 'ffe-table--hide-sm' : column.hideOnMobile },
                                { 'ffe-table--hide-md' : column.hideOnSmallTablet },
                                { 'ffe-table--hide-lg' : column.hideOnTablet },
                                { 'ffe-table--hide-xlg' : column.hideOnDesktop }
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
            alignRight: PropTypes.bool,
            alignTop: PropTypes.bool,
            footer: PropTypes.any,
            header: PropTypes.node.isRequired,
            hideOnDesktop: PropTypes.bool,
            hideOnMobile: PropTypes.bool,
            hideOnSmallTablet: PropTypes.bool,
            hideOnTablet: PropTypes.bool,
        })
    ),
};

export default TableFooter;
