import React from 'react';

export default function MessageBox({ type, title, icon, content, children }) {
  
  return (
   <div className="ffe-message-box">
        <span className={`ffe-message-box__icon ffe-message-box__icon--${type}`}>
            { icon }
        </span>
        <div className={`ffe-message-box__box ffe-message-box__box--${type}`}>
            { title ? <div className={`ffe-h4 ffe-message-box__title--${type}`}>{ title }</div> : null }
            <p className="ffe-body-text">
                 { content || children }
            </p>
        </div>
    </div>
    );
}
