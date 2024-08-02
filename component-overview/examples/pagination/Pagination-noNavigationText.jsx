import { Pagination, usePagination } from '@sb1/ffe-pagination-react';

() => {
    const paginationControls = usePagination(134, 10);

    return (
        <Pagination
            paginationControls={paginationControls}
            navigationButtonText={false}
            rowsPerPageOptions={[10, 20, 50, 100]}
        />
    );
};
