import React, { useRef, useState } from 'react';
import classNames from 'classnames';

interface MessageCollapseProps {
    children: React.ReactElement;
    isClosed: boolean;
}

export const MessageCollapse: React.FC<MessageCollapseProps> = ({
    children,
    isClosed,
}) => {
    const [isHidden, setIsHidden] = useState(false);
    const container = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={container}
            hidden={isHidden}
            className={classNames('ffe-message-collapse', {
                'ffe-message-collapse--closed': isClosed,
            })}
            onTransitionEnd={e => {
                if (e.target === container.current) {
                    setIsHidden(true);
                }
            }}
        >
            <div className="ffe-message-collapse__inner">{children}</div>
        </div>
    );
};
