import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableCell = (props) => {
    const {
        alignRight,
        alignTop,
        children,
        columnHeader,
        contentClasses,
        tdClasses,
    } = props;

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
            className={ classNames(
                'ffe-table__cell',
                { 'ffe-table__cell--top': alignTop },
                tdClasses
            ) }
            data-th={ dataTh }
        >
            <span
                className={ classNames(
                    'ffe-table__content',
                     { 'ffe-table__content--text-right' : alignRight },
                     contentClasses
                 )}
            >
                { children }
            </span>
        </td>
    );
};

TableCell.propTypes = {
    alignRight: PropTypes.bool,
    alignTop: PropTypes.bool,
    children: PropTypes.any,
    columnHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    contentClasses: PropTypes.string,
    tdClasses: PropTypes.string,
};

export default TableCell;
