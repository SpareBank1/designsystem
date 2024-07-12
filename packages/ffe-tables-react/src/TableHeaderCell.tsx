import React, { useContext, useRef } from 'react';
import classNames from 'classnames';
import { Icon } from '@sb1/ffe-icons-react';
import { TableContext } from './TableContext';
import { CellContent } from './CellContent';

export interface TableHeaderCellProps
    extends React.ComponentPropsWithoutRef<'th'> {
    sortKey?: string;
}

// name Keyboard Arrow Up (weight 400)
const arrowUpIcon =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtNTI4IDMyNC0zNzJxLTExIDExLTI4IDExdC0yOC0xMXEtMTEtMTEtMTEtMjh0MTEtMjhsMTg0LTE4NHExMi0xMiAyOC0xMnQyOCAxMmwxODQgMTg0cTExIDExIDExIDI4dC0xMSAyOHEtMTEgMTEtMjggMTF0LTI4LTExTDQ4MC01MjhaIi8+PC9zdmc+';

// name id Unfold More (weight 400)
const unfoldIcon =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Im00ODAtMjM2IDkzLTkzcTEyLTEyIDI5LTEydDI5IDEycTEyIDEyIDEyIDI5dC0xMiAyOUw1MDgtMTQ4cS02IDYtMTMgOC41dC0xNSAyLjVxLTggMC0xNS0yLjV0LTEzLTguNUwzMjktMjcxcS0xMi0xMi0xMi0yOXQxMi0yOXExMi0xMiAyOS0xMnQyOSAxMmw5MyA5M1ptMC00ODQtOTMgOTNxLTEyIDEyLTI5IDEydC0yOS0xMnEtMTItMTItMTItMjl0MTItMjlsMTIzLTEyM3E2LTYgMTMtOC41dDE1LTIuNXE4IDAgMTUgMi41dDEzIDguNWwxMjMgMTIzcTEyIDEyIDEyIDI5dC0xMiAyOXEtMTIgMTItMjkgMTJ0LTI5LTEybC05My05M1oiLz48L3N2Zz4=';

export const TableHeaderCell = React.forwardRef<
    HTMLTableCellElement,
    TableHeaderCellProps
>(({ className, sortKey, children, onClick, ...rest }, ref) => {
    const { updateSort, getSort } = useContext(TableContext);
    const sortButtonRef = useRef<HTMLButtonElement>(null);

    const ariaSort = sortKey ? getSort(sortKey) : undefined;

    return (
        <th
            className={classNames(
                'ffe-table__th',
                { 'ffe-table__th--sortable': sortKey },
                {
                    'ffe-table__th--sortable-ascending':
                        ariaSort === 'ascending',
                },
                {
                    'ffe-table__th--sortable-descending':
                        ariaSort === 'descending',
                },
                className,
            )}
            aria-sort={ariaSort}
            onClick={e => {
                if (!sortButtonRef.current?.contains(e.target as Node)) {
                    sortButtonRef.current?.click();
                }
                onClick?.(e);
            }}
            ref={ref}
            {...rest}
        >
            {sortKey ? (
                <CellContent>
                    <button
                        className="ffe-table__sort-button"
                        type="button"
                        onClick={() => updateSort(sortKey)}
                        ref={sortButtonRef}
                    >
                        <span>{children}</span>
                        <Icon
                            fileUrl={
                                ariaSort === 'none' ? unfoldIcon : arrowUpIcon
                            }
                            size="md"
                        />
                    </button>
                </CellContent>
            ) : (
                <CellContent>{children}</CellContent>
            )}
        </th>
    );
});
