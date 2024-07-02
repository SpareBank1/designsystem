import React from 'react';
import classNames from 'classnames';

export interface TableBodyProps
    extends React.ComponentPropsWithoutRef<'tbody'> {}

export const TableBody: React.FC<TableBodyProps> = ({ className, ...rest }) => {
    return (
        <tbody className={classNames('ffe-table__body', className)} {...rest} />
    );
};
