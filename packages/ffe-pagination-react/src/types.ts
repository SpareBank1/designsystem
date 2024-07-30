export type Locale = 'nb' | 'nn' | 'en';

export type PaginationControls = {
    /**
     * The index of the first element on the current page
     */
    pageStart: number;
    /**
     * The index of the current page. Numbered from 1
     */
    currentPage: number;
    /**
     * The index of the last element on the current page
     */
    pageEnd: number;
    /**
     * The size of the page
     */
    currentPageSize: number;
    /**
     * Whether there is a next page
     */
    hasNextPage: boolean;
    /**
     * Whether there is a previous page
     */
    hasPreviousPage: boolean;
    /**
     * Function to set the page size
     */
    setPageSize: (pageSize: number) => void;
    /**
     * Function to set the current page
     */
    setCurrentPage: (page: number) => void;
    /**
     * The total number of elements
     */
    totalElements: number;
};
