import React from 'react';
import { node, string, bool } from 'prop-types';
import classNames from 'classnames';

export default function TabGroup({ className, noBreak, ...rest }) {
    return (
        <div
            className={classNames(
                'ffe-tab-group',
                { 'ffe-tab-group--noBreak': noBreak },
                className,
            )}
            role="tablist"
            {...rest}
        />
    );
}

TabGroup.propTypes = {
    /** TabGroup contents - a group of Tabs */
    children: node.isRequired,
    /** Additional css classes */
    className: string,
    /** Applies the noBreak modifier to avoid breaking */
    noBreak: bool,
};
