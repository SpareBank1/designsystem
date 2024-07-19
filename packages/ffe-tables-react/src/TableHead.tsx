import React from 'react';
import classNames from 'classnames';

export interface TableHeadProps
    extends React.ComponentPropsWithoutRef<'thead'> {}

export const TableHead: React.FC<TableHeadProps> = ({ className, ...rest }) => {
    return (
        <thead className={classNames('ffe-table__head', className)} {...rest} />
    );
};
