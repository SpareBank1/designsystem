import React, { cloneElement } from 'react';
import { node, oneOf } from 'prop-types';
import uuid from 'uuid';

/**
 * Internal base component for white and blue accordions.
 * Should not be used directly, use `WhiteAccordion` or `BlueAccordion`
 * instead.
 */
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
    /** Accordion items */
    children: node.isRequired,
    /**
     * Accordion theme - defaults to white . Used internally only.
     * @ignore
     **/
    type: oneOf(['blue']),
};

export default Accordion;
