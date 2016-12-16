import React, { PropTypes, cloneElement } from 'react';
import hash from 'nfe-hash';

function Accordion(props) {
    return (
        <ul
            {...props}
            aria-multiselectable="true"
            className="ffe-accordion"
            role="tablist"
        >
            { React.Children.map(props.children, (ele) =>
                cloneElement(ele, { type: props.type, uuid: hash(props) }))
            }
        </ul>
    );
}

Accordion.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['white', 'blue']).isRequired
};

export default Accordion;
