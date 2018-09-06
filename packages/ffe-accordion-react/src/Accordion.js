import React, { Component } from 'react';
import { node, bool } from 'prop-types';
import uuid from 'uuid';
import classNames from 'classnames';

class Accordion extends Component {
    constructor() {
        super();

        this.id = uuid.v4();
    }

    render() {
        const { children, isBlue, ...rest } = this.props;

        return (
            <ul
                {...rest}
                aria-multiselectable="true"
                className={classNames({
                    'ffe-accordion': true,
                    'ffe-accordion--blue': isBlue,
                })}
                role="tablist"
            >
                {React.Children.map(children, ele =>
                    React.cloneElement(ele, { uuid: this.id }),
                )}
            </ul>
        );
    }
}

Accordion.propTypes = {
    /** Accordion items */
    children: node.isRequired,
    /**
     * Use blue Accordion theme - defaults to white . Used internally only.
     * @ignore
     **/
    isBlue: bool,
};

Accordion.defaultProps = {
    isBlue: false,
};

export default Accordion;
