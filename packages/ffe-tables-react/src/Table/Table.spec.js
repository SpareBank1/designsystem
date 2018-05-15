import React from 'react';
import { shallow, render, mount } from 'enzyme';

import Table from './Table';

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

    const wrapperWithoutOverride = mount(
        <Table
            columns={columnsWithFooterContent}
            data={data}
        />
    );

    describe('general', () => {
        it('renders without exploding', () => {
            const wrapper = shallow(<Table columns={columns} data={data} />);
            expect(wrapper).toHaveLength(1);
        });

        it('renders the correct dom structure', () => {
            const wrapper = shallow(<Table columns={columns} data={data} />);
            expect(wrapper.is('table')).toBe(true);
            expect(wrapper.hasClass('ffe-table')).toBe(true);
            expect(wrapper.hasClass('ffe-table--condensed')).toBe(false);
        });

        it('can be condensed', () => {
            const wrapper = shallow(
                <Table condensed={true} columns={columns} data={data} />,
            );
            expect(wrapper.hasClass('ffe-table')).toBe(true);
            expect(wrapper.hasClass('ffe-table--condensed')).toBe(true);
        });

        it('can be left aligned', () => {
            const wrapper = shallow(
                <Table alignLeft={true} columns={columns} data={data} />,
            );
            expect(wrapper.hasClass('ffe-table')).toBe(true);
            expect(wrapper.hasClass('ffe-table--text-left')).toBe(true);
        });

        it('can have a two column layout on mobile', () => {
            const wrapper = shallow(
                <Table
                    columnLayoutMobile={true}
                    columns={columns}
                    data={data}
                />,
            );
            expect(wrapper.hasClass('ffe-table')).toBe(true);
            expect(wrapper.hasClass('ffe-table--columns-sm')).toBe(true);
        });

        it('applies supplied classes', () => {
            const wrapper = shallow(
                <Table
                    columns={columns}
                    data={data}
                    className="test-class-one test-class-two"
                />,
            );
            expect(wrapper.hasClass('ffe-table')).toBe(true);
            expect(wrapper.hasClass('test-class-one')).toBe(true);
            expect(wrapper.hasClass('test-class-two')).toBe(true);
        });
    });

    describe('table caption', () => {
        it('does not render a <caption /> if caption prop is not provided', () => {
            const wrapper = shallow(<Table columns={columns} data={data} />);
            expect(wrapper.find('caption')).toHaveLength(0);
        });

        it('renders a <caption /> if caption prop is provided', () => {
            const wrapper = shallow(
                <Table columns={columns} data={data} caption="A nice table" />,
            );
            expect(wrapper.find('caption')).toHaveLength(1);
            expect(wrapper.find('caption').text()).toBe('A nice table');
        });
    });

    describe('table headers', () => {
        const wrapper = render(<Table columns={columns} data={data} />);

        it('renders columns inside a <thead />', () => {
            expect(wrapper.find('thead')).toHaveLength(1);
        });

        it('renders columns as <th /> tags', () => {
            expect(wrapper.find('th')).toHaveLength(3);
        });

        it('renders header content as <th /> content', () => {
            expect(
                wrapper
                    .find('th')
                    .first()
                    .text(),
            ).toBe(columns[0].header);
        });
    });

    describe('table footer', () => {
        const wrapper = render(
            <Table columns={columnsWithFooterContent} data={data} />,
        );

        it('renders a <tfoot />', () => {
            expect(wrapper.find('tfoot')).toHaveLength(1);
        });

        it('renders the footer content inside <tfoot />', () => {
            expect(
                wrapper
                    .find('tfoot')
                    .find('td')
                    .first()
                    .text(),
            ).toBe('Sum alder');
        });

        it('does not render <tfoot /> unless footer is present in columns', () => {
            const wrapperWithoutFooterContent = render(
                <Table columns={columns} data={data} />,
            );
            expect(wrapperWithoutFooterContent.find('tfoot')).toHaveLength(0);
        });
    });

    describe('table footer override', () => {
        let wrapper;
        let mockCallback;

        const columnsForFooterRender = [
            { key: 'name', header: 'Navn', footer: 'Sum alder'},
            { key: 'address', header: 'Adresse' ,
                columnFooterRender: (value, dataWindow, tdProps, spanProps, headerColumns, index)=>{return  <td {...tdProps}><span {...spanProps}>{value}</span></td>}
                },
            { key: 'age', header: 'Alder', footer: 135, alignRight: true },
        ];

        const wrapperWithDefaultOverride = wrapper = mount(
            <Table
                columns={columnsForFooterRender}
                data={data}
                footerRender={(trProps, columnsFooter) => {
                    return <tr {...trProps}/>}}
            />
        );

        beforeEach(() => {mockCallback = jest.fn()});
        beforeEach(() => {wrapper = mount(
            <Table
                columns={columnsForFooterRender}
                data={data}
                footerRender={(trProps, columnsFooter) => {
                    return <React.Fragment>
                        <tr
                            {...trProps}
                            a="customfooter"
                            firstkey={columnsFooter[0].key}
                            onClick={(event) => {
                                mockCallback();
                            }}
                        />
                        <tr
                            {...trProps}
                            a="customfooter"
                            firstkey={columnsFooter[0].key}
                            onClick={(event) => {
                                mockCallback();
                            }}
                        >
                            {trProps.children[0]}{trProps.children[1]}{trProps.children[2]}
                        </tr>
                    </React.Fragment>
                }}
            />

        )});

        it('renders a <tfoot /> tr has custom props', () => {
            const propKeyProp = wrapper.find('tfoot').find('tr').first().props();
            expect(propKeyProp.a).toBe('customfooter');
            expect(propKeyProp.firstkey).toBe('name');
            expect(wrapper.find('tfoot').find('tr').first().render().attr('a')).toBe('customfooter');
        });

        it('renders a <tfoot />, triggers tr onClick method', () => {
            wrapper.find('tfoot').find('tr').first().simulate('click');
            expect(mockCallback.mock.calls.length).toBe(1);
        });

        it('renders a <tfoot /> that has two identical rows, the second row has array notation',() => {
            const tr0html = wrapper.find('tfoot').find('tr').at(0).html();
            const tr1html = wrapper.find('tfoot').find('tr').at(1).html();
            expect(tr1html).toBe(tr0html);
        });

        it('renders a <tfoot /> with override that should look like the default', () => {
            const withoutOverrideHtml = wrapperWithoutOverride.find('tfoot').first().html();
            const withDefaultOverrideHtml = wrapperWithDefaultOverride.find('tfoot').first().html();
            expect(withDefaultOverrideHtml).toBe(withoutOverrideHtml);
        });
    });

    describe('table header override', () => {
        let wrapper;
        let mockCallback;

        const columnsForFooterRender = [
            { key: 'name', header: 'Navn', footer: 'Navn'},
            { key: 'address', header: 'Adresse' },
            { key: 'age', header: 'Alder', footer: 135, alignRight: true },
        ];

        const wrapperWithDefaultOverride = wrapper = mount(
            <Table
                columns={columnsForFooterRender}
                data={data}
                headerRender={(trProps, headerColumns) => {
                    return <tr {...trProps}/>}}
            />
        );

        beforeEach(() => {mockCallback = jest.fn()});
        beforeEach(() => {wrapper = mount(
            <Table
                columns={columnsForFooterRender}
                data={data}
                headerRender={(trProps, headerColumns) => {
                    return <React.Fragment>
                        <tr
                            {...trProps}
                            a="customfooter"
                            firstkey={headerColumns[0].key}
                            onClick={(event) => {
                                mockCallback();
                            }}
                        />
                        <tr
                            {...trProps}
                            a="customfooter"
                            firstkey={headerColumns[0].key}
                            onClick={(event) => {
                                mockCallback();
                            }}
                        >
                            {trProps.children[0]}{trProps.children[1]}{trProps.children[2]}
                        </tr>
                    </React.Fragment>
                }}
            />

        )});

        it('renders a <thead /> tr has custom props', () => {
            const propKeyProp = wrapper.find('thead').find('tr').first().props();
            expect(propKeyProp.a).toBe('customfooter');
            expect(propKeyProp.firstkey).toBe('name');
            expect(wrapper.find('thead').find('tr').first().render().attr('a')).toBe('customfooter');
        });

        it('renders a <thead />, triggers tr onClick method', () => {
            wrapper.find('thead').find('tr').first().simulate('click');
            expect(mockCallback.mock.calls.length).toBe(1);
        });

        it('renders a <thead /> that has two identical rows, the second row has array notation',() => {
            const tr0html = wrapper.find('thead').find('tr').at(0).html();
            const tr1html = wrapper.find('thead').find('tr').at(1).html();
            expect(tr1html).toBe(tr0html);
        });

        it('renders a <thead /> with override that should look like the default', () => {
            const withoutOverrideHtml = wrapperWithoutOverride.find('thead').first().html();
            const withDefaultOverrideHtml = wrapperWithDefaultOverride.find('thead').first().html();
            expect(withDefaultOverrideHtml).toBe(withoutOverrideHtml);
        });
    })

    describe('table row render override', () => {
        let wrapper;
        let mockCallback;

        const columnsForRenderOverride = [
            { key: 'name', header: 'Navn', footer: 'Navn', cellRender: (value,col,props)=>{return <React.Fragment>{value}</React.Fragment>}},
            { key: 'address', header: 'Adresse' },
            { key: 'age', header: 'Alder', footer: 135, alignRight: true },
        ];

        const expandedContentMapper = row =>
            row.address && <span className="expandedcontent">Adresse: {row.address}</span>;



        const wrapperWithDefaultOverride = wrapper = mount(
            <Table
                columns={columnsForRenderOverride}
                data={data}
                rowRender={(trprops, props, rowIndex)=>{
                    return <tr {...trprops}/>}}
            />
        );

        const wrapperWithExendedRowAndRenderOverride = wrapper = mount(
            <Table
                columns={columnsForRenderOverride}
                data={data}
                expandedContentMapper={expandedContentMapper}
                rowRender={(trprops, props, rowIndex)=>{
                    return <tr {...trprops} onClick={(event) => {mockCallback();trprops.onClick(event);}}/>}}
            />
        );

        beforeEach(() => {mockCallback = jest.fn()});
        beforeEach(() => {wrapper = mount(
            <Table
                columns={columnsForRenderOverride}
                data={data}
                rowRender={(trprops, props, rowIndex) => {
                    return  <tr
                                {...trprops}
                                a="customfooter"
                                onClick={(event) => {
                                    mockCallback();
                                }}
                            />
                }}
            />

        )});

        it('renders a <tbody /> tr has custom props', () => {
            const propKeyProp = wrapper.find('tbody').find('tr').first().props();
            expect(propKeyProp.a).toBe('customfooter');
            expect(wrapper.find('tbody').find('tr').first().render().attr('a')).toBe('customfooter');
        });

        it('renders a <tbody />, triggers tr onClick method', () => {
            wrapper.find('tbody').find('tr').first().simulate('click');
            expect(mockCallback.mock.calls.length).toBe(1);
        });

        it('renders a <tbody /> with extendedRow, triggers tr onClick method', () => {
            wrapperWithExendedRowAndRenderOverride.find('tbody').first().find('tr').first().simulate('click');
            expect(wrapperWithExendedRowAndRenderOverride.find('tbody').first().find('.ffe-table__row-expandable-content--expanded').length).toBe(1);
            expect(mockCallback.mock.calls.length).toBe(1);
            wrapperWithExendedRowAndRenderOverride.find('tbody').first().find('tr').first().simulate('click');
            expect(wrapperWithExendedRowAndRenderOverride.find('tbody').first().find('.ffe-table__row-expandable-content--expanded').length).toBe(0);
        });

        it('renders a <tbody /> with override that should look like the default', () => {
            const withoutOverrideHtml = wrapperWithoutOverride.find('tbody').first().html();
            const withDefaultOverrideHtml = wrapperWithDefaultOverride.find('tbody').first().html();
            expect(withDefaultOverrideHtml).toBe(withoutOverrideHtml);
        });
    })

    describe('table body', () => {
        it('does not render a tbody if data prop is empty', () => {
            const wrapper = shallow(<Table columns={columns} data={[]} />);
            expect(wrapper.find('tbody')).toHaveLength(0);
        });

        it('renders a tbody if data is provided', () => {
            const wrapper = shallow(<Table columns={columns} data={data} />);
            expect(wrapper.find('tbody')).toHaveLength(1);
        });

        it('renders a <tr /> row for each entry in the data prop', () => {
            const wrapper = render(<Table columns={columns} data={data} />);
            expect(wrapper.find('tbody tr')).toHaveLength(data.length);
        });

        it('renders a <td /> cell for each entry in each row', () => {
            const wrapper = render(<Table columns={columns} data={data} />);
            expect(wrapper.find('td')).toHaveLength(
                data.length * columns.length,
            );
        });

        it('renders a content-div inside each td', () => {
            const wrapper = render(<Table columns={columns} data={data} />);
            expect(wrapper.find('td .ffe-table__content').length).toBe(
                data.length * columns.length,
            );
        });

        it('renders content of each cell', () => {
            const wrapper = render(<Table columns={columns} data={data} />);
            expect(
                wrapper
                    .find('td .ffe-table__content')
                    .first()
                    .text(),
            ).toBe(data[0].name);
        });

        it('adds column heading to data-th property of each cell', () => {
            const wrapper = render(<Table data={data} columns={columns} />);

            expect(wrapper.find('[data-th="Navn"]')).toHaveLength(
                columns.length,
            );
            expect(
                wrapper
                    .find('td')
                    .first()
                    .prop('data-th'),
            ).toBe(columns[0].header);
        });

        it('render screen reader only caption', () => {
            const wrapper = render(
                <Table
                    data={data}
                    columns={columns}
                    caption="Read me"
                    srOnlyCaption={true}
                />,
            );
            expect(wrapper.find('caption')).toHaveLength(1);
            expect(
                wrapper.find('caption').hasClass('ffe-screenreader-only'),
            ).toBe(true);
            expect(wrapper.find('caption').text()).toBe('Read me');
        });

        it('do not render caption when srOnlyCaption is true but missing caption text', () => {
            const wrapper = render(
                <Table data={data} columns={columns} srOnlyCaption={true} />,
            );
            expect(wrapper.find('caption')).toHaveLength(0);
        });

        it('sets correct class for top-alignment on table cells', () => {
            const columnsWithTopAlignment = columns.map(column => ({
                ...column,
                alignTop: true,
            }));

            const wrapper = render(
                <Table data={data} columns={columnsWithTopAlignment} />,
            );

            expect(wrapper.find('.ffe-table__cell--top').length).toBe(9);
        });

        it('sets correct class for hiding column on desktop', () => {
            const columnsWithTopAlignment = columns.map(
                (column, index) =>
                    index === 0 ? { ...column, hideOnDesktop: true } : column,
            );

            const wrapper = render(
                <Table data={data} columns={columnsWithTopAlignment} />,
            );

            expect(wrapper.find('.ffe-table--hide-xlg').length).toBe(4);
        });
    });

    describe('offset and limit properties', () => {
        const muchData = 'ABCDEFGHIJKLMNO'.split('').map((c, i) => ({
            name: c,
            address: `Sesame Street ${i}`,
            age: i,
        }));

        const getContentOfFirstColumn = comp =>
            comp.find('.ffe-table__cell:first-of-type .ffe-table__content');

        describe('setting limit', () => {
            const contentOfFirstColumn = getContentOfFirstColumn(
                render(<Table columns={columns} data={muchData} limit={3} />),
            );

            it('reduces number of table rows', () =>
                expect(contentOfFirstColumn).toHaveLength(3));

            it('does not skip data', () =>
                expect(contentOfFirstColumn.first().text()).toBe('A'));

            it('limits data', () =>
                expect(contentOfFirstColumn.last().text()).toBe('C'));
        });

        describe('setting offset', () => {
            const contentOfFirstColumn = getContentOfFirstColumn(
                render(<Table columns={columns} data={muchData} offset={10} />),
            );

            it('reduces number of table rows', () =>
                expect(contentOfFirstColumn).toHaveLength(5));

            it('skips data', () =>
                expect(contentOfFirstColumn.first().text()).toBe('K'));

            it('does not limits data', () =>
                expect(contentOfFirstColumn.last().text()).toBe('O'));
        });

        describe('setting both', () => {
            const contentOfFirstColumn = getContentOfFirstColumn(
                render(
                    <Table
                        columns={columns}
                        data={muchData}
                        offset={5}
                        limit={4}
                    />,
                ),
            );

            it('reduces number of table rows', () =>
                expect(contentOfFirstColumn).toHaveLength(4));

            it('skips data', () =>
                expect(contentOfFirstColumn.first().text()).toBe('F'));

            it('limits data', () =>
                expect(contentOfFirstColumn.last().text()).toBe('I'));
        });
    });
});
