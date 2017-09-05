import React, { Component, cloneElement } from 'react';
import {
    number,
    node,
    string,
    bool,
    element,
    oneOf,
    func,
    object
} from 'prop-types';
import CloseIcon from 'ffe-icons-react/kryss-ikon';

import acceptedLocales from './locale/accepted-locales';
import texts from './locale/texts';

export default class Base extends Component {
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

    renderIcon() {
        const { icon } = this.props;
        return (
            <div className="ffe-context-message-content__icon">
                {cloneElement(icon, { className: 'ffe-context-message-content__icon-svg' })}
            </div>
        );
    }

    render() {
        const {
            animationLengthMs,
            children,
            compact,
            contentElementId,
            className,
            header,
            headerElementId,
            icon,
            locale,
            messageType,
            showCloseButton,
            style,
        } = this.props;

        if (this.state.closed) {
            return null;
        }

        return (
            <div
                aria-describedby={contentElementId}
                aria-labelledby={headerElementId}
                className={
                    `ffe-context-message ffe-context-message--${messageType}`
                        + `${compact ? ' ffe-context-message--compact' : ''}`
                        + `${className ? ` ${className}` : ''}`
                }
                ref={(_self) => { this._self = _self; }}
                style={{ ...style, transition: `height ${animationLengthMs / 1000}s` }}
            >
                <div className="ffe-context-message-content">
                    {icon && this.renderIcon()}
                    <div>
                        {header &&
                            <header className="ffe-context-message-content__header" id={headerElementId}>
                                {header}
                            </header>
                        }
                        <div className="ffe-body-text" id={contentElementId}>
                            {children}
                        </div>
                    </div>
                </div>
                {showCloseButton &&
                    <button
                        aria-label={`${texts[locale].FFE_CONTEXT_MESSAGE_CLOSE} ${header}`}
                        className="ffe-context-message-content__close-button"
                        onClick={this.close}
                        type="button"
                    >
                        <CloseIcon className="ffe-context-message-content__close-button-svg" aria-hidden="true" />
                    </button>
                }
            </div>
        );
    }
}

Base.propTypes = {
    animationLengthMs: number,
    children: node.isRequired,
    className: string,
    compact: bool,
    contentElementId: string,
    header: string,
    headerElementId: string,
    icon: element,
    locale: oneOf(acceptedLocales),
    messageType: oneOf(['info', 'tip', 'success', 'error']).isRequired,
    onClose: func,
    showCloseButton: bool,
    style: object,
};

Base.defaultProps = {
    animationLengthMs: 300,
    compact: false,
    contentElementId: 'contentElementId',
    headerElementId: 'headerElementId',
    locale: 'nb',
    onClose: () => {},
    showCloseButton: false,
    style: {},
};
