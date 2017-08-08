import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TableCell from './TableCell';

const TableRow = ({ cells, columns, onClick, onKeyDown, trClasses, expandable, expanded }) => {
    const expandableProps = expandable ? { tabIndex:'0', onClick, onKeyDown } : {};
    return (
        <tr
            className={classNames(
                'ffe-table__row',
                trClasses
            )}
            role="button"
            aria-expanded={ expanded }
            { ...expandableProps }
        >
            { columns.map((column, index) => {
                return (
                    <TableCell
                        alignRight={ column.alignRight }
                        alignTop={ column.alignTop }
                        columnHeader={ column.header }
                        key={ index }
                        tdClasses={classNames(
                            { 'ffe-table__cell--collapsed' : column.key === 'expandIcon' },
                            { 'ffe-table--hide-sm' : column.hideOnMobile },
                            { 'ffe-table--hide-md' : column.hideOnSmallTablet },
                            { 'ffe-table--hide-lg' : column.hideOnTablet },
                            { 'ffe-table--hide-xlg' : column.hideOnDesktop }
                        )}
                    >
                        { cells[column.key] }
                    </TableCell>
                );
            })}
        </tr>
    );
};

TableRow.propTypes = {
    cells: PropTypes.object.isRequired,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            alignRight: PropTypes.bool,
            alignTop: PropTypes.bool,
            header: PropTypes.any,
            hideOnDesktop: PropTypes.bool,
            hideOnMobile: PropTypes.bool,
            hideOnSmallTablet: PropTypes.bool,
            hideOnTablet: PropTypes.bool,
            key: PropTypes.string,
        })
    ).isRequired,
    expandable: PropTypes.bool,
    expanded: PropTypes.bool,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    trClasses: PropTypes.string,
};

export default TableRow;
