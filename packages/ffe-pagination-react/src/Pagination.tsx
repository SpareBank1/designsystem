import React, { useRef } from 'react';
import { flushSync } from 'react-dom';
import classnames from 'classnames';
import { SecondaryButton } from '@sb1/ffe-buttons-react';
import { Icon } from '@sb1/ffe-icons-react';
import { txt } from './texts';
import { Locale } from './types';
import type { PaginationControls } from './types';
import { DOTS, usePaginationRange } from './usePaginationRange';
import { Info } from './Info';
import { PerPageDropdown } from './PerPageDropdown';

export interface PaginationProps {
    className?: string;
    locale?: Locale;
    showRowsPerPageText?: boolean;
    paginationControls: PaginationControls;
    rowsPerPageOptions?: number[];
    navigationButtonText?: boolean;
    ariaLabel: string;
}

const chevronLeftIcon =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Im00MTguMTUzLTQ4MCAxNjIuOTIzIDE2Mi45MjRxOC4zMDggOC4zMDcgOC41IDIwLjg4NC4xOTMgMTIuNTc2LTguNSAyMS4yNjgtOC42OTIgOC42OTMtMjEuMDc2IDguNjkzdC0yMS4wNzYtOC42OTNMMzU5LjE1NS00NTQuNjkzcS01LjYxNi01LjYxNS03LjkyMy0xMS44NDYtMi4zMDgtNi4yMy0yLjMwOC0xMy40NjF0Mi4zMDgtMTMuNDYxcTIuMzA3LTYuMjMxIDcuOTIzLTExLjg0NmwxNzkuNzY5LTE3OS43NjlxOC4zMDctOC4zMDggMjAuODg0LTguNSAxMi41NzYtLjE5MyAyMS4yNjggOC41IDguNjkzIDguNjkyIDguNjkzIDIxLjA3NnQtOC42OTMgMjEuMDc2TDQxOC4xNTMtNDgwWiIvPjwvc3ZnPg==';

const dotsIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
    >
        <path d="M249.231-420.001q-24.749 0-42.374-17.625-17.624-17.625-17.624-42.374 0-24.749 17.624-42.374 17.625-17.625 42.374-17.625 24.75 0 42.374 17.625Q309.23-504.749 309.23-480q0 24.749-17.625 42.374-17.624 17.625-42.374 17.625Zm230.769 0q-24.749 0-42.374-17.625-17.625-17.625-17.625-42.374 0-24.749 17.625-42.374 17.625-17.625 42.374-17.625 24.749 0 42.374 17.625 17.625 17.625 17.625 42.374 0 24.749-17.625 42.374-17.625 17.625-42.374 17.625Zm230.769 0q-24.75 0-42.374-17.625Q650.77-455.251 650.77-480q0-24.749 17.625-42.374 17.624-17.625 42.374-17.625 24.749 0 42.374 17.625 17.624 17.625 17.624 42.374 0 24.749-17.624 42.374-17.625 17.625-42.374 17.625Z" />
    </svg>
);

