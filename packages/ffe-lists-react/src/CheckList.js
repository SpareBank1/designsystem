import React from 'react';
import classNames from 'classnames';
import { node, oneOf, string } from 'prop-types';

const CheckList = ({ className, columns, ...rest }) => (
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

CheckList.propTypes = {
    /** List items */
    children: node.isRequired,
    /** Any extra classes */
    className: string,
    columns: oneOf([1, 2, '1', '2']),
};

CheckList.defaultProps = {
    columns: 1,
};

export default CheckList;
