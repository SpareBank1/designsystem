import React from 'react';
import classNames from 'classnames';

interface Props {
    isExpanded: boolean;
    children: React.ReactNode;
}

export const ListBox = React.forwardRef<HTMLDivElement, Props>(
    ({ children, isExpanded }, ref) => {
        return (
            <div className="ffe-searchable-dropdown__list-container">
                <div
                    tabIndex={-1}
                    className={classNames('ffe-searchable-dropdown__list', {
                        'ffe-searchable-dropdown__list--open': isExpanded,
                    })}
                >
                    <div ref={ref} role="listbox">
                        {children}
                    </div>
                </div>
            </div>
        );
    },
);
