import React, { PropTypes, cloneElement } from 'react';

function Accordion(props) {
    return (
        <ul
            {...props}
            className="ffe-accordion"
            role="tablist"
            aria-multiselectable="true"
        >
            {React.Children.map(props.children, (ele, index) =>
                cloneElement(ele, { type: props.type, index }))
            }
        </ul>
    );
}

Accordion.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['white', 'blue']).isRequired
};

export default Accordion;
