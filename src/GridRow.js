import React, { Component } from 'react';
import { bool, node, string } from 'prop-types';
import classNames from 'classnames';

export default class GridRow extends Component {

    componentDidMount() {
        React.Children.forEach(this.props.children, child => {
            if (child.type === GridRow) {
                console.error(`
                    Detected a <GridRow /> child within another GridRow. Do not nest grid rows,
                    the result will be unpredictable.
                `);
            }
        });
    }

    render() {
        const {
            bgBlueCobalt,
            bgBluePale,
            bgSand,
            className,
            children,
            element,
            reverse,
            topPadding,
            ...rest
        } = this.props;

        let content = children;
        if (bgBluePale || bgBlueCobalt || bgSand) {
            content = <div className="ffe-grid__row-wrapper">{children}</div>;
        }

        const Element = element || 'div';

        return (
            <Element
                className={
                    classNames(
                        className,
                        'ffe-grid__row',
                        { 'ffe-grid__row--bg-blue-cobalt': bgBlueCobalt },
                        { 'ffe-grid__row--bg-blue-pale': bgBluePale },
                        { 'ffe-grid__row--bg-sand': bgSand },
                        { 'ffe-grid__row--reverse': reverse },
                        { 'ffe-grid__row--top-padding': topPadding },
                    )
                }
                {...rest}
            >
                {content}
            </Element>
        );
    }
}

GridRow.propTypes = {
    bgBlueCobalt: bool,
    bgBluePale: bool,
    bgSand: bool,
    className: string,
    children: node.isRequired,
    element: string,
    reverse: bool,
    topPadding: bool,
};
