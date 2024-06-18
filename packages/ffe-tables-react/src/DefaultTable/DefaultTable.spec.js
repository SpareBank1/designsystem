import React from 'react';
import Table from './DefaultTable';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { expect } from '@playwright/test';

describe('<Table />', () => {
    const columns = [
        { key: 'name', header: 'Navn' },
        { key: 'address', header: 'Adresse' },
        { key: 'age', header: 'Alder', alignRight: true },
    ];
    const columnsWithFooterContent = [
        { key: 'name', header: 'Navn', footer: 'Sum alder' },
        { key: 'address', header: 'Adresse' },
        { key: 'age', header: 'Alder', footer: 135, alignRight: true },
    ];
    const data = [
        {
            name: 'Ola Normann',
            address: 'Gateveien 2',
            age: 23,
            phone: '912 34 567',
        },
        {
            name: 'Sivert Svenska',
            address: 'Gatuveio 7',
            age: 45,
            phone: '+46 123 456 789',
        },
        {
            name: 'Daniel Dansk',
            address: 'Kartoffel Fjers',
            age: 67,
            phone: '+45 018 456 789',
        },
    ];

    /* const wrapperWithoutOverride = mount(
        <Table columns={columnsWithFooterContent} data={data} />,
    );
*/
    describe('general', () => {
        it('renders the correct dom structure', () => {
            render(<Table columns={columns} data={data} />);
            const table = screen.getByRole('table');
            expect(table.classList.contains('ffe-table')).toBe(true);
            expect(table.classList.contains('ffe-table--condensed')).toBe(
                false,
            );
        });

        it('can be condensed', () => {
            render(<Table columns={columns} data={data} condensed={true} />);
            const table = screen.getByRole('table');
            expect(table.classList.contains('ffe-table')).toBe(true);
            expect(table.classList.contains('ffe-table--condensed')).toBe(true);
        });

        it('can be left aligned', () => {
            render(<Table columns={columns} data={data} alignLeft={true} />);
            const table = screen.getByRole('table');
            expect(table.classList.contains('ffe-table')).toBe(true);
            expect(table.classList.contains('ffe-table--text-left')).toBe(true);
        });

        it('can have a two column layout on mobile', () => {
            render(
                <Table
                    columnLayoutMobile={true}
                    columns={columns}
                    data={data}
                />,
            );
            const table = screen.getByRole('table');
            expect(table.classList.contains('ffe-table')).toBe(true);
            expect(table.classList.contains('ffe-table--columns-sm')).toBe(
                true,
            );
        });

        it('applies supplied classes', () => {
            render(
                <Table
                    columns={columns}
                    data={data}
                    className="test-class-one test-class-two"
                />,
            );
            const table = screen.getByRole('table');
            expect(table.classList.contains('ffe-table')).toBe(true);
            expect(table.classList.contains('test-class-one')).toBe(true);
            expect(table.classList.contains('test-class-two')).toBe(true);
        });
    });

    describe('table caption', () => {
        it('does not render a <caption /> if caption prop is not provided', () => {
            const { container } = render(
                <Table columns={columns} data={data} />,
            );
            expect(container.querySelector('caption')).toBeFalsy();
        });

        it('renders a <caption /> if caption prop is provided', () => {
            const { container } = render(
                <Table columns={columns} data={data} caption="A nice table" />,
            );
            expect(container.querySelector('caption').textContent).toBe(
                'A nice table',
            );
        });
    });

    describe('table headers', () => {
        it('renders columns inside a <thead />', () => {
            render(<Table columns={columns} data={data} />);
            const [thead] = screen.getAllByRole('rowgroup');
            expect(thead.tagName).toBe('THEAD');
        });

        it('renders columns as <th /> tags', () => {
            render(<Table columns={columns} data={data} />);
            const [thead] = screen.getAllByRole('rowgroup');
            expect(within(thead).getAllByRole('columnheader')).toHaveLength(3);
        });

        it('renders header content as <th /> content', () => {
            render(<Table columns={columns} data={data} />);
            const [first] = screen.getAllByRole('columnheader');
            expect(first.textContent).toBe(columns[0].header);
        });
    });

    describe('table footer', () => {
        it('renders a <tfoot />', () => {
            render(<Table columns={columnsWithFooterContent} data={data} />);
            const [, tfoot] = screen.getAllByRole('rowgroup');
            expect(tfoot.tagName).toBe('TFOOT');
        });

        it('renders the footer content inside <tfoot />', () => {
            render(<Table columns={columnsWithFooterContent} data={data} />);
            const [, tfoot] = screen.getAllByRole('rowgroup');
            const [firstColumn] = within(tfoot).getAllByRole('cell');
            expect(firstColumn.textContent).toBe('Sum alder');
        });

        it('does not render <tfoot /> unless footer is present in columns', () => {
            render(<Table columns={columns} data={data} />);
            const [, , tfoot] = screen.getAllByRole('rowgroup');
            expect(tfoot).toBeFalsy();
        });
    });

    describe('table footer override', () => {
        let container;
        let rerender;
        let mockCallback;

        const columnsForFooterRender = [
            { key: 'name', header: 'Navn', footer: 'Sum alder' },
            {
                key: 'address',
                header: 'Adresse',
                columnFooterRender: (value, dataWindow, tdProps, spanProps) => {
                    return (
                        <td {...tdProps}>
                            <span {...spanProps}>{value}</span>
                        </td>
                    );
                },
            },
            { key: 'age', header: 'Alder', footer: 135, alignRight: true },
        ];

        beforeEach(() => {
            mockCallback = jest.fn();
        });
        beforeEach(() => {
            const { container: _container, rerender: _rerender } = render(
                <Table
                    columns={columnsForFooterRender}
                    data={data}
                    footerRender={(trProps, columnsFooter) => {
                        return (
                            <React.Fragment>
                                <tr
                                    {...trProps}
                                    data-abc="aaa123"
                                    onClick={event => {
                                        mockCallback();
                                    }}
                                />
                                <tr
                                    {...trProps}
                                    data-abc="aaa123"
                                    onClick={event => {
                                        mockCallback();
                                    }}
                                >
                                    {trProps.children[0]}
                                    {trProps.children[1]}
                                    {trProps.children[2]}
                                </tr>
                            </React.Fragment>
                        );
                    }}
                />,
            );
            container = _container;
            rerender = _rerender;
        });

        it('renders a <tfoot />, triggers tr onClick method', () => {
            fireEvent.click(container.querySelectorAll('tfoot tr')[0]);
            expect(mockCallback.mock.calls.length).toBe(1);
        });

        it('renders a <tfoot /> that has two identical rows, the second row has array notation', () => {
            const [tr0html, tr1html] = container.querySelectorAll('tfoot tr');
            expect(tr1html.innerHTML).toBe(tr0html.innerHTML);
        });

        it('renders a <tfoot /> with override that should look like the default', () => {
            rerender(<Table columns={columnsWithFooterContent} data={data} />);
            const withoutOverrideHtml =
                container.querySelectorAll('tfoot')[0].innerHTML;

            rerender(
                <Table
                    columns={columnsForFooterRender}
                    data={data}
                    footerRender={(trProps, columnsFooter) => {
                        return <tr {...trProps} />;
                    }}
                />,
            );
            const withDefaultOverrideHtml =
                container.querySelectorAll('tfoot')[0].innerHTML;
            expect(withDefaultOverrideHtml).toBe(withoutOverrideHtml);
        });
    });

    describe('table header override', () => {
        let container;
        let rerender;
        let mockCallback;

        const columnsForFooterRender = [
            { key: 'name', header: 'Navn', footer: 'Navn' },
            { key: 'address', header: 'Adresse' },
            { key: 'age', header: 'Alder', footer: 135, alignRight: true },
        ];

        beforeEach(() => {
            mockCallback = jest.fn();
        });
        beforeEach(() => {
            const { container: _container, rerender: _rerender } = render(
                <Table
                    columns={columnsForFooterRender}
                    data={data}
                    headerRender={(trProps, headerColumns) => {
                        return (
                            <React.Fragment>
                                <tr
                                    {...trProps}
                                    data-abc="aaa123"
                                    onClick={event => {
                                        mockCallback();
                                    }}
                                />
                                <tr
                                    {...trProps}
                                    data-abc="aaa123"
                                    onClick={event => {
                                        mockCallback();
                                    }}
                                >
                                    {trProps.children[0]}
                                    {trProps.children[1]}
                                    {trProps.children[2]}
                                </tr>
                            </React.Fragment>
                        );
                    }}
                />,
            );
            container = _container;
            rerender = _rerender;
        });

        it('renders a <thead />, triggers tr onClick method', () => {
            fireEvent.click(container.querySelectorAll('thead tr')[0]);
            expect(mockCallback.mock.calls.length).toBe(1);
        });

        it('renders a <thead /> that has two identical rows, the second row has array notation', () => {
            const [tr0html, tr1html] = container.querySelectorAll('thead tr');
            expect(tr1html.innerHTML).toBe(tr0html.innerHTML);
        });

        it('renders a <thead /> with override that should look like the default', () => {
            rerender(<Table columns={columnsWithFooterContent} data={data} />);
            const withoutOverrideHtml =
                container.querySelectorAll('thead')[0].innerHTML;

            rerender(
                <Table
                    columns={columnsForFooterRender}
                    data={data}
                    headerRender={(trProps, headerColumns) => {
                        return <tr {...trProps} />;
                    }}
                />,
            );
            const withDefaultOverrideHtml =
                container.querySelectorAll('thead')[0].innerHTML;
            expect(withDefaultOverrideHtml).toBe(withoutOverrideHtml);
        });
    });

    describe('expandable table rows', () => {
        it('should render expandable rows when if expandable content is available', () => {
            const { container } = render(
                <Table
                    columns={[
                        { key: 'name', header: 'Navn' },
                        { key: 'address', header: 'Adresse' },
                    ]}
                    data={[
                        {
                            name: 'First',
                            address: 'Expand me',
                        },
                        {
                            name: 'Second',
                        },
                    ]}
                    expandedContentMapper={row =>
                        row.address && (
                            <span className="expandedcontent">
                                Adresse: {row.address}
                            </span>
                        )
                    }
                />,
            );

            expect(container.querySelectorAll('tbody').length).toBe(2);
            expect(
                container.querySelectorAll('.ffe-table__row-expandable').length,
            ).toBe(1);
        });
    });

    describe('table row render override', () => {
        let container;
        let rerender;
        let mockCallback;

        const columnsForRenderOverride = [
            {
                key: 'name',
                header: 'Navn',
                footer: 'Navn',
                cellRender: (value, col, props) => {
                    return <React.Fragment>{value}</React.Fragment>;
                },
            },
            { key: 'address', header: 'Adresse' },
            { key: 'age', header: 'Alder', footer: 135, alignRight: true },
        ];

        const expandedContentMapper = row =>
            row.address && (
                <span className="expandedcontent">Adresse: {row.address}</span>
            );

        beforeEach(() => {
            mockCallback = jest.fn();
        });
        beforeEach(() => {
            const { container: _container, rerender: _rerender } = render(
                <Table
                    columns={columnsForRenderOverride}
                    data={data}
                    rowRender={(trprops, props, rowIndex) => {
                        return (
                            <tr
                                {...trprops}
                                data-my-prop="12345"
                                onClick={event => {
                                    mockCallback();
                                }}
                            />
                        );
                    }}
                />,
            );
            container = _container;
            rerender = _rerender;
        });

        it('renders a <tbody />, triggers tr onClick method', () => {
            fireEvent.click(container.querySelectorAll('tbody tr')[0]);
            expect(mockCallback.mock.calls.length).toBe(1);
        });

        it('renders a <tbody /> with extendedRow, triggers tr onClick method', () => {
            rerender(
                <Table
                    columns={columnsForRenderOverride}
                    data={data}
                    expandedContentMapper={expandedContentMapper}
                    rowRender={(trprops, props, rowIndex) => {
                        return (
                            <tr
                                {...trprops}
                                onClick={event => {
                                    mockCallback();
                                    trprops.onClick(event);
                                }}
                            />
                        );
                    }}
                />,
            );
            const tbody = container.querySelectorAll('tbody')[0];

            fireEvent.click(tbody.querySelectorAll('tr')[0]);
            expect(
                Array.from(
                    tbody.querySelectorAll(
                        '.ffe-table__row-expandable-content--expanded',
                    ),
                ).length,
            ).toBe(1);
            expect(mockCallback.mock.calls.length).toBe(1);

            fireEvent.click(tbody.querySelectorAll('tr')[0]);
            expect(
                Array.from(
                    tbody.querySelectorAll(
                        '.ffe-table__row-expandable-content--expanded',
                    ),
                ).length,
            ).toBe(0);
        });

        it('renders a <tbody /> with override that should look like the default', () => {
            rerender(<Table columns={columnsWithFooterContent} data={data} />);
            const withoutOverrideHtml =
                container.querySelectorAll('tbody')[0].innerHTML;

            rerender(
                <Table
                    columns={columnsForRenderOverride}
                    data={data}
                    footerRender={(trProps, columnsFooter) => {
                        return <tr {...trProps} />;
                    }}
                />,
            );
            const withDefaultOverrideHtml =
                container.querySelectorAll('tbody')[0].innerHTML;
            expect(withDefaultOverrideHtml).toBe(withoutOverrideHtml);
        });
    });

    describe('table body', () => {
        it('does not render a tbody if data prop is empty', () => {
            const { container } = render(<Table columns={columns} data={[]} />);
            expect(container.querySelectorAll('tbody')).toHaveLength(0);
        });

        it('renders a tbody if data is provided', () => {
            const { container } = render(
                <Table columns={columns} data={data} />,
            );
            expect(container.querySelectorAll('tbody')).toHaveLength(1);
        });

        it('renders a <tr /> row for each entry in the data prop', () => {
            const { container } = render(
                <Table columns={columns} data={data} />,
            );
            expect(container.querySelectorAll('tbody tr')).toHaveLength(
                data.length,
            );
        });

        it('renders a <td /> cell for each entry in each row', () => {
            const { container } = render(
                <Table columns={columns} data={data} />,
            );
            expect(container.querySelectorAll('td')).toHaveLength(
                data.length * columns.length,
            );
        });

        it('renders a content-div inside each td', () => {
            const { container } = render(
                <Table columns={columns} data={data} />,
            );
            expect(
                container.querySelectorAll('td .ffe-table__content').length,
            ).toBe(data.length * columns.length);
        });

        it('renders content of each cell', () => {
            const { container } = render(
                <Table columns={columns} data={data} />,
            );
            expect(
                container.querySelectorAll('td .ffe-table__content')[0]
                    .textContent,
            ).toBe(data[0].name);
        });

        it('adds column heading to data-th property of each cell', () => {
            const { container } = render(
                <Table data={data} columns={columns} />,
            );

            expect(container.querySelectorAll('[data-th="Navn"]')).toHaveLength(
                columns.length,
            );
        });

        it('render screen reader only caption', () => {
            const { container } = render(
                <Table
                    data={data}
                    columns={columns}
                    caption="Read me"
                    srOnlyCaption={true}
                />,
            );
            const captions = container.querySelectorAll('caption');

            expect(captions).toHaveLength(1);
            expect(
                captions[0].classList.contains('ffe-screenreader-only'),
            ).toBe(true);
            expect(captions[0].textContent).toBe('Read me');
        });

        it('do not render caption when srOnlyCaption is true but missing caption text', () => {
            const { container } = render(
                <Table data={data} columns={columns} srOnlyCaption={true} />,
            );
            expect(container.querySelectorAll('caption')).toHaveLength(0);
        });

        it('sets correct class for top-alignment on table cells', () => {
            const columnsWithTopAlignment = columns.map(column => ({
                ...column,
                alignTop: true,
            }));

            const { container } = render(
                <Table data={data} columns={columnsWithTopAlignment} />,
            );

            expect(
                container.querySelectorAll('.ffe-table__cell--top').length,
            ).toBe(9);
        });

        it('sets correct class for hiding column on desktop', () => {
            const columnsWithTopAlignment = columns.map((column, index) =>
                index === 0 ? { ...column, hideOnDesktop: true } : column,
            );

            const { container } = render(
                <Table data={data} columns={columnsWithTopAlignment} />,
            );

            expect(
                container.querySelectorAll('.ffe-table--hide-xlg').length,
            ).toBe(4);
        });
    });

    describe('offset and limit properties', () => {
        const muchData = 'ABCDEFGHIJKLMNO'.split('').map((c, i) => ({
            name: c,
            address: `Sesame Street ${i}`,
            age: i,
        }));

        describe('setting limit', () => {
            it('reduces number of table rows', () => {
                const { container } = render(
                    <Table columns={columns} data={muchData} limit={3} />,
                );
                expect(
                    container.querySelectorAll(
                        '.ffe-table__cell:first-of-type .ffe-table__content',
                    ),
                ).toHaveLength(3);
            });

            it('does not skip data', () => {
                const { container } = render(
                    <Table columns={columns} data={muchData} limit={3} />,
                );
                expect(
                    container.querySelectorAll(
                        '.ffe-table__cell:first-of-type .ffe-table__content',
                    )[0].textContent,
                ).toBe('A');
            });

            it('limits data', () => {
                const { container } = render(
                    <Table columns={columns} data={muchData} limit={3} />,
                );
                expect(
                    container.querySelectorAll(
                        '.ffe-table__cell:first-of-type .ffe-table__content',
                    )[2].textContent,
                ).toBe('C');
            });
        });

        describe('setting offset', () => {
            it('reduces number of table rows', () => {
                const { container } = render(
                    <Table columns={columns} data={muchData} offset={10} />,
                );
                expect(
                    container.querySelectorAll(
                        '.ffe-table__cell:first-of-type .ffe-table__content',
                    ),
                ).toHaveLength(5);
            });

            it('skips data', () => {
                const { container } = render(
                    <Table columns={columns} data={muchData} offset={10} />,
                );
                expect(
                    container.querySelectorAll(
                        '.ffe-table__cell:first-of-type .ffe-table__content',
                    )[0].textContent,
                ).toBe('K');
            });

            it('does not limits data', () => {
                const { container } = render(
                    <Table columns={columns} data={muchData} offset={10} />,
                );
                expect(
                    container.querySelectorAll(
                        '.ffe-table__cell:first-of-type .ffe-table__content',
                    )[4].textContent,
                ).toBe('O');
            });
        });

        describe('setting both', () => {
            it('reduces number of table rows', () => {
                const { container } = render(
                    <Table
                        columns={columns}
                        data={muchData}
                        offset={5}
                        limit={4}
                    />,
                );
                expect(
                    container.querySelectorAll(
                        '.ffe-table__cell:first-of-type .ffe-table__content',
                    ),
                ).toHaveLength(4);
            });

            it('skips data', () => {
                const { container } = render(
                    <Table
                        columns={columns}
                        data={muchData}
                        offset={5}
                        limit={4}
                    />,
                );
                expect(
                    container.querySelectorAll(
                        '.ffe-table__cell:first-of-type .ffe-table__content',
                    )[0].textContent,
                ).toBe('F');
            });

            it('limits data', () => {
                const { container } = render(
                    <Table
                        columns={columns}
                        data={muchData}
                        offset={5}
                        limit={4}
                    />,
                );
                expect(
                    container.querySelectorAll(
                        '.ffe-table__cell:first-of-type .ffe-table__content',
                    )[3].textContent,
                ).toBe('I');
            });
        });
    });
});
