import React from 'react';
import { string, node, bool } from 'prop-types';
import classNames from 'classnames';

const NumberedList = ({ className, condensed, ...rest }) => (
    <ol
        className={classNames(
            'ffe-numbered-list',
            { 'ffe-numbered-list--condensed': condensed },
            className,
        )}
        {...rest}
    />
);

NumberedList.propTypes = {
    /** List items */
    children: node.isRequired,
    /** Any extra classes */
    className: string,
    /** Condensed modifier. Use in condensed designs */
    condensed: bool,
};

export default NumberedList;
