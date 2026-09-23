import React from 'react';
import classNames from 'classnames';

interface Props {
    isExpanded: boolean;
    children: React.ReactNode;
    /** Peker på av inputens `aria-controls`. */
    id: string;
    /** Samme label som inputen: en listboks må ha et tilgjengelig navn. */
    labelledById?: string;
}

export const ListBox = React.forwardRef<HTMLDivElement, Props>(
    ({ children, isExpanded, id, labelledById }, ref) => {
        return (
            <div className="ffe-searchable-dropdown__list-container">
                <div
                    tabIndex={-1}
                    className={classNames('ffe-searchable-dropdown__list', {
                        'ffe-searchable-dropdown__list--open': isExpanded,
                    })}
                >
                    <div
                        ref={ref}
                        role="listbox"
                        id={id}
                        aria-labelledby={labelledById}
                    >
                        {children}
                    </div>
                </div>
            </div>
        );
    },
);
