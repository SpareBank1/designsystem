import React  from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableHeaders = ({ columns }) => {
    return (
        <thead className="ffe-responsive-table__head">
            <tr className="ffe-responsive-table__row">
                { columns.map((column, index) => {
                    if (column === null) {
                        return <th key={ index } />;
                    }
                    return (
                        <th
                            key={ index }
                            className={classNames(
                                    'ffe-responsive-table__heading',
                                    { 'ffe-responsive-table--hide-md' : column.hideOnTablet }
                                )}
                            aria-sort={ column.ariaSort }
                            scope="col"
                        >
                            <span
                                className={classNames(
                                    'ffe-responsive-table__content',
                                    { 'ffe-responsive-table__content--text-right' : column.alignRight }
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
        })
    ),
};

export default TableHeaders;
