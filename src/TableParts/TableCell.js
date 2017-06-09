import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableCell = ({ children, columnHeader, alignRight, tdClasses, contentClasses }) => {

    let dataTh = '';
    if (columnHeader) {
        if (typeof columnHeader === 'string') {
            dataTh = columnHeader;
        } else if (columnHeader.props && columnHeader.props.children) {
            dataTh = React.Children.toArray(columnHeader.props.children)[0];
        }
    }

    return (
        <td
            className={ classNames('ffe-responsive-table__cell', tdClasses) }
            data-th={ dataTh }
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
    children: PropTypes.any,
    columnHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    alignRight: PropTypes.bool,
    tdClasses: PropTypes.string,
    contentClasses: PropTypes.string,
};

export default TableCell;
