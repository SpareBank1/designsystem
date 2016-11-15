import React, { Component, PropTypes, cloneElement } from 'react';
import CloseIcon from 'ffe-icons-react/kryss-ikon';
import texts from './locale/texts';

export default class Base extends Component {

    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }

    close() {
        const { onClose } = this.props;
        const element = this.refs.self;
        element.style.height = `${element.offsetHeight}px`;
        setTimeout(() => {
            element.style.height = 0;
            onClose();
        }, 0);
    }

    render() {
        const {
            children,
            icon,
            messageType,
            style,
            header,
            locale,
        } = this.props;

        return (
            <div
                className={`ffe-context-message ffe-context-message--${messageType}`}
                ref="self"
                style={style}
            >
                <div className="ffe-context-message-content">
                    <div className="ffe-context-message-content__icon">
                        {cloneElement(icon, { className: 'ffe-context-message-content__icon-svg' })}
                    </div>

                    <div>
                        {header && <header className="ffe-h5">{header}</header>}
                        <div className="ffe-body-text">
                            {children}
                        </div>
                    </div>
                </div>
                <button
                    className="ffe-context-message-content__close-button"
                    tabIndex="0"
                    aria-label={texts[locale].FFE_CONTEXT_MESSAGE_CLOSE}
                    onClick={this.close}
                >
                    <CloseIcon className="ffe-context-message-content__close-button-svg"/>
                </button>
            </div>
        );
    }
}

Base.propTypes = {
    children: PropTypes.node.isRequired,
    messageType: PropTypes.oneOf(['info', 'tip']).isRequired,
    locale: PropTypes.oneOf(['nb', 'nn', 'en']),
    icon: PropTypes.element.isRequired,
    header: PropTypes.string,
    style: PropTypes.object,
    onClose: PropTypes.func,
};

Base.defaultProps = {
    locale: 'nb'
};

