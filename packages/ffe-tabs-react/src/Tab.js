import React from 'react';
import { bool, string } from 'prop-types';
import classNames from 'classnames';

export default function Tab(props) {
    const { className, selected, ...rest } = props;
    return (
        <button
            type="button"
            role="tab"
            aria-selected={selected}
            className={classNames(
                'ffe-tab',
                { 'ffe-tab--selected': selected },
                className,
            )}
            {...rest}
        />
    );
}

Tab.propTypes = {
    /** Selected tab button */
    selected: bool,
    /** Additional css classes */
    className: string,
    /** Id of the element it controls */
    'aria-controls': string.isRequired,
};
