import React from 'react';
import { TableBody } from './TableBody';
import { screen, render } from '@testing-library/react';

describe('<TableBody />', () => {
    it('should use correct classes', () => {
        render(
            <table>
                <TableBody className="my-class" />
            </table>,
        );
        const body = screen.getByRole('rowgroup');
        expect(body.classList).toContain('my-class');
        expect(body.classList).toContain('ffe-table__body');
    });
});
