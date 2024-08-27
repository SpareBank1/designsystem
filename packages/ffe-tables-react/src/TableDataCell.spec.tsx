import React from 'react';
import { TableDataCell } from './TableDataCell';
import { screen, render } from '@testing-library/react';

describe('<TableDataCell />', () => {
    it('should use correct classes', () => {
        render(
            <table>
                <tbody>
                    <tr>
                        <TableDataCell
                            className="my-class"
                            columnHeader={null}
                        />
                    </tr>
                </tbody>
            </table>,
        );
        const td = screen.getByRole('cell');
        expect(td.classList).toContain('my-class');
        expect(td.classList).toContain('ffe-table__td');
    });

    it('should render column-header', () => {
        const columnHeaderContent = 'columnHeaderContent';

        const { rerender, container } = render(
            <table>
                <tbody>
                    <tr>
                        <TableDataCell columnHeader={columnHeaderContent}>
                            children
                        </TableDataCell>
                    </tr>
                </tbody>
            </table>,
        );

        expect(
            container.querySelector('.ffe-table__column-header')?.textContent,
        ).toEqual(`${columnHeaderContent}:`);

        rerender(
            <table>
                <tbody>
                    <tr>
                        <TableDataCell columnHeader={null}>
                            children
                        </TableDataCell>
                    </tr>
                </tbody>
            </table>,
        );

        expect(container.querySelector('.ffe-table__column-header')).toBeNull();
    });
});
