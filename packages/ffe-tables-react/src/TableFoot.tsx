import React from 'react';
import classNames from 'classnames';

export interface TableFootProps
    extends React.ComponentPropsWithoutRef<'tfoot'> {}

export const TableFoot: React.FC<TableFootProps> = ({ className, ...rest }) => {
    return (
        <tfoot className={classNames('ffe-table__foot', className)} {...rest} />
    );
};
