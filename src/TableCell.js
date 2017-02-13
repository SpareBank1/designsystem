import React from 'react';
import classNames from 'classnames';

const TableCell = ({ children, columnHeader, alignRight, tdClasses, contentClasses }) => {

    return (
        <td
            className={ classNames('ffe-responsive-table__cell', tdClasses) }
            data-th={ columnHeader }
        >
            <span
                className={ classNames(
                    'ffe-responsive-table__content',
                     { 'ffe-responsive-table__content--text-right' : alignRight },
                     contentClasses
                 )}
            >
                { children }
            </span>
        </td>
    );
};

TableCell.propTypes = {
    children: React.PropTypes.any,
    columnHeader: React.PropTypes.string,
    alignRight: React.PropTypes.bool,
    tdClasses: React.PropTypes.string,
    contentClasses: React.PropTypes.string,
};

export default TableCell;
