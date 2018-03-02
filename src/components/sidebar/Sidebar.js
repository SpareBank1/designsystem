import React, { Component } from 'react';
import classNames from 'classnames';

export default class Sidebar extends Component {
    render() {
        const { toc } = this.props;

        return (
            <div className="sb1ds-sidebar__wrapper">
                <div className="sb1ds-sidebar">
                    <div className="sb1ds-sidebar__menu">{toc}</div>
                </div>
            </div>
        );
    }
}
