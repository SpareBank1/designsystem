import { Pagination, usePagination } from '@sb1/ffe-pagination-react';

() => {
    const paginationControls = usePagination(134, 10);

    return (
        <Pagination
            ariaLabel="Paginering"
            paginationControls={paginationControls}
            rowsPerPageOptions={[10, 20, 50, 100]}
        />
    );
};
