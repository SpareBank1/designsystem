import React, { Component, PropTypes, cloneElement } from 'react';
import CloseIcon from 'ffe-icons-react/kryss-ikon';
import texts from './locale/texts';
import acceptedLocales from './locale/accepted-locales';

export default class Base extends Component {
    constructor(props) {
        super(props);
        this.state = { closed: false };
        this.close = this.close.bind(this);
    }

    close() {
        const { onClose, animationLengthMs } = this.props;
        const element = this.refs.self;
        element.style.height = `${element.offsetHeight}px`;
        setTimeout(() => {
            element.style.height = 0;
        }, 0);
        setTimeout(() => {
            this.setState({ closed: true }, () => {
                onClose();
            });
        }, animationLengthMs);
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
            children,
            icon,
            messageType,
            style,
            header,
            locale,
            showCloseButton,
            animationLengthMs,
            contentElementId,
            headerElementId,
        } = this.props;
        if (this.state.closed) {
            return null;
        }
        return (
            <div
                className={`ffe-context-message ffe-context-message--${messageType}`}
                ref="self"
                style={{ ...style, transition: `height ${animationLengthMs / 1000}s` }}
                aria-describedby={contentElementId}
                aria-labelledby={headerElementId}
            >
                <div className="ffe-context-message-content">
                    {icon && this.renderIcon()}
                    <div>
                        {header &&
                        <header
                            className="ffe-context-message-content__header" id={headerElementId}
                        >
                            {header}
                        </header>
                        }
                        <div className="ffe-body-text" id={contentElementId}>
                            {children}
                        </div>
                    </div>
                </div>
                { showCloseButton &&
                <button
                    className="ffe-context-message-content__close-button"
                    tabIndex="0"
                    aria-label={`${texts[locale].FFE_CONTEXT_MESSAGE_CLOSE} ${header}`}
                    onClick={this.close}
                >
                    <CloseIcon className="ffe-context-message-content__close-button-svg" aria-hidden="true"/>
                </button> }
            </div>
        );
    }
}

Base.propTypes = {
    children: PropTypes.node.isRequired,
    messageType: PropTypes.oneOf(['info', 'tip']).isRequired,
    showCloseButton: PropTypes.bool.isRequired,
    locale: PropTypes.oneOf(acceptedLocales),
    icon: PropTypes.element,
    header: PropTypes.string,
    style: PropTypes.object,
    onClose: PropTypes.func,
    animationLengthMs: PropTypes.number,
    contentElementId : PropTypes.string,
    headerElementId : PropTypes.string,
};

Base.defaultProps = {
    locale: 'nb',
    onClose: () => {},
    style: {},
    animationLengthMs: 300,
    contentElementId : 'contentElementId',
    headerElementId : 'headerElementId'

};

