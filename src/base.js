import React, {Component, PropTypes, cloneElement} from 'react';
import {findDOMNode} from 'react-dom';
import CloseIcon from 'ffe-icons-react/kryss-ikon';

export default class Base extends Component {

    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }

    close() {
        const {closeDurationMs, onCloseStart, onCloseEnd} = this.props;
        const element = findDOMNode(this.refs.self);
        element.style.height = `${element.offsetHeight}px`;
        onCloseStart();
        setTimeout(() => {
            element.style.height = 0;
            onCloseEnd();
        }, closeDurationMs);
    }

    render() {
        const {
            children,
            icon,
            messageType,
            style,
            header
        } = this.props;

        return (
            <div
                className={`ffe-context-message-wrapper ffe-context-message-wrapper--${messageType}`}
                ref='self'
                style={style}
            >
                <div className='ffe-context-message'>
                    <div className='ffe-context-message__icon-wrapper'>
                        <div className='ffe-context-message__icon'>
                            {cloneElement(icon, {className: 'ffe-context-message__icon-svg'})}
                        </div>
                    </div>
                    <div className='ffe-context-message__content'>
                        {header && <header className='ffe-h5'>{header}</header>}
                        {children}
                    </div>
                    <div
                        className='ffe-context-message__close'
                        role='button'
                        aria-label='Lukk'
                        tabIndex='0'
                        onClick={this.close}
                    >
                        <CloseIcon className='ffe-context-message__close-svg'/>
                    </div>
                </div>
            </div>
        );
    }

}

Base.propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.string,
    messageType: PropTypes.oneOf(['info', 'tip']).isRequired,
    icon: PropTypes.element.isRequired,
    // style: PropTypes.object,
    closeDurationMs: PropTypes.number.isRequired,
    onCloseStart: PropTypes.func.isRequired,
    onCloseEnd: PropTypes.func.isRequired,
};

