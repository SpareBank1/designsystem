import { useEffect, useState } from 'react';
import type { PaginationControls } from './types';

export function usePagination(
    totalElements: number,
    defaultPageSize = 100,
): PaginationControls {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageSize, setCurrentPageSize] = useState(defaultPageSize);
    const hasNextPage = totalElements > currentPage * currentPageSize;
    const hasPreviousPage = currentPage > 1;
    const pageStart = (currentPage - 1) * currentPageSize;
    const pageEnd = hasNextPage ? currentPage * currentPageSize : totalElements;
    const numberOfPages = Math.ceil(totalElements / currentPageSize);

    useEffect(() => {
        setCurrentPage(1);
    }, [totalElements]);

    const setPageSize = (pageSize: number) => {
        setCurrentPageSize(pageSize);
        setCurrentPage(1);
    };

    return {
        currentPage,
        pageStart,
        pageEnd,
        currentPageSize,
        hasNextPage,
        hasPreviousPage,
        setCurrentPage,
        setPageSize,
        totalElements,
        numberOfPages,
    };
}
