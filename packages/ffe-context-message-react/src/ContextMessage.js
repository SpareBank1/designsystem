import React, { useState, useRef, cloneElement } from 'react';
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
import { KryssIkon } from '@sb1/ffe-icons-react';
import acceptedLocales from './locale/accepted-locales';
import texts from './locale/texts';
import { v4 as uuid } from 'uuid';

/**
 * Base component for all four types of context messages.
 *
 * *Should never be used directly!*
 * Please use one of the four versions exported from this package.
 */
const ContextMessage = ({
    animationLengthMs,
    onClose,
    icon,
    headerText,
    compact,
    messageType,
    style,
    showCloseButton,
    headerElement,
    headerElementId,
    contentElementId,
    children,
    className,
    locale,
    onColoredBg,
    ...rest
}) => {
    const [isClosed, setIsClosed] = useState();
    const container = useRef(null);
    const _headerElementId = useRef(headerElementId || uuid());
    const _contentElementId = useRef(contentElementId || uuid());

    const handleClose = event => {
        container.current.style.height = `${container.current.offsetHeight}px`;
        setTimeout(() => {
            container.current.style.height = 0;
        }, 0);
        setTimeout(() => {
            setIsClosed(true);
            onClose(event);
        }, animationLengthMs);
        return false;
    };

    if (isClosed) {
        return null;
    }

    return (
        <div
            ref={container}
            className={classNames(
                'ffe-context-message',
                `ffe-context-message--${messageType}`,
                {
                    'ffe-context-message--compact': compact,
                    'ffe-context-message--coloredbg': onColoredBg,
                },
                className,
            )}
            style={{
                ...style,
                transition: `height ${animationLengthMs / 1000}s`,
            }}
            {...rest}
        >
            <div className="ffe-context-message-content">
                {icon && (
                    <div className="ffe-context-message-content__icon">
                        {cloneElement(icon, {
                            className: classNames(
                                'ffe-context-message-content__icon-svg',
                                icon.props.className,
                            ),
                            title: icon.props.title,
                            role: 'img',
                        })}
                    </div>
                )}
                <div>
                    {headerText &&
                        React.createElement(
                            headerElement,
                            {
                                id: _headerElementId.current,
                                className:
                                    'ffe-context-message-content__header',
                            },
                            headerText,
                        )}
                    <div
                        className="ffe-body-text"
                        id={_contentElementId.current}
                    >
                        {children}
                    </div>
                </div>
            </div>
            {showCloseButton && (
                <button
                    aria-label={`${
                        texts[locale].FFE_CONTEXT_MESSAGE_CLOSE
                    } ${headerText || ''}`}
                    className="ffe-context-message-content__close-button"
                    onClick={handleClose}
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
};

export default ContextMessage;

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
    headerText: string,
    /** ID for the header container */
    headerElementId: string,
    /* HTML element for the header */
    headerElement: string,
    icon: element.isRequired,
    /** Decides the language of the aria-label for the close icon */
    locale: oneOf(acceptedLocales),
    /** Provided by the wrapper component */
    messageType: oneOf(['info', 'tips', 'success', 'error']),
    /** Callback for when the context message has been closed (after the animation) */
    onClose: func,
    showCloseButton: bool,
    /** Styles applied to the outermost element. `height` will be overridden */
    style: object,
    /* Adds alternative styling for better contrast on certain backgrounds */
    onColoredBg: bool,
};

ContextMessage.defaultProps = {
    animationLengthMs: 300,
    compact: false,
    headerElement: 'h2',
    locale: 'nb',
    onClose: () => {},
    showCloseButton: false,
    style: {},
};
