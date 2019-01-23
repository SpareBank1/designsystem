import React, { Component } from 'react';
import classNames from 'classnames';
import { node, string } from 'prop-types';

import { checkForNestedComponent } from './utils';
import { Grid } from '.';

export default class InlineGrid extends Component {
    componentDidMount() {
        /* istanbul ignore else: there is no else  */
        if (process.env.NODE_ENV !== 'production') {
            checkForNestedComponent(this.props.children, Grid, 'InlineGrid');
        }
    }

    render() {
        const { className, element: Element, ...rest } = this.props;

        return (
            <Element
                className={classNames(
                    className,
                    'ffe-grid',
                    'ffe-grid--inline',
                )}
                {...rest}
            />
        );
    }
}

InlineGrid.propTypes = {
    /** Any children of a InlineGrid must be a GridRow */
    children: node,
    /** Any extra classes are attached to the root node, in addition to ffe-grid classes */
    className: string,
    /** Specify the DOM element being used to create the Grid */
    element: string,
};

InlineGrid.defaultProps = {
    element: 'div',
};
