import React, { cloneElement } from 'react';
import { node, oneOf } from 'prop-types';
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
    children: node.isRequired,
    type: oneOf(['blue']),
};

export default Accordion;
