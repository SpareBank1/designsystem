import React from 'react';
import classNames from 'classnames';

export interface TableCaptionProps
    extends React.ComponentPropsWithoutRef<'caption'> {}

export const TableCaption = React.forwardRef<
    HTMLTableCaptionElement,
    TableCaptionProps
>(({ className, ...rest }, ref) => {
    return (
        <caption
            className={classNames('ffe-table__caption', className)}
            ref={ref}
            {...rest}
        />
    );
});
