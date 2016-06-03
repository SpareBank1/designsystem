import React, { PropTypes } from 'react';

export default function ExpandableList(props) {
    return <ul {...props} className="expandable-list">
                { props.children }
            </ul>;
}


ExpandableList.propTypes = {
    children: PropTypes.array.isRequired
};