import React, { Component } from 'react';
import { func, string, node, oneOf } from 'prop-types';
import { UnmountClosed as Collapse } from 'react-collapse';
import classNames from 'classnames';
import KryssIkon from '@sb1/ffe-icons-react/lib/kryss-ikon';

class SystemMessage extends Component {
    state = {
        dismissed: false,
    };

    onClose = () => {
        this.setState({ dismissed: true });
        this.props.onClose();
    };

    render() {
        const { children, className, icon, modifier } = this.props;

        return (
            <Collapse isOpened={!this.state.dismissed}>
                <div
                    className={classNames(
                        'ffe-system-message-wrapper',
                        `ffe-system-message-wrapper--${modifier}`,
                        className,
                    )}
                >
                    <div className="ffe-system-message">
                        <span className="ffe-system-message__icon">
                            {icon}
                        </span>
                        <p className="ffe-system-message__content">
                            {children}
                        </p>
                        <button
                            className="ffe-system-message__close"
                            onClick={this.onClose}
                            type="button"
                        >
                            <KryssIkon />
                        </button>
                    </div>
                </div>
            </Collapse>
        );
    }
}

SystemMessage.defaultProps = {
    onClose: f => f,
};

SystemMessage.propTypes = {
    /** The content of the system message */
    children: node.isRequired,
    /** Additional classes added to the surrounding div */
    className: string,
    /** Override the default icon - use with caution! */
    icon: node.isRequired,
    /**
     * The type of system message. Used internally only-
     * @ignore
     **/
    modifier: oneOf(['error', 'info', 'success', 'news']),
    /** Callback for when the system message has been closed (after animation ends) */
    onClose: func,
};

export default SystemMessage;
