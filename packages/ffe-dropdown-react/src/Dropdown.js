import React from 'react';
import { bool, node, string } from 'prop-types';
import classNames from 'classnames';

const Dropdown = props => {
    const { className, inline, dark, ...rest } = props;

    return (
        <select
            className={classNames(
                'ffe-dropdown',
                { 'ffe-dropdown--inline': inline },
                { 'ffe-dropdown--dark': dark },
                className,
            )}
            {...rest}
        />
    );
};

Dropdown.propTypes = {
    children: node,
    inline: bool,
    className: string,
    /** Dark variant */
    dark: bool,
};

Dropdown.defaultProps = {
    dark: false,
};

export default Dropdown;
