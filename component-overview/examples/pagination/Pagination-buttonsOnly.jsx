import { Pagination, usePagination } from '@sb1/ffe-pagination-react';

() => {
    const paginationControls = usePagination(134, 10);

    return (
        <Pagination
            ariaLabel="Paginering"
            paginationControls={paginationControls}
            showRowsPerPageText={false}
        />
    );
};
