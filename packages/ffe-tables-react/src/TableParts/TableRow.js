import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TableCell from './TableCell';

const TableRow = props => {
    const {
        cells,
        columns,
        onClick,
        onKeyDown,
        trClasses,
        expandable,
        expanded,
        rowRender,
        rowIndex,
    } = props;

    const expandableProps = expandable && {
        'aria-expanded': expanded,
        onClick,
        onKeyDown,
        role: 'button',
        tabIndex: '0',
    };

    const rowContent = columns.map((column, index) => {
        return (
            <TableCell
                alignRight={column.alignRight}
                alignTop={column.alignTop}
                columnHeader={column.header}
                key={index}
                tdClasses={classNames(
                    {
                        'ffe-table__cell--collapsed':
                            column.key === 'expandIcon',
                    },
                    { 'ffe-table--hide-sm': column.hideOnMobile },
                    { 'ffe-table--hide-md': column.hideOnSmallTablet },
                    { 'ffe-table--hide-lg': column.hideOnTablet },
                    { 'ffe-table--hide-xlg': column.hideOnDesktop },
                )}
            >
                {column.cellRender
                    ? column.cellRender(cells[column.key], column, props, index)
                    : cells[column.key]}
            </TableCell>
        );
    });

    const trprops = {
        className: classNames('ffe-table__row', trClasses),
        ...expandableProps,
        onClick: onClick,
        children: rowContent,
    };

    if (typeof rowRender === 'function') {
        return rowRender(trprops, props, rowIndex);
    }

    return <tr {...trprops}>{rowContent}</tr>;
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
            cellRender: PropTypes.func,
        }),
    ).isRequired,
    expandable: PropTypes.bool,
    expanded: PropTypes.bool,
    onClick: PropTypes.func,
    rowRender: PropTypes.func,
    headerRender: PropTypes.func,
    footerRender: PropTypes.func,
    onKeyDown: PropTypes.func,
    trClasses: PropTypes.string,
    rowIndex: PropTypes.number,
};

export default TableRow;
