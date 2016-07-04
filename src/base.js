import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import KryssIkon from 'ffe-icons-react/kryss-ikon';

export default class Base extends Component {

    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }

    close() {
        const element = findDOMNode(this.refs.self);
        element.style.height = `${element.offsetHeight}px`;
        window.setTimeout(() => {
            element.style.height = 0;
        }, 50);
    }

    render() {
        const {
            children,
            header,
            icon,
            modifier,
        } = this.props;

        return (
            <div
                className="ffe-system-message__wrapper"
                ref="self"
            >
                <div className={`ffe-system-message ffe-system-message--${modifier}`}>
                    <div className="ffe-system-message__icon">
                        {icon}
                    </div>
                    <div className="ffe-system-message__content">
                        <div className="ffe-system-message__header">
                            {header}
                        </div>
                        <p className="ffe-system-message__text">
                            {children}
                        </p>
                    </div>
                    <div
                        className="ffe-system-message__close"
                        role="button"
                        aria-label="Lukk"
                        tabIndex="0"
                        onClick={this.close}
                    >
                        <KryssIkon />
                    </div>
                </div>
            </div>
        );
    }

}

Base.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.node.isRequired,
    header: PropTypes.string.isRequired,
    modifier: PropTypes.oneOf(['error', 'info', 'success']),
};
