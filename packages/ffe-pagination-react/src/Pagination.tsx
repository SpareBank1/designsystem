import React, { useRef } from 'react';
import { flushSync } from 'react-dom';
import classnames from 'classnames';
import { Locale } from './types';
import type { PaginationControls } from './types';
import { DOTS, usePaginationRange } from './usePaginationRange';
import { Info } from './Info';
import { PerPageDropdown } from './PerPageDropdown';
import { NavigationBlock } from './NavigationBlock';
import { Dots } from './Dots';
import { PageButton } from './PageButton';

export interface PaginationProps {
    className?: string;
    locale?: Locale;
    showRowsPerPageText?: boolean;
    paginationControls: PaginationControls;
    rowsPerPageOptions?: number[];
    navigationButtonText?: boolean;
    ariaLabel: string;
    onClickPrev?: () => void;
    onClickNext?: () => void;
    onClickPage?: (page: number) => void;
}

export const Pagination = ({
    className,
    locale = 'nb',
    showRowsPerPageText = true,
    paginationControls,
    rowsPerPageOptions,
    navigationButtonText = true,
    ariaLabel,
    onClickPrev,
    onClickNext,
    onClickPage,
}: PaginationProps) => {
    const firstPageButton = useRef<HTMLButtonElement>(null);
    const lastPageButton = useRef<HTMLButtonElement>(null);

    const pageNumberList = usePaginationRange(
        paginationControls.totalElements,
        paginationControls.currentPageSize,
        paginationControls.currentPage,
    );

    return (
        <div
            role="group"
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
            {pageNumberList && pageNumberList.length > 1 && (
                <nav className="ffe-pagination__buttons">
                    <NavigationBlock
                        className="ffe-pagination__buttons-nav"
                        locale={locale}
                        onClick={() => {
                            onClickPrev?.();
                            const prevPage = Math.max(
                                paginationControls.currentPage - 1,
                                1,
                            );
                            flushSync(() => {
                                paginationControls.setCurrentPage(prevPage);
                                const isGoingToFirstPage = prevPage === 1;
                                if (isGoingToFirstPage) {
                                    firstPageButton.current?.focus({
                                        preventScroll: true,
                                    });
                                }
                            });
                        }}
                        isHidden={!paginationControls.hasPreviousPage}
                        buttonText={navigationButtonText}
                        direction="prev"
                    />
                    <ol className="ffe-pagination__page-buttons">
                        {pageNumberList.map((pageNumber, index) => {
                            return (
                                <li key={index}>
                                    {pageNumber === DOTS ? (
                                        <Dots />
                                    ) : (
                                        <PageButton
                                            ref={
                                                index === 0
                                                    ? firstPageButton
                                                    : index ===
                                                        pageNumberList.length -
                                                            1
                                                      ? lastPageButton
                                                      : null
                                            }
                                            key={index}
                                            locale={locale}
                                            onClick={() => {
                                                onClickPage?.(pageNumber);
                                                paginationControls.setCurrentPage(
                                                    pageNumber,
                                                );
                                            }}
                                            isActive={
                                                paginationControls.currentPage ===
                                                pageNumber
                                            }
                                        >
                                            {pageNumber}
                                        </PageButton>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                    <NavigationBlock
                        className="ffe-pagination__buttons-nav"
                        locale={locale}
                        onClick={() => {
                            onClickNext?.();
                            const nextPage = Math.min(
                                paginationControls.currentPage + 1,
                                paginationControls.numberOfPages,
                            );
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
                        isHidden={!paginationControls.hasNextPage}
                        buttonText={navigationButtonText}
                        direction="next"
                    />
                </nav>
            )}
        </div>
    );
};
