import React, { useRef, useState, useId } from 'react';
import classNames from 'classnames';
import { Icon } from '@sb1/ffe-icons-react';
import { Collapse } from '@sb1/ffe-collapse-react';
import { txt } from './texts.js';
import { CellContent } from './CellContent.js';

export interface TableRowExpandableProps
    extends Omit<React.ComponentPropsWithoutRef<'tr'>, 'onClick'> {
    expandContent: React.ReactNode;
    locale?: 'nb' | 'nn' | 'en';
    isDefaultOpen?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const TableRowExpandable = React.forwardRef<
    HTMLTableRowElement,
    TableRowExpandableProps
>(
    (
        {
            className,
            expandContent,
            children,
            locale = 'nb',
            onClick,
            isDefaultOpen,
            ...rest
        },
        ref,
    ) => {
        const [isOpen, setIsOpen] = useState(!!isDefaultOpen);
        const expandoRowId = useId();
        const [isAnimating, setIsAnimating] = useState(false);
        const expandButtonRef = useRef<HTMLButtonElement>(null);
        const expandIdHidden = !isAnimating && !isOpen;

        return (
            <>
                <tr
                    className={classNames(
                        'ffe-table__tr',
                        'ffe-table__tr--expand',
                        {
                            'ffe-table__tr--expand-open': isOpen,
                        },
                        {
                            'ffe-table__tr--animating': isAnimating,
                        },
                        className,
                    )}
                    onClick={e => {
                        if (
                            !expandButtonRef.current?.contains(e.target as Node)
                        ) {
                            expandButtonRef.current?.click();
                        }
                    }}
                    ref={ref}
                    {...rest}
                >
                    {children}
                    <td className="ffe-table__expand-button-td">
                        <CellContent>
                            <button
                                className={classNames(
                                    'ffe-table__expand-button',
                                    {
                                        'ffe-table__expand-button--open':
                                            isOpen,
                                    },
                                )}
                                ref={expandButtonRef}
                                type="button"
                                aria-label={
                                    isOpen
                                        ? txt[locale].showLess
                                        : txt[locale].showMore
                                }
                                aria-controls={expandoRowId}
                                aria-expanded={isOpen}
                                onClick={e => {
                                    setIsOpen(prev => !prev);
                                    setIsAnimating(true);
                                    onClick?.(e);
                                }}
                            >
                                <Icon
                                    fileUrl="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtMzczLjUzOXEtNy4yMzEgMC0xMy40NjEtMi4zMDgtNi4yMzEtMi4zMDgtMTEuODQ2LTcuOTIzTDI3NC45MjQtNTYzLjUzOXEtOC4zMDgtOC4zMDctOC41LTIwLjg4NC0uMTkzLTEyLjU3NyA4LjUtMjEuMjY5IDguNjkyLTguNjkyIDIxLjA3Ni04LjY5MnQyMS4wNzYgOC42OTJMNDgwLTQ0Mi43NjhsMTYyLjkyNC0xNjIuOTI0cTguMzA3LTguMzA3IDIwLjg4NC04LjUgMTIuNTc2LS4xOTIgMjEuMjY4IDguNSA4LjY5MyA4LjY5MiA4LjY5MyAyMS4wNzcgMCAxMi4zODQtOC42OTMgMjEuMDc2TDUwNS4zMDctMzgzLjc3cS01LjYxNSA1LjYxNS0xMS44NDYgNy45MjMtNi4yMyAyLjMwOC0xMy40NjEgMi4zMDhaIi8+PC9zdmc+"
                                    size="md"
                                />
                            </button>
                        </CellContent>
                    </td>
                </tr>
                <tr
                    className="ffe-table__expand-content-tr"
                    aria-hidden={expandIdHidden}
                    id={expandoRowId}
                >
                    <td colSpan={9999}>
                        <Collapse
                            isOpen={isOpen}
                            onRest={() => setIsAnimating(false)}
                        >
                            <CellContent className="ffe-table__expand-content">
                                {!expandIdHidden && expandContent}
                            </CellContent>
                        </Collapse>
                    </td>
                </tr>
            </>
        );
    },
);
