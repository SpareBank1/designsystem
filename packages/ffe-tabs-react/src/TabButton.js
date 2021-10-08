import React from 'react';
import { bool, string } from 'prop-types';
import classNames from 'classnames';

export default function TabButton(props) {
    const { className, selected, ghost, condensed, ...rest } = props;
    return (
        <button
            type="button"
            role="tab"
            aria-selected={selected}
            className={classNames(
                'ffe-tab-button',
                { 'ffe-tab-button--selected': selected },
                { 'ffe-tab-button--ghost': ghost },
                { 'ffe-tab-button--condensed': condensed },
                className,
            )}
            {...rest}
        />
    );
}

TabButton.propTypes = {
    /** Selected tab button */
    selected: bool,
    /** Transparent background style tab button */
    ghost: bool,
    /** Compact style tab button */
    condensed: bool,
    /** Additional css classes */
    className: string,
    /** Id of the element it controls */
    'aria-controls': string.isRequired,
};
