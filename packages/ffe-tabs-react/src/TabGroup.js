import React from 'react';
import { node, string, bool } from 'prop-types';
import classNames from 'classnames';

export default function TabGroup({ className, thin, ...rest }) {
    return (
        <div
            className={classNames(
                'ffe-tab-group',
                { 'ffe-tab-group--thin': thin },
                className,
            )}
            role="group"
            {...rest}
        />
    );
}

TabGroup.propTypes = {
    /** TabGroup contents - a group of Tabs */
    children: node.isRequired,
    /** Additional css classes */
    className: string,
    /** Applies the thin modifier to remove margins */
    thin: bool,
};
