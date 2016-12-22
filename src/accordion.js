import React, { PropTypes, cloneElement } from 'react';
import uuid from 'uuid';

function Accordion(props) {
    const accordionId = uuid.v4();
    return (
        <ul
            {...props}
            aria-multiselectable="true"
            className="ffe-accordion"
            role="tablist"
        >
            { React.Children.map(props.children, (ele) =>
                cloneElement(ele, { type: props.type, uuid: accordionId }))
            }
        </ul>
    );
}

Accordion.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['white', 'blue']).isRequired
};

export default Accordion;
