import React from 'react';
import { node, string, bool } from 'prop-types';
import classNames from 'classnames';

const BulletList = ({ className, condensed, ...rest }) => (
    <ul
        className={classNames(
            'ffe-bullet-list',
            { 'ffe-bullet-list--condensed': condensed },
            className,
        )}
        {...rest}
    />
);

BulletList.propTypes = {
    /** List items */
    children: node.isRequired,
    /** Any extra classes */
    className: string,
    /** Condensed modifier. Use in condensed designs */
    condensed: bool,
};

export default BulletList;
