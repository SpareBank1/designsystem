import React from 'react';
import { Pagination } from './Pagination';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<Pagination />', () => {
    const paginationControls = {
        totalElements: 100,
        currentPageSize: 10,
        currentPage: 1,
        pageStart: 0,
        pageEnd: 10,
        hasPreviousPage: false,
        hasNextPage: true,
        setCurrentPage: jest.fn(),
        setPageSize: jest.fn(),
    };

    it('should render with classes', () => {
        const { container } = render(
            <Pagination
                showRowsPerPageDropdown={true}
                paginationControls={paginationControls}
            />,
        );
        expect(container.firstChild).toHaveClass('ffe-pagination');
    });

    it('should render pagination controls', () => {
        render(
            <Pagination
                showRowsPerPageDropdown={true}
                paginationControls={paginationControls}
            />,
        );
        expect(screen.getByText('Neste')).toBeInTheDocument();
        expect(screen.queryByText('Forrige')).not.toBeInTheDocument();
    });

    it('should render rows per page dropdown', () => {
        render(
            <Pagination
                showRowsPerPageDropdown={true}
                paginationControls={paginationControls}
            />,
        );
        expect(screen.getByLabelText('Vis rader')).toBeInTheDocument();
    });

    it('should call setCurrentPage when next button is clicked', () => {
        render(
            <Pagination
                showRowsPerPageDropdown={true}
                paginationControls={paginationControls}
            />,
        );
        fireEvent.click(screen.getByText('Neste'));
        expect(paginationControls.setCurrentPage).toHaveBeenCalledWith(2);
    });
});
