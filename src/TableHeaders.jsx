
import React, { PropTypes } from 'react';

import classNames from 'classnames';

const TableHeaders = ({ headers }) => {
    return (
        <thead className="ffe-responsive-table__head">
         <tr className="ffe-responsive-table__row">
             { headers.map((header, index) => {
                 if (header === null) {
                     return <th key={ index }></th>;
                 } else {
                     return <th key={ index }
                                className="ffe-responsive-table__heading"
                                aria-sort={ header.ariaSort }
                                scope="col">
                     <span className={ classNames('ffe-responsive-table__content', { 'ffe-responsive-table__content--text-right' : header.alignRight })}>
                        { header.content }
                     </span>
                     </th>
                 }
             }
             )}
        </tr>
    </thead>
    );
};

TableHeaders.propTypes = {
    headers: PropTypes.arrayOf(
        PropTypes.shape({
            content: PropTypes.node.isRequired,
            key: PropTypes.string.isRequired,
            alignRight: PropTypes.bool,
        })
    ),
};

export default TableHeaders;
