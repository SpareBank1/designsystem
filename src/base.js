import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import InfoIkon from 'ffe-icons-react/info-ikon';
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
        const { modifier } = this.props;

        return (
            <div
                className="ffe-system-message__wrapper"
                ref="self"
            >
                <div className={`ffe-system-message ffe-system-message--${modifier}`}>
                    <div className="ffe-system-message__icon">
                        <InfoIkon />
                    </div>
                    <div className="ffe-system-message__content">
                        <div className="ffe-system-message__header">
                            {this.props.header}
                        </div>
                        <p className="ffe-system-message__text">
                            {this.props.children}
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
    header: PropTypes.string.isRequired,
    modifier: PropTypes.oneOf(['info']),
};
