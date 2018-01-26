import React from 'react';
import { node } from 'prop-types';

export default function TabGroup(props) {
    const {
        children
    } = props;
    return  <div
                className='ffe-tab-button-group'
                role='group'
            > 
                {children}
            </div>;
}

TabGroup.propTypes = {
    /** TabGroup contents - a group of Tabs */
    children: node.isRequired
};
