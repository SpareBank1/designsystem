import React  from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableHeaders = ({ columns }) => {
    return (
        <thead className="ffe-table__head">
            <tr className="ffe-table__row">
                { columns.map((column, index) => {
                    if (column === null) {
                        return <th key={ index } />;
                    }
                    return (
                        <th
                            key={ index }
                            className={classNames(
                                    'ffe-table__heading',
                                    { 'ffe-table--hide-sm' : column.hideOnMobile },
                                    { 'ffe-table--hide-md' : column.hideOnSmallTablet },
                                    { 'ffe-table--hide-lg' : column.hideOnTablet },
                                    { 'ffe-table--hide-xlg' : column.hideOnDesktop }
                            )}
                            aria-sort={ column.ariaSort }
                            scope="col"
                        >
                            <span
                                className={classNames(
                                    'ffe-table__content',
                                    { 'ffe-table__content--text-right' : column.alignRight }
                                )}
                            >
                              { column.header }
                            </span>
                        </th>
                    );

                })}
            </tr>
        </thead>
    );
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
        })
    ),
};

export default TableHeaders;
