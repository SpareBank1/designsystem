import React from 'react';
import classNames from 'classnames';

export interface StylizedNumberedListProps
    extends React.ComponentPropsWithoutRef<'ol'> {}

export const StylizedNumberedList: React.FC<StylizedNumberedListProps> = ({
    className,
    ...rest
}) => (
    <ol
        role="list"
        className={classNames('ffe-stylized-numbered-list', className)}
        {...rest}
    />
);
