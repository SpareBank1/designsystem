import React, { Component, cloneElement } from 'react';
import {
    number,
    node,
    string,
    bool,
    element,
    oneOf,
    func,
    object,
} from 'prop-types';
import classNames from 'classnames';
import KryssIkon from '@sb1/ffe-icons-react/lib/kryss-ikon';

import acceptedLocales from './locale/accepted-locales';
import texts from './locale/texts';

/**
 * Base component for all four types of context messages.
 *
 * *Should never be used directly!*
 * Please use one of the four versions exported from this package.
 */
export default class ContextMessage extends Component {
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
                {cloneElement(icon, {
                    className: classNames(
                        'ffe-context-message-content__icon-svg',
                        icon.props.className,
                    ),
                })}
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
            ...rest
        } = this.props;

        if (this.state.closed) {
            return null;
        }

        return (
            <div
                aria-describedby={contentElementId}
                aria-labelledby={header && headerElementId}
                className={classNames(
                    'ffe-context-message',
                    `ffe-context-message--${messageType}`,
                    { 'ffe-context-message--compact': compact },
                    className,
                )}
                ref={_self => {
                    this._self = _self;
                }}
                style={{
                    ...style,
                    transition: `height ${animationLengthMs / 1000}s`,
                }}
                {...rest}
            >
                <div className="ffe-context-message-content">
                    {icon && this.renderIcon()}
                    <div>
                        {header && (
                            <header
                                className="ffe-context-message-content__header"
                                id={headerElementId}
                            >
                                {header}
                            </header>
                        )}
                        <div className="ffe-body-text" id={contentElementId}>
                            {children}
                        </div>
                    </div>
                </div>
                {showCloseButton && (
                    <button
                        aria-label={`${
                            texts[locale].FFE_CONTEXT_MESSAGE_CLOSE
                        } ${header || ''}`}
                        className="ffe-context-message-content__close-button"
                        onClick={this.close}
                        type="button"
                    >
                        <KryssIkon
                            className="ffe-context-message-content__close-button-svg"
                            aria-hidden="true"
                        />
                    </button>
                )}
            </div>
        );
    }
}

ContextMessage.propTypes = {
    animationLengthMs: number,
    /** The content shown in the context box */
    children: node.isRequired,
    /** Classes are added in addition to the relevant context message classes */
    className: string,
    /** Renders a more compact version of the context message */
    compact: bool,
    /** ID for the children container */
    contentElementId: string,
    header: string,
    /** ID for the header container */
    headerElementId: string,
    icon: element,
    /** Decides the language of the aria-label for the close icon */
    locale: oneOf(acceptedLocales),
    /** Provided by the wrapper component */
    messageType: oneOf(['info', 'tip', 'success', 'error']).isRequired,
    /** Callback for when the context message has been closed (after the animation) */
    onClose: func,
    showCloseButton: bool,
    /** Styles applied to the outermost element. `height` will be overridden */
    style: object,
};

ContextMessage.defaultProps = {
    animationLengthMs: 300,
    compact: false,
    contentElementId: 'contentElementId',
    headerElementId: 'headerElementId',
    locale: 'nb',
    onClose: () => {},
    showCloseButton: false,
    style: {},
};
