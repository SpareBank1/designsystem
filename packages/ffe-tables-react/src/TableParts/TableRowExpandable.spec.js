import React from 'react';

import TableRowExpandable from './TableRowExpandable';

const props = {
    cells: {
        name: 'Ola Normann',
        address: 'Gateveien 2',
        age: 23,
        phone: '912 34 567',
        email: 'ola@normann.no',
    },
    columns: [
        { key: 'name', content: 'Navn' },
        { key: 'address', content: 'Adresse' },
        { key: 'age', content: 'Alder', alignRight: true },
        { key: 'phone', content: 'Telefon' },
        { key: 'email', content: 'E-post' },
    ],
};

const wrapper = shallow(
    <TableRowExpandable {...props}>
        <p>The cake is a lie</p>
    </TableRowExpandable>,
);

const unexpandableWrapper = shallow(
    <TableRowExpandable {...props}>
        {false && <div>Ignorance is bliss, and we won't render this</div>}
    </TableRowExpandable>,
);

const defaultExpandedWrapper = shallow(
    <TableRowExpandable {...props} defaultExpanded={true}>
        <p>The cake is a lie</p>
    </TableRowExpandable>,
);

describe('<TableRowExpandable>', () => {
    it('should be collapsed by default', () => {
        expect(wrapper.state().expanded).toBe(false);
        expect(
            wrapper.find('.ffe-table__row-expandable--expanded'),
        ).toHaveLength(0);
        expect(
            wrapper
                .find('.ffe-table__row-expandable-content')
                .prop('aria-hidden'),
        ).toBe('true');
        expect(
            wrapper
                .find('.ffe-table__row-expandable-content')
                .hasClass('ffe-table__row--collapsed'),
        ).toBe(true);
    });

    it('should be expanded if provided true defaultExpanded', () => {
        expect(defaultExpandedWrapper.state().expanded).toBe(true);
        expect(
            defaultExpandedWrapper.find('.ffe-table__row--collapsed'),
        ).toHaveLength(0);
        expect(
            defaultExpandedWrapper
                .find('.ffe-table__row-expandable-content')
                .prop('aria-hidden'),
        ).toBe('false');
        expect(
            defaultExpandedWrapper
                .find('.ffe-table__row-expandable-content')
                .hasClass('ffe-table__row-expandable-content--expanded'),
        ).toBe(true);
    });

    it('should scroll into view on mount if true scrollToOnMount is provided', () => {
        const scrollIntoViewMock = jest.fn();
        window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

        mount(
            <TableRowExpandable {...props} scrollToOnMount={true}>
                <p>The cake is a lie</p>
            </TableRowExpandable>,
        );

        expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);
    });

    it('should render expanded content', () => {
        wrapper.setState({ expanded: true });
        expect(wrapper.find('td').last().find('p').text()).toBe(
            'The cake is a lie',
        );
        expect(
            wrapper
                .find('tr')
                .last()
                .hasClass('ffe-table__row-expandable-content--expanded'),
        ).toBe(true);
        expect(
            wrapper.find('tr').last().hasClass('ffe-table__row--collapsed'),
        ).toBe(false);
    });

    it('should pass correct props to TableRow component', () => {
        wrapper.setState({ expanded: true });
        const tableRow = wrapper.find('TableRow').props();
        expect(tableRow.expanded).toBe(true);
        expect(tableRow.columns).toBe(props.columns);
        expect(tableRow.trClasses).toContain(
            'ffe-table__row-expandable--expanded',
        );
    });

    it('should pass an expand icon with correct classname to TableRow', () => {
        wrapper.setState({ expanded: true });
        const tableRow = wrapper.find('TableRow').props();
        expect(tableRow.cells.expandIcon.props.className).toContain(
            'ffe-table__expand-icon--expanded',
        );
        expect(tableRow.expandable).toBe(true);
    });

    it('should not pass an expand icon to TableRows that are not expandable', () => {
        const tableRow = unexpandableWrapper.find('TableRow').props();
        expect(tableRow.cells.expandIcon).toBe(' ');
        expect(tableRow.expandable).toBe(false);
    });

    const renderedWrapper = render(
        <TableRowExpandable {...props}>
            <p>a Festivus for the rest of us</p>
        </TableRowExpandable>,
    );

    it('should render a tbody with two tr', () => {
        expect(renderedWrapper.children()).toHaveLength(2);
    });

    it('should set the correct aria attributes on tr', () => {
        expect(renderedWrapper.find('tr').first().prop('aria-expanded')).toBe(
            'false',
        );
        expect(renderedWrapper.find('tr').last().prop('aria-hidden')).toBe(
            'true',
        );
    });
});
