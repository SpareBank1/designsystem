import React from 'react';
import SortableTable from './SortableTable';
import { render, screen } from '@testing-library/react';

describe('<SortableTable>', () => {
    const columns = [
        { header: 'Name', key: 'name' },
        { header: 'Age', key: 'age' },
        { header: 'Employee-id', key: 'id' },
        { header: '', key: 'button' },
    ];

    const data = [
        {
            name: 'Zombie Mountain',
            age: 36,
            id: 2,
            button: <button>poke</button>,
        },
        {
            name: 'Daenerys Targaryen',
            age: 16,
            id: 4,
            button: <button>poke</button>,
        },
        { name: 'Ned Stark', age: 48, id: 3, button: <button>poke</button> },
        { name: 'Jon Snow', age: 20, id: 1, button: <button>poke</button> },
    ];

    it('should show right amount of th tags', () => {
        render(<SortableTable columns={columns} data={data} />);
        expect(screen.getAllByRole('columnheader')).toHaveLength(
            columns.length,
        );
    });

    it('should render a row for each data array entry', () => {
        const { container } = render(
            <SortableTable columns={columns} data={data} />,
        );
        expect(container.querySelectorAll('tbody tr')).toHaveLength(
            data.length,
        );
    });

    it('should set data-th property on each cell rendered', () => {
        const { container } = render(
            <SortableTable columns={columns} data={data} />,
        );
        expect(container.querySelectorAll('[data-th]')).toHaveLength(
            data.length * columns.length,
        );
    });

    it('should add `aria-sort` property', () => {
        const { container } = render(
            <SortableTable columns={columns} data={data} />,
        );
        expect(container.querySelectorAll('[aria-sort]')).toHaveLength(
            columns.length,
        );
    });

    it('should not show sorting arrow if header is blank string', () => {
        const { container } = render(
            <SortableTable columns={columns} data={data} />,
        );
        expect(
            container.querySelectorAll('.ffe-sortable-table__sort-arrow')
                .length,
        ).toBe(columns.length - 1);
    });

    it('should show buttons in table when passing in buttons in data', () => {
        const { container } = render(
            <SortableTable columns={columns} data={data} />,
        );
        expect(container.querySelectorAll('button').length).toBe(data.length);
    });

    describe('condensed', () => {
        it('should by default not be condensed', () => {
            const { container } = render(
                <SortableTable columns={columns} data={data} />,
            );
            expect(
                container.querySelectorAll('.ffe-table--condensed'),
            ).toHaveLength(0);
        });

        it('can be condensed', () => {
            const { container } = render(
                <SortableTable
                    condensed={true}
                    columns={columns}
                    data={data}
                />,
            );
            expect(
                container.querySelectorAll('.ffe-table--condensed'),
            ).toHaveLength(1);
        });
    });
});
