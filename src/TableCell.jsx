import React from 'react';
import classNames from 'classnames';

const TableCell = ({ children, columnHeader, alignRight, tdClasses, contentClasses, colSpan }) => {

    return (
        <td
            className={ classNames('ffe-responsive-table__cell', tdClasses) }
            data-th={ columnHeader }
            colSpan={ colSpan }
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
    columnHeader: React.PropTypes.string,
    alignRight: React.PropTypes.bool,
    tdClasses: React.PropTypes.string,
    contentClasses: React.PropTypes.string,
    colSpan: React.PropTypes.number
};

export default TableCell;
