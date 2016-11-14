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
                className={`ffe-context-message-wrapper ffe-context-message-wrapper--${messageType}`}
                ref="self"
                style={style}
            >
                <div className="ffe-context-message">
                    <div className="ffe-context-message__icon">
                        {cloneElement(icon, { className: 'ffe-context-message__icon-svg' })}
                    </div>

                    <div>
                        {header && <header className="ffe-h5">{header}</header>}
                        <div className="ffe-body-text">
                            {children}
                        </div>
                    </div>
                </div>
                <button
                    className="ffe-context-message__close-button"
                    tabIndex="0"
                    aria-label={texts[locale].CLOSE}
                    onClick={this.close}
                >
                    <CloseIcon className="ffe-context-message__close-button-svg"/>
                </button>
            </div>
        );
    }
}

Base.propTypes = {
    children: PropTypes.node.isRequired,
    messageType: PropTypes.oneOf(['info', 'tip']).isRequired,
    locale: PropTypes.oneOf(['nb', 'ny', 'en']).isRequired,
    icon: PropTypes.element.isRequired,
    header: PropTypes.string,
    style: PropTypes.object,
    onClose: PropTypes.func,
};

