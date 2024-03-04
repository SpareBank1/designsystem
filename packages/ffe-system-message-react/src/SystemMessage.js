import React, { Component } from 'react';
import { func, string, number, node, oneOf, bool } from 'prop-types';
import classNames from 'classnames';
import { Icon } from '@sb1/ffe-icons-react';
import texts from './texts';

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
                            })}
                    </span>
                    <p className="ffe-system-message__content">{children}</p>
                    <button
                        aria-label={texts[locale].close}
                        className="ffe-system-message__close"
                        onClick={this.close}
                        type="button"
                    >
                        <Icon
                            fileUrl="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik00ODAtNDQyLjg0NyAzMDkuMDc2LTI3MS45MjRxLTguMzA3IDguMzA4LTE3Ljg4NCA4LTkuNTc2LS4zMDctMTguMjY4LTktOC42OTMtOC42OTItOC42OTMtMTguNTc2dDguNjkzLTE4LjU3Nkw0NDIuODQ3LTQ4MCAyNzEuOTI0LTY1MC45MjRxLTguMzA4LTguMzA3LTgtMTguMzg0LjMwNy0xMC4wNzYgOS0xOC43NjggOC42OTItOC42OTMgMTguNTc2LTguNjkzdDE4LjU3NiA4LjY5M0w0ODAtNTE3LjE1M2wxNzAuOTI0LTE3MC45MjNxOC4zMDctOC4zMDggMTguMzg0LTguNSAxMC4wNzYtLjE5MyAxOC43NjggOC41IDguNjkzIDguNjkyIDguNjkzIDE4LjU3NnQtOC42OTMgMTguNTc2TDUxNy4xNTMtNDgwbDE3MC45MjMgMTcwLjkyNHE4LjMwOCA4LjMwNyA4LjUgMTcuODg0LjE5MyA5LjU3Ni04LjUgMTguMjY4LTguNjkyIDguNjkzLTE4LjU3NiA4LjY5M3QtMTguNTc2LTguNjkzTDQ4MC00NDIuODQ3WiIvPjwvc3ZnPg=="
                            size="sm"
                        />
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
