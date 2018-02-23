import React, { Component } from 'react';
import { func, node, number, object, oneOf } from 'prop-types';

import KryssIkon from '@sb1/ffe-icons-react/lib/kryss-ikon';

/*
 * Internal base component for creating system messages.
 * Should not be used directly! Instead, use one of the
 * proxy components exported from the public API
 */
export default class SystemMessage extends Component {
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
                ref={self => {
                    this._self = self;
                }}
                style={{
                    ...style,
                    transition: `height ${animationLengthMs / 1000}s`,
                }}
            >
                <div
                    className={`
                        ffe-system-message
                        ffe-content-container
                        ffe-content-container--lg`}
                >
                    <div className="ffe-system-message__icon">{icon}</div>
                    <p className="ffe-system-message__content">{children}</p>
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

SystemMessage.propTypes = {
    animationLengthMs: number,
    /** The content of the system message */
    children: node.isRequired,
    /** Override the default icon - use with caution! */
    icon: node.isRequired,
    /**
     * The type of system message. Used internally only-
     * @ignore
     **/
    modifier: oneOf(['error', 'info', 'success', 'news']),
    /** Callback for when the system message has been closed (after animation ends) */
    onClose: func,
    /** Optional styles to apply to the outermost element. `transition` will be overridden */
    style: object,
};

SystemMessage.defaultProps = {
    animationLengthMs: 200,
    onClose: () => {},
};
