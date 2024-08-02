import { Pagination, usePagination } from '@sb1/ffe-pagination-react';

() => {
    const paginationControls = usePagination(134, 10);

    return (
        <Pagination
            paginationControls={paginationControls}
            showRowsPerPageText={false}
        />
    );
};
