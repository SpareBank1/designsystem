import React, { useContext, useRef } from 'react';
import classNames from 'classnames';
import { Icon } from '@sb1/ffe-icons-react';
import { TableContext } from './TableContext';

export interface TableHeaderCellProps
    extends React.ComponentPropsWithoutRef<'th'> {
    sortKey?: string;
}

const arrowUpIcon =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik00ODAtNTM4Ljg0NyAzMDkuMDc2LTM2Ny45MjRxLTguMzA3IDguMzA4LTE4LjM4NCA4LjUtMTAuMDc2LjE5My0xOC43NjgtOC41LTguNjkzLTguNjkyLTguNjkzLTE4LjU3NnQ4LjY5My0xOC41NzZsMTg1Ljc2OS0xODUuNzY5cTkuODQ2LTkuODQ2IDIyLjMwNy05Ljg0NiAxMi40NjEgMCAyMi4zMDcgOS44NDZsMTg1Ljc2OSAxODUuNzY5cTguMzA4IDguMzA3IDguNSAxNy44ODQuMTkzIDkuNTc2LTguNSAxOC4yNjgtOC42OTIgOC42OTMtMTguNTc2IDguNjkzdC0xOC41NzYtOC42OTNMNDgwLTUzOC44NDdaIi8+PC9zdmc+';

const unfoldIcon =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Im00ODAtMjMxLjM4NCA5NC43NjEtOTQuNzYxcTguMDA5LTguMDA4IDE4LjA4NS04LjIwMSAxMC4wNzctLjE5MiAxOC4zODQgOC4xMTYgOC4zMDggOC4zMDcgOC4zMDggMTguMTkxIDAgOS44ODUtOC4yMDMgMTguMTI0TDUwMi43MzEtMTgwLjk0NHEtNS4wNjMgNS4wODEtMTAuNjUgNy4xNjYtNS41ODYgMi4wODUtMTIuMDgxIDIuMDg1LTYuNDk1IDAtMTIuMDgxLTIuMDg1LTUuNTg3LTIuMDg1LTEwLjY1LTcuMTY2TDM0OC42NjUtMjg5LjkxNXEtNy44MTgtNy44NTUtNy41MTEtMTcuOTMxLjMwOC0xMC4wNzcgOC42MTYtMTguMzg0IDguMzA3LTguMzA4IDE4LjE5MS04LjMwOCA5Ljg4NSAwIDE4LjE2NCA4LjM5M0w0ODAtMjMxLjM4NFptMC00OTguNzcxLTk0Ljc2MSA5NC43NjFxLTguMDA5IDguMDA5LTE4LjA4NSA4LjIwMS0xMC4wNzcuMTkyLTE4LjM4NC04LjExNS04LjMwOC04LjMwOC04LjMwOC0xOC4xOTJ0OC4yMDMtMTguMTIzbDEwOC42MDQtMTA4Ljk3MXE1LjA2My01LjA4MSAxMC42NS03LjE2NiA1LjU4Ni0yLjA4NSAxMi4wODEtMi4wODUgNi40OTUgMCAxMi4wODEgMi4wODUgNS41ODcgMi4wODUgMTAuNjUgNy4xNjZsMTA4LjYwNCAxMDguOTcxcTcuODE4IDcuODU0IDguMDExIDE3LjQzMS4xOTIgOS41NzYtOC4xMTYgMTcuODg0LTguMzA3IDguMzA3LTE4LjE5MSA4LjMwNy05Ljg4NSAwLTE4LjI3OC04LjI3OUw0ODAtNzMwLjE1NVoiLz48L3N2Zz4=';

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
                    'ffe-table__th--sortable-active':
                        ariaSort === 'ascending' || ariaSort === 'descending',
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
            <div className="ffe-table__th-container">
                {sortKey ? (
                    <button
                        type="button"
                        onClick={() => updateSort(sortKey)}
                        ref={sortButtonRef}
                    >
                        {children}
                        <Icon
                            fileUrl={
                                ariaSort === 'none' ? unfoldIcon : arrowUpIcon
                            }
                            size="md"
                        />
                    </button>
                ) : (
                    children
                )}
            </div>
        </th>
    );
});
