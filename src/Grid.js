import React, { Component } from 'react';
import classNames from 'classnames';
import { bool, node, string } from 'prop-types';

export default class Grid extends Component {

    componentDidMount() {
        React.Children.forEach(this.props.children, child => {
            if (child && child.type === Grid) {
                console.error(`
                    Detected a <Grid /> child within another Grid. Do not nest grids,
                    the result will be unpredictable.
                `);
            }
        });
    }

    render() {
        const {
            children,
            className,
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
    children: node.isRequired,
    className: string,
    element: string,
    noTopPadding: bool,
};
