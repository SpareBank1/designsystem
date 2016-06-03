import React, { PropTypes, cloneElement } from 'react';

export default function Accordion(props) {
    return <ul {...props} className="ffe-accordion" role="tablist" aria-multiselectable="true">
                { React.Children.map(props.children, 
                    (ele, index) => cloneElement(ele, { type: props.type, index })) }
            </ul>;
}


Accordion.propTypes = {
    children: PropTypes.array.isRequired,
    type: PropTypes.oneOf(['white', 'blue']).isRequired
};