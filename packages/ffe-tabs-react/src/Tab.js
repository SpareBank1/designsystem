import React from 'react';
import { bool, string } from 'prop-types';
import classNames from 'classnames';

export default function Tab(props) {
    const { className, selected, condensed, ...rest } = props;
    return (
        <button
            role="tab"
            aria-selected={selected}
            className={classNames(
                'ffe-tab',
                { 'ffe-tab--selected': selected },
                { 'ffe-tab--condensed': condensed },
                className,
            )}
            {...rest}
        />
    );
}

Tab.propTypes = {
    /** Selected tab button */
    selected: bool,
    /** Compact style tab button */
    condensed: bool,
    /** Additional css classes */
    className: string,
};
