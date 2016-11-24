import React from 'react';
import classNames from 'classnames';

const TableCell = ({ children, dataHeader, alignLeft, tdClasses, contentClasses, colSpan }) => {
    return <td className={ classNames('ffe-responsive-table__cell', tdClasses) }
               data-th={ dataHeader || '' }
               colSpan={ colSpan }>
         <span className={ classNames('ffe-responsive-table__content', contentClasses, { 'text-right' : !alignLeft })}>
            { children }
         </span>
        </td>;
};

TableCell.propTypes = {
    dataHeader: React.PropTypes.string,
    alignLeft: React.PropTypes.bool,
    tdClasses: React.PropTypes.string,
    contentClasses: React.PropTypes.string,
    colSpan: React.PropTypes.number
};

export default TableCell;
