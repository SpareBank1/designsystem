import React, { Component } from 'react';
import classNames from 'classnames';

export default class Sidebar extends Component {
    constructor() {
        super();

        this.onToggleExpand = this.onToggleExpand.bind(this);

        this.state = {
            expanded: true,
        };
    }

    onToggleExpand() {
        this.setState({
            expanded: !this.state.expanded,
        });
    }

    render() {
        const { toc } = this.props;

        const { expanded } = this.state;

        return (
            <div className="sb1ds-sidebar__wrapper">
                <button
                    className="sb1ds-sidebar__toggle ffe-tertiary-button"
                    onClick={this.onToggleExpand}
                >
                    ☰
                </button>

                <div
                    className={classNames('sb1ds-sidebar', {
                        'sb1ds-sidebar--expanded': expanded,
                    })}
                >
                    {expanded && (
                        <div className="sb1ds-sidebar__menu">{toc}</div>
                    )}
                </div>
            </div>
        );
    }
}
