import React, { Component } from 'react';
import { node, oneOf } from 'prop-types';
import uuid from 'uuid';

class Accordion extends Component {
    constructor() {
        super();

        this.id = uuid.v4();
    }

    render() {
        const {
            children,
            type,
            ...rest
        } = this.props;

        return (
            <ul
                {...rest}
                aria-multiselectable="true"
                className="ffe-accordion"
                role="tablist"
            >
                {React.Children.map(children, (ele) =>
                    React.cloneElement(ele, { type, uuid: this.id })
                )}
            </ul>
        );
    }
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
