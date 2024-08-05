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
        const pagination = screen.getByRole('group', {
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

        expect(
            screen.getByRole('button', { name: 'Neste' }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: 'Forrige' }),
        ).toBeInTheDocument();
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
        fireEvent.click(screen.getByRole('button', { name: 'Neste' }));
        expect(paginationControls.setCurrentPage).toHaveBeenCalledWith(2);
    });

    it('should call onClicks', () => {
        const onClickPrev = jest.fn();
        const onClickNext = jest.fn();
        const onClickPage = jest.fn();

        render(
            <Pagination
                onClickPrev={onClickPrev}
                onClickNext={onClickNext}
                onClickPage={onClickPage}
                ariaLabel="Pagination"
                paginationControls={paginationControls}
            />,
        );
        fireEvent.click(screen.getByRole('button', { name: 'Neste' }));
        expect(onClickNext).toHaveBeenCalledTimes(1);

        fireEvent.click(screen.getByRole('button', { name: 'Forrige' }));
        expect(onClickPrev).toHaveBeenCalledTimes(1);

        fireEvent.click(screen.getByRole('button', { name: 'Gå til side 2' }));
        expect(onClickPage).toHaveBeenCalledTimes(1);
        expect(onClickPage).toHaveBeenCalledWith(2);
    });
});
