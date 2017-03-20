import React, { Component, PropTypes, cloneElement } from 'react';

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
        const { animationLengthMs, onClose} = this.props;
        const element = this._self;
        element.style.height = `${element.offsetHeight}px`;
        setTimeout(() => {
            element.style.height = 0;
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
            contentElementId,
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
                className={`ffe-context-message ffe-context-message--${messageType}`}
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
    animationLengthMs: PropTypes.number,
    children: PropTypes.node.isRequired,
    contentElementId: PropTypes.string,
    header: PropTypes.string,
    headerElementId: PropTypes.string,
    icon: PropTypes.element,
    locale: PropTypes.oneOf(acceptedLocales),
    messageType: PropTypes.oneOf(['info', 'tip', 'success', 'error']).isRequired,
    onClose: PropTypes.func,
    showCloseButton: PropTypes.bool.isRequired,
    style: PropTypes.object,
};

Base.defaultProps = {
    animationLengthMs: 300,
    contentElementId: 'contentElementId',
    headerElementId: 'headerElementId',
    locale: 'nb',
    onClose: () => {},
    style: {},
};
