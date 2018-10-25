import React from 'react';
import { bool, string } from 'prop-types';
import classNames from 'classnames';

export default function TabButton(props) {
    const { className, selected, ghost, condensed, dark, ...rest } = props;
    return (
        <button
            className={classNames(
                'ffe-tab-button',
                { 'ffe-tab-button--selected': selected },
                { 'ffe-tab-button--ghost': ghost },
                { 'ffe-tab-button--condensed': condensed },
                { 'ffe-tab-button--dark': dark },
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
    /** Dark variant */
    dark: bool,
};

TabButton.defaultProps = {
    dark: false,
};
