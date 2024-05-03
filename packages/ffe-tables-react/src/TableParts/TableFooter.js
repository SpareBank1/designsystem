import React from 'react';
import PropTypes from 'prop-types';
import TableCell from './TableCell';
import classNames from 'classnames';

const TableFooter = ({ columns, footerRender, dataWindow }) => {
    const footerContent = columns.map((column, index) => {
        if (column === null) {
            return <td key={index} />;
        }

        const className = classNames(
            { 'ffe-table--hide-sm': column.hideOnMobile },
            { 'ffe-table--hide-md': column.hideOnSmallTablet },
            { 'ffe-table--hide-lg': column.hideOnTablet },
            { 'ffe-table--hide-xlg': column.hideOnDesktop },
        );

        let dataTh = '';
        const columnHeader = column.header;
        if (columnHeader) {
            if (typeof columnHeader === 'string') {
                dataTh = columnHeader;
            } else if (columnHeader.props && columnHeader.props.children) {
                dataTh = React.Children.toArray(columnHeader.props.children)[0];
            }
        }

        const tdProps = {
            className: classNames(
                'ffe-table__cell',
                { 'ffe-table__cell--top': column.alignTop },
                className,
            ),
            'data-th': dataTh,
            key: index,
        };

        const spanProps = {
            className: classNames('ffe-table__content', {
                'ffe-table__content--text-right': column.alignRight,
            }),
        };

        if (typeof column.columnFooterRender === 'function') {
            return column.columnFooterRender(
                column.footer,
                dataWindow,
                tdProps,
                spanProps,
                columns,
                index,
            );
        }

        return (
            <TableCell
                key={index}
                columnHeader={column.header}
                alignRight={column.alignRight}
                alignTop={column.alignTop}
                tdClasses={className}
            >
                {column.footer}
            </TableCell>
        );
    });

    const trProps = { className: 'ffe-table__row', children: footerContent };

    const trDefault = <tr {...trProps} />;

    const footerRendered =
        typeof footerRender === 'function'
            ? footerRender(trProps, columns)
            : trDefault;

    return <tfoot className="ffe-table__footer">{footerRendered}</tfoot>;
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
        }),
    ),
    footerRender: PropTypes.func,
    dataWindow: PropTypes.array,
};

export default TableFooter;
