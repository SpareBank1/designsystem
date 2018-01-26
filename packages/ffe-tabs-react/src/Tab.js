import React from 'react';
import { node, bool, string } from 'prop-types';
import classNames from 'classnames';

export default function Tab(props) {
    const {
        children,
        className,
        selected,
        ghost,
        condensed,
        ...rest
    } = props;
    return  (
        <button 
            className={
                classNames(
                    'ffe-tab-button',
                    { 'ffe-tab-button--selected': selected },
                    { 'ffe-tab-button--ghost': ghost },
                    { 'ffe-tab-button--condensed': condensed },
                    className
                )
            }
            {...rest}
        >
            {children}
        </button>
    );
}

Tab.propTypes = {
    /** Tab button contents */
    children: node.isRequired,
    /** Selected tab button */
    selected: bool,
    /** Transparent background style tab button */
    ghost: bool,
    /** Compact style tab button */
    condensed: bool,
    /** Additional css classes */
    className: string
};
