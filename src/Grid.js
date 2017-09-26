import React, { Component } from 'react';
import classNames from 'classnames';
import { bool, node, string } from 'prop-types';

import { checkForNestedComponent } from './utils';

export default class Grid extends Component {

    componentDidMount() {
        if (process.env.NODE_ENV !== 'production') {
            checkForNestedComponent(this.props.children, Grid);
        }
    }

    render() {
        const {
            children,
            className,
            condensed,
            element,
            noTopPadding,
            ...rest
        } = this.props;

        const Element = element || 'div';

        return (
            <Element
                className={
                    classNames(
                        className,
                        'ffe-grid',
                        { 'ffe-grid--condensed': condensed },
                        { 'ffe-grid--no-top-padding': noTopPadding },
                    )
                }
                {...rest}
            >
                {children}
            </Element>
        );
    }
}

Grid.propTypes = {
    children: node,
    className: string,
    condensed: bool,
    element: string,
    noTopPadding: bool,
};
