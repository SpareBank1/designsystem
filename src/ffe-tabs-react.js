import React from 'react';
import { node, bool } from 'prop-types';
import classNames from 'classnames';

export default function Tab({ children, selected, ghost, condensed }) {
    return  <button
    			className={
    				classNames(
              'ffe-tab-button',
              { 'ffe-tab-button--selected': selected },
              { 'ffe-tab-button--ghost': ghost },
              { 'ffe-tab-button--condensed': condensed }
            )
    			}
            >
                {children}
            </button>;
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
};