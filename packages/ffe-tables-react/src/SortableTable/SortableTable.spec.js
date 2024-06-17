import React from 'react';
import SortableTable from './SortableTable';

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

    const wrapper = render(<SortableTable columns={columns} data={data} />);

    it('should show right amount of th tags', () => {
        expect(wrapper.find('th')).toHaveLength(columns.length);
    });

    it('should render a row for each data array entry', () => {
        expect(wrapper.find('tbody tr')).toHaveLength(data.length);
    });

    it('should set data-th property on each cell rendered', () => {
        expect(wrapper.find('[data-th]')).toHaveLength(
            data.length * columns.length,
        );
    });

    it('should add `aria-sort` property', () => {
        expect(wrapper.find('[aria-sort]')).toHaveLength(columns.length);
    });

    it('should not show sorting arrow if header is blank string', () => {
        expect(wrapper.find('.ffe-sortable-table__sort-arrow').length).toBe(
            columns.length - 1,
        );
    });

    it('should show buttons in table when passing in buttons in data', () => {
        expect(wrapper.find('button').length).toBe(data.length);
    });

    it('should call onSort after sorting table', () => {
        const onSort = jest.fn();
        const table = shallow(
            <SortableTable columns={columns} data={data} onSort={onSort} />,
        );
        table.instance().tableHeaderClicked('name');
        expect.objectContaining({
            sortBy: 'name',
            descending: false,
            tableData: [
                {
                    age: 16,
                    button: <button>poke</button>,
                    id: 4,
                    name: 'Daenerys Targaryen',
                },
                {
                    age: 20,
                    button: <button>poke</button>,
                    id: 1,
                    name: 'Jon Snow',
                },
                {
                    age: 48,
                    button: <button>poke</button>,
                    id: 3,
                    name: 'Ned Stark',
                },
                {
                    age: 36,
                    button: <button>poke</button>,
                    id: 2,
                    name: 'Zombie Mountain',
                },
            ],
        });
    });

    it('should call onSort after initial sort', () => {
        const onSort = jest.fn();
        shallow(
            <SortableTable
                columns={columns}
                data={data}
                onSort={onSort}
                sortBy={'name'}
            />,
        );
        expect(onSort).toHaveBeenCalledWith(
            expect.objectContaining({
                sortBy: 'name',
                descending: false,
                tableData: [
                    {
                        age: 16,
                        button: <button>poke</button>,
                        id: 4,
                        name: 'Daenerys Targaryen',
                    },
                    {
                        age: 20,
                        button: <button>poke</button>,
                        id: 1,
                        name: 'Jon Snow',
                    },
                    {
                        age: 48,
                        button: <button>poke</button>,
                        id: 3,
                        name: 'Ned Stark',
                    },
                    {
                        age: 36,
                        button: <button>poke</button>,
                        id: 2,
                        name: 'Zombie Mountain',
                    },
                ],
            }),
        );
    });

    describe('condensed', () => {
        it('should by default not be condensed', () =>
            expect(wrapper.find('.ffe-table--condensed')).toHaveLength(0));

        const condensedWrapper = render(
            <SortableTable condensed={true} columns={columns} data={data} />,
        );

        it('can be condensed', () => expect(condensedWrapper).toHaveLength(1));
    });
});
