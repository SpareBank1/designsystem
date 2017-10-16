import React, { Component } from 'react';
import { bool, node, string } from 'prop-types';
import classNames from 'classnames';

import { checkForNestedComponent } from './utils';

export default class GridRow extends Component {

    componentDidMount() {
        if (process.env.NODE_ENV !== 'production') {
            checkForNestedComponent(this.props.children, GridRow);
        }
    }

    render() {
        const {
            bgBlueCobalt,
            bgBlueIce,
            bgBluePale,
            bgBlueRoyal,
            bgPurpleMagenta,
            bgSand,
            className,
            children,
            element,
            reverse,
            topPadding,
            ...rest
        } = this.props;

        let content = children;

        const hasBackgroundColor = bgBlueCobalt
            || bgBlueIce
            || bgBluePale
            || bgBlueRoyal
            || bgPurpleMagenta
            || bgSand;

        if (hasBackgroundColor) {
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
                        { 'ffe-grid__row--bg-blue-ice': bgBlueIce },
                        { 'ffe-grid__row--bg-blue-pale': bgBluePale },
                        { 'ffe-grid__row--bg-blue-royal': bgBlueRoyal },
                        { 'ffe-grid__row--bg-purple-magenta': bgPurpleMagenta },
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
    bgBlueIce: bool,
    bgBluePale: bool,
    bgBlueRoyal: bool,
    bgPurpleMagenta: bool,
    bgSand: bool,
    className: string,
    children: node,
    element: string,
    reverse: bool,
    topPadding: bool,
};
