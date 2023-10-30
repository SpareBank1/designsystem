import React, { Component } from 'react';
import { func, string, number, node, oneOf, bool } from 'prop-types';
import classNames from 'classnames';
import Symbol from '@sb1/ffe-symbols-react';

class SystemMessage extends Component {
    constructor() {
        super();
        this.close = this.close.bind(this);
        this.state = {
            closed: false,
        };
    }

    close(event) {
        const { animationLengthMs, onClose } = this.props;
        const self = this._self;
        self.style.height = `${self.offsetHeight}px`;
        setTimeout(() => {
            self.style.height = 0;
        }, 0);
        setTimeout(() => {
            this.setState({ closed: true }, () => {
                onClose(event);
            });
        }, animationLengthMs);
        return false;
    }

    render() {
        const {
            animationLengthMs,
            children,
            className,
            icon,
            locale,
            modifier,
            onColoredBg,
            ...rest
        } = this.props;

        if (this.state.closed) {
            return null;
        }

        return (
            <div
                className={classNames(
                    'ffe-system-message-wrapper',
                    `ffe-system-message-wrapper--${modifier}`,
                    { 'ffe-system-message-wrapper--coloredbg': onColoredBg },
                    className,
                )}
                role="group"
                ref={_self => {
                    this._self = _self;
                }}
                style={{
                    transition: `height ${animationLengthMs / 1000}s`,
                }}
                {...rest}
            >
                <div className="ffe-system-message">
                    <span className="ffe-system-message__icon">
                        {icon &&
                            React.cloneElement(icon, {
                                ...icon.props,
                                size: 'sm',
                                weight: 300,
                            })}
                    </span>
                    <p className="ffe-system-message__content">{children}</p>
                    <button
                        aria-label={locale === 'en' ? 'Close' : 'Lukk'}
                        className="ffe-system-message__close"
                        onClick={this.close}
                        type="button"
                    >
                        <Symbol icon="close" size="sm" weight={300} />
                    </button>
                </div>
            </div>
        );
    }
}

SystemMessage.defaultProps = {
    animationLengthMs: 300,
    locale: 'nb',
    onClose: f => f,
};

SystemMessage.propTypes = {
    animationLengthMs: number,
    /** The content of the system message */
    children: node.isRequired,
    /** Additional classes added to the surrounding div */
    className: string,
    /** Override the default icon - use with caution! */
    icon: node.isRequired,
    /** 'nb', 'nn', or 'en' */
    locale: oneOf(['en', 'nb', 'nn']),
    /**
     * The type of system message. Used internally only-
     * @ignore
     **/
    modifier: oneOf(['error', 'info', 'success', 'news']),
    /** Callback for when the system message has been closed (after animation ends) */
    onClose: func,
    /* Adds alternative styling for better contrast on certain backgrounds */
    onColoredBg: bool,
};

export default SystemMessage;
