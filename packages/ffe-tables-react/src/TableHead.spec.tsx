import React from 'react';
import { TableHead } from './TableHead';
import { screen, render } from '@testing-library/react';

describe('<TableHead />', () => {
    it('should use correct classes', () => {
        render(
            <table>
                <TableHead className="my-class" />
            </table>,
        );
        const head = screen.getByRole('rowgroup');
        expect(head.classList).toContain('my-class');
        expect(head.classList).toContain('ffe-table__head');
    });
});