export const Pagination = ({
    className,
    locale = 'nb',
    showRowsPerPageText = true,
    paginationControls,
    rowsPerPageOptions,
    navigationButtonText = true,
    ariaLabel,
}: PaginationProps) => {
    const firstPageButton = useRef<HTMLButtonElement>(null);
    const lastPageButton = useRef<HTMLButtonElement>(null);

    const pageNumberList = usePaginationRange(
        paginationControls.totalElements,
        paginationControls.currentPageSize,
        paginationControls.currentPage,
    );

    return (
        <nav
            aria-label={ariaLabel}
            className={classnames('ffe-pagination', className)}
        >
            <div className="ffe-pagination__rows">
                {showRowsPerPageText && (
                    <Info
                        className="ffe-pagination__rows-item"
                        locale={locale}
                        start={paginationControls.pageStart + 1}
                        end={paginationControls.pageEnd}
                        total={paginationControls.totalElements}
                    />
                )}
                {!!rowsPerPageOptions?.length && (
                    <PerPageDropdown
                        className="ffe-pagination__rows-item"
                        locale={locale}
                        rowsPerPageOptions={rowsPerPageOptions}
                        setPageSize={paginationControls.setPageSize}
                        defaultValue={paginationControls.currentPageSize}
                    />
                )}
            </div>
            <div className="ffe-pagination__controls">
                <div className="ffe-pagination__controls-prev">
                    <SecondaryButton
                        type="button"
                        className={classnames(
                            'ffe-pagination__controls-navigation',
                            {
                                'ffe-pagination__controls-navigation--hidden':
                                    !paginationControls.hasPreviousPage,
                                'ffe-pagination__controls-navigation--icon-only':
                                    !navigationButtonText,
                            },
                        )}
                        leftIcon={<Icon fileUrl={chevronLeftIcon} size="md" />}
                        onClick={() => {
                            const nextPage = paginationControls.currentPage - 1;
                            flushSync(() => {
                                paginationControls.setCurrentPage(nextPage);
                                const isGoingToFirstPage = nextPage === 1;
                                if (isGoingToFirstPage) {
                                    firstPageButton.current?.focus({
                                        preventScroll: true,
                                    });
                                }
                            });
                        }}
                    >
                        <span
                            className={classnames(
                                'ffe-pagination__controls-navigation-text',
                            )}
                        >
                            {txt[locale].previous}
                        </span>
                        <span className="ffe-screenreader-only">
                            {txt[locale].page}
                        </span>
                    </SecondaryButton>
                </div>
                {pageNumberList && pageNumberList.length > 1 && (
                    <div className="ffe-pagination__controls-pages">
                        {pageNumberList.map((pageNumber, index) => {
                            return pageNumber === DOTS ? (
                                <div
                                    key={index}
                                    className="ffe-pagination__controls-dots"
                                >
                                    {dotsIcon}
                                </div>
                            ) : (
                                <SecondaryButton
                                    ref={
                                        index === 0
                                            ? firstPageButton
                                            : index ===
                                                pageNumberList.length - 1
                                              ? lastPageButton
                                              : null
                                    }
                                    key={index}
                                    type="button"
                                    aria-label={
                                        paginationControls.currentPage ===
                                        pageNumber
                                            ? txt[locale].currentPage(
                                                  pageNumber.toString(),
                                              )
                                            : txt[locale].goToPage(
                                                  pageNumber.toString(),
                                              )
                                    }
                                    aria-current={
                                        paginationControls.currentPage ===
                                        pageNumber
                                    }
                                    className={classnames(
                                        'ffe-pagination__controls-page-button',
                                        {
                                            'ffe-pagination__controls-page-button--active':
                                                paginationControls.currentPage ===
                                                pageNumber,
                                        },
                                    )}
                                    onClick={() => {
                                        paginationControls.setCurrentPage(
                                            pageNumber,
                                        );
                                    }}
                                >
                                    {pageNumber}
                                </SecondaryButton>
                            );
                        })}
                    </div>
                )}
                <div className="ffe-pagination__controls-next">
                    <SecondaryButton
                        className={classnames(
                            'ffe-pagination__controls-navigation',
                            {
                                'ffe-pagination__controls-navigation--hidden':
                                    !paginationControls.hasNextPage,
                                'ffe-pagination__controls-navigation--icon-only':
                                    !navigationButtonText,
                            },
                        )}
                        type="button"
                        rightIcon={<Icon fileUrl={chevronLeftIcon} size="md" />}
                        onClick={() => {
                            const nextPage = paginationControls.currentPage + 1;

                            flushSync(() => {
                                paginationControls.setCurrentPage(nextPage);
                                const isGoingToLastPage =
                                    paginationControls.numberOfPages ===
                                    nextPage;
                                if (isGoingToLastPage) {
                                    lastPageButton.current?.focus({
                                        preventScroll: true,
                                    });
                                }
                            });
                        }}
                    >
                        <span
                            className={classnames(
                                'ffe-pagination__controls-navigation-text',
                            )}
                        >
                            {txt[locale].next}
                        </span>
                        <span className="ffe-screenreader-only">
                            {txt[locale].page}
                        </span>
                    </SecondaryButton>
                </div>
            </div>
        </nav>
    );
};
