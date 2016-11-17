import React, { Component, PropTypes, cloneElement } from 'react';
import CloseIcon from 'ffe-icons-react/kryss-ikon';
import texts from './locale/texts';
import acceptedLocales from './locale/accepted-locales';

export default class Base extends Component {

    constructor(props) {
        super(props);
        this.state = { hidden: false };
        this.close = this.close.bind(this);
    }

    close() {
        const { onClose } = this.props;
        const element = this.refs.self;
        element.style.height = `${element.offsetHeight}px`;
        setTimeout(() => {
            this.setState({ hidden: true }, () => {
                element.style.height = 0;
                onClose();
            });
        }, 0);
    }

    renderIcon() {
        const {icon} = this.props;
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
            showCloseButton
        } = this.props;
        const { hidden } = this.state;
        return (
            <div
                className={`ffe-context-message ffe-context-message--${messageType}`}
                ref="self"
                aria-hidden={hidden}
                style={style}
            >
                <div className="ffe-context-message-content">
                    {icon && this.renderIcon()}

                    <div>
                        {header && <header className="ffe-h5">{header}</header>}
                        <div className="ffe-body-text">
                            {children}
                        </div>
                    </div>
                </div>
                { showCloseButton &&
                <button
                    className="ffe-context-message-content__close-button"
                    tabIndex="0"
                    aria-label={texts[locale].FFE_CONTEXT_MESSAGE_CLOSE}
                    onClick={this.close}
                >
                    <CloseIcon className="ffe-context-message-content__close-button-svg"/>
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
};

Base.defaultProps = {
    locale: 'nb',
    onClose: () => {
    }
};

