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
}

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
                <NavigationBlock
                    locale={locale}
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
                    isHidden={!paginationControls.hasPreviousPage}
                    buttonText={navigationButtonText}
                    direction="prev"
                />
                {pageNumberList && pageNumberList.length > 1 && (
                    <div className="ffe-pagination-navigation-block ffe-pagination-navigation-block--pages">
                        {pageNumberList.map((pageNumber, index) => {
                            return pageNumber === DOTS ? (
                                <Dots key={index} />
                            ) : (
                                <PageButton
                                    ref={
                                        index === 0
                                            ? firstPageButton
                                            : index ===
                                                pageNumberList.length - 1
                                              ? lastPageButton
                                              : null
                                    }
                                    key={index}
                                    locale={locale}
                                    onClick={() => {
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
                            );
                        })}
                    </div>
                )}
                <NavigationBlock
                    locale={locale}
                    onClick={() => {
                        const nextPage = paginationControls.currentPage + 1;
                        flushSync(() => {
                            paginationControls.setCurrentPage(nextPage);
                            const isGoingToLastPage =
                                paginationControls.numberOfPages === nextPage;
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
            </div>
        </nav>
    );
};
