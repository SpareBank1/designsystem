import React, { Component } from 'react';
import { func, node, number, object, oneOf } from 'prop-types';

import KryssIkon from 'ffe-icons-react/kryss-ikon';

export default class Base extends Component {

    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }

    close(event) {
        const { animationLengthMs, onClose } = this.props;
        const element = this._self;
        const clickDelayMs = 50;
        element.style.height = `${element.offsetHeight}px`;
        setTimeout(() => {
            element.style.height = 0;
        }, clickDelayMs);
        setTimeout(() => {
            onClose(event);
        }, clickDelayMs + animationLengthMs);


    }

    render() {
        const {
            animationLengthMs,
            children,
            icon,
            modifier,
            style,
        } = this.props;

        return (
            <div
                className={`ffe-system-message-wrapper ffe-system-message-wrapper--${modifier}`}
                ref={self => { this._self = self; }}
                style={{...style, transition: `height ${animationLengthMs / 1000}s`}}
            >
                <div
                    className={`
                        ffe-system-message
                        ffe-content-container
                        ffe-content-container--lg`}
                >
                    <div className="ffe-system-message__icon">
                        {icon}
                    </div>
                    <p className="ffe-system-message__content">
                        {children}
                    </p>
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
    animationLengthMs: number,
    children: node.isRequired,
    icon: node.isRequired,
    modifier: oneOf(['error', 'info', 'success', 'news']),
    onClose: func,
    style: object,
};

Base.defaultProps = {
    animationLengthMs: 200,
    onClose: () => {},
};
