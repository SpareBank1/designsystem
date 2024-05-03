import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableHeaders = ({ columns, headerRender, dataWindow }) => {
    const headerContent = columns.map((column, index) => {
        if (column === null) {
            return <th key={index} />;
        }

        const thProps = {
            key: index,
            className: classNames(
                'ffe-table__heading',
                { 'ffe-table--hide-sm': column.hideOnMobile },
                { 'ffe-table--hide-md': column.hideOnSmallTablet },
                { 'ffe-table--hide-lg': column.hideOnTablet },
                { 'ffe-table--hide-xlg': column.hideOnDesktop },
            ),
            'aria-sort': column.ariaSort,
            scope: 'col',
        };

        const spanProps = {
            className: classNames('ffe-table__content', {
                'ffe-table__content--text-right': column.alignRight,
            }),
        };

        const thContentDefault = <span {...spanProps}>{column.header}</span>;

        if (typeof column.columnHeaderRender === 'function') {
            return column.columnHeaderRender(
                column.header,
                dataWindow,
                spanProps,
                thProps,
                columns,
                index,
            );
        }

        return (
            <th key={thProps.key} {...thProps}>
                {thContentDefault}
            </th>
        );
    });
    const trProps = { className: 'ffe-table__row', children: headerContent };

    const trDefault = <tr {...trProps} />;

    const headerRendered =
        typeof headerRender === 'function'
            ? headerRender(trProps, columns)
            : trDefault;

    return <thead className="ffe-table__head">{headerRendered}</thead>;
};

TableHeaders.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            alignRight: PropTypes.bool,
            header: PropTypes.node.isRequired,
            hideOnDesktop: PropTypes.bool,
            hideOnMobile: PropTypes.bool,
            hideOnSmallTablet: PropTypes.bool,
            hideOnTablet: PropTypes.bool,
            key: PropTypes.string.isRequired,
        }),
    ),
    headerRender: PropTypes.func,
    dataWindow: PropTypes.array,
};

export default TableHeaders;
