import React from 'react';
import classNames from 'classnames';

const TableHeaders = ({ headers }) => {
    return <thead className="ffe-responsive-table__head">
         <tr className="ffe-responsive-table__row">
             { headers.map((header, index) => {
                 if (header === null) {
                     return <th key={ index }></th>;
                 } else {
                     return <th key={ index }
                                className="ffe-responsive-table__heading"
                                scope="col">
                     <span className={ classNames('ffe-responsive-table__content', { 'text-right' : !header.alignLeft })}>
                        { header.content || header }
                     </span>
                     </th>
                 }
             }
             )}
        </tr>
    </thead>;
};

TableHeaders.propTypes = {
    headers: React.PropTypes.array.isRequired
};

export default TableHeaders;
