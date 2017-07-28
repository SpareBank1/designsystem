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
                                    { 'ffe-table--hide-lg' : column.hideOnTablet },
                                    { 'ffe-table--hide-md' : column.hideOnSmallTablet },
                                    { 'ffe-table--hide-sm' : column.hideOnMobile }
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
            header: PropTypes.node.isRequired,
            key: PropTypes.string.isRequired,
            alignRight: PropTypes.bool,
            hideOnTablet: PropTypes.bool,
            hideOnSmallTablet: PropTypes.bool,
            hideOnMobile: PropTypes.bool,
        })
    ),
};

export default TableHeaders;
