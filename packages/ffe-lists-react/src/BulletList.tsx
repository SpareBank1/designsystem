import React from 'react';
import classNames from 'classnames';

export interface BulletListProps extends React.ComponentPropsWithoutRef<'ul'> {
    /** Condensed modifier. Use in condensed designs */
    condensed?: boolean;
}

export const BulletList: React.FC<BulletListProps> = ({
    className,
    condensed,
    ...rest
}) => (
    <ul
        className={classNames(
            'ffe-bullet-list',
            { 'ffe-bullet-list--condensed': condensed },
            className,
        )}
        {...rest}
    />
);
