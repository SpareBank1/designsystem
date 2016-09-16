import React from 'react';

function MessageBox(props) {
    const {
        type,
        title,
        icon,
        content,
        children
    } = props;

    return (
        <div className="ffe-message-box">
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

export default MessageBox;
