import React from 'react';
import { TableRow } from './TableRow';
import { screen, render } from '@testing-library/react';

describe('<TableRow />', () => {
    it('should use correct classes', () => {
        render(
            <table>
                <tbody>
                    <TableRow className="my-class" />
                </tbody>
            </table>,
        );
        const tr = screen.getByRole('row');
        expect(tr.classList).toContain('my-class');
        expect(tr.classList).toContain('ffe-table__tr');
    });
});
