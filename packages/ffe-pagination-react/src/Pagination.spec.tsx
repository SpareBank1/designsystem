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
        numberOfPages: 10,
    };

    it('should render with classes', () => {
        render(
            <Pagination
                ariaLabel="Pagination"
                paginationControls={paginationControls}
            />,
        );
        const pagination = screen.getByRole('navigation', {
            name: 'Pagination',
        });

        expect(pagination).toHaveClass('ffe-pagination');
    });

    it('should render pagination controls', () => {
        render(
            <Pagination
                ariaLabel="Pagination"
                paginationControls={paginationControls}
            />,
        );

        const nextButton = screen.getByRole('button', { name: 'Neste side' });
        const prevButton = screen.getByRole('button', { name: 'Forrige side' });

        expect(nextButton.classList).not.toContain(
            'ffe-pagination__controls-navigation--hidden',
        );

        expect(prevButton.classList).toContain(
            'ffe-pagination__controls-navigation--hidden',
        );
    });

    it('should render rows per page dropdown', () => {
        render(
            <Pagination
                ariaLabel="Pagination"
                paginationControls={paginationControls}
                rowsPerPageOptions={[10, 20]}
            />,
        );
        expect(
            screen.getByRole('combobox', { name: 'Vis rader per side' }),
        ).toBeInTheDocument();
    });

    it('should call setCurrentPage when next button is clicked', () => {
        render(
            <Pagination
                ariaLabel="Pagination"
                paginationControls={paginationControls}
            />,
        );
        fireEvent.click(screen.getByRole('button', { name: 'Neste side' }));
        expect(paginationControls.setCurrentPage).toHaveBeenCalledWith(2);
    });
});
