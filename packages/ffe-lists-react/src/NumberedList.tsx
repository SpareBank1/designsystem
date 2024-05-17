import React from 'react';
import classNames from 'classnames';

export interface NumberedListProps
    extends React.ComponentPropsWithoutRef<'ol'> {
    /** Condensed modifier. Use in condensed designs */
    condensed?: boolean;
}

export const NumberedList: React.FC<NumberedListProps> = ({
    className,
    condensed,
    ...rest
}) => (
    <ol
        className={classNames(
            'ffe-numbered-list',
            { 'ffe-numbered-list--condensed': condensed },
            className,
        )}
        {...rest}
    />
);
