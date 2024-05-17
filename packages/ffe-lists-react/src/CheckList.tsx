import React from 'react';
import classNames from 'classnames';

export interface CheckListProps extends React.ComponentPropsWithoutRef<'ul'> {
    columns?: 1 | 2 | '1' | '2';
}

export const CheckList: React.FC<CheckListProps> = ({
    className,
    columns = 1,
    ...rest
}) => (
    <ul
        role="list"
        className={classNames(
            'ffe-check-list',
            { 'ffe-check-list--two-columns': Number(columns) === 2 },
            className,
        )}
        {...rest}
    />
);
