import React from 'react';
import { TableDataCell } from './TableDataCell';
import { screen, render } from '@testing-library/react';

describe('<TableDataCell />', () => {
    it('should use correct classes', () => {
        render(
            <table>
                <tbody>
                    <tr>
                        <TableDataCell className="my-class" />
                    </tr>
                </tbody>
            </table>,
        );
        const td = screen.getByRole('cell');
        expect(td.classList).toContain('my-class');
        expect(td.classList).toContain('ffe-table__td');
    });
});
