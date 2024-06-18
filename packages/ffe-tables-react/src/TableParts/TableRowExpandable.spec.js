import React from 'react';
import TableRowExpandable from './TableRowExpandable';
import { fireEvent, render, screen } from '@testing-library/react';

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

describe('<TableRowExpandable>', () => {
    it('should be collapsed by default', () => {
        const { container } = render(
            <TableRowExpandable {...props}>
                <p>The cake is a lie</p>
            </TableRowExpandable>,
        );
        expect(
            container.querySelectorAll('.ffe-table__row-expandable--expanded'),
        ).toHaveLength(0);

        const content = container.querySelector(
            '.ffe-table__row-expandable-content',
        );

        expect(content.getAttribute('aria-hidden')).toBe('true');
        expect(
            content.classList.contains('ffe-table__row--collapsed'),
        ).toBeTruthy();
    });

    it('should be expanded if provided true defaultExpanded', () => {
        const { container } = render(
            <TableRowExpandable {...props} defaultExpanded={true}>
                <p>The cake is a lie</p>
            </TableRowExpandable>,
        );

        expect(
            container.querySelectorAll('.ffe-table__row--collapsed'),
        ).toHaveLength(0);

        const content = container.querySelector(
            '.ffe-table__row-expandable-content',
        );

        expect(content.getAttribute('aria-hidden')).toBe('false');
        expect(
            content.classList.contains(
                'ffe-table__row-expandable-content--expanded',
            ),
        ).toBeTruthy();
    });

    it('should scroll into view on mount if true scrollToOnMount is provided', () => {
        const scrollIntoViewMock = jest.fn();
        window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

        render(
            <TableRowExpandable {...props} scrollToOnMount={true}>
                <p>The cake is a lie</p>
            </TableRowExpandable>,
        );

        expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);
    });

    it('should render expanded content', () => {
        render(
            <TableRowExpandable {...props}>
                <p>The cake is a lie</p>
            </TableRowExpandable>,
        );

        const row = screen.getByRole('button');
        fireEvent.click(row);
        const expandedContent = screen.getByRole('presentation');
        expect(expandedContent.textContent).toBe('The cake is a lie');
        expect(
            expandedContent.classList.contains(
                'ffe-table__row-expandable-content--expanded',
            ),
        ).toBeTruthy();
        expect(
            expandedContent.classList.contains('ffe-table__row--collapsed'),
        ).toBeFalsy();
    });
});
