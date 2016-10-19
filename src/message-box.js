import React, { PropTypes } from 'react';

function MessageBox(props) {
    const {
        type,
        title,
        icon,
        content,
        style,
        children,
    } = props;

    return (
        <div className="ffe-message-box" style={ style }>
            <span
                className={`
                    ffe-message-box__icon
                    ffe-message-box__icon--${type}
                `}
            >
                { icon }
            </span>
            <div
                className={`
                    ffe-message-box__box
                    ffe-message-box__box--${type}
                    `}
            >
                { title &&
                    <div className={`ffe-h4 ffe-message-box__title--${type}`}>
                        { title }
                    </div>
                }
                { content &&
                    <p className="ffe-body-text">
                        { content }
                    </p>
                }
                { !content && children }
            </div>
        </div>
    );
}

MessageBox.propTypes = {
    children: PropTypes.any,
    content: PropTypes.node,
    icon: PropTypes.node.isRequired,
    title: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.oneOf([
        'success',
        'error',
        'tips',
        'info',
    ]),
};

export default MessageBox;
