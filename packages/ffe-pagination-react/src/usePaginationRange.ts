import { useMemo } from 'react';
import { breakpointSm } from '@sb1/ffe-core';
import { useResize } from './useResize';

// See https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
export const DOTS = '...' as const;
const BREAKPOINT_SM = parseInt(breakpointSm, 10);

const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
};

export function usePaginationRange(
    totalCount: number,
    pageSize: number,
    currentPage: number,
    siblingCount = 1,
) {
    const [innerWidth] = useResize();

    return useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);

        const totalPageNumbers = siblingCount + 5;

        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        if (innerWidth > BREAKPOINT_SM) {
            const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
            const rightSiblingIndex = Math.min(
                currentPage + siblingCount,
                totalPageCount,
            );

            const shouldShowLeftDots = leftSiblingIndex > 2;
            const shouldShowRightDots = rightSiblingIndex < totalPageCount - 1;

            if (!shouldShowLeftDots && shouldShowRightDots) {
                let leftItemCount;
                if (innerWidth <= BREAKPOINT_SM) {
                    leftItemCount = 1 + siblingCount;
                } else {
                    leftItemCount = 2 + 2 * siblingCount;
                }
                const leftRange = range(1, leftItemCount);

                return [...leftRange, DOTS, totalPageCount];
            }

            if (shouldShowLeftDots && !shouldShowRightDots) {
                let rightItemCount;
                if (innerWidth <= BREAKPOINT_SM) {
                    rightItemCount = 1 + siblingCount;
                } else {
                    rightItemCount = 2 + 2 * siblingCount;
                }

                const rightRange = range(
                    totalPageCount - rightItemCount + 1,
                    totalPageCount,
                );
                return [firstPageIndex, DOTS, ...rightRange];
            }

            if (shouldShowLeftDots && shouldShowRightDots) {
                if (innerWidth <= BREAKPOINT_SM) {
                    return [
                        firstPageIndex,
                        DOTS,
                        currentPage,
                        DOTS,
                        lastPageIndex,
                    ];
                }
                const middleRange = range(leftSiblingIndex, rightSiblingIndex);
                return [
                    firstPageIndex,
                    DOTS,
                    ...middleRange,
                    DOTS,
                    lastPageIndex,
                ];
            }
        } else {
            const leftIndexMax = Math.min(totalPageCount - 2, currentPage - 1);
            const leftIndex = Math.max(leftIndexMax, 1);
            const rightIndexMin = Math.max(3, currentPage + 1);
            const rightIndex = Math.min(rightIndexMin, totalPageCount);
            return range(leftIndex, rightIndex);
        }
    }, [totalCount, pageSize, siblingCount, currentPage, innerWidth]);
}
